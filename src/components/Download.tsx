import { useState, useEffect } from "react";
import { ChevronDown, ExternalLink, Loader2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useGitHubVersion } from "@/hooks/use-github-version";

const GITHUB_REPO = "marixdev/marix";

// OS Icons
const WindowsIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
  </svg>
);

const AppleIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const LinuxIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
    <path d="M30 16C30 23.728 23.735 30 16 30C8.265 30 2 23.728 2 16C2 8.265 8.265 2 16 2C23.735 2 30 8.265 30 16Z" fill="white"/>
    <path d="M11.3063 21.91C11.181 21.7232 11.0714 21.4713 10.9824 21.1699C9.37571 19.358 10.6169 16.6916 11.8446 14.881C11.9623 14.6874 12.0905 14.5004 12.2299 14.3215C13.1666 13.1577 13.4089 12.3478 13.481 11.2521C13.4896 11.0481 13.4727 10.7781 13.4533 10.4678C13.3542 8.8837 13.1895 6.25174 16.0159 6.0184C19.5489 5.72669 19.2611 8.97105 19.235 10.8732C19.2339 10.9519 19.2328 11.0285 19.2321 11.1024C19.2225 12.249 19.8209 13.0341 20.4455 13.8535C20.6736 14.1528 20.9052 14.4566 21.112 14.7843C21.1181 14.794 21.1242 14.8038 21.1303 14.8135C22.2218 16.3877 23.2994 18.737 21.7995 20.9653C21.5887 21.7259 21.2695 22.424 20.8434 22.9921C19.3136 25.0052 17.9539 24.8008 16.892 24.6412C16.5717 24.5931 16.2785 24.549 16.0159 24.5711C15.5797 24.5977 15.2301 24.6682 14.9281 24.7292C13.7608 24.9648 13.3046 25.0569 11.3063 21.91Z" fill="#000"/>
    <path d="M11.2089 25.1021C9.74165 24.2922 7.61283 25.2586 8.38575 23.0671C8.54296 22.5703 8.15649 21.8217 8.4054 21.3384C8.70016 20.7463 9.33553 20.8756 9.71544 20.4809C10.0888 20.0726 10.3246 19.3648 11.0255 19.4736C11.7198 19.5825 12.1849 20.4673 12.6696 21.5562C13.0299 22.3321 14.3006 23.4278 14.2154 24.299C14.1106 25.6329 12.6499 25.8847 11.2089 25.1021Z" fill="#FFA500"/>
    <path d="M21.3814 24.7278C22.4556 23.3735 24.8464 23.6525 23.2351 21.7945C22.8945 21.393 22.9993 20.5354 22.5801 20.1679C22.0888 19.7187 21.5451 20.0862 21.0473 19.8548C20.5495 19.603 20.0255 19.1198 19.4163 19.4601C18.8071 19.8072 18.7416 20.7056 18.6827 21.8898C18.6303 22.7405 17.8836 24.1629 18.2831 24.9456C18.8596 26.157 20.3596 25.9937 21.3814 24.7278Z" fill="#FFA500"/>
    <path d="M14.4374 10.8576C14.6994 10.6057 15.3348 9.83668 16.54 10.6398C16.7627 10.7895 16.9461 10.8031 17.3719 10.9937C18.23 11.3612 17.8238 12.2459 16.9068 12.5454C16.5138 12.6747 16.1601 13.1715 15.4527 13.1239C14.8435 13.0899 14.6863 12.6747 14.3129 12.4501C13.6514 12.0622 13.5531 11.5381 13.9134 11.2591C14.2736 10.9801 14.4112 10.878 14.4374 10.8576Z" fill="#FFA500"/>
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
  </svg>
);

type DetectedOS = 'windows' | 'macos' | 'linux';

