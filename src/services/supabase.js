import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://dkgagtjgzjxxflfgpkmv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrZ2FndGpnemp4eGZsZmdwa212Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0ODA4MzksImV4cCI6MjAzNTA1NjgzOX0.F06E_RcmqFlceFgMyScCklT6SUo8oqAvUjNWP4iiLdY'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
