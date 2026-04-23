import { createClient } from '@supabase/supabase-js'

// URL do seu projeto
const supabaseUrl = 'https://clplerltyjbsvpjhchga.supabase.co'

// Sua chave Anon que você acabou de me enviar
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNscGxlcmx0eWpic3ZwamhjaGdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5NjcwOTQsImV4cCI6MjA5MjU0MzA5NH0.x0JNjiUNpukboQZuQuGpt6tbqL_upOf_Kk6L5Y938dA'

export const supabase = createClient(supabaseUrl, supabaseKey)