import "@styles/globals.scss";
import "@styles/main.scss";
import "@styles/topbar.scss";
import "@styles/leftMenu.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
