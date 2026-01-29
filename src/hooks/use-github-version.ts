import { useState, useEffect } from 'react';

const GITHUB_REPO = 'marixdev/marix';
const CACHE_KEY = 'marix_latest_version';
const CACHE_DURATION = 1000 * 60 * 30; // 30 minutes

interface CachedVersion {
  version: string;
  timestamp: number;
}

interface GitHubRelease {
  tag_name: string;
  name: string;
  published_at: string;
  html_url: string;
}

export function useGitHubVersion() {
  const [version, setVersion] = useState<string>('1.0.0');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatestVersion = async () => {
      try {
        // Check cache first
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { version: cachedVersion, timestamp }: CachedVersion = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_DURATION) {
            setVersion(cachedVersion);
            setLoading(false);
            return;
          }
        }

        // Fetch from GitHub API
        const response = await fetch(
          `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`,
          {
            headers: {
              Accept: 'application/vnd.github.v3+json',
            },
          }
        );

        if (!response.ok) {
          // If rate limited or not found, try tags endpoint
          if (response.status === 403 || response.status === 404) {
            const tagsResponse = await fetch(
              `https://api.github.com/repos/${GITHUB_REPO}/tags`,
              {
                headers: {
                  Accept: 'application/vnd.github.v3+json',
                },
              }
            );
            
            if (tagsResponse.ok) {
              const tags = await tagsResponse.json();
              if (tags.length > 0) {
                const latestTag = tags[0].name.replace(/^v/, '');
                setVersion(latestTag);
                // Cache the result
                localStorage.setItem(
                  CACHE_KEY,
                  JSON.stringify({ version: latestTag, timestamp: Date.now() })
                );
                setLoading(false);
                return;
              }
            }
          }
          throw new Error('Failed to fetch version');
        }

        const release: GitHubRelease = await response.json();
        const latestVersion = release.tag_name.replace(/^v/, '');
        
        setVersion(latestVersion);
        // Cache the result
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ version: latestVersion, timestamp: Date.now() })
        );
      } catch (err) {
        console.warn('Failed to fetch latest version from GitHub:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
        // Keep default version on error
      } finally {
        setLoading(false);
      }
    };

    fetchLatestVersion();
  }, []);

  return { version, loading, error };
}
