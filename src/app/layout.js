import { CartProvider } from "./context/CartContext";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { CategoryProvider }from "./context/CategoryContext"
import Routing from "./components/Routing"
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
          <Routing>{children}</Routing>
          </CartProvider>
        </CategoryProvider>
      </body>
    </html>
  );
}
