import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qllmaaabiuuvoikvmtdq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsbG1hYWFiaXV1dm9pa3ZtdGRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4MTg3ODIsImV4cCI6MjA2MzM5NDc4Mn0.JZ6AGO64KH8JjB153Fd2_Bs-t8hdwxTBHc_okuodfA4'
export const supabase = createClient(supabaseUrl, supabaseKey)
