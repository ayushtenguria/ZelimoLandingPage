import { PricingCard } from "./PricingCard";
import FeatureTable from "../FeatureTable.png"

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
        <div className="justify-center flex flex-col items-center mt-8 space-y-6">
          <button className="bg-[#E5E7EB] px-4 rounded-full text-[#6B7280] border border-[#6B7280] ">
            Compare all feature
          </button>
          <h1 className="text-3xl md:text-4xl mb-80 font-semibold bg-gradient-to-r from-[#193C8F] via-[#9A4A12] to-[#9A4A12] inline-block text-transparent bg-clip-text text-center">
            Which Plan Is Right For You ?
          </h1>
          <div className="hidden md:flex flex-row justify-self-end space-x-36 md:mt-96 md:ml-96 md:text-3xl font-semibold">
            <p>Basic</p>
            <p>Professional</p>
            <p>Enterprise</p>
          </div>
          <div className="hidden md:flex">
            <img src={FeatureTable} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
