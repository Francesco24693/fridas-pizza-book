-- Create the first super admin user
-- First, we'll create a function that allows inserting the first admin without authentication
CREATE OR REPLACE FUNCTION public.create_first_admin(admin_email TEXT, admin_user_id UUID)
RETURNS UUID AS $$
DECLARE
  new_admin_id UUID;
BEGIN
  -- Check if any admin users exist
  IF EXISTS (SELECT 1 FROM public.admin_users) THEN
    RAISE EXCEPTION 'Admin users already exist. Use the admin panel to create additional users.';
  END IF;
  
  -- Insert the first admin user
  INSERT INTO public.admin_users (user_id, email, role)
  VALUES (admin_user_id, admin_email, 'super_admin')
  RETURNING id INTO new_admin_id;
  
  RETURN new_admin_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;