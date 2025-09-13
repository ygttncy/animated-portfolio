import { motion } from 'framer-motion'

export function SectionTitle({ kicker, title, desc }){
  return (
    <div style={{marginBottom:28}}>
      {kicker && <div className="badge">{kicker}</div>}
      <h2 style={{fontSize:'34px', margin:'10px 0 6px'}}>{title}</h2>
      {desc && <p style={{opacity:.85, maxWidth:680}}>{desc}</p>}
    </div>
  )
}

export const fadeUp = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: .2 },
  transition: { duration: .5 }
}
