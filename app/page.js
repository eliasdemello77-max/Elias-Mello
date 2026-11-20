export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#0b1120",
      color: "#e5e7eb",
      fontFamily: "Arial, sans-serif",
      padding: "24px"
    }}>
      <header style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        marginBottom: "30px"
      }}>
        <div style={{
          width: "55px",
          height: "55px",
          borderRadius: "14px",
          background: "linear-gradient(135deg, #60a5fa, #cbd5e1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#0b1120",
          fontWeight: "bold",
          fontSize: "28px"
        }}>
          α
        </div>
        <div>
          <h1 style={{ margin: 0, fontSize: "28px" }}>OZ</h1>
          <p style={{ margin: "4px 0", color: "#94a3b8" }}>
            Inteligência que constrói o futuro.
          </p>
        </div>
      </header>

      <h2 style={{ color: "#60a5fa" }}>Painel de Gestão</h2>
      <p>Bem-vindo ao ecossistema OZ.</p>

      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        gap: "16px",
        marginTop: "25px"
      }}>
        {[
          ["🚛", "Frota"],
          ["📦", "Cargas"],
          ["👨‍✈️", "Motoristas"],
          ["⛽", "Abastecimento"],
          ["🔧", "Manutenção"],
          ["🛞", "Pneus"],
          ["📡", "Telemetria"],
          ["💰", "Financeiro"]
        ].map(([icon, name]) => (
          <div key={name} style={{
            background: "#172033",
            border: "1px solid #334155",
            borderRadius: "16px",
            padding: "22px 16px",
            textAlign: "center"
          }}>
            <div style={{ fontSize: "32px" }}>{icon}</div>
            <h3 style={{ marginBottom: 0 }}>{name}</h3>
          </div>
        ))}
      </section>

      <footer style={{
        marginTop: "40px",
        textAlign: "center",
        color: "#64748b",
        fontSize: "13px"
      }}>
        OZ • Plataforma Integrada de Gestão
      </footer>
    </main>
  );
}
