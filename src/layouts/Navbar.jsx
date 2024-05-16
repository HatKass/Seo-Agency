import { Menu } from "lucide-react";
import { Links } from "../constants";

const Navbar = () => {
  return (
    <header className="relative ">
      <div className="py-5 px-[30px]">
        <div className="flex lg:h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="font-bold text-blue-600 lg:text-3xl text-lg" href="#">
              Boost.
            </a>
          </div>
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 ">
                {Links.map((link, index) => (
                  <li key={index}>
                    <a
                      className="font-bold text-sm transition hover:text-gray-700/75 roboto"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <button className="lg:block hidden md:block text-white bg-[#5375D9] rounded-3xl font-bold px-5 text-sm py-[10px]">
            GET STARTED
          </button>
          <div className="block md:hidden lg:hidden">
            <Menu color="#2563EB" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
