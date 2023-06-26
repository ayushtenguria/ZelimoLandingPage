import { PricingCard } from "./PricingCard";

export const Pricing = () => {
  return (
    <section className=" bg-gradient-to-br from-white  via-[#F7B5EA] to-[#5FFBF1]">
      <div className="p-10 ">
        <div>
          <h1 className="text-5xl md:text-6xl font-semibold bg-gradient-to-r from-[#193C8F] via-[#9A4A12] to-[#9A4A12] inline-block text-transparent bg-clip-text">
            Pricing
          </h1>
          <p>Lorem ipssum kuch bhi aira gera likhdo for dummy text</p>
        </div>
        <div className="grid justify-center md:grid-cols-3 gap-10 md:gap-2 mt-6 md:ml-20 md:p-4">
          <PricingCard />
          <PricingCard />
          <PricingCard />
        </div>
      </div>
    </section>
  );
};
