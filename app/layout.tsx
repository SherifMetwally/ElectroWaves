import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Electro Waves - Electrical Solutions & Services",
  description: "Professional electrical solutions and services for modern businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        {/* Electric Waves Background Pattern */}
        <div className="electric-waves-svg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <defs>
              <pattern id="electricWave" x="0" y="0" width="300" height="200" patternUnits="userSpaceOnUse">
                <path
                  d="M0,100 Q75,50 150,100 T300,100"
                  fill="none"
                  stroke="rgba(40, 94, 115, 0.25)"
                  strokeWidth="3"
                />
                <path
                  d="M0,150 Q75,100 150,150 T300,150"
                  fill="none"
                  stroke="rgba(40, 94, 115, 0.2)"
                  strokeWidth="2.5"
                />
                <path
                  d="M0,50 Q75,0 150,50 T300,50"
                  fill="none"
                  stroke="rgba(40, 94, 115, 0.2)"
                  strokeWidth="2.5"
                />
                <animateTransform
                  attributeName="patternTransform"
                  type="translate"
                  values="0,0; 300,0; 0,0"
                  dur="20s"
                  repeatCount="indefinite"
                />
              </pattern>
              <pattern id="electricWave2" x="0" y="0" width="250" height="180" patternUnits="userSpaceOnUse">
                <path
                  d="M0,90 Q62.5,45 125,90 T250,90"
                  fill="none"
                  stroke="rgba(40, 94, 115, 0.18)"
                  strokeWidth="2"
                />
                <animateTransform
                  attributeName="patternTransform"
                  type="translate"
                  values="0,0; 250,0; 0,0"
                  dur="18s"
                  repeatCount="indefinite"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#electricWave)" />
            <rect width="100%" height="100%" fill="url(#electricWave2)" opacity="0.7" />
          </svg>
        </div>
        {children}
      </body>
    </html>
  );
}

