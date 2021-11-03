import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Firebase } from "../../config/firebase";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Firebase.Provider>
        <Component {...pageProps} />
      </Firebase.Provider>
    </>
  );
}
MyApp;
