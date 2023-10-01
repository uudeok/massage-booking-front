import Footer from "../components/common/footer/Footer";
import Header from "../components/common/header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main
        style={{
          width: "80%",
          border: "1px solid blue",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          flex: "1",
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
