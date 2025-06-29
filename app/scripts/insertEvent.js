
const { supabase } = require('../lib/supabaseClient.js');

async function insertUserEvent() {
  const { data, error } = await supabase.from('user_events').insert([
    {
      event_type: 'quiz_completed',
      subject: 'Introduction to Matrices',
      score: 9,
    },
  ]);

  if (error) {
    console.error('❌ Error inserting event:', error);
  } else {
    console.log('✅ Event inserted successfully:', data);
  }
}

insertUserEvent();



// // 1. Import your initialized Supabase client
// import { supabase } from '../lib/supabaseClient.js'; // adjust the path as needed

// // 2. Create an async function to insert the event
// async function insertUserEvent() {
//   const { data, error } = await supabase.from('user_events').insert([
//     {
//       event_type: 'quiz_completed',
//       subject: 'biology',
//       score: 9,
//     },
//   ]);

//   if (error) {
//     console.error('❌ Error inserting event:', error);
//   } else {
//     console.log('✅ Event inserted successfully:', data);
//   }
// }

// // 3. Run the function
// insertUserEvent();
