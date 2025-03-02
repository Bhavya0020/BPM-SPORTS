import Image from "next/image";
import Logo from "@/app/favicon.ico";
import { BsCart4 } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";
import Link from "next/link";
const Navbar = () => {
    return ( 
      <div className="navbar bg-secondary">
        <div className="flex-1 gap-4">
          <Link className="btn btn-ghost text-xl" href="/">
            <Image
                src={Logo}
                alt="Logo of BPM Sports"
                width={50}
                height={50}
            />
          </Link>
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-48 md:w-96" />
          </div>
        </div>
        <div className="flex-none gap-4">
          <Link href="/sign-in">
            <div className="flex hover:bg-primary p-1 rounded">
                < IoPersonCircleOutline size={40} className="text-white"/>
                <span className="text-2xl pt-1 pl-2 text-white">Login</span>
            </div>
          </Link>
          {/* <div className="dropdown dropdown-end">
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
          </div> */}
          <Link href="/cart">
            <div className="flex hover:bg-primary p-1 rounded">
                < BsCart4 size={40} className="text-white"/>
                <span className="text-2xl pt-1 pl-2 text-white">Cart</span>
            </div>
          </Link>
        </div>
      </div>
     );
}
 
export default Navbar;
