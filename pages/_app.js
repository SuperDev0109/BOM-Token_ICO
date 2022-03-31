import "../styles/globals.css";
import "../styles/index.css";
import "../styles/home.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "7d8561eb-a730-4529-8d10-fd22b1dee04f";
    (function () {
      const s = document.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      document.getElementsByTagName("head")[0].appendChild(s);
    })();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
