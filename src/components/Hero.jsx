import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiInstagram, FiArrowRight } from 'react-icons/fi'

export function Hero(){
  return (
    <section id="home" className="section">
      <div className="container" style={{display:'grid', alignItems:'center', gap: 28, gridTemplateColumns:'1.2fr .8fr'}}>
        <div>
          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:.6}} className="badge">Frontend Developer</motion.div>
          <motion.h1
            initial={{opacity:0, y:12}}
            animate={{opacity:1, y:0}}
            transition={{duration:.8, delay:.05}}
            style={{fontSize:'52px', lineHeight:1.1, margin:'14px 0 10px', fontWeight:700}}
          >
            Modern & Animasyonlu
            <span style={{display:'block', color:'var(--accent-2)'}}>Portfolyo Deneyimi</span>
          </motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.2}} style={{opacity:.85, maxWidth:560}}>
            React + Vite + SCSS ile performanslı; Framer Motion ile pürüzsüz animasyonlara sahip,
            profesyonel bir portfolyo. Hyperplexed havasında, modern detaylarla.
          </motion.p>

          <div style={{display:'flex', gap:12, marginTop:18, flexWrap:'wrap'}}>
            <a className="button" href="#projects">Projeler <FiArrowRight/></a>
            <a className="button" href="https://github.com/ygttncy" target="_blank" rel="noreferrer">GitHub</a>
          </div>

          <div style={{display:'flex', gap:14, marginTop:18, opacity:.9}} aria-label="Sosyal bağlantılar">
            <a href="https://www.linkedin.com/in/yi%C4%9Fit-tuncay-202061187" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin size={22}/></a>
            <a href="https://github.com/ygttncy" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub size={22}/></a>
            <a href="https://www.instagram.com/ygttncy" target="_blank" rel="noreferrer" aria-label="Instagram"><FiInstagram size={22}/></a>
          </div>
        </div>
        <motion.div
          className="card"
          style={{aspectRatio:'1/1', borderRadius:'24px', display:'grid', placeItems:'center'}}
          initial={{opacity:0, scale:.92, rotate:-2}}
          animate={{opacity:1, scale:1, rotate:0}}
          transition={{ type:'spring', stiffness:120, damping:16 }}
        >
          <motion.div
            initial={{ rotate: -8 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 1 }}
            style={{width:'70%', aspectRatio:'1', borderRadius:'20%', background:'linear-gradient(135deg, rgba(124,58,237,.4), rgba(34,211,238,.35))'}}
          />
        </motion.div>
      </div>
    </section>
  )
}
