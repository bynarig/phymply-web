"use client";

import Link from "next/link";

interface NavbarProps {
  NotSticky?: boolean;
}

export default function Navbar({ NotSticky = false }: NavbarProps) {
    // Apply styling with opacity and blur effect
    const navbarClasses = `navbar bg-opacity-95 backdrop-blur-sm shadow-sm ${NotSticky ? '' : 'sticky top-0 z-50'}`;

    return (
        <div className={navbarClasses}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div tabIndex={0} role="button" className="avatar">
                    <div className="w-10 rounded-full ml-4">
                        <img
                            alt="Phymply logo"
                            src="http://phymly.ck.ua/sites/default/files/logo%20new.png"/>
                    </div>
                </div>
                <Link className="btn btn-ghost text-xl hidden md:flex" href="/">Чекаський фізико-математичний ліцей</Link>
            </div>
            <div className="navbar-end hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/about">Про ліцей</Link></li>
                    <li><a>Освітня інформація</a></li>
                    <li><a>Батькам</a></li>
                    <li><a>Вчителям</a></li>
                    <li><a>Учням</a></li>
                    <li><a>Вступ</a></li>
                </ul>
            </div>
        </div>
    );
}