import Image from "next/image";
import Logo from "@/app/favicon.ico";
import { BsCart4 } from "react-icons/bs";

const Navbar = () => {
    return ( 
      <div className="navbar bg-secondary">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <Image
                src={Logo}
                alt="Logo of BPM Sports"
                width={50}
                height={50}
            />
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
          <a href="/cart">
            <div className="flex">
                < BsCart4 size={40} className="text-white"/>
                <span className="text-2xl pt-2 pl-2">Cart</span>
            </div>
          </a>
        </div>
      </div>
     );
}
 
export default Navbar;
