import Link from 'next/link'
import React from 'react'

type Props = {}

const Banner = (props: Props) => {
    return (
        <div className="bg-white mt-auto">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div
                    className="flex flex-col items-center gap-4 rounded-lg bg-light-purple p-6 shadow-lg sm:flex-row sm:justify-between"
                >
                    <strong className="text-xl text-white sm:text-xl">
                        Make Your Next Step!
                    </strong>
                    <Link
                        className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-light-purple hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90 transition-all"
                        href="/"
                    >
                        <span className="text-sm font-medium"> Let{"'"}s Get Started </span>

                        <svg
                            className="h-5 w-5 rtl:rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner