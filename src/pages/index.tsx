/* eslint-disable @next/next/no-img-element */
import React from "react";

import Image from "next/image";
import Link from "next/link";

import MainLayout from "@/components/layout/MainLayout";
import Testimonials from "@/components/PageComponents/Testimonials";
import GetInTouch from "@/components/PageComponents/GetInTouch";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import { portfolioData, servicesData } from "@/utils/data";
import dayjs from "dayjs";

type Props = {};

const home = (props: Props) => {
    return (
        <MainLayout title="Event Planning Services">
            <section id="hero" className="">
                <div className="relative h-[400px] md:h-screen w-full bg-dark-purple flex max-h-screen flex-col min-h-[350px]">
                    <Image
                        src="/shardayyy-photography-fJzmPe-a0eU-unsplash.jpg"
                        alt=""
                        fill
                        className="object-cover opacity-70"
                        priority
                        quality={100}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="m-auto  relative z-10 text-primary-white max-w-xl w-full px-4 mx-auto">
                        <h1 className="text-4xl md:text-7xl tracking-wider text-center whitespace-pre-wrap leading-tight">{`Your Event Is
Our Expertise`}</h1>
                        <div className="relative z-10 mx-auto h-24 w-24 md:h-36 md:w-36 realtive md:mt-12">
                            <Image
                                src="/opal-logo-text.png"
                                alt=""
                                className="object-contain"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="container py-20" style={{ scrollMarginTop: "70px" }}>
                <h2 className="text-center text-light-purple font-semibold text-3xl tracking-wide">Wedding & Event Planning</h2>
                <div className="h-[1px] bg-light-purple bg-opacity-70 w-16 mx-auto mt-6"></div>
                <p className="max-w-xl mx-auto text-center mt-8 leading-loose tracking-wide text-primary-black">
                    From made-to-measure weddings to elaborate corporate events that nurture company connections, and all kind of social events
                    (birthdays, bachelors, first communion ...) we have a flair for transforming bespoke spaces into unforgettable experiences.
                </p>
            </section>

            <section id="services" className="p-4 bg-dark-purple text-primary-white" style={{ scrollMarginTop: "70px" }}>
                <div className="border border-white w-full p-6 md:p-12">
                    <Swiper spaceBetween={0} slidesPerView={1} navigation={true} modules={[Navigation]} loop={true}>
                        {servicesData.map((service, index) => (
                            <SwiperSlide key={service.title + index}>
                                <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:space-x-16 items-stretch">
                                    <div className="flex-1 flex flex-col">
                                        <p className="text-xs font-medium ">
                                            {index + 1} / {servicesData.length}
                                        </p>
                                        <div className="my-auto">
                                            <h2 className="font-semibold text-3xl tracking-wide ">{service.title}</h2>
                                            <div className="h-[1px] bg-primary-white bg-opacity-70 w-16 mt-2"></div>
                                            <p
                                                className="text-sm leading-[2.5] mt-6 font-light tracking-wider whitespace-pre-wrap"
                                                dangerouslySetInnerHTML={{ __html: service.body }}
                                            />
                                        </div>
                                        <Link
                                            className="mt-auto block mb-8 bg-primary-white text-primary-black w-fit px-8 py-2 font-semibold text-sm"
                                            href={service.button.url}
                                        >
                                            {service.button.text}
                                        </Link>
                                    </div>
                                    <div className="relative flex-1 w-full aspect-[1]">
                                        <Image
                                            src={service.image.url}
                                            alt=""
                                            fill
                                            className="object-cover"
                                            quality={service.image.quality}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <section id="gallery" className="container py-20" style={{ scrollMarginTop: "70px" }}>
                <h2 className="text-center text-light-purple font-semibold text-3xl tracking-wide">Gallery</h2>
                <div className="h-[1px] bg-light-purple bg-opacity-70 w-16 mx-auto mt-6"></div>

                <div className="px-4 max-w-sm sm:max-w-full grid gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-9 lg:gap-4 mt-8 mx-auto">
                    {portfolioData.map((e, index) => {
                        return index < 3 && (
                            <Link href={`/portfolio/${e.slug}`} key={e.slug + index} className="flex flex-col w-full bg-white aspect-[9/13] max-w-[300px] mx-auto">
                                <div className="relative flex-1">
                                    <Image src={e.banner} alt="" fill className="object-cover" />
                                </div>
                                <p className="block mt-auto py-3 w-full bg-dark-purple text-white text-center font-medium">{e.title}</p>
                            </Link>
                        );
                    })}
                </div>

                <Link
                    className="mx-auto block mb-8 bg-dark-purple text-primary-white w-fit px-8 py-2 font-semibold text-sm mt-10"
                    href={"/portfolio"}
                >
                    View more
                </Link>
            </section>



            <section id="testimonials" className="bg-gray-100">
                <Testimonials />
            </section>

            <section id="connect" style={{ scrollMarginTop: "70px" }}>
                <GetInTouch />
            </section>

            <section id="social" className="container max-w-3xl py-20" style={{ scrollMarginTop: "70px" }}>
                <h2 className="text-center text-light-purple font-semibold text-3xl tracking-wide">Follow us on instagram</h2>
                <a
                    href="https://www.instagram.com/opal.eventmanagement/"
                    target="_blank"
                    rel="noreferer"
                    className="text-center text-xs mt-1 w-full block text-dark-purple"
                >
                    @opal.eventmanagement
                </a>
                <div className="h-[1px] bg-light-purple bg-opacity-70 w-16 mx-auto mt-4"></div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-8 ">
                    <a
                        href={"https://www.instagram.com/p/CgrXX-GIha6/?hl=en"}
                        target="_blank"
                        rel="noreferer"
                        className="h-full w-full aspect-square relative block bg-light-purple bg-opacity-10"
                    >
                        <img
                            src="https://scontent.fbey14-1.fna.fbcdn.net/v/t39.30808-6/296247137_142729181728514_78287181760707273_n.jpg?_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Vb0c3wHT5jAAX9zh_XN&_nc_ht=scontent.fbey14-1.fna&oh=00_AfDEXuR661612ynwyGCL6qULkr_rTRijGyccE24fb1CCjw&oe=64A3C7E5"
                            alt=""
                            className="z-10 object-cover absolute top-0 bottom-0 left-0 right-0 h-full w-full min-h-full max-h-full min-w-full max-w-full"
                        />
                    </a>
                    <a
                        href={"https://www.instagram.com/p/CgjpFh5I2r8/?hl=en"}
                        target="_blank"
                        rel="noreferer"
                        className="h-full w-full aspect-square relative block bg-light-purple bg-opacity-10"
                    >
                        <img
                            src="https://scontent.fbey14-1.fna.fbcdn.net/v/t39.30808-6/296252701_142728155061950_7891207211384784178_n.jpg?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=9MdFum-h09AAX8LL1UH&_nc_ht=scontent.fbey14-1.fna&oh=00_AfAJE82ibbygddaG0p_hQjEyLq_Y-BHsaASGTONQh_KhyQ&oe=64A46D96"
                            alt=""
                            className="z-10 object-cover absolute top-0 bottom-0 left-0 right-0 h-full w-full min-h-full max-h-full min-w-full max-w-full"
                        />
                    </a>
                    <a
                        href={"https://www.instagram.com/p/CghEJrtKrqd/?hl=en"}
                        target="_blank"
                        rel="noreferer"
                        className="h-full w-full aspect-square relative block bg-light-purple bg-opacity-10"
                    >
                        <img
                            src="https://scontent.fbey14-1.fna.fbcdn.net/v/t39.30808-6/296207902_142531371748295_2395481216795310925_n.jpg?_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=3qSInMfJfBgAX_KfRat&_nc_ht=scontent.fbey14-1.fna&oh=00_AfACehPhcQGs_zk87yXFOWYRuT2jeJ6W9Q-Ic0ZBwbYhjQ&oe=64A4C71F"
                            alt=""
                            className="z-10 object-cover absolute top-0 bottom-0 left-0 right-0 h-full w-full min-h-full max-h-full min-w-full max-w-full"
                        />
                    </a>
                    <a
                        href={"https://www.instagram.com/p/Cgb6xTnKChD/?hl=en"}
                        target="_blank"
                        rel="noreferer"
                        className="h-full w-full aspect-square relative block bg-light-purple bg-opacity-10"
                    >
                        <img
                            src="https://scontent.fbey14-1.fna.fbcdn.net/v/t39.30808-6/295562259_142156588452440_8933460212726961354_n.jpg?_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=I9cr9Z8LWBAAX_GT7C2&_nc_ht=scontent.fbey14-1.fna&oh=00_AfBhuEBHkfIYIYFWKwY3EsGD3g23WdFzBwGYVpqB7KqdQw&oe=64A433BB"
                            alt=""
                            className="z-10 object-cover absolute top-0 bottom-0 left-0 right-0 h-full w-full min-h-full max-h-full min-w-full max-w-full"
                        />
                    </a>
                    <a
                        href={"https://www.instagram.com/p/CgMklYLoYnN/?hl=en"}
                        target="_blank"
                        rel="noreferer"
                        className="h-full w-full aspect-square relative block bg-light-purple bg-opacity-10"
                    >
                        <img
                            src="https://scontent.fbey14-1.fna.fbcdn.net/v/t39.30808-6/294660281_140759225258843_357333441938281385_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=jVPjgPGb6ZQAX9yDqRQ&_nc_ht=scontent.fbey14-1.fna&oh=00_AfDeR63SfmEab3nzQ2-xHS6txw-hxPkwIf3Dwt08i_7LOQ&oe=64A3DDB0"
                            alt=""
                            className="z-10 object-cover absolute top-0 bottom-0 left-0 right-0 h-full w-full min-h-full max-h-full min-w-full max-w-full"
                        />
                    </a>
                </div>
            </section>
        </MainLayout>
    );
};

export default home;
