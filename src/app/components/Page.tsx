import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

export default function Page() {
  return (
    <div className="flex  justify-center h-full bg-[url(/bg-black-2.avif)] bg-center bg-fixed">
      <div className="glassy flex flex-col justify-center border-pink-500 rounded-2xl w-2/3 h-fit my-8 text-black relative">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}
