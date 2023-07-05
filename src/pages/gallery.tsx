import MainLayout from "@/components/layout/MainLayout";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const eventTypes: string[] = [
    "Weddings",
    "Birthdays",
    "Marriage Proposal",
    "Bachelor Parties",
    "Baptism",
    "First communion",
    "Gender Reveal",
    "Baby Shower",
    "Private Parties",
    "Divorce Parties",
];

const sortByData: string[] = ["Title, DESC", "Title, ASC", "Event date, DESC", "Event date, ASC"];

const colorsData: string[] = ["Orange", "Green", "Red", "Purple", "Blue"];

const Gallery = (props: Props) => {
    const [filters, setFilters] = useState<{
        sortBy: number | -1;
        eventType: number[];
        date: { from: string | null; to: string | null };
        colors: number[];
    }>({
        sortBy: -1,
        eventType: [],
        date: { from: null, to: null },
        colors: [],
    });

    const handleFilterChanges = (params: { key: "sortBy" | "eventType" | "date.from" | "date.to" | "colors"; index: number; value: any }) => {
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

    console.log(filters);

    return (
        <MainLayout title="Gallery">
            <section className="container">
                <div className="py-8">
                    <h1 className="text-3xl text-center">Gallery</h1>
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
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
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
                                        {eventTypes.map((e, index) => (
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
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
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
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
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

                                                    <span className="text-sm font-medium text-gray-700">{c}</span>
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </details>
                        </div>
                    </aside>
                    <div className="flex-1 p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {["", "", "", "", "", "", "", ""].map((e, index) => {
                            return (
                                <Link href="" key={e + index} className="flex flex-col w-full bg-white aspect-[11/16]">
                                    <div className="relative flex-1 m-8">
                                        <Image src="/633df1a86846594d47705331-ubuy-online-shopping.jpg" alt="" fill className="object-cover" />
                                    </div>
                                    <p className="block mt-auto py-3 w-full bg-dark-purple text-white text-center font-medium">Alana + Ben</p>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default Gallery;
