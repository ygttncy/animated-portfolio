export function Footer(){
  return (
    <footer className="section" style={{paddingTop:40, paddingBottom:40}}>
      <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between', opacity:.9, fontSize:14}}>
        <div>© {new Date().getFullYear()} Yiğit Tuncay</div>
        <div style={{display:'flex', gap:12}}>
          <a href="#home">Yukarı</a>
        </div>
      </div>
    </footer>
  )
}
