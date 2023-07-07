/* eslint-disable @next/next/no-img-element */
import { GetStaticPaths, GetStaticProps } from "next";
import React, { useEffect, useState } from "react";

import MainLayout from "@/components/layout/MainLayout";
import { portfolioData } from "@/utils/data";
import { PortfolioType } from "@/utils/types";
import { ImageList, ImageListItem } from "@mui/material";
import GetInTouch from "@/components/PageComponents/GetInTouch";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper";
import "swiper/css/navigation";
import "swiper/css";

import dayjs from "dayjs";
import Image from "next/image";

type Props = {
    data: PortfolioType;
};

const EventDetails = ({ data }: Props) => {
    const [galleryOpen, setGalleryOpen] = useState<number | null>(null);

    useEffect(() => {
        const onEscapeKeyPress = (e: KeyboardEvent) => {
            if (e.key === "Escape" && galleryOpen !== null) {
                setGalleryOpen(null);
            }
        }

        document.addEventListener("keydown", onEscapeKeyPress)

        return () => {
            document.removeEventListener("keydown", onEscapeKeyPress);
        }
    }, [galleryOpen])


    return (
        <MainLayout title={`${data.title} - ${data.eventType}`}>
            <>
                {galleryOpen !== null && (
                    <div className="fixed h-screen w-full top-0 bottom-0 left-0 right-0 z-[99] sm:p-12">
                        <div className="absolute top-0  bottom-0 left-0 right-0 bg-black bg-opacity-90" onClick={() => setGalleryOpen(null)}></div>
                        <Swiper
                            className="h-full w-full relative"
                            loop={true}
                            modules={[Navigation, Keyboard]}
                            slidesPerView={1}
                            spaceBetween={32}
                            navigation
                            initialSlide={galleryOpen}
                            keyboard={{
                                enabled: true
                            }}
                        >
                            {data.gallery.map((img, index) => (
                                <SwiperSlide key={img + index}>
                                    <Image
                                        src={img}
                                        alt=""
                                        fill
                                        className="h-full min-h-full max-h-full object-contain m-auto cursor-zoom-in"
                                        onClick={() => window.open(img, "_blank")}
                                        quality={100}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <button className="text-3xl absolute top-4 right-8 text-white z-10" onClick={() => setGalleryOpen(null)}>
                            ✕
                        </button>
                    </div>
                )}
                <div className="">
                    <img src={data.banner} alt={data.title} className="object-contain m-auto w-full max-h-screen md:aspect-video" />
                </div>
                <div className="container mt-12">
                    <div className="text-center">
                        <h4 className="text-[0.5rem] md:text-xs uppercase tracking-widest">{data.eventType}</h4>
                        <h1 className="text-2xl md:text-4xl font-semibold text-light-purple">{data.title}</h1>
                        <p className="text-[0.7rem] mt-2">{dayjs(new Date(data.date)).format("DD MMMM YYYY")}</p>
                        <div className="h-[1px] bg-light-purple bg-opacity-70 w-20 mx-auto mt-2"></div>
                    </div>
                </div>

                <div className="mt-8 container px-4 text-sm leading-loose md:leading-relaxed tracking-wide md:text-base">
                    <div dangerouslySetInnerHTML={{ __html: data.text }} />
                    <div className="mt-5 text-xs flex flex-row items-center space-x-4">
                        <p>Theme: </p>
                        <div className="flex space-x-2 items-center">
                            {data.colors.map((c, index) => (
                                <div key={c + index} className="h-4 w-4 rounded-full shadow" style={{ backgroundColor: c }}></div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 container max-w-5xl">
                    <ImageList variant="masonry" cols={2} gap={8} >
                        {data.gallery.map((item, index) => (
                            <ImageListItem key={item + index} onClick={() => setGalleryOpen(index)} className="cursor-pointer">
                                <img
                                    src={`${item}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>
                <div className="mt-12">
                    <GetInTouch />
                </div>
            </>
        </MainLayout>
    );
};

export default EventDetails;

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: portfolioData.map((item) => {
            return {
                params: {
                    "event-slug": item.slug,
                },
            };
        }),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const eventSlug = ctx.params?.["event-slug"];

    const data: PortfolioType | undefined = portfolioData.find((item) => item.slug === eventSlug);

    return {
        props: {
            data: data,
        },
    };
};
