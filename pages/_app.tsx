import { AppProps } from "next/app";
import "../styles/global.css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin", "cyrillic"] });

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
