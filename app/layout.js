import "./globals.css";

export const metadata = {
  title: "Easy Parking",
  description: "ระบบลานจอดรถอัตโนมัติ (Front End + Mock data)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Prompt:wght@500;600;700&family=IBM+Plex+Sans+Thai:wght@400;500;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
