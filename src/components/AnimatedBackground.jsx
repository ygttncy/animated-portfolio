import { motion } from 'framer-motion'

export function AnimatedBackground(){
  return (
    <div aria-hidden className="bg-wrap">
      <motion.div
        className="blob"
        initial={{ scale: .8, opacity:.7 }}
        animate={{ scale: 1.15, rotate: 360, opacity: .9 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="blob blob-2"
        initial={{ scale: .8, opacity:.6 }}
        animate={{ scale: 1.1, rotate: -360, opacity: .85 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      />
      <style jsx="true">{`
        .bg-wrap{ position: fixed; inset: 0; z-index: -1; overflow: hidden; }
        .blob, .blob-2{
          position: absolute; filter: blur(60px); border-radius: 50%;
          width: 520px; height: 520px; opacity: .65;
          background: radial-gradient(circle at 30% 30%, var(--accent), transparent 60%);
        }
        .blob{ top: -120px; right: -120px; }
        .blob-2{
          width: 560px; height: 560px;
          left: -160px; bottom: -160px;
          background: radial-gradient(circle at 70% 70%, var(--accent-2), transparent 60%);
        }
      `}</style>
    </div>
  )
}
