import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className="my-8">{children}</main>
    <Footer />
  </>
);

export default Layout;
