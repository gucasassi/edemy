import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import TopNav from "@/components/TopNav";
import dynamic from "next/dynamic";

const TopNav = dynamic(async () => await import("@/components/TopNav"), {
  ssr: false,
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <TopNav />
      <Component {...pageProps} />
    </>
  );
}
