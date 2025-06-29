'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Line } from 'react-chartjs-2';

export default function AnalyticsPage() {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from('user_events')
        .select('created_at')
        .eq('event_type', 'quiz_completed');

      if (error) console.error(error);

      const labels = data.map(row =>
        new Date(row.created_at).toLocaleDateString()
      );

      const counts = labels.reduce((acc, label) => {
        acc[label] = (acc[label] || 0) + 1;
        return acc;
      }, {});

      const sortedLabels = Object.keys(counts).sort();
      const values = sortedLabels.map(label => counts[label]);

      setChartData({
        labels: sortedLabels,
        datasets: [
          {
            label: 'Quiz Completions',
            data: values,
            fill: false,
            borderColor: 'blue',
          },
        ],
      });
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">📊 Quiz Completion Analytics</h2>
      <Line data={chartData} />
    </div>
  );
}
