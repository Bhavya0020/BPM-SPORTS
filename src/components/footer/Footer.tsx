import Image from "next/image";
import Logo from "@/app/favicon.ico";

const Footer = () => {
    return ( 
        <footer className="footer bg-secondary text-text p-10">
            <aside>
                <Image
                    src={Logo}
                    alt="Logo of BPM Sports"
                    width={50}
                    height={50}
                />

                <p>
                BPM Sports
                <br />
                Providing reliable tech since 1992
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
     );
}
 
export default Footer;