import { useRouter } from "next/router";
import React from "react";
import NextLink from "next/link";
import classNames from "classnames";

interface NavItemProps {
  href: string;
  text: string;
}

const NavItem = ({ href, text }: NavItemProps) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={classNames(
          isActive
            ? "bg-gray-900 text-white hover:border-gray-900 hover:bg-white border-gray-900 hover:text-gray-900"
            : "hover:border-gray-900  text-gray-90 border-white",
          "font-medium text-sm rounded-md px-3 py-2 transition-all border-2"
        )}
      >
        {text}
      </a>
    </NextLink>
  );
};

export default NavItem;
