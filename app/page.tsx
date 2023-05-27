import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Form from "./components/Form";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#00040f]">
      <div className={`sm:px-16 px-6 flex justify-center items-center`}>
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
          
        </div>
      </div>
      <div className={`flex justify-center items-center`}>
        <div className="xl:max-w-[1280px] w-full">
          <Hero />
        </div>
      </div>
      {/* The following div will have the Logic UI */}
      <div className={`flex justify-center items-center`}>
        <div className="xl:max-w-[1280px] w-full">
          <Form />
        </div>
      </div>
      <Footer />
    </main>
  );
}
