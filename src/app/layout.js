import "./globals.css";

export const metadata = {
  title: "Amulya | Portfolio",
  description: "Personal portfolio of Amulya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}