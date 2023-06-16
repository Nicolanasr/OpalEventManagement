import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const Header = (props: Props) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="shadow-md bg-dark-purple fixed top-0 left-0 right-0">
            <div className="mx-auto max-w-screen-xl px-4 py-2">
                <div className="flex items-center justify-between gap-4 lg:gap-10">
                    <div className="flex lg:w-0 lg:flex-1">
                        <a href="#">
                            <span className="sr-only">Logo</span>
                            <span className="inline-block h-12 w-16 rounded-lg relative">
                                <Image src="/opal-logo-nobg.png" alt="" fill className="object-contain" />
                            </span>
                        </a>
                    </div>

                    <nav
                        aria-label="Global"
                        className={`bg-dark-purple gap-8 text-sm font-medium top-0 bottom-0 ${mobileOpen ? "left-0" : "-left-full md:left-0"
                            } transition-all w-full md:w-fit flex pt-4 md:pt-0 mt-16 md:mt-0 items-center flex-col md:flex-row absolute md:relative`}
                    >
                        <Link className="text-primary-white hover:text-primary-blue transition-all" href="">
                            About
                        </Link>
                        <Link className="text-primary-white hover:text-primary-blue transition-all" href="">
                            Blog
                        </Link>
                        <Link className="text-primary-white hover:text-primary-blue transition-all" href="">
                            Projects
                        </Link>
                        <Link className="text-primary-white hover:text-primary-blue transition-all" href="">
                            Contact
                        </Link>
                    </nav>

                    <div className="hidden flex-1 items-center justify-end gap-4 sm:flex">
                        <Link href="" className="rounded-lg bg-bl px-5 py-2 text-sm font-medium bg-primary-white text-dark-purple">
                            Contact us
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <button className="rounded-lg p-2 text-gray-100" type="button" onClick={() => setMobileOpen((p) => !p)}>
                            <span className="sr-only">Open menu</span>
                            <svg
                                aria-hidden="true"
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;