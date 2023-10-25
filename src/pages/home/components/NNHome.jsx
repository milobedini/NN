const NNHome = () => {
  return (
    <div className="bg-[#82B7E7] flex flex-col items-center px-4 border-b-[3px] border-black">
      <img
        src="/logo.png"
        width={80}
        height={80}
        className="object-contain mt-8 "
      />
      <h2 className="font-Rubik text-black text-[32px] font-extrabold  uppercase my-6 tracking-[-2.88px]">
        Nostalgia&nbsp; Nights
      </h2>
      <p className="text-center font-Rubik text-black font-normal mb-4 leading-[105%]">
        Nostalgia Nights CIC is a specialist in <strong>Idea Design.</strong>{' '}
        Dedicated to building solutions that create positive change in the world
        and for our clients.
      </p>
      <p className="text-center font-Rubik text-black font-normal mb-4 leading-[105%]">
        We are a creative organisation focused on elevating positive creativity
        within individuals, communities and businesses.
      </p>
      <p className="text-center font-Rubik text-black font-normal mb-4 leading-[105%]">
        Our products and services range from creative workshops and upcycling
        pre-owned garments to offering marketing and creative consulting to
        brands we believe are trying to bring a positive impact to society.
      </p>
      <p className="text-center font-Rubik text-black font-normal mb-4 leading-[105%]">
        Our foundation is to encourage creativity and reduce waste for the
        betterment of mental, creative and ecological health in society and
        nature.
      </p>
      <img src="/src/pages/home/components/people.png" />
    </div>
  );
};

export default NNHome;
