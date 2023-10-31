const CollabHome = () => {
  return (
    <div className="bg-[#82E79E] px-4 py-10 border-t-[3px] border-black">
      <h2 className="font-Rubik text-black text-[32px] font-extrabold  uppercase  tracking-[-2.88px] leading-[78%] text-center mb-[66px]">
        Collaboration
        <br />
        Station
      </h2>
      <div className="flex flex-col lg:flex-row  items-center lg:gap-4 lg:justify-center">
        <div className="bg-[#82B7E7] rounded border-[3px] border-black px-6 py-6 mt-4 mb-12 lg:mt-0 lg:w-[343px] lg:h-[358px] relative">
          <img
            src="/home/jager.png"
            width={80}
            height={80}
            className="object-contain absolute top-[-40px] left-1/2 transform -translate-x-1/2"
          />
          <h2 className="font-Rubik text-black text-[32px] font-extrabold  uppercase mt-8 mb-6 tracking-[-2.88px]  leading-[78%] text-center">
            Jägermeister
          </h2>
          <p className=" font-Rubik text-black font-normal mt-4 leading-[105%] text-center mb-4">
            Lorem ipsum dolor sit amet consectetur. A a placerat dictumst sit
            tempus odio. Massa tempor vel maecenas sed. Fames tristique sit
            rhoncus in elementum urna vitae. Mattis elementum platea diam amet
            in leo vulputate est. Turpis semper vel mollis nunc. Cras nibh
            bibendum sollicitudin consequat placerat ante blandit. Risus nunc
            enim pharetra ornare arcu vulputate risus fermentum non. Sit odio
            malesuada quis morbi neque auctor. Donec vestibulum fermentum
            tellus.
          </p>
        </div>
        <div className="bg-[#82B7E7] rounded border-[3px] border-black px-6 py-6 mt-4 mb-12 lg:mt-0 lg:w-[343px] lg:h-[358px] relative">
          <img
            src="/home/elipse.png"
            width={80}
            height={80}
            className="object-contain absolute top-[-40px] left-1/2 transform -translate-x-1/2"
          />
          <img
            src="/home/fabric.png"
            width={64}
            height={64}
            className="object-contain absolute top-[-32px] left-1/2 transform -translate-x-1/2"
          />
          <h2 className="font-Rubik text-black text-[32px] font-extrabold  uppercase mt-8 mb-6 tracking-[-2.88px]  leading-[78%] text-center">
            Fabric
          </h2>
          <p className=" font-Rubik text-black font-normal mt-4  mb-4 leading-[105%] text-center">
            Lorem ipsum dolor sit amet consectetur. A a placerat dictumst sit
            tempus odio. Massa tempor vel maecenas sed. Fames tristique sit
            rhoncus in elementum urna vitae. Mattis elementum platea diam amet
            in leo vulputate est. Turpis semper vel mollis nunc. Cras nibh
            bibendum sollicitudin consequat placerat ante blandit. Risus nunc
            enim pharetra ornare arcu vulputate risus fermentum non. Sit odio
            malesuada quis morbi neque auctor. Donec vestibulum fermentum
            tellus.
          </p>
        </div>
        <div className="bg-white rounded border-[3px] border-black px-6 py-6 mt-4 mb-12 lg:mt-0 lg:w-[343px] lg:h-[358px] relative flex flex-col items-center justify-center">
          <img
            src="/logo.png"
            width={80}
            height={80}
            className="object-contain absolute top-[-40px] left-1/2 transform -translate-x-1/2"
          />
          <h2 className="font-Rubik text-black text-[32px] font-extrabold  uppercase mt-8 lg:mb-[-8px] mb-4 tracking-[-2.88px]  leading-[78%] text-center">
            You?
          </h2>
          <p className=" font-Rubik text-black font-normal mt-4 leading-[105%] text-center mb-6">
            Lorem ipsum dolor sit amet consectetur. A a placerat dictumst sit
            tempus odio. Massa tempor vel maecenas sed. Fames tristique sit
            rhoncus in elementum urna vitae. Mattis elementum platea diam amet
            in leo vulputate est. Turpis semper vel mollis nunc. Cras nibh
            bibendum sollicitudin consequat placerat ante blandit. Risus nunc
            enim pharetra ornare.
          </p>
          <button
            type="button"
            className="bg-[#E63] font-Rubik text-black text-[20px] leading-[78%] tracking-[-1.8px] font-extrabold uppercase border-[3px] border-black border-r-[3px]"
          >
            Let&apos;s&nbsp; Work&nbsp; Together
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollabHome;
