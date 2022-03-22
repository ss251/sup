import "../styles/globals.css";
import Navbar from "../components/Navbar";

function App({ Component, pageProps }) {
  return (
    <div className="bg-white">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default App;
