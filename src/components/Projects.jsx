import { SectionTitle } from "./Section";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const items = [
    {
      title: "CinePick • Film Öneri",
      tags: ["React", "Vite", "SCSS", "Framer Motion"],
      link: "https://pickcine.netlify.app/",
      repo: "https://github.com/ygttncy/cinepick",
    },
    {
      title: "Furniro • E-commerce",
      tags: ["React", "SCSS", "Responsive", "API"],
      link: "https://furniro-archis.netlify.app/",
      repo: "https://github.com/ygttncy/Furniro",
    },
    {
      title: "Weather App",
      tags: ["HTML", "CSS", "JavaScript", "OpenWeather"],
      link: "https://conditionweather.netlify.app/",
      repo: "https://github.com/ygttncy/weater-app",
    },
    {
      title: "FoodApp",
      tags: ["JavaScript", "Frontend"],
      link: "https://github.com/ygttncy/FoodApp", // canlı adres eklemek istersen burayı güncelle
      repo: "https://github.com/ygttncy/FoodApp",
    },
    {
      title: "Portfolio (Eski)",
      tags: ["React", "Vite"],
      link: "https://github.com/ygttncy/Portfolyo",
      repo: "https://github.com/ygttncy/Portfolyo",
    },
  ];
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle
          kicker="Çalışmalar"
          title="Öne Çıkan Projeler"
          desc="Gerçek projeler ve denemelerim. Daha fazlası için GitHub'a göz atabilirsin."
        />
        <div className="grid grid-3">
          {items.map((it, i) => (
            <ProjectCard key={i} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}
