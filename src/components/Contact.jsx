import { SectionTitle } from './Section'

export function Contact(){
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle kicker="İletişim" title="Birlikte Çalışalım" desc="Projeni konuşmak için bana ulaş. En hızlı LinkedIn ve e‑posta üzerinden dönüş yapıyorum."/>
        <div className="card" style={{padding:20, display:'flex', gap:14, flexWrap:'wrap', alignItems:'center', justifyContent:'space-between'}}>
          <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
            <a className="button" href="mailto:yigittuncay.dev@gmail.com">E‑posta</a>
            <a className="button" href="https://www.linkedin.com/in/yi%C4%9Fit-tuncay-202061187" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="button" href="https://github.com/ygttncy" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <span style={{opacity:.8}}>Eskişehir • Açık freelance işlere uygun</span>
        </div>
      </div>
    </section>
  )
}
