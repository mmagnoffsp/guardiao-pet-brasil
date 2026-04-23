import { createClient } from '@supabase/supabase-client';

// Você encontra esses dados no painel do seu projeto Supabase 
// em: Settings -> API
const supabaseUrl = 'https://SUA_URL_AQUI.supabase.co';
const supabaseAnonKey = 'SUA_CHAVE_ANON_AQUI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);