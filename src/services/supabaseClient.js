import { createClient } from '@supabase/supabase-js';

// Substitua pelas suas credenciais do projeto no Supabase
const supabaseUrl = 'https://SUA_URL_AQUI.supabase.co';
const supabaseAnonKey = 'SUA_CHAVE_ANON_AQUI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);