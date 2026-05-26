import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GDPR Cookie Auto-Scanner for WordPress",
  description: "Automatically scan your WordPress sites for GDPR cookie violations, tracking scripts, and compliance issues. Get instant alerts before regulators do."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6f0bd5a5-ecfa-4647-8cdf-fc1cde69e2fd"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
