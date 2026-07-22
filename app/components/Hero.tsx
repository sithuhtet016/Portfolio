export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-30 scanlines relative overflow-hidden">
      {/* Retro grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgb(var(--color-sky)) 1px, transparent 1px),
            linear-gradient(90deg, rgb(var(--color-sky)) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating pixels */}
      <div
        className="absolute top-20 left-10 w-4 h-4"
        style={{
          background: "rgb(var(--color-primary))",
          boxShadow: "0 0 20px rgb(var(--color-primary))",
        }}
      />
      <div
        className="absolute top-40 right-20 w-4 h-4"
        style={{
          background: "rgb(var(--color-secondary))",
          boxShadow: "0 0 20px rgb(var(--color-secondary))",
        }}
      />
      <div
        className="absolute bottom-40 left-20 w-4 h-4"
        style={{
          background: "rgb(var(--color-accent))",
          boxShadow: "0 0 20px rgb(var(--color-accent))",
        }}
      />
      <div
        className="absolute bottom-20 right-10 w-4 h-4"
        style={{
          background: "rgb(var(--color-sky))",
          boxShadow: "0 0 20px rgb(var(--color-sky))",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 inline-block">
          <span
            className="px-4 py-2 pixel-corners blink"
            style={{
              border: "3px solid rgb(var(--color-accent))",
              background: "rgb(var(--color-accent))",
              color: "rgb(0, 0, 0)",
              fontSize: "1.25rem",
              fontFamily: "'VT323', monospace",
              textShadow: "none",
            }}
          >
            &gt;&gt; READY_FOR_WORK &lt;&lt;
          </span>
        </div>

        <h1 className="mb-8" style={{ color: "rgb(var(--color-primary))" }}>
          FRONTEND
          <br />
          DEVELOPER
        </h1>

        <div
          className="mb-8 pixel-corners p-4 inline-block"
          style={{
            border: "2px solid rgb(var(--color-secondary))",
            background: "rgba(168, 90, 40, 0.18)",
          }}
        >
          <p style={{ fontSize: "1.5rem", maxWidth: "600px" }}>
            &gt; REACT & TAILWIND CSS MASTER
            <br />
            &gt; RESPONSIVE DESIGN EXPERT
            <br />
            &gt; AI-ASSISTED DEVELOPMENT
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="px-8 py-4 pixel-corners transition-all hover:scale-105"
            style={{
              background: "rgb(var(--color-primary))",
              color: "rgb(0, 0, 0)",
              border: "4px solid rgb(var(--color-primary))",
              boxShadow: "0 0 0 4px rgb(0, 0, 0)",
              fontFamily: "'Press Start 2P', cursive",
              fontSize: "0.75rem",
            }}
          >
            VIEW WORK
          </a>
          <a
            href="#contact"
            className="px-8 py-4 pixel-corners transition-all hover:scale-105"
            style={{
              background: "transparent",
              color: "rgb(var(--color-secondary))",
              border: "4px solid rgb(var(--color-secondary))",
              boxShadow: "0 0 0 4px rgb(0, 0, 0)",
              fontFamily: "'Press Start 2P', cursive",
              fontSize: "0.75rem",
            }}
          >
            CONTACT
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/sithuhtet016"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center pixel-corners transition-all hover:scale-110"
            style={{
              border: "3px solid rgb(var(--color-primary))",
              background: "rgba(229, 37, 33, 0.18)",
              color: "rgb(var(--color-primary))",
              boxShadow: "0 0 15px rgb(var(--color-primary))",
              fontSize: "1.5rem",
              fontFamily: "'VT323', monospace",
            }}
          >
            GH
          </a>
          <a
            href="https://www.linkedin.com/in/hsbdsrhk/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center pixel-corners transition-all hover:scale-110"
            style={{
              border: "3px solid rgb(var(--color-secondary))",
              background: "rgba(0, 168, 0, 0.18)",
              color: "rgb(var(--color-secondary))",
              boxShadow: "0 0 15px rgb(var(--color-secondary))",
              fontSize: "1.5rem",
              fontFamily: "'VT323', monospace",
            }}
          >
            IN
          </a>
          <a
            href="mailto:sithuhtet016@gmail.com"
            className="w-12 h-12 flex items-center justify-center pixel-corners transition-all hover:scale-110"
            style={{
              border: "3px solid rgb(var(--color-accent))",
              background: "rgb(var(--color-accent))",
              color: "rgb(0, 0, 0)",
              boxShadow: "0 0 15px rgb(var(--color-accent))",
              fontSize: "1.5rem",
              fontFamily: "'VT323', monospace",
            }}
          >
            @
          </a>
        </div>

        <div className="mt-16">
          <div
            className="w-6 h-6 mx-auto blink"
            style={{
              background: "rgb(var(--color-accent))",
              clipPath: "polygon(50% 100%, 0 0, 100% 0)",
              boxShadow: "0 0 20px rgb(var(--color-accent))",
            }}
          />
        </div>
      </div>
    </section>
  );
}
