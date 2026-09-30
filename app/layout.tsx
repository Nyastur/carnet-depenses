import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mon carnet de dépenses",
  description: "Mes charges, mes abonnements et mes dépenses au quotidien.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
