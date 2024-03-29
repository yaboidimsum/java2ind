import Image from "next/image";

const Navbar = () => {
  return (
    <header className="fixed w-full shadow-md shadow-slate-300 bg-white">
      <div className="flex flex-row justify-between px-16 py-2">
        <div className="flex flex-row items-center gap-4">
          <div>
            <Image src="/img/Java2Ind.png" alt="..." width={100} height={100} />
          </div>
          <h2 className="text-2xl font-medium text-slate-500">Terjemahan</h2>
        </div>
        <div className="flex flex-row items-center gap-8">
          <h2 className="text-2xl font-medium text-black">
            Welcome, Wong Jowo!
          </h2>
          <Image
            src="/img/user.png"
            alt="..."
            width={60}
            height={60}
            className="rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
