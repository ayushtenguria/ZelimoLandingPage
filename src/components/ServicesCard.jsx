
export const ServicesCard = (props) => {
  return (
    <div className="flex justify-between h-40 p-6 space-x-4 items-center m-4 hover:border-2 hover:border-black rounded-xl ">
      <div className="bg-[#FFE6D5] rounded-xl p-2"><img src={props.image} alt="plusIMage" /></div>
      <div>
        <div className="text-2xl font-semibold">{props.title}</div>
        <div className="mt-6">{props.about}</div>
      </div>
    </div>
  );
};
