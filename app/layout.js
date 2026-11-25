export const metadata = {
  title: "OZ Tecnologia",
  description:
    "Sistema inteligente de gestão de frotas, abastecimento, telemetria e operações logísticas.",
};

export const viewport = {
  themeColor: "#0b1120",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
