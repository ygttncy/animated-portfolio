import { SectionTitle } from './Section'

export function Certificates(){
  const items = [
    { name:'Archi’s Academy • Frontend Advanced', year:'2025' },
    { name:'Archi’s Academy • Fullstack Training', year:'2024' },
    { name:'Web Design & Programming (Intermediate)', year:'2023' },
  ]
  return (
    <section id="certs" className="section">
      <div className="container">
        <SectionTitle kicker="Belgeler" title="Sertifikalarım" />
        <div className="card" style={{padding:16, display:'grid', gap:12}}>
          {items.map((it, i)=>(
            <div key={i} style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
              <div>{it.name}</div>
              <span className="badge">{it.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
