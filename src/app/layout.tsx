import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Netkurum | Yeni Nesil PDKS ve İK Platformu",
  description: "İşletmelerin insan kaynakları süreçlerini ve personel devam kontrol sistemlerini dijitalleştiren, bulut tabanlı yeni nesil yazılım platformu.",
  keywords: "PDKS, Personel Takip, İnsan Kaynakları, Bulut İK, Vardiya Yönetimi, İzin Yönetimi",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#E22822",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        {children}
      </body>
    </html>
  );
}
