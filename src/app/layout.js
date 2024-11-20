import { CartProvider } from "./context/CartContext";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { CategoryProvider }from "./context/CategoryContext"
import "./globals.css";

export const metadata = {
  title: "Your plug in kitchen appliances",
  description: "Quality is our middleman",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-100 max-w-7xl mx-auto">
        <CategoryProvider>
        <CartProvider>
          <Navbar />
            <main className="bg-gradient-to-r from-slate-100 via-slate-400 to-slate-100"> 
              {children}
            </main>
            <footer className="h-[60vh] bg-slate-200">
              <Footer />
            </footer>
        </CartProvider>
        </CategoryProvider>
      </body>
    </html>
  );
}
