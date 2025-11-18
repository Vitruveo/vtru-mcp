export const metadata = {
  title: "Vitruveo MCP Server",
  description: "Vitruveo EVM MCP server on Vercel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
