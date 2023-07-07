import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import MainLayout from "@/components/layout/MainLayout";
import { portfolioData } from "@/utils/data";
import { ColorValueHex, PortfolioType, eventTypes } from "@/utils/types";
import dayjs from "dayjs";

type Props = {
    data: PortfolioType[];
};

const sortByData: string[] = ["Title, DESC", "Title, ASC", "Event date, DESC", "Event date, ASC"];

const Portfolio = ({ data }: Props) => {
    let colorsData: ColorValueHex[] = [];

    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        element.colors.forEach((c) => {
            if (!colorsData.includes(c)) {
                colorsData.push(c);
            }
        });
    }

    const [dataToDisplay, setDataToDisplay] = useState<PortfolioType[]>(data);

    const [filters, setFilters] = useState<{
        sortBy: number | -1;
        eventType: number[];
        date: { from: string | null; to: string | null };
        colors: number[];
    }>({
        sortBy: -1,
        eventType: Array.from({ length: Object.keys(eventTypes).length }, (v, i) => i), // gives [0, 1, 2, 3, 4],
        date: { from: null, to: null },
        colors: Array.from({ length: Object.keys(colorsData).length }, (v, i) => i),
    });

    const handleFilterChanges = (params: { key: "sortBy" | "eventType" | "date.from" | "date.to" | "colors"; index: number; value: any }): void => {
        const tmpFilters: {
            sortBy: number | -1;
            eventType: number[];
            date: { from: string | null; to: string | null };
            colors: string[];
        } = JSON.parse(JSON.stringify(filters));

        if (params.key === "sortBy") {
            setFilters((p) => ({ ...p, sortBy: params.index }));
        } else if (params.key.includes("date")) {
            if (params.key.includes("from")) {
                setFilters((p) => ({ ...p, date: { from: params.value, to: p.date.to } }));
            } else if (params.key.includes("to")) {
                setFilters((p) => ({ ...p, date: { from: p.date.from, to: params.value } }));
            }
        } else if (params.key === "eventType") {
            let newArr: number[] = JSON.parse(JSON.stringify(tmpFilters.eventType));
            if (filters.eventType.includes(params.index)) {
                newArr = newArr.filter((e) => e !== params.index);

                setFilters((p) => ({ ...p, eventType: newArr }));
            } else {
                newArr.push(params.index);
                setFilters((p) => ({ ...p, eventType: newArr }));
            }
        } else if (params.key === "colors") {
            let newArr: number[] = JSON.parse(JSON.stringify(tmpFilters.colors));
            if (filters.colors.includes(params.index)) {
                newArr = newArr.filter((e) => e !== params.index);

                setFilters((p) => ({ ...p, colors: newArr }));
            } else {
                newArr.push(params.index);
                setFilters((p) => ({ ...p, colors: newArr }));
            }
        }
    };

    useEffect(() => {
        const handleChangeDataByFilters = (): void => {
            let tmpData: PortfolioType[] = JSON.parse(JSON.stringify(data));

            switch (filters.sortBy) {
                case 0:
                    tmpData.sort((a, b) => a.title.localeCompare(b.title));
                    break;
                case 1:
                    tmpData.sort((a, b) => b.title.localeCompare(a.title));
                    break;
                case 2:
                    tmpData.sort((a, b) => (dayjs(a.date).isBefore(b.date) ? 0 : 1));
                    break;
                case 3:
                    tmpData.sort((a, b) => (dayjs(a.date).isAfter(b.date) ? 0 : 1));
                    break;
                default:
                    tmpData = JSON.parse(JSON.stringify(data));
                    break;
            }

            if (filters.eventType.length > 0) {
                const tmpFilterByEvent: PortfolioType[] = [];

                for (let index = 0; index < tmpData.length; index++) {
                    const element = tmpData[index];
                    filters.eventType.forEach((i) => {
                        const eventType = Object.values(eventTypes)[i];

                        if (element.eventType === eventType) {
                            tmpFilterByEvent.push(element);
                        }
                    });
                }

                tmpData = tmpFilterByEvent;
            }

            if (filters.date.from !== null) {
                const tmpFilterByDate: PortfolioType[] = [];

                tmpData.forEach((element) => {
                    if (dayjs(element.date).isAfter(dayjs(filters.date.from))) {
                        tmpFilterByDate.push(element);
                    }
                });

                tmpData = tmpFilterByDate;
            }

            if (filters.date.to !== null) {
                const tmpFilterByDate: PortfolioType[] = [];

                tmpData.forEach((element) => {
                    if (dayjs(element.date).isBefore(dayjs(filters.date.to))) {
                        tmpFilterByDate.push(element);
                    }
                });

                tmpData = tmpFilterByDate;
            }

            if (filters.colors.length > 0) {
                const tmpFilterByColor: PortfolioType[] = [];
                for (let index = 0; index < tmpData.length; index++) {
                    const element = tmpData[index];

                    filters.colors.forEach((i) => {
                        const color = colorsData[i];
                        if (element.colors.includes(color) && !tmpFilterByColor.includes(element)) {
                            tmpFilterByColor.push(element);
                        }
                    });
                }

                tmpData = tmpFilterByColor;
            }

            setDataToDisplay(tmpData);
        };

        handleChangeDataByFilters();

        // return () => {
        //     handleChangeDataByFilters();
        // }
    }, [filters]);

    console.log(filters);

    return (
        <MainLayout title="Portfolio">
            <section className="container">
                <div className="py-8">
                    <h1 className="text-3xl text-center">Portfolio</h1>
                </div>
                <div className="flex border-t">
                    <aside className="w-80 p-4 border-r hidden lg:block sticky top-0">
                        <div>
                            <label htmlFor="SortBy" className="block text-xs font-medium text-gray-700">
                                Sort By
                            </label>

                            <select
                                id="SortBy"
                                className="mt-1 rounded border-gray-300 text-sm bg-transparent"
                                onChange={(e) => {
                                    handleFilterChanges({ key: "sortBy", value: null, index: sortByData.indexOf(e.target.value) });
                                }}
                            >
                                <option>Sort By</option>

                                {sortByData.map((e, index) => (
                                    <option key={e + index} value={e}>
                                        {e}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <p className="block text-xs font-medium text-gray-700 mt-6">Filters</p>

                        <div className="mt-1 space-y-2">
                            <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                                    <span className="text-sm font-medium"> Event Types </span>

                                    <span className="transition group-open:-rotate-180">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </span>
                                </summary>

                                <div className="border-t border-gray-200 bg-primary-white">
                                    <header className="flex items-center justify-between p-4">
                                        <span className="text-sm text-gray-700"> {filters.eventType.length} Selected </span>

                                        <button
                                            type="button"
                                            className="text-sm text-gray-900 underline underline-offset-4"
                                            onClick={() => {
                                                setFilters((p) => ({ ...p, eventType: [] }));
                                            }}
                                        >
                                            Reset
                                        </button>
                                    </header>

                                    <ul className="space-y-1 border-t border-gray-200 p-4">
                                        {Object.values(eventTypes).map((e, index) => (
                                            <li key={e + index}>
                                                <label
                                                    htmlFor={`Filter${e}`}
                                                    className="inline-flex items-center gap-2"
                                                    onClick={() => {
                                                        handleFilterChanges({
                                                            key: "eventType",
                                                            index: index,
                                                            value: null,
                                                        });
                                                    }}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        id={`Filter${e}`}
                                                        className="h-5 w-5 rounded border-gray-300"
                                                        value={index}
                                                        checked={filters.eventType.includes(index)}
                                                        disabled
                                                        onChange={(v) => {
                                                            v.preventDefault();
                                                        }}
                                                    />

                                                    <span className="text-sm font-medium text-gray-700">{e}</span>
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </details>

                            <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                                    <span className="text-sm font-medium"> Date </span>

                                    <span className="transition group-open:-rotate-180">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </span>
                                </summary>

                                <div className="border-t border-gray-200 bg-primary-white">
                                    <header className="flex items-center justify-between p-4">
                                        <button
                                            type="button"
                                            className="text-sm text-gray-900 underline underline-offset-4"
                                            onClick={() => {
                                                setFilters((p) => ({ ...p, date: { from: null, to: null } }));
                                            }}
                                        >
                                            Reset
                                        </button>
                                    </header>

                                    <div className="border-t border-gray-200 p-4">
                                        <div className="flex items-center space-x-2">
                                            <span className="text-xs w-12">From:</span>
                                            <input
                                                type="date"
                                                name="fromDate"
                                                id="fromDate"
                                                className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm bg-transparent"
                                                value={filters.date.from ?? ""}
                                                onChange={(e) => {
                                                    handleFilterChanges({ key: "date.from", index: -1, value: e.target.value });
                                                }}
                                            />
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-xs w-12">To:</span>
                                            <input
                                                type="date"
                                                name="toDate"
                                                id="toDate"
                                                className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm bg-transparent"
                                                value={filters.date.to ?? ""}
                                                onChange={(e) => {
                                                    handleFilterChanges({ key: "date.to", index: -1, value: e.target.value });
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </details>

                            <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                                    <span className="text-sm font-medium"> Colors </span>

                                    <span className="transition group-open:-rotate-180">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </span>
                                </summary>

                                <div className="border-t border-gray-200 bg-primary-white">
                                    <header className="flex items-center justify-between p-4">
                                        <span className="text-sm text-gray-700"> {filters.colors.length} Selected </span>

                                        <button
                                            type="button"
                                            className="text-sm text-gray-900 underline underline-offset-4"
                                            onClick={() => {
                                                setFilters((p) => ({ ...p, colors: [] }));
                                            }}
                                        >
                                            Reset
                                        </button>
                                    </header>

                                    <ul className="space-y-1 border-t border-gray-200 p-4">
                                        {colorsData.map((c, index) => (
                                            <li key={c + index}>
                                                <label
                                                    htmlFor={`Filter${c}`}
                                                    className="inline-flex items-center gap-2"
                                                    onClick={() => {
                                                        handleFilterChanges({
                                                            key: "colors",
                                                            index: index,
                                                            value: null,
                                                        });
                                                    }}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        id={`Filter${c}`}
                                                        className="h-5 w-5 rounded border-gray-300"
                                                        value={index}
                                                        checked={filters.colors.includes(index)}
                                                        disabled
                                                        onChange={(v) => {
                                                            v.preventDefault();
                                                        }}
                                                    />

                                                    <span
                                                        className="text-sm font-medium text-gray-700 h-6 w-6 rounded-full shadow"
                                                        style={{ backgroundColor: c }}
                                                    ></span>
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </details>
                        </div>
                    </aside>
                    <div className="flex-1 p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {dataToDisplay.map((e, index) => {
                            return (
                                <Link href={`/portfolio/${e.slug}`} key={e.slug + index} className="flex flex-col w-full bg-white aspect-[11/16]">
                                    <div className="relative flex-1 m-8 hover:m-4 transition-all">
                                        <Image src={e.banner} alt="" fill className="object-cover" />
                                    </div>
                                    <p className="block mt-auto py-3 w-full bg-dark-purple text-white text-center font-medium">{e.title}</p>
                                    <p className="text-xs text-center ">{dayjs(e.date).format("DD MMMM YYYY")}</p>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default Portfolio;

export const getStaticProps: GetStaticProps = async (ctx) => {
    const data: PortfolioType[] = portfolioData;

    return {
        props: {
            data: data,
        },
    };
};
