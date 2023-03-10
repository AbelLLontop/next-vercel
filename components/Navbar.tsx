import Link from "next/link";
import React from "react";
import styles from  './Navbar.module.css'
import { ActiveLink } from "./ActiveLink";
const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];
const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      {menuItems.map(menu=>(<ActiveLink key={menu.href} text={menu.text} href={menu.href}/>))}

      </nav>
  );
};

export default Navbar;
