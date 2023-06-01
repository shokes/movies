import "@/styles/globals.css";
import Image from "next/image";
import { AppProvider } from "@/context";
export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
