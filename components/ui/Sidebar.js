import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ show, handleSidebar }) => {
  const [_, setIsMounted] = useState();

  useEffect(function () {
    setIsMounted(true);
  }, []);

  if (!show) return;

  return createPortal(
    <div
      id="sidebar-overlay"
      className="fixed top-0 left-0 w-screen h-[100svh] z-50"
    >
      <motion.div
        initial={{ translateX: "100%" }}
        animate={{ translateX: show ? "0%" : "100%" }}
        className="relative flex flex-col items-center justify-center w-screen h-[100svh] bg-white"
      >
        <FontAwesomeIcon
          icon={faTimes}
          size="xl"
          className="absolute top-6 right-6"
          onClick={handleSidebar}
        />
        <section className="flex items-center flex-[0.25]">
          <h1 className="font-semibold text-4xl">ELLIE</h1>
        </section>
        <section className="flex-[0.5]">
          <ul className="space-y-3 text-center">
            <li>
              <Link
                href={"#products"}
                className="font-semibold text-gray-400 hover:text-primary text-xl transition-all"
                onClick={handleSidebar}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href={"#partnerships"}
                className="font-semibold text-gray-400 hover:text-primary text-xl transition-all"
                onClick={handleSidebar}
              >
                Partnerships
              </Link>
            </li>
            <li>
              <Link
                href={"#about"}
                className="font-semibold text-gray-400 hover:text-primary text-xl transition-all"
                onClick={handleSidebar}
              >
                About
              </Link>
            </li>
          </ul>
        </section>
      </motion.div>
    </div>,
    document.getElementById("sidebar-backdrop")
  );
};

export default Sidebar;
