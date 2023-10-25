const Header = () => {
  return (
    <div className="flex flex-shrink-0 bg-white w-screen text-black border-b-[3px] border-black font-bold px-4 h-24 items-center">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img
          src="/logo.png"
          alt="logo"
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
      {/* Title */}
      <div className="flex-grow text-center">
        <h2 className="font-Rubik text-[32px] font-extrabold mx-auto leading-6 tracking-[-2.88px] ">
          by&nbsp; NN
        </h2>
      </div>
      {/* Spacer */}
      <div className="flex-shrink-0 w-[40px]"></div>
    </div>
  );
};

export default Header;
