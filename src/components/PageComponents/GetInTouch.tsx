import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const GetInTouch = (props: Props) => {
    return (
        <div className="p-4 bg-dark-purple text-primary-white" >
            <div className="border border-white w-full p-6 md:p-12">
                <div className="max-w-5xl mx-auto bg-primary-white text-primary-black flex flex-col md:flex-row">
                    <div className="flex-1 py-8 md:py-32 px-6">
                        <h2 className="font-semibold text-lg md:text-2xl tracking-wide text-center">Connect</h2>
                        <div className="mx-auto h-[1px] bg-primary-black bg-opacity-70 w-16 mt-2"></div>
                        <h3 className="text-xl md:text-4xl text-center pt-8">
                            Let us help you <br />
                            plan your perfect event!
                        </h3>

                        <Link
                            className="mx-auto block bg-dark-purple text-primary-white w-fit px-8 py-2 font-semibold text-sm mt-10"
                            href={"/contact-us"}
                        >
                            Get in touch
                        </Link>
                    </div>
                    <div className="aspect-square w-full md:aspect-auto md:h-auto flex-1 relative bg-dark-purple">
                        <Image
                            src="/andrew-knechel-gG6yehL64fo-unsplash.jpg"
                            alt=""
                            fill
                            className="object-cover opacity-70"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch