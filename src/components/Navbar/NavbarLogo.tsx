import React from "react";
import Link from "next/link";
import Image from "next/image";

export const NavbarLogo = () => {
  return (
    <Link href="/" className="navbar__logo-link">
      <Image
        className="navbar__logo"
        src="https://ik.imagekit.io/2ziqnactl/luviankaLogo.png"
        alt="logo de la marca"
        width={895}
        height={458}
        priority
      />
    </Link>
  );
};
