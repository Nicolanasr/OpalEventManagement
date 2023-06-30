import Image from "next/image";
import Link from "next/link";
import React from "react";

import { BsInstagram, BsFacebook, BsTiktok, BsWhatsapp } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"

type Props = {};

const Footer = (props: Props) => {
    return (
        <footer className="bg-gray-100">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-center relative h-28">
                    <Image src="/opal-logo-text.png" alt="" fill className="object-contain" />
                </div>

                <p className="mx-auto mt-6 max-w-xl text-center leading-relaxed text-gray-500">
                    Plan your dream event with ease. Our expert event planners will handle every detail, from start to finish, creating unforgettable
                    experiences. Stress-free, personalized, and flawless event coordination awaits. Contact us today!
                </p>

                <div className="flex flex-row justify-center items-center text-xl space-x-4 mt-12 text-primary-black">
                    <a href="https://www.instagram.com/opal.eventmanagement/" target="_blank" rel="noreferer"><BsInstagram /></a>
                    <a href="https://www.facebook.com/Opal.EventManagement" target="_blank" rel="noreferer"><BsFacebook /></a>
                    {/* <a href="" target="_blank" rel="noreferer"><BsTiktok /></a> */}
                    <a href="https://api.whatsapp.com/send?phone=96176919481" target="_blank" rel="noreferer"><BsWhatsapp /></a>
                    <a href="mailto:info@opaleventmanagement.com" target="_blank" rel="noreferer"><AiOutlineMail /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