const DownloadSection = () => {
  const { t } = useLanguage();
  const { version, loading: versionLoading } = useGitHubVersion();
  const [showAllPlatforms, setShowAllPlatforms] = useState(false);
  const [detectedOS, setDetectedOS] = useState<DetectedOS>('windows');
  const [macosMainMenu, setMacosMainMenu] = useState(false);
  const [linuxMainMenu, setLinuxMainMenu] = useState(false);
  const [macosOtherDropdown, setMacosOtherDropdown] = useState(false);
  const [linuxOtherDropdown, setLinuxOtherDropdown] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes('win')) setDetectedOS('windows');
    else if (ua.includes('mac')) setDetectedOS('macos');
    else if (ua.includes('linux') || ua.includes('x11')) setDetectedOS('linux');
  }, []);

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Close main card dropdowns
      if (!target.closest('#macosCard') && !target.closest('#linuxCard')) {
        setMacosMainMenu(false);
        setLinuxMainMenu(false);
      }
      // Close other platform dropdowns
      if (!target.closest('#otherMacos') && !target.closest('#otherLinux')) {
        setMacosOtherDropdown(false);
        setLinuxOtherDropdown(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const getDownloadUrl = (platform: string) => {
    const baseUrl = `https://github.com/${GITHUB_REPO}/releases/download/${version}`;
    const urls: Record<string, string> = {
      windows: `${baseUrl}/Marix.Setup.${version}.exe`,
      macos_intel: `${baseUrl}/Marix-${version}.zip`,
      macos_arm: `${baseUrl}/Marix-${version}-arm64.zip`,
      linux_appimage: `${baseUrl}/Marix-${version}.AppImage`,
      linux_deb: `${baseUrl}/marix_${version}_amd64.deb`,
      linux_rpm: `${baseUrl}/marix-${version}.x86_64.rpm`,
    };
    return urls[platform] || "#";
  };

  const toggleMainDropdown = (menu: 'macos' | 'linux') => {
    if (menu === 'macos') {
      setMacosMainMenu(!macosMainMenu);
      setLinuxMainMenu(false);
    } else {
      setLinuxMainMenu(!linuxMainMenu);
      setMacosMainMenu(false);
    }
  };

  const toggleOtherDropdown = (dropdown: 'macos' | 'linux') => {
    if (dropdown === 'macos') {
      setMacosOtherDropdown(!macosOtherDropdown);
      setLinuxOtherDropdown(false);
    } else {
      setLinuxOtherDropdown(!linuxOtherDropdown);
      setMacosOtherDropdown(false);
    }
  };

  return (
    <section id="download" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient matching website theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          <span className="gradient-text">{t.download.title}</span>
        </h2>
        <p className="text-xl mb-8 text-muted-foreground flex items-center justify-center gap-2">
          {t.download.version}{" "}
          {versionLoading ? (
            <Loader2 className="w-5 h-5 animate-spin text-primary" />
          ) : (
            <span className="font-semibold text-primary">{version}</span>
          )}
        </p>

        {/* Primary Download Card (OS Detected) */}
        <div id="downloadCard" className="max-w-md mx-auto">
          
          {/* Windows Card */}
          {detectedOS === 'windows' && (
            <div id="windowsCard">
              <a 
                href={getDownloadUrl('windows')} 
                className="inline-flex items-center gap-3 px-6 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors shadow-lg glow-primary-sm"
              >
                <WindowsIcon />
                <span className="font-semibold">Windows</span>
                <span className="opacity-70 text-sm">(.exe)</span>
              </a>
            </div>
          )}

          {/* macOS Card */}
          {detectedOS === 'macos' && (
            <div id="macosCard" className="relative inline-block">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMainDropdown('macos');
                }}
                className="inline-flex items-center gap-3 px-6 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors shadow-lg glow-primary-sm"
              >
                <AppleIcon />
                <span className="font-semibold">macOS</span>
                <ChevronDownIcon />
              </button>
              {macosMainMenu && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-card border border-border rounded-xl shadow-2xl overflow-hidden z-20">
                  <a 
                    href={getDownloadUrl('macos_arm')} 
                    className="block px-4 py-3 text-foreground hover:bg-muted text-left border-b border-border"
                  >
                    <div className="font-semibold">Apple Silicon</div>
                    <div className="text-xs text-muted-foreground">M1 / M2 / M3 / M4</div>
                  </a>
                  <a 
                    href={getDownloadUrl('macos_intel')} 
                    className="block px-4 py-3 text-foreground hover:bg-muted text-left"
                  >
                    <div className="font-semibold">Intel Mac</div>
                    <div className="text-xs text-muted-foreground">Intel processor</div>
                  </a>
                </div>
              )}
            </div>
          )}

          {/* Linux Card */}
          {detectedOS === 'linux' && (
            <div id="linuxCard" className="relative inline-block">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMainDropdown('linux');
                }}
                className="inline-flex items-center gap-3 px-6 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors shadow-lg glow-primary-sm"
              >
                <LinuxIcon />
                <span className="font-semibold">Linux</span>
                <ChevronDownIcon />
              </button>
              {linuxMainMenu && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-card border border-border rounded-xl shadow-2xl overflow-hidden z-20">
                  <a 
                    href={getDownloadUrl('linux_appimage')} 
                    className="block px-4 py-3 text-foreground hover:bg-muted text-left border-b border-border"
                  >
                    <div className="font-semibold flex items-center gap-2">
                      AppImage 
                      <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">recommended</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Universal format</div>
                  </a>
                  <a 
                    href={getDownloadUrl('linux_deb')} 
                    className="block px-4 py-3 text-foreground hover:bg-muted text-left border-b border-border"
                  >
                    <div className="font-semibold">.deb Package</div>
                    <div className="text-xs text-muted-foreground">Ubuntu, Debian, Mint</div>
                  </a>
                  <a 
                    href={getDownloadUrl('linux_rpm')} 
                    className="block px-4 py-3 text-foreground hover:bg-muted text-left"
                  >
                    <div className="font-semibold">.rpm Package</div>
                    <div className="text-xs text-muted-foreground">Fedora, RHEL, openSUSE</div>
                  </a>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Show other platforms link */}
        <div className="mt-8">
          <button 
            onClick={() => setShowAllPlatforms(!showAllPlatforms)}
            className="text-muted-foreground hover:text-foreground text-sm underline transition-colors inline-flex items-center gap-1"
          >
            {showAllPlatforms ? t.download.hidePlatforms : t.download.otherPlatforms}
            <ChevronDown className={`w-4 h-4 transition-transform ${showAllPlatforms ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* All Platforms (Hidden by default, shows only OTHER platforms) */}
        {showAllPlatforms && (
          <div className="mt-8">
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              
              {/* Windows (hidden if detected) */}
              {detectedOS !== 'windows' && (
                <div id="otherWindows">
                  <a 
                    href={getDownloadUrl('windows')} 
                    className="flex items-center gap-3 px-5 py-3 bg-card border border-border rounded-xl hover:border-primary/50 hover:bg-muted transition-colors text-foreground"
                  >
                    <WindowsIcon />
                    <span>Windows (.exe)</span>
                  </a>
                </div>
              )}

              {/* macOS dropdown (hidden if detected) */}
              {detectedOS !== 'macos' && (
                <div id="otherMacos" className="relative">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleOtherDropdown('macos');
                    }}
                    className="flex items-center gap-3 px-5 py-3 bg-card border border-border rounded-xl hover:border-primary/50 hover:bg-muted transition-colors text-foreground"
                  >
                    <AppleIcon />
                    <span>macOS</span>
                    <ChevronDownIcon />
                  </button>
                  {macosOtherDropdown && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-card border border-border rounded-xl shadow-2xl overflow-hidden z-20">
                      <a 
                        href={getDownloadUrl('macos_arm')} 
                        className="block px-4 py-3 text-foreground hover:bg-muted text-left border-b border-border"
                      >
                        <div className="font-semibold">Apple Silicon</div>
                        <div className="text-xs text-muted-foreground">M1/M2/M3/M4</div>
                      </a>
                      <a 
                        href={getDownloadUrl('macos_intel')} 
                        className="block px-4 py-3 text-foreground hover:bg-muted text-left"
                      >
                        <div className="font-semibold">Intel Mac</div>
                        <div className="text-xs text-muted-foreground">Intel processor</div>
                      </a>
                    </div>
                  )}
                </div>
              )}

              {/* Linux dropdown (hidden if detected) */}
              {detectedOS !== 'linux' && (
                <div id="otherLinux" className="relative">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleOtherDropdown('linux');
                    }}
                    className="flex items-center gap-3 px-5 py-3 bg-card border border-border rounded-xl hover:border-primary/50 hover:bg-muted transition-colors text-foreground"
                  >
                    <LinuxIcon />
                    <span>Linux</span>
                    <ChevronDownIcon />
                  </button>
                  {linuxOtherDropdown && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-card border border-border rounded-xl shadow-2xl overflow-hidden z-20">
                      <a 
                        href={getDownloadUrl('linux_appimage')} 
                        className="block px-4 py-3 text-foreground hover:bg-muted text-left border-b border-border"
                      >
                        <div className="font-semibold">AppImage</div>
                        <div className="text-xs text-muted-foreground">Universal (recommended)</div>
                      </a>
                      <a 
                        href={getDownloadUrl('linux_deb')} 
                        className="block px-4 py-3 text-foreground hover:bg-muted text-left border-b border-border"
                      >
                        <div className="font-semibold">.deb Package</div>
                        <div className="text-xs text-muted-foreground">Ubuntu, Debian, Mint</div>
                      </a>
                      <a 
                        href={getDownloadUrl('linux_rpm')} 
                        className="block px-4 py-3 text-foreground hover:bg-muted text-left"
                      >
                        <div className="font-semibold">.rpm Package</div>
                        <div className="text-xs text-muted-foreground">Fedora, RHEL, openSUSE</div>
                      </a>
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>
        )}

        <div className="mt-10">
          <a 
            href={`https://github.com/${GITHUB_REPO}/releases`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span>{t.download.allReleases}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
