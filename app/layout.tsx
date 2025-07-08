import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="px-6 md:px-16 w-full">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
