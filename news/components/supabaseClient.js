import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rzaryvuxfwskinamjcay.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6YXJ5dnV4Zndza2luYW1qY2F5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MjQxNDM3OSwiZXhwIjoxOTk3OTkwMzc5fQ.NjwXC5NdLU8KRw51SOfsi9HXb_GznQE0XBEyc0rOaYA"

const supabase = createClient(supabaseUrl,supabaseKey)
export default supabase;