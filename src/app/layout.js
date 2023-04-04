import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "Google Clone",
  description: "Google created by Afaq Ahmad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
