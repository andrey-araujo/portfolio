import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

export default function Page() {
  return (
    // <div className="flex flex-col center w-full bg-[url(/paisagem-luar-de-anime.jpg)] bg-contain">
    <div className="flex flex-col center w-full bg-[url(/bg-chrome.avif)]">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
