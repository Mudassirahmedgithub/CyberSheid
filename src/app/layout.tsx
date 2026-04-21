import "../styles/globals.css";
import SiteHeader from "@/components/layouts/site-header";
import SiteFooter from "@/components/layouts/site-footer";

export const metadata = {
  title: "CyberShield",
  description: "AI Network Intrusion Detection System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}