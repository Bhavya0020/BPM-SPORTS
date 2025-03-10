import Image from "next/image";
import Logo from "@/app/favicon.ico";
import { BsCart4 } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import {
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

import Link from "next/link";
const Navbar = () => {
    return ( 
      <div className="navbar bg-secondary px-4">
        <div className="flex-1 gap-4">
          <Link className="btn btn-ghost text-xl" href="/">
            <Image
                src={Logo}
                alt="Logo of BPM Sports"
                width={50}
                height={50}
            />
          </Link>
          <div className="relative"> {/* relative positioning for icon */}
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-48 md:w-96 rounded-full pl-10" // Add padding to make space for the icon
              />
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                <BsSearch />
              </div>
            </div>
          </div>
        <div className="flex-none gap-4">
          <SignedOut>
          <Link href="/sign-in">
              <div className="flex hover:bg-primary p-1 rounded">
                  < IoPersonCircleOutline size={40} className="text-white"/>
                  <span className="text-2xl pt-1 pl-2 text-white">Login</span>
              </div>
            </Link>
        </SignedOut>
        <SignedIn>
          <div className="navbar-end gap-3 ">
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10", 
                },
              }}
            />
          </div>
        </SignedIn>
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
