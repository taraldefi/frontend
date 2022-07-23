import "@styles/globals.scss";
import "@styles/main.scss";
import "@styles/topbar.scss";
import "@styles/leftMenu.scss";
import "@styles/summary.scss";
import "@styles/status.scss";
import "@styles/button.scss";
import "@styles/fileUpload.scss";
import "@styles/activity.scss";
import "@styles/compliance.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
