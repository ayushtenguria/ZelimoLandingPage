import img from "../Rectangle.png";

export const AboutUsCard = () => {
  return (
    <div>
      <div className="p-6 border-blue-500 border-4 rounded-2xl mt-4 inline-block md:max-w-lg">
        <div className="flex justify-start items-center">
          <div className="">
            <img
              className="h-16 mr-4 bg-blue-200 rounded-xl border-2 border-blue-500"
              src={img}
              alt="Img"
            />
          </div>
          <div>
            <h1 className="text-4xl font-medium">Title</h1>
          </div>
        </div>
        <div>
          <p className="my-6">
            some strange text that i dont know why exist some strange text that
            i dont know why exist
          </p>
        </div>
      </div>
    </div>
  );
};
