import plus from "../plus).png";
import { ServicesCard } from "./ServicesCard";

export const Services = () => {
  return (
    <section className="p-6 m-4">
      <div className="">
        <div>
          <h1 className="text-5xl md:text-6xl font-semibold bg-gradient-to-r from-[#193C8F] via-[#9A4A12] to-[#9A4A12] inline-block text-transparent bg-clip-text">
            Feature & Services
          </h1>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-2 md:items-cente mt-2">
          <div>
            Lorem ipsum dolor sit amet consectetur. Adipiscing leo faucibus
            posuere non.
          </div>
          <div>
            <button className="bg-[#3C8FFF] h-12 mt-2 py-1 px-3 flex text-white font-semibold rounded-xl text-xl justify-center items-center ">
              <img src={plus} alt="plusSign" />
              Start-Up With Us
            </button>
          </div>
        </div>
      </div>
      <section className="flex  md:flex-row md:justify-around items-center mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <ServicesCard
            image={plus}
            title="Title"
            about="lorem ipsum and blah blah blha kuch bhi"
          />
          <ServicesCard
            image={plus}
            title="Title"
            about="lorem ipsum and blah blah blha kuch bhi"
          />
          <ServicesCard
            image={plus}
            title="Title"
            about="lorem ipsum and blah blah blha kuch bhi"
          />
          <ServicesCard
            image={plus}
            title="Title"
            about="lorem ipsum and blah blah blha kuch bhi"
          />
          <ServicesCard
            image={plus}
            title="Title"
            about="lorem ipsum and blah blah blha kuch bhi"
          />
          <ServicesCard
            image={plus}
            title="Title"
            about="lorem ipsum and blah blah blha kuch bhi"
          />
          <ServicesCard
            image={plus}
            title="Title"
            about="lorem ipsum and blah blah blha kuch bhi"
          />
          <ServicesCard
            image={plus}
            title="Title"
            about="lorem ipsum and blah blah blha kuch bhi"
          />
          <div className="flex flex-col h-40 p-6 space-x-4  m-4 hover:border-2 hover:border-black rounded-xl">
            <h1 className="text-3xl md:text-4xl">To Know More</h1>
            <a className="font-semibold" href="/">
              Click Here --{" "}
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};
