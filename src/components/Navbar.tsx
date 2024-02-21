import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <div className="`mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        <div className="flex h-14 items-center justify-between border-b border-zinc-200 ">
          <Link href="https://bento.me/aniz" className="flex z-40 font-semibold">
            <span>Aniz B N</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
