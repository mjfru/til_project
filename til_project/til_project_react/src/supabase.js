import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wldluonwobsxnvjlsizu.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsZGx1b253b2JzeG52amxzaXp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU4NjAyNjMsImV4cCI6MjAzMTQzNjI2M30.BJV4nUXie1Te38VSJfQBWGM87XdH2yGGnB1tgOqfqD8"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;