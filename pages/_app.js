import Navbar from "../components/navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid grid-cols-1 space-y-4">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
