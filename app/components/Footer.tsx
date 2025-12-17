export function Footer() {
  return (
    <footer 
      className="py-12 px-6 relative overflow-hidden"
      style={{ 
        background: 'rgb(var(--color-bg))',
        borderTop: '4px solid rgb(var(--color-primary))',
        boxShadow: '0 -4px 20px rgba(255, 0, 255, 0.3)'
      }}
    >
      {/* Pixel decoration */}
      <div className="absolute top-0 left-0 right-0 flex justify-center gap-1">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2"
            style={{
              background: i % 3 === 0 ? 'rgb(var(--color-primary))' : i % 3 === 1 ? 'rgb(var(--color-secondary))' : 'rgb(var(--color-accent))',
              boxShadow: `0 0 10px ${i % 3 === 0 ? 'rgb(var(--color-primary))' : i % 3 === 1 ? 'rgb(var(--color-secondary))' : 'rgb(var(--color-accent))'}`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10 pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div 
            className="pixel-corners px-4 py-2"
            style={{
              border: '2px solid rgb(var(--color-secondary))',
              background: 'rgba(0, 255, 255, 0.1)'
            }}
          >
            <div 
              className="flex items-center gap-2"
              style={{ 
                fontFamily: "'VT323', monospace",
                fontSize: '1.25rem',
                color: 'rgb(var(--color-secondary))'
              }}
            >
              <span>&gt; MADE_WITH</span>
              <span style={{ color: 'rgb(var(--color-primary))' }}>♥</span>
              <span>BY_SI_THU</span>
            </div>
          </div>
          
          <div 
            className="pixel-corners px-4 py-2"
            style={{
              border: '2px solid rgb(var(--color-accent))',
              background: 'rgba(255, 255, 0, 0.1)',
              fontFamily: "'VT323', monospace",
              fontSize: '1.25rem',
              color: 'rgb(var(--color-accent))'
            }}
          >
            © 2024-2025 ALL_RIGHTS_RESERVED
          </div>
        </div>

        {/* Terminal style signature */}
        <div 
          className="mt-8 pixel-corners p-4 max-w-md mx-auto"
          style={{
            background: 'rgba(0, 0, 0, 0.5)',
            border: '2px solid rgb(var(--color-primary))',
            boxShadow: '0 0 15px rgba(255, 0, 255, 0.3)'
          }}
        >
          <div style={{ fontFamily: "'VT323', monospace", fontSize: '1.25rem', color: 'rgb(var(--color-primary))' }}>
            <div>&gt; shutdown -h now</div>
            <div className="flex items-center gap-2 mt-2">
              <div>&gt;</div>
              <div className="w-3 h-5 blink" style={{ background: 'rgb(var(--color-primary))' }} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
