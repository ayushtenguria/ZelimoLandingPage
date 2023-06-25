import { AboutUsCard } from "./AboutUsCard";

export const AboutUs = () => {
  return (
    <section className="p-9 bg-gradient-to-r from-slate-100 via-amber-100 to-green-200 ">
      <div className="">
        <div>
          <h1 className="text-5xl md:text-6xl font-semibold bg-gradient-to-r from-[#193C8F] via-[#9A4A12] to-[#9A4A12] inline-block text-transparent bg-clip-text">
            About Us
          </h1>
          <p>Lorem ipssum kuch bhi aira gera likhdo for dummy text</p>
        </div>
        <div className="md:grid md:grid-cols-3 gap-4 md:p-10">
            <AboutUsCard />
            <AboutUsCard />
            <AboutUsCard />
        </div>
      </div>
    </section>
  );
};
