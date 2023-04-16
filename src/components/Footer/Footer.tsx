import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer bg-primary w-full text-white">
      <div className="footer__wrapper container">
        <div className="footer__upper flex flex-col py-4 border-b-white border-b">
          <div className="footer__upper-top flex w-full flex-row justify-between items-center">
            <h3 className="block">Get in touch!</h3>
            <div className="footer__upper-icons flex flex-row gap-4">
              <Link href="#">
                <BsFacebook className="w-6 h-6" />
              </Link>
              <Link href="#">
                <BsInstagram className="w-6 h-6" />
              </Link>
              <Link href="#">
                <BsTwitter className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <p className="text-sm mt-2">
            Visit one of our social media pages to stay up to date
            with Swiftshop's newest trends and updates.
          </p>
        </div>

        <div className="footer__lower my-2 flex flex-wrap py-4 ">
          <div className="footer__links-wrapper w-1/2 mb-2">
            <h4 className="mb-2">Help</h4>
            <ul>
              <li className="pl-1.5 mb-1">
                <Link href="#">Privacy policy</Link>
              </li>
              <li className="pl-1.5 mb-1">
                <Link href="#">Where do we store your data?</Link>
              </li>
              <li className="pl-1.5 mb-1">
                <Link href="#">Cookie policy</Link>
              </li>
              <li className="pl-1.5 mb-1">
                <Link href="#">FAQ</Link>
              </li>
              <li className="pl-1.5 mb-1">
                <Link href="#">Shopping policy</Link>
              </li>
            </ul>
          </div>
          <div className="footer__links-wrapper w-1/2 mb-2">
            <h4 className="mb-2">Account</h4>
            <ul>
              <li className="pl-1.5 mb-1">
                <Link href="#">Your account</Link>
              </li>
              <li className="pl-1.5 mb-1">
                <Link href="#">Your purchases</Link>
              </li>
              <li className="pl-1.5 mb-1">
                <Link href="#">Your saved products</Link>
              </li>
              <li className="pl-1.5 mb-1">
                <Link href="#">Basket</Link>
              </li>
            </ul>
          </div>
          <div className="footer__links-wrapper w-1/2 mb-2">
            <h4 className="mb-2">About Swiftshop</h4>
            <ul>
              <li className="pl-1.5 mb-1">
                <Link href="#">Our staff</Link>
              </li>
              <li className="pl-1.5 mb-1">
                <Link href="#">How do we operate</Link>
              </li>
              <li className="pl-1.5 mb-1">
                <Link href="#">Contact</Link>
              </li>
              <li className="pl-1.5 mb-1">
                <Link href="#">Careers</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="text-center text-md p-2 font-bold">
          &copy; {year} Swiftshop. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
