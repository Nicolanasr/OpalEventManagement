import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

import MainLayout from "@/components/layout/MainLayout";
import { servicesData } from "@/utils/data";
import { ServiceType, eventTypes } from "@/utils/types";

type Props = { data: ServiceType };

const ServiceDetails = ({ data }: Props) => {
    return <MainLayout title={`${data.title} - Services`}>
        <>
        </>
    </MainLayout>;
};

export default ServiceDetails;

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: Object.keys(eventTypes).map((item) => {
            return {
                params: {
                    "service-slug": item,
                },
            };
        }),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const serviceSlug = ctx.params?.["service-slug"];

    let data: ServiceType | undefined;

    if (serviceSlug) {
        data = servicesData.find((item) => item.button.url.includes(serviceSlug as string));
    }

    return {
        props: {
            data: data || null,
        },
    };
};
