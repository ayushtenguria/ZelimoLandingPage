export const PricingCard = () => {
  return (
    <div className="p-4 border-2 border-[#7C2D12] inline-block md:max-w-md drop-shadow-md rounded-3xl space-y-3">
      <div>
        <h1 className="text-[#7C2D12] font-semibold decoration-2 underline text-4xl md:text-5xl">
          Focus
        </h1>
      </div>
      <div>
        <p>
          Some lorem ipsum text that does not have any real meaning here is only
          jus for show off and fill up the dummy text
        </p>
      </div>
      <div className="text-lg">
        <ul className="text-[#7C2D12] font-medium">
          <p className="text-black font-medium">Feature:</p>
          <li>Feature 1</li>
          <li>fEATURE 2</li>
          <li>Feature 3</li>
          <li>Feature 4</li>
          <li>Feature 5</li>
          <li>Feature 6</li>
          <li>Feaeture 7</li>
          <li>Feature 8</li>
        </ul>
      </div>
      <div>
        <p className="text-2xl text-orange-400">
          Pricing Starts from{" "}
          <p className="decoration-2 underline">Rs.20,000/Month</p>
        </p>
      </div>
    </div>
  );
};
