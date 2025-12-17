export function Skills() {
  const skillCategories = [
    {
      title: '[ FRONTEND ]',
      skills: ['REACT', 'TYPESCRIPT', 'TAILWIND', 'HTML/CSS', 'JS']
    },
    {
      title: '[ TOOLS ]',
      skills: ['GIT', 'FIGMA', 'WEBPACK', 'VITE', 'REST API']
    },
    {
      title: '[ SKILLS ]',
      skills: ['PROBLEM SOLVING', 'COMMUNICATION', 'TEAMWORK', 'AGILE', 'UX', 'RESPONSIVE']
    }
  ];

  return (
    <section 
      id="skills" 
      className="py-24 px-6 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(180deg, rgba(10, 0, 20, 1) 0%, rgba(20, 0, 40, 1) 100%)'
      }}
    >
      {/* Retro grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgb(var(--color-secondary)) 2px, transparent 2px),
            linear-gradient(90deg, rgb(var(--color-secondary)) 2px, transparent 2px)
          `,
          backgroundSize: '40px 40px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'bottom'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div 
            className="inline-block mb-6 px-4 py-2 pixel-corners"
            style={{
              border: '2px solid rgb(var(--color-primary))',
              background: 'rgba(255, 0, 255, 0.1)',
              color: 'rgb(var(--color-primary))',
              fontSize: '1.25rem',
              fontFamily: "'VT323', monospace"
            }}
          >
            &gt;&gt; SKILLS.DAT
          </div>
          <h2 style={{ color: 'rgb(var(--color-primary))' }}>
            TECH STACK
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="pixel-corners p-6"
              style={{
                background: 'rgba(0, 255, 255, 0.05)',
                border: '3px solid rgb(var(--color-secondary))',
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)'
              }}
            >
              <h3 className="mb-6 text-center" style={{ color: 'rgb(var(--color-secondary))' }}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-2 pixel-corners transition-all hover:scale-110"
                    style={{ 
                      background: skillIndex % 3 === 0 
                        ? 'rgba(255, 0, 255, 0.2)' 
                        : skillIndex % 3 === 1 
                        ? 'rgba(0, 255, 255, 0.2)' 
                        : 'rgba(255, 255, 0, 0.2)',
                      border: `2px solid ${
                        skillIndex % 3 === 0 
                        ? 'rgb(var(--color-primary))' 
                        : skillIndex % 3 === 1 
                        ? 'rgb(var(--color-secondary))' 
                        : 'rgb(var(--color-accent))'
                      }`,
                      color: skillIndex % 3 === 0 
                        ? 'rgb(var(--color-primary))' 
                        : skillIndex % 3 === 1 
                        ? 'rgb(var(--color-secondary))' 
                        : 'rgb(var(--color-accent))',
                      fontSize: '1rem',
                      fontFamily: "'VT323', monospace",
                      textShadow: `0 0 5px ${
                        skillIndex % 3 === 0 
                        ? 'rgb(var(--color-primary))' 
                        : skillIndex % 3 === 1 
                        ? 'rgb(var(--color-secondary))' 
                        : 'rgb(var(--color-accent))'
                      }`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Progress bar decoration */}
        <div className="mt-16 max-w-md mx-auto">
          <div 
            className="pixel-corners p-4"
            style={{
              border: '2px solid rgb(var(--color-accent))',
              background: 'rgba(255, 255, 0, 0.05)'
            }}
          >
            <div className="mb-2" style={{ fontFamily: "'VT323', monospace", fontSize: '1.25rem', color: 'rgb(var(--color-accent))' }}>
              LOADING EXPERIENCE...
            </div>
            <div 
              className="h-6 pixel-corners overflow-hidden"
              style={{ border: '2px solid rgb(var(--color-accent))' }}
            >
              <div 
                className="h-full"
                style={{ 
                  width: '95%',
                  background: 'rgb(var(--color-accent))',
                  boxShadow: '0 0 20px rgb(var(--color-accent))'
                }}
              />
            </div>
            <div className="mt-2 text-right" style={{ fontFamily: "'VT323', monospace", fontSize: '1.25rem', color: 'rgb(var(--color-accent))' }}>
              95% COMPLETE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
