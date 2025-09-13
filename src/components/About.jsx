import { SectionTitle } from './Section'

export function About(){
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle kicker="Hakkımda" title="Kimim & Neler Yapıyorum?" />
        <div className="card" style={{padding:20}}>
          <p style={{opacity:.9, lineHeight:1.8}}>
            React + Vite + SCSS üçlüsünde uzmanlaşan bir frontend geliştiriciyim.
            Performans, erişilebilirlik ve estetik arasında denge kurmayı seviyorum.
            Tasarımlarda Hyperplexed tarzı modern animasyonlara ve mikro-etkileşimlere yer veriyorum.
          </p>
        </div>
      </div>
    </section>
  )
}
