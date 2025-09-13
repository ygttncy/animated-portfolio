import { SectionTitle } from "./Section";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const items = [
    {
      title: "CinePick • Film Öneri",
      tags: ["React", "Vite", "SCSS", "Framer Motion"],
      link: "https://pickcine.netlify.app/",
      repo: "https://github.com/ygttncy/cinepick",
      image: "public/Macbook-Air-1559x975.png",
    },
    {
      title: "Furniro • E-commerce",
      tags: ["React", "SCSS", "Responsive", "API"],
      link: "https://furniro-archis.netlify.app/",
      repo: "https://github.com/ygttncy/Furniro",
      image: "public/furniro.webp",
    },
    {
      title: "Weather App",
      tags: ["HTML", "CSS", "JavaScript", "OpenWeather"],
      link: "https://conditionweather.netlify.app/",
      repo: "https://github.com/ygttncy/weater-app",
      image: "public/waetherappp.jpg",
    },
    {
      title: "FoodApp",
      tags: ["JavaScript", "Frontend"],
      link: "https://github.com/ygttncy/FoodApp",
      repo: "https://github.com/ygttncy/FoodApp",
      image: "public/fresh-burger.png",
    },
    {
      title: "Portfolio (Eski)",
      tags: ["React", "Vite"],
      link: "https://github.com/ygttncy/Portfolyo",
      repo: "https://github.com/ygttncy/Portfolyo",
      image: "public/portfolyo.png",
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
