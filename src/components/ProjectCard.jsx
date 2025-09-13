import { motion } from "framer-motion";

export function ProjectCard({ title, tags = [], image, link, repo }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="card"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      style={{ display: "grid", gap: 12, padding: 14 }}
    >
      {/* Görsel alanı */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "12px",
        }}
      >
        {image ? (
          <motion.img
            src={image}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "12px",
              aspectRatio: "16/10",
            }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        ) : (
          <div
            style={{
              aspectRatio: "16/10",
              background:
                "linear-gradient(135deg, rgba(124,58,237,.18), rgba(34,211,238,.18))",
              borderRadius: "12px",
            }}
          />
        )}

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, transparent, rgba(0,0,0,.45))",
            borderRadius: "12px",
          }}
        />
      </div>

      {/* Başlık + Etiketler */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <div>
          <div style={{ fontWeight: 600 }}>{title}</div>
          <div
            style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 6 }}
          >
            {tags.map((t, i) => (
              <span
                key={i}
                className="badge"
                style={{ background: "rgba(255,255,255,.08)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {repo && (
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="badge"
            aria-label="Kod Deposu"
          >
            Repo
          </a>
        )}
      </div>
    </motion.a>
  );
}
