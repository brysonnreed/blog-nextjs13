import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5 ">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            // className="rounded-full"
            src="https://breezebranding.com/wp-content/uploads/2023/01/BB-logo-Black.png"
            width={50}
            height={50}
            alt="Logo"
          />
        </Link>
        <h1>Bryson's Blog</h1>
      </div>
      <div className="">
        <Link
          className="px-5 py-3 text-sm md:text-base bg-[#1e2124] text-[#fff] flex items-center rounded-full text-center"
          href="https://brysonjreed.com"
        >
          Check out more of work!
        </Link>
      </div>
    </header>
  );
}

export default Header;
