import Image from "next/image";

import { BsInstagram, BsFacebook, BsTiktok, BsWhatsapp, BsPhone, BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

import MainLayout from "@/components/layout/MainLayout";
import React from "react";

type Props = {};

const ContactUs = (props: Props) => {
    async function handleSubmit(e: any) {
        e.preventDefault();
        const data: any = new FormData(e.currentTarget);
        try {
            const response = await fetch("/api/contact", {
                method: "post",
                body: new URLSearchParams(data),
            });
            if (!response.ok) {
                throw new Error(`Invalid response: ${response.status}`);
            }
            alert("Thanks for contacting us, we will get back to you soon!");
        } catch (err) {
            console.error(err);
            alert("We can't submit the form, try again later?");
        }
    }

    return (
        <MainLayout title="Contact Us">
            <div
                className="min-h-screen flex flex-col py-10 align-center justify-center text-white"
                style={{ background: "radial-gradient(circle, rgba(22,18,70,1) 0%, rgba(20,21,44,1) 67%)" }}
            >
                <div className="container px-4 flex flex-col justify-center items-center mx-auto">
                    <div className="relative w-full m-auto h-[240px]">
                        <Image src="/opal-logo-nobg.png" alt="Opal logo" fill style={{ objectFit: "contain" }} />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start text-xl space-y-2 max-w-xs mx-auto ">
                    <a className="flex space-x-2 items-center" href="https://www.instagram.com/opal.eventmanagement/" target="_blank" rel="noreferer">
                        <BsInstagram /> <span className="text-sm">@opal.eventmanagement</span>
                    </a>
                    <a className="flex space-x-2 items-center" href="https://www.facebook.com/Opal.EventManagement" target="_blank" rel="noreferer">
                        <BsFacebook /> <span className="text-sm">@Opal.EventManagement</span>{" "}
                    </a>
                    <a className="flex space-x-2 items-center" href="https://api.whatsapp.com/send?phone=96176919481" target="_blank" rel="noreferer">
                        <BsWhatsapp /> <span className="text-sm">+961 76 919 481</span>{" "}
                    </a>
                    <a className="flex space-x-2 items-center" href="tel:96176919481" target="_blank" rel="noreferer">
                        <BsTelephone /> <span className="text-sm">+961 76 919 481</span>{" "}
                    </a>
                    <a className="flex space-x-2 items-center" href="mailto:info@opaleventmanagement.com" target="_blank" rel="noreferer">
                        <AiOutlineMail /> <span className="text-sm">info@opaleventmanagement.com</span>
                    </a>
                </div>

                <div className="w-[200px] mx-auto h-[1px] border-t my-12 border-dashed"></div>

                <div className="isolatepx-6 px-4 lg:px-8">
                    <form className="mx-auto max-w-xl" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 text-black">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-primary-white">
                                    First name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-primary-white">
                                    Last name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-primary-white">
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-primary-white">
                                    Phone number
                                </label>
                                <div className="relative mt-2.5">
                                    <input
                                        type="tel"
                                        name="phone-number"
                                        id="phone-number"
                                        autoComplete="tel"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-primary-white">
                                    Message
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button
                                type="submit"
                                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Let{"'"}s talk
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
};

export default ContactUs;
