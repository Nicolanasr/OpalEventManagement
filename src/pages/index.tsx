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

type Props = {};

const services: {
    title: string;
    body: string;
    button: {
        url: string;
        text: string;
    };
    image: { url: string; quality: number };
}[] = [
        {
            title: "Weddings",
            body: `Offers a variety of packages to meet your specific wedding planning needs.
We set a concept, create ideas, choose venue, decorate, animate, manage and execute customized and high end weddings
All you need is <span style="font-family: var(--font-comorant);font-weight: 700;">LOVE</span> and a Wedding planner`,
            button: {
                text: "Learn more",
                url: "#services/weddings",
            },
            image: { url: "/jeremy-wong-weddings-K8KiCHh4WU4-unsplash.jpg", quality: 10 },
        },
        {
            title: "Birthdays",
            body: `Whatever birthday party you are organizing, and whatever budget you are working with – we have the expertise & creative skills to create your dream event.
We specialize in producing major birthday parties. Whether you are planning a small party; a bespoke nightclub for a 21st Birthday; a mini festival or a decadent soiree for a 50th.
<span style="font-family: var(--font-comorant);font-weight: 700;">We've got you covered</span>`,
            button: {
                text: "Learn more",
                url: "#services/weddings",
            },
            image: { url: "/jon-tyson-CP68p1fZS8k-unsplash.jpg", quality: 10 },
        },
        {
            title: "Marriage Proposal",
            body: `A proposal event is an opportunity for an individual to create a memorable and heartfelt experience for their partner. It goes beyond simply asking the question; it is about creating an atmosphere that reflects the unique bond shared between the couple. Whether it is an intimate setting or a grand gesture, the proposal event aims to capture the essence of their love story.`,
            button: {
                text: "Learn more",
                url: "#services/weddings",
            },
            image: { url: "/MARRY-ME-DINING-SETUP-1.jpeg", quality: 30 },
        },
        {
            title: "Bachelor Parties",
            body: `It’s your best friend’s special night. Soon he or she will be mar- ried, and you want to send them off into that new life in style. Throw a stag party or a bachelor- ette fete with planning help from We Duet All Party Planners. We’ll help you throw a party that truly comes to life.`,
            button: {
                text: "Learn more",
                url: "#services/weddings",
            },
            image: { url: "/BACHELOR-PARTY-AT-TERRACE-1.jpg", quality: 60 },
        },
        {
            title: "Baptism",
            body: `A baptism or christening is a time to welcome a new baby into the family faith.
The party that follows the ceremony is a time for celebration of new life, tradition, and the circle of family and friends.
We guarantee extraordinary ideas for your little one ’s christening, completely tailored to your wishes.
<span style="font-family: var(--font-comorant);font-weight: 700;">We can create uniquely themed and beautiful parties for your little one.</span> `,
            button: {
                text: "Learn more",
                url: "#services/weddings",
            },
            image: { url: "/Blue-Gold-Garden-Baptism-Party-via-Karas-Party-Ideas-KarasPartyIdeas.com19-1.jpeg", quality: 100 },
        },
        {
            title: "First communion",
            body: `The First Holy Communion is a very important occasion for people who follow the Catholic faith. It is an intensely religious event and is as important as planning parties for other milestones like a baby shower or first birthday. This is a special day for your little one and the day is often celebrated with the closest family and friends.
<span style="font-family: var(--font-comorant);font-weight: 700;">Beautiful Ideas to Celebrate Your Child’s First Communion</span>`,
            button: {
                text: "Learn more",
                url: "#services/weddings",
            },
            image: { url: "/633df1a86846594d47705331-ubuy-online-shopping.jpg", quality: 50 },
        },

        {
            title: "Gender Reveal",
            body: `One of the most exciting parts of being pregnant is finding out whether you're expecting a little boy or girl, and a gender reveal party is a cool way to get friends and family involved.
If you're planning to find out and share the gender of your baby before he or she is born, here's how to plan a gender reveal party, as well as some creative party ideas to make your reveal even more memorable and fun.`,
            button: {
                text: "Learn more",
                url: "#services/weddings",
            },
            image: { url: "/Unique-Gender-Reveal-Ideas-2022_1000x.webp", quality: 100 },
        },
        {
            title: "Baby Shower",
            body: `A baby shower is a party of gift-giving or a ceremony that has different names in different cul- tures. It celebrates the delivery or expected birth of a child or the transformation of a woman into a mother.
Your baby is almost here and your loved ones are ready to shower them with gifts and good wishes. Sure taking your baby shower virtual is a big shift from what you had planned, but don't let that stop you. Gather your list of guests and let's get started!`,
            button: {
                text: "Learn more",
                url: "#services/weddings",
            },
            image: { url: "/Magical-Baby-Shower-2.jpeg", quality: 10 },
        },
        {
            title: "Private Parties",
            body: `We Have The Creativity & Event Management Skills To Make Your Ideas Come Alive.
We Deliver A Seamless Event Management Service Catered To You & Your Ideas specially for your <span style="font-family: var(--font-comorant);font-weight: 700;">PRIVATE PARTIES</span>`,
            button: {
                text: "Learn more",
                url: "#services/weddings",
            },
            image: { url: "/Hotham-Hall-private-event-design.jpg", quality: 75 },
        },
        {
            title: "Divorce Parties",
            body: `A fun step by step guide to throwing a divorce or breakup party. ...
We take care of The Divorce Party event: How to Throw a Divorce Or Breakup Party !`,
            button: {
                text: "Learn more",
                url: "#services/weddings",
            },
            image: { url: "/6b05c4f8-e57d-4043-b315-01f342218bc4.8e248a90f2f02c5c15746e362f276403.jpeg", quality: 75 },
        },
    ];

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
                        {services.map((service, index) => (
                            <SwiperSlide key={service.title + index}>
                                <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:space-x-16 items-stretch">
                                    <div className="flex-1 flex flex-col">
                                        <p className="text-xs font-medium ">
                                            {index + 1} / {services.length}
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

                <Link
                    className="mx-auto block mb-8 bg-dark-purple text-primary-white w-fit px-8 py-2 font-semibold text-sm mt-10"
                    href={"/gallery"}
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
