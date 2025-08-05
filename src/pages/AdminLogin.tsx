import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("admin@frida.it");
  const [password, setPassword] = useState("admin1@");
  const [loading, setLoading] = useState(false);
  const [hasAdmins, setHasAdmins] = useState<boolean | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    checkAdminExists();
  }, []);

  const checkAdminExists = async () => {
    try {
      const { data, error } = await supabase
        .from('admin_users')
        .select('id')
        .limit(1);
      
      if (error) {
        console.error('Error checking admin users:', error);
        setHasAdmins(false);
      } else {
        setHasAdmins(data && data.length > 0);
      }
    } catch (error) {
      console.error('Error:', error);
      setHasAdmins(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast({
          title: "Errore di accesso",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Accesso effettuato",
          description: "Benvenuto nel pannello admin!",
        });
        navigate("/admin/dashboard");
      }
    } catch (error) {
      toast({
        title: "Errore",
        description: "Errore durante l'accesso",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCreateFirstAdmin = async () => {
    setLoading(true);
    
    try {
      // Registra l'utente in Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError) {
        toast({
          title: "Errore nella registrazione",
          description: authError.message,
          variant: "destructive",
        });
        return;
      }

      if (authData.user) {
        // Usa la funzione per creare il primo admin
        const { error: adminError } = await supabase.rpc('create_first_admin', {
          admin_email: email,
          admin_user_id: authData.user.id
        });

        if (adminError) {
          toast({
            title: "Errore nella creazione admin",
            description: adminError.message,
            variant: "destructive",
          });
        } else {
          toast({
            title: "Admin creato con successo",
            description: "Ora puoi accedere con le tue credenziali",
          });
          setHasAdmins(true);
        }
      }
    } catch (error) {
      toast({
        title: "Errore",
        description: "Errore durante la creazione dell'admin",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-primary flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-primary">
            Admin Pizzeria Frida
          </CardTitle>
          <CardDescription>
            Accedi al pannello di amministrazione
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@frida.it"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            {hasAdmins === false && (
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">
                  Nessun amministratore trovato. Crea il primo admin:
                </p>
                <Button 
                  type="button" 
                  onClick={handleCreateFirstAdmin}
                  className="w-full"
                  disabled={loading}
                  variant="outline"
                >
                  {loading ? "Creazione admin..." : "Crea primo admin"}
                </Button>
              </div>
            )}
            
            {hasAdmins !== false && (
              <Button 
                type="submit" 
                className="w-full"
                disabled={loading}
              >
                {loading ? "Accesso in corso..." : "Accedi"}
              </Button>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;