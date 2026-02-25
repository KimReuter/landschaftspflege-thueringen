import "./globals.css";
import { Header } from "../components/layout/Header"; 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <Header />
        {/* Abstand für fixed header */}
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}