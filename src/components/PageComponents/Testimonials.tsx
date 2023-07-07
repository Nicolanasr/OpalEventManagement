import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";

import dayjs from "dayjs";
import Link from "next/link";

type Props = {};

const testimonialsData: {
    title: string;
    text: string;
    author: string;
    stars: number;
    event?: {
        title: string;
        link: string;
        date: Date;
    };
    date: Date;
}[] = [
        {
            title: "Very professional",
            text: "It was a pleasure to deal with right from our initial conversation through to after the event. The event was a great success, the food was amazing, very much enjoyed by all! I would highly recommend Opal Event Management",
            author: "Pritchard",
            stars: 4,
            date: new Date(),
            event: {
                date: new Date(),
                link: "",
                title: "Event Title",
            },
        },
        {
            title: "Christmas party",
            text: "A big thank you to you and your staff for making our Christmas party the success it was!! Everyone was very impressed with the props, the food was amazing and the dancers were spectacular! We will definitely keep you in mind for future upcoming events",
            author: "Suntory",
            stars: 5,
            date: new Date(),
        },
        {
            title: "Christmas party",
            text: "A big thank you to you and your staff for making our Christmas party the success it was!! Everyone was very impressed with the props, the food was amazing and the dancers were spectacular! We will definitely keep you in mind for future upcoming events",
            author: "Suntory",
            stars: 4,
            date: new Date(),
        },
        {
            title: "Christmas party",
            text: "A big thank you to you and your staff for making our Christmas party the success it was!! Everyone was very impressed with the props, the food was amazing and the dancers were spectacular! We will definitely keep you in mind for future upcoming events",
            author: "Suntory",
            stars: 4,
            date: new Date(),
        },
        {
            title: "Christmas party",
            text: "A big thank you to you and your staff for making our Christmas party the success it was!! Everyone was very impressed with the props, the food was amazing and the dancers were spectacular! We will definitely keep you in mind for future upcoming events",
            author: "Suntory",
            stars: 4,
            date: new Date(),
        },
        {
            title: "I am looking forward to working with her next year…",
            text: "Great job yesterday girls.  Everything went extremely well, and we all had a great time.",
            author: "Author",
            stars: 4,
            date: new Date(),
        },
    ];

const Testimonials = (props: Props) => {
    return (
        // mx-auto max-w-[1340px] lg:me-0 lg:pe-0 lg:ps-8"
        <div className="container px-4 sm:px-6 py-16 sm:py-24">
            <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16">
                <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
                    <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Don{"'"}t just take our word for it... <br className="hidden sm:block lg:hidden" />
                        Read reviews from our customers
                    </h3>

                    <p className="mt-4 text-gray-500">An event is not over until everyone is tired of talking about it.</p>

                    <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                        <button className="prev-button rounded-full border border-pink-600 p-3 text-pink-600 hover:bg-pink-600 hover:text-white">
                            <span className="sr-only">Previous Slide</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-5 w-5 rtl:rotate-180"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>

                        <button className="next-button rounded-full border border-pink-600 p-3 text-pink-600 hover:bg-pink-600 hover:text-white">
                            <span className="sr-only">Next Slide</span>
                            <svg
                                className="h-5 w-5 rtl:rotate-180"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="-mx-6 lg:col-span-2 lg:mx-0">
                    <div>
                        <Swiper
                            loop={true}
                            modules={[Navigation]}
                            slidesPerView={1}
                            spaceBetween={32}
                            breakpoints={{
                                640: {
                                    centeredSlides: true,
                                    slidesPerView: 1.25,
                                },
                                1024: {
                                    centeredSlides: false,
                                    slidesPerView: 1.5,
                                },
                            }}
                            navigation={{
                                nextEl: ".next-button",
                                prevEl: ".prev-button",
                            }}
                        >
                            {testimonialsData.map((e, index) => (
                                <SwiperSlide key={e.title + index}>
                                    <blockquote className="flex h-full flex-col justify-between bg-white p-12">
                                        <div className="flex gap-0.5 text-yellow-300">
                                            {["", "", "", "", ""].map((_, index) => (
                                                <svg key={index} className="h-5 w-5" fill={index < e.stars ? "currentColor" : "#80808057"} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>

                                        <div className="mt-4">
                                            <p className="text-2xl font-bold text-pink-600 sm:text-3xl">{e.title}</p>

                                            <p className="mt-4 leading-relaxed text-gray-500">{e.text}</p>
                                        </div>

                                        <footer className="mt-8 text-sm text-gray-500">
                                            <div>
                                                <span>&mdash;</span> {e.author} - {dayjs(e.date).format("DD MMMM YYYY")}
                                            </div>
                                            {e.event &&
                                                <Link href={e.event?.link} className="text-xs mt-1 text-primary-blue">
                                                    <span className="text-transparent">&mdash;</span>
                                                    <span> {e.event.title}</span>
                                                </Link>
                                            }
                                        </footer>
                                    </blockquote>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            <div className="mt-8 flex justify-center gap-4 lg:hidden">
                <button
                    aria-label="Previous slide"
                    className="prev-button rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white"
                >
                    <svg
                        className="h-5 w-5 -rotate-180 transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                </button>

                <button
                    aria-label="Next slide"
                    className="next-button rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white"
                >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Testimonials;
