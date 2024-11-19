import Image from "next/image";
import Link from "next/link";
import Container from "../Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => (
  <nav className="sticky top-0 py-3 !z-50 bg-white shadow-sm">
    <Container className={"grid grid-cols-12 items-center justify-between"}>
      <section className="col-span-3">
        <Link href={"/"}>
          <Image src={"/logo.png"} width={240} height={120} className="w-24" />
        </Link>
      </section>
      <section className="col-span-6 hidden lg:block">
        <ul className="flex items-center justify-center gap-6">
          <li>
            <Link
              href={"#products"}
              className="font-semibold text-gray-400 hover:text-primary transition-all"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href={"#partnerships"}
              className="font-semibold text-gray-400 hover:text-primary transition-all"
            >
              Partnerships
            </Link>
          </li>
          <li>
            <Link
              href={"#about"}
              className="font-semibold text-gray-400 hover:text-primary transition-all"
            >
              About
            </Link>
          </li>
        </ul>
      </section>
      <section className="col-span-9 block lg:hidden ms-auto">
        <FontAwesomeIcon icon={faBars} size="lg" />
      </section>
      <section className="col-span-3 hidden lg:block"></section>
    </Container>
  </nav>
);

export default Navbar;
