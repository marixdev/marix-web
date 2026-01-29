import { useLanguage } from "@/i18n/LanguageContext";

const technologies = [
  {
    name: "Electron",
    description: "Desktop Framework",
    gradient: "from-[#47848f] to-[#2f5b63]",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 122.88 122.88">
        <path fill="white" d="M48.24,34.41c-12.48-2.27-22.35.11-26.28,6.92-2.94,5.09-2.1,11.83,2,19a1.28,1.28,0,1,0,2.22-1.27c-3.72-6.49-4.44-12.31-2-16.48,3.27-5.66,12.07-7.78,23.61-5.68L48,37a1.28,1.28,0,0,0,.25-2.54ZM30,71.64A80.13,80.13,0,0,0,49.11,86.7C67.21,97.16,86.49,100,96,93.47a1.26,1.26,0,0,0,.58-1.07,1.28,1.28,0,0,0-2-1C86,97.16,67.73,94.5,50.39,84.49A77.33,77.33,0,0,1,31.92,69.91a1.33,1.33,0,0,0-1-.42,1.28,1.28,0,0,0-1.28,1.28,1.33,1.33,0,0,0,.33.87Z"/>
        <path fill="white" d="M93.42,67.56c8.17-9.65,11-19.37,7.1-26.16-2.89-5-9-7.65-17.11-7.75a1.28,1.28,0,0,0,0,2.56c7.3.09,12.56,2.37,14.92,6.47,3.26,5.64.72,14.3-6.84,23.23a1.28,1.28,0,1,0,2,1.65Zm-23-34.38a80.12,80.12,0,0,0-22.81,9C29,53,16.76,68.93,18.46,80.47A1.28,1.28,0,0,0,21,80.1C19.48,69.85,31,54.77,48.93,44.44A77.24,77.24,0,0,1,71,35.69a1.28,1.28,0,0,0-.24-2.54,1.36,1.36,0,0,0-.29,0Z"/>
        <path fill="white" d="M42.13,90.12c4.27,11.93,11.26,19.28,19.13,19.28,5.73,0,11-3.91,15.17-10.79a1.21,1.21,0,0,0,.19-.67,1.28,1.28,0,0,0-2.38-.65c-3.72,6.19-8.29,9.55-13,9.55-6.53,0-12.77-6.55-16.72-17.58a1.28,1.28,0,0,0-2.49.41,1.16,1.16,0,0,0,.08.45Zm41.44-3.19A80.15,80.15,0,0,0,87,63.2C87,42,79.55,23.72,69,19a1.34,1.34,0,0,0-.49-.1,1.28,1.28,0,0,0-.55,2.44C77.37,25.55,84.42,42.9,84.42,63.2a77.92,77.92,0,0,1-3.29,23,1.34,1.34,0,0,0-.06.4,1.28,1.28,0,0,0,1.28,1.28,1.29,1.29,0,0,0,1.23-.92Zm21.67-2A6.13,6.13,0,1,0,99.11,91a6.12,6.12,0,0,0,6.13-6.12Zm-2.56,0a3.57,3.57,0,1,1-3.57-3.57,3.56,3.56,0,0,1,3.57,3.57Zm-79.4,7.75a6.13,6.13,0,1,0-6.13-6.13,6.13,6.13,0,0,0,6.13,6.13Zm0-2.56a3.57,3.57,0,1,1,3.57-3.57,3.57,3.57,0,0,1-3.57,3.57Z"/>
        <path fill="white" d="M61.26,26.13A6.13,6.13,0,1,0,55.13,20a6.12,6.12,0,0,0,6.13,6.12Zm0-2.56A3.57,3.57,0,1,1,64.82,20a3.56,3.56,0,0,1-3.56,3.56Zm.93,37.69a4.43,4.43,0,0,1-5.27-3.39,4.92,4.92,0,0,1-.1-.94,4.43,4.43,0,1,1,5.37,4.33Z"/>
      </svg>
    ),
  },
  {
    name: "React",
    description: "UI Library",
    gradient: "from-[#61dafb] to-[#00a8d6]",
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="2.5"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)"/>
      </svg>
    ),
  },
  {
    name: "Tailwind",
    description: "CSS Framework",
    gradient: "from-[#38bdf8] to-[#0ea5e9]",
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
      </svg>
    ),
  },
  {
    name: "SSH2",
    description: "Protocol Library",
    gradient: "from-[#22c55e] to-[#16a34a]",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
      </svg>
    ),
  },
  {
    name: "xterm.js",
    description: "Terminal Emulator",
    gradient: "from-[#374151] to-[#1f2937]",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    description: "Type Safety",
    gradient: "from-[#3178c6] to-[#235a97]",
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
      </svg>
    ),
  },
];

const TechStack = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">{t.tech.title}</span>
          </h2>
          <p className="section-subtitle">
            {t.tech.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={tech.name} 
              className="tech-badge w-[140px] lg:w-[160px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`tech-icon bg-gradient-to-br ${tech.gradient}`}>
                {tech.icon}
              </div>
              <div className="text-center">
                <div className="font-semibold text-foreground">{tech.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{tech.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
