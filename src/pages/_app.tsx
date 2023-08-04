import "@styles/globals.scss";
import "@taraldefi/tariala-component-library/build/index.scss";
import type { AppProps } from "next/app";
import React from "react";
import { Provider } from "jotai";
declare module "axios" {
  interface AxiosResponse<T = any> {
    statusCode: number;
  }
}
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
