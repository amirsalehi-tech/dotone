import ThemeProvider from "@/src/context/ThemeProvider";
import "./globals.css";

export const metadata = {
  title: "dotone",
  description: "Twitter/X-style social feed",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
