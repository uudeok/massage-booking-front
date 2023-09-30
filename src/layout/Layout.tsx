import Footer from "../components/common/footer/Footer";
import Header from "../components/common/header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main style={{ width: "80%", backgroundColor: "pink", margin: "0 auto" }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
