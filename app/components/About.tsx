export function About() {
  const features = [
    {
      icon: '< />',
      title: 'CLEAN CODE',
      description: 'Writing maintainable code with best practices and modern standards'
    },
    {
      icon: '⤡',
      title: 'RESPONSIVE',
      description: 'Perfect layouts on mobile, tablet and desktop with modern CSS'
    },
    {
      icon: '▲',
      title: 'FAST LOAD',
      description: 'Building optimized applications that deliver exceptional experiences'
    }
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div 
            className="inline-block mb-6 px-4 py-2 pixel-corners"
            style={{
              border: '2px solid rgb(var(--color-secondary))',
              background: 'rgba(0, 255, 255, 0.1)',
              color: 'rgb(var(--color-secondary))',
              fontSize: '1.25rem',
              fontFamily: "'VT323', monospace"
            }}
          >
            &gt;&gt; ABOUT_ME.TXT
          </div>
          <h2 style={{ color: 'rgb(var(--color-secondary))' }}>
            WHO I AM &<br />
            WHAT I DO
          </h2>
        </div>

        <div className="mb-16 max-w-3xl mx-auto text-center">
          <p className="text-lg text-cyan-300 leading-relaxed mb-6">
            Hi, I'm <span className="text-magenta-500 font-bold">Si Thu Htet</span>, a junior
            frontend developer from the UAE, passionate about building beautiful and functional
            web experiences.
          </p>

          <p className="text-lg text-cyan-300 leading-relaxed mb-6">
            I started my journey into web development in 2024, learning HTML, CSS, JavaScript,
            and React. I specialize in creating responsive, user-friendly interfaces using modern
            tools like <span className="text-cyan-400">Tailwind CSS</span> and{" "}
            <span className="text-cyan-400">React.js</span>.
          </p>

          <p className="text-lg text-cyan-300 leading-relaxed mb-6">
            What makes me unique: I combine AI-assisted development with hands-on coding to
            deliver high-quality projects faster, without compromising on code quality or
            understanding.
          </p>

          <p className="text-lg text-cyan-300 leading-relaxed">
            Beyond coding, I love exploring UI/UX design in Figma, experimenting with animations,
            and building projects that solve real problems. Currently, I'm focused on mastering
            frontend fundamentals and building a strong portfolio for remote freelance
            opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 pixel-corners transition-all hover:scale-105 scanlines"
              style={{ 
                background: 'rgba(138, 43, 226, 0.1)',
                border: '3px solid rgb(var(--color-purple))',
                boxShadow: '0 0 20px rgba(138, 43, 226, 0.5)'
              }}
            >
              <div 
                className="text-center mb-4"
                style={{ 
                  color: 'rgb(var(--color-primary))',
                  fontSize: '3rem',
                  fontFamily: "'Press Start 2P', cursive",
                  textShadow: '0 0 10px rgb(var(--color-primary))'
                }}
              >
                {feature.icon}
              </div>
              <h3 className="mb-4 text-center" style={{ color: 'rgb(var(--color-accent))' }}>
                {feature.title}
              </h3>
              <p className="text-center" style={{ fontSize: '1.25rem' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center gap-4">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="w-3 h-3"
              style={{
                background: i % 3 === 0 ? 'rgb(var(--color-primary))' : i % 3 === 1 ? 'rgb(var(--color-secondary))' : 'rgb(var(--color-accent))',
                boxShadow: `0 0 10px ${i % 3 === 0 ? 'rgb(var(--color-primary))' : i % 3 === 1 ? 'rgb(var(--color-secondary))' : 'rgb(var(--color-accent))'}`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
