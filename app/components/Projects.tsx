export function Projects() {
  const projects = [
    {
      title: "WEATHER.APP",
      description:
        "Real-time weather forecasting app with city search, live API integration, and responsive design. Built with React and OpenWeatherMap API.",
      image: "/images/weatherapp.png",
      tags: ["REACT", "API", "TAILWIND"],
      status: "ONLINE",
      viewUrl: "https://sithuhtet016.github.io/WeatherApp/",
      codeUrl: "https://github.com/sithuhtet016/WeatherApp",
    },
    {
      title: "E-SHOP.EXE",
      description:
        "Modern e-commerce solution for Slay Queen brand featuring real-time inventory, seamless checkout experience, and responsive design.",
      image: "/images/slayqueenstore.png",
      tags: ["REACT", "TAILWIND", "JSON API"],
      status: "ONLINE",
      viewUrl: "https://www.slayqueenstore.me/",
      codeUrl: "https://github.com/sithuhtet016/SlayQueenStore",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div
            className="inline-block mb-6 px-4 py-2 pixel-corners"
            style={{
              border: "2px solid rgb(var(--color-accent))",
              background: "rgb(var(--color-accent))",
              color: "rgb(0, 0, 0)",
              fontSize: "1.25rem",
              fontFamily: "'VT323', monospace",
            }}
          >
            &gt;&gt; PROJECTS.DIR
          </div>
          <h2 style={{ color: "rgb(var(--color-accent))" }}>
            FEATURED
            <br />
            PROJECTS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="pixel-corners overflow-hidden transition-all hover:scale-105 group"
              style={{
                background: "rgba(168, 90, 40, 0.2)",
                border: "4px solid rgb(var(--color-brick))",
                boxShadow: "0 0 0 4px rgb(0, 0, 0)",
              }}
            >
              <div className="relative overflow-hidden aspect-video scanlines">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  style={{
                    filter: "contrast(1.1) saturate(1.15)",
                    mixBlendMode: "normal",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(45deg, rgba(229, 37, 33, 0.22) 0%, rgba(0, 168, 0, 0.22) 100%)",
                  }}
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 style={{ color: "rgb(var(--color-primary))" }}>
                    {project.title}
                  </h3>
                  <span
                    className="px-2 py-1 pixel-corners blink"
                    style={{
                      border: "2px solid rgb(var(--color-accent))",
                      background: "rgb(var(--color-accent))",
                      color: "rgb(0, 0, 0)",
                      fontSize: "0.75rem",
                      fontFamily: "'VT323', monospace",
                    }}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="mb-4" style={{ fontSize: "1.25rem" }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 pixel-corners"
                      style={{
                        background:
                          tagIndex % 3 === 0
                            ? "rgba(229, 37, 33, 0.2)"
                            : tagIndex % 3 === 1
                              ? "rgba(0, 168, 0, 0.2)"
                              : "rgba(251, 208, 0, 0.2)",
                        border: "2px solid rgb(var(--color-secondary))",
                        color: "rgb(var(--color-secondary))",
                        fontSize: "0.875rem",
                        fontFamily: "'VT323', monospace",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.viewUrl}
                    target="_blank"
                    className="flex-1 px-4 py-2 pixel-corners text-center transition-all hover:scale-105"
                    style={{
                      background: "rgb(var(--color-primary))",
                      border: "3px solid rgb(var(--color-primary))",
                      color: "rgb(0, 0, 0)",
                      fontSize: "0.75rem",
                      fontFamily: "'Press Start 2P', cursive",
                      boxShadow: "0 0 0 4px rgb(0, 0, 0)",
                    }}
                  >
                    VIEW
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    className="flex-1 px-4 py-2 pixel-corners text-center transition-all hover:scale-105"
                    style={{
                      background: "transparent",
                      border: "3px solid rgb(var(--color-secondary))",
                      color: "rgb(var(--color-secondary))",
                      fontSize: "0.75rem",
                      fontFamily: "'Press Start 2P', cursive",
                      boxShadow: "0 0 0 4px rgb(0, 0, 0)",
                    }}
                  >
                    CODE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Terminal style footer */}
        <div
          className="mt-16 pixel-corners p-6 max-w-2xl mx-auto"
          style={{
            background: "rgba(0, 0, 0, 0.8)",
            border: "3px solid rgb(var(--color-brick))",
            boxShadow: "0 0 0 4px rgb(0, 0, 0)",
          }}
        >
          <div
            style={{
              fontFamily: "'VT323', monospace",
              fontSize: "1.25rem",
              color: "rgb(var(--color-accent))",
            }}
          >
            <div className="mb-2">&gt; cd /projects</div>
            <div className="mb-2">&gt; ls -la</div>
            <div className="mb-2">Total: {projects.length} projects</div>
            <div className="flex items-center gap-2">
              <div>&gt;</div>
              <div
                className="w-3 h-5 blink"
                style={{ background: "rgb(var(--color-accent))" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
