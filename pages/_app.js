import Footer from "../components/Footer";
import DefaultHeader from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultHeader />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
