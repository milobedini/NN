const SubHome = () => {
  return (
    <div className="bg-[#BD5DDE] text-black flex flex-col lg:flex-row px-4 py-10 lg:gap-4 lg:justify-center  ">
      <div className="bg-[#82E79E] rounded border-[3px] border-black px-6 py-6 lg:w-[343px]">
        <div className="flex justify-between">
          <img src="/home/ushirt.png" className="object-contain" />
          <h2 className="font-Rubik text-black text-[32px] font-extrabold  uppercase my-6 tracking-[-2.88px] mr-[20%]">
            U&nbsp; Shirt
          </h2>
        </div>
        <p className=" font-Rubik text-black font-normal mt-4 leading-[105%]">
          U SHIRT is an interactive fashion brand that unlocks creativity and
          reduces garment waste.
        </p>
      </div>
      <div className="bg-[#82B7E7] rounded border-[3px] border-black px-6 py-6 mt-4 lg:mt-0 lg:w-[343px]">
        <div className="flex justify-between">
          <img src="/home/b2b.png" className="object-contain" />
          <h2 className="font-Rubik text-black text-[32px] font-extrabold  uppercase my-6 tracking-[-2.88px] mr-[20%] leading-[78%]">
            Brain
            <br />
            2&nbsp; Brain
          </h2>
        </div>
        <p className=" font-Rubik text-black font-normal mt-4 leading-[105%]">
          B2B is the home of our Ideation Station - have an idea, or have an
          idea of an idea? Then B2B could be for you.
        </p>
      </div>
      <div className="bg-[#DED95D] rounded border-[3px] border-black px-6 py-6 mt-4 lg:mt-0 lg:w-[343px]">
        <div className="flex justify-between">
          <img src="/home/corfu.png" className="object-contain" />
          <h2 className="font-Rubik text-black text-[32px] font-extrabold  uppercase my-6 tracking-[-2.88px] mr-[20%] leading-[78%]">
            Corfu
            <br />
            Blimey
          </h2>
        </div>
        <p className=" font-Rubik text-black font-normal mt-4 leading-[105%]">
          “A wonderful thing about true laughter is that it just destroys any
          kind of system of dividing people” John Cleese
        </p>
      </div>
    </div>
  );
};

export default SubHome;
