import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock, Users, Pizza } from "lucide-react";

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    checkUser();
    fetchReservations();
  }, []);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/admin/login");
      return;
    }
    setUser(session.user);
  };

  const fetchReservations = async () => {
    try {
      const { data, error } = await supabase
        .from('reservations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setReservations(data || []);
    } catch (error) {
      console.error('Error fetching reservations:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateReservationStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('reservations')
        .update({ status })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Stato aggiornato",
        description: `Prenotazione ${status === 'confirmed' ? 'confermata' : 'rifiutata'}`,
      });

      fetchReservations();
    } catch (error) {
      toast({
        title: "Errore",
        description: "Errore nell'aggiornamento dello stato",
        variant: "destructive",
      });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Badge variant="secondary" className="bg-green-100 text-green-800">Confermata</Badge>;
      case 'rejected':
        return <Badge variant="destructive">Rifiutata</Badge>;
      default:
        return <Badge variant="outline">In attesa</Badge>;
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Caricamento...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Dashboard Pizzeria Frida</h1>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Prenotazioni Oggi</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{reservations.filter(r => 
                new Date(r.date).toDateString() === new Date().toDateString()
              ).length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">In Attesa</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{reservations.filter(r => r.status === 'pending').length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Confermate</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{reservations.filter(r => r.status === 'confirmed').length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Totale Mese</CardTitle>
              <Pizza className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{reservations.filter(r => 
                new Date(r.date).getMonth() === new Date().getMonth()
              ).length}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="reservations" className="space-y-4">
          <TabsList>
            <TabsTrigger value="reservations">Prenotazioni</TabsTrigger>
            <TabsTrigger value="menu">Menu</TabsTrigger>
          </TabsList>

          <TabsContent value="reservations">
            <Card>
              <CardHeader>
                <CardTitle>Gestione Prenotazioni</CardTitle>
                <CardDescription>
                  Visualizza e gestisci tutte le prenotazioni
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reservations.length === 0 ? (
                    <p className="text-center text-muted-foreground py-8">
                      Nessuna prenotazione trovata
                    </p>
                  ) : (
                    reservations.map((reservation) => (
                      <div
                        key={reservation.id}
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold">{reservation.name}</h3>
                            {getStatusBadge(reservation.status)}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {reservation.email} • {reservation.phone}
                          </p>
                          <p className="text-sm">
                            {new Date(reservation.date).toLocaleDateString('it-IT')} alle {reservation.time} • {reservation.guests} persone
                          </p>
                          {reservation.notes && (
                            <p className="text-sm text-muted-foreground">
                              Note: {reservation.notes}
                            </p>
                          )}
                        </div>
                        {reservation.status === 'pending' && (
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              onClick={() => updateReservationStatus(reservation.id, 'confirmed')}
                            >
                              Conferma
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => updateReservationStatus(reservation.id, 'rejected')}
                            >
                              Rifiuta
                            </Button>
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="menu">
            <Card>
              <CardHeader>
                <CardTitle>Gestione Menu</CardTitle>
                <CardDescription>
                  Gestisci il menu della pizzeria
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground py-8">
                  Funzionalità in sviluppo
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;