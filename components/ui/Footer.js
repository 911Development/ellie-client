import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="text-center">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:&nbsp;
        <Link href="https://www.elliesmarthome.com/">
          Ellie Smart Home System
        </Link>
      </div>
    </footer>
  );
}
