import { createClient } from '@supabase/supabase-js'

// URL do seu novo projeto guardiao-pet-brasil
const supabaseUrl = 'https://clplerltyjbsvpjhchga.supabase.co'

// Sua nova Publishable Key que você gerou agora
const supabaseKey = 'sb_publishable_bOVOD3bLWKvAWFTSkFJkhg_XXGJP9KX'

export const supabase = createClient(supabaseUrl, supabaseKey)