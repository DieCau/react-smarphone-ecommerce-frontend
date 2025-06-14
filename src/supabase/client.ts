import { createClient } from "@supabase/supabase-js";
import type { Database } from './supabase';

// Credential
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
const supabaseUrl = import.meta.env.VITE_PROJECT_URL_SUPABASE;

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);