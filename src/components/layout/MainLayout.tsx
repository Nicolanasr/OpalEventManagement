import React from "react";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import Head from "next/head";

type Props = {
    header?: boolean;
    footer?: boolean;
    children: React.ReactNode;
    title?: string;
};

const MainLayout = ({ header = true, footer = true, children, title = "Event Planning Services" }: Props) => {
    return (
        <>
            <Head>
                <title>{title} | Opal Event Management</title>
                <link rel="shortcut icon" href="/opal-logo-round.jpg" type="image/x-icon" />

                <meta name="description" content="Plan your dream event with ease. Our expert event planners will handle every detail, from start to finish, creating unforgettable experiences. Stress-free, personalized, and flawless event coordination awaits. Contact us today!" />
                <meta name="keywords" content="event planning, event management, wedding planner, corporate events, special occasions, professional event coordination" />

                <meta property="og:title" content={`${title} | Opal Event Management`} />
                <meta property="og:description" content="Plan your dream event with ease. Our expert event planners will handle every detail, from start to finish, creating unforgettable experiences. Stress-free, personalized, and flawless event coordination awaits. Contact us today!" />
                <meta property="og:image" content="/opal-logo.jpg" />
                <meta property="og:url" content="https://opaleventmanagement.com" />

                <meta name="twitter:title" content={`${title} | Opal Event Management`} />
                <meta name="twitter:description" content="Plan your dream event with ease. Our expert event planners will handle every detail, from start to finish, creating unforgettable experiences. Stress-free, personalized, and flawless event coordination awaits. Contact us today!" />
                <meta name="twitter:image" content="/opal-logo.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="https://opaleventmanagement.com" />

                <meta property="pinterest:title" content={`${title} | Opal Event Management`} />
                <meta property="pinterest:description" content="Plan your dream event with ease. Our expert event planners will handle every detail, from start to finish, creating unforgettable experiences. Stress-free, personalized, and flawless event coordination awaits. Contact us today!" />
                <meta property="pinterest:image" content="/opal-logo.jpg" />
            </Head>
            {header && <Header />}
            <main className="mt-[70px]">{children}</main>
            {footer && <Footer />}
        </>
    );
};

export default MainLayout;
