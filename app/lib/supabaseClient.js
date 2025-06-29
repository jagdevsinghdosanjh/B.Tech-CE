const { createClient } = require('@supabase/supabase-js');

const supabase = createClient('https://zzjbvihcwexxgxvoqpvt.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6amJ2aWhjd2V4eGd4dm9xcHZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyMjc0OTAsImV4cCI6MjA2NjgwMzQ5MH0.SB4LtJlpY4kvD4Id-eG1iGAXj_eziBi3Dn4iVFIkawE');

module.exports = { supabase };

//import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = 'https://zzjbvihcwexxgxvoqpvt.supabase.co';
 //const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6amJ2aWhjd2V4eGd4dm9xcHZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyMjc0OTAsImV4cCI6MjA2NjgwMzQ5MH0.SB4LtJlpY4kvD4Id-eG1iGAXj_eziBi3Dn4iVFIkawE';

//export const supabase = createClient(supabaseUrl, supabaseAnonKey);
