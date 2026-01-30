import { useState, useEffect } from 'react';

interface VisitorData {
  dashboardUrl: string;
  totalCount: number;
  todayCount: number;
}

interface VisitorCounterProps {
  prefix?: string;
  suffix?: string;
  className?: string;
}

const VisitorCounter = ({ prefix = '', suffix = '', className = '' }: VisitorCounterProps) => {
  const [data, setData] = useState<VisitorData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const domain = window.location.hostname;
        const page_path = window.location.pathname;
        const page_title = document.title;
        const referrer = document.referrer;
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        // Localhost fallback
        if (domain === 'localhost' || domain === '127.0.0.1') {
          setData({
            dashboardUrl: 'https://visitor.6developer.com/dashboard?domain=sample.com',
            totalCount: 99999,
            todayCount: 999,
          });
          setLoading(false);
          return;
        }

        const response = await fetch('https://visitor.6developer.com/visit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            domain,
            timezone,
            page_path,
            page_title,
            referrer,
            search_query: '',
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        console.error('Error fetching visitor count:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchVisitorCount();
  }, []);

  if (loading) {
    return <span className={className}>Loading...</span>;
  }

  if (error || !data) {
    return <span className={className}>-</span>;
  }

  return (
    <a
      href={data.dashboardUrl}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {prefix}{data.todayCount}{suffix}
    </a>
  );
};

export default VisitorCounter;
