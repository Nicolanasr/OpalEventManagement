import Image from "next/image";

import { BsInstagram, BsFacebook, BsTiktok, BsWhatsapp } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col py-12 align-center justify-center" style={{ background: " radial-gradient(circle, rgba(22,18,70,1) 0%, rgba(20,21,44,1) 67%);"}}>
      <div className="container px-4 flex flex-col justify-center items-center mx-auto">
        <h2 className="font-extrabold text-priamry-white text-center text-xl md:text-4xl mb-4">Opal Event Management</h2>
        <div className="relative w-full m-auto h-[240px]">
          <Image src="/opal-logo-nobg.png" alt="Opal logo" fill style={{objectFit: 'contain'}} />
        </div>
        <h2 className="font-extrabold text-transparent text-xl md:text-4xl bg-clip-text bg-gradient-to-r from-primary-blue to-primary-pink h-[45px] mt-4">Coming Soon...</h2>
      </div>
      <div className="flex flex-row justify-center items-center text-xl space-x-4 mt-12">
        <a href="https://www.instagram.com/opal.eventmanagement/" target="_blank" rel="noreferer"><BsInstagram /></a>
        <a href="https://www.facebook.com/Opal.EventManagement" target="_blank" rel="noreferer"><BsFacebook /></a>
        {/* <a href="" target="_blank" rel="noreferer"><BsTiktok /></a> */}
        <a href="https://api.whatsapp.com/send?phone=96176919481" target="_blank" rel="noreferer"><BsWhatsapp /></a>
        <a href="mailto:info@opaleventmanagement.com" target="_blank" rel="noreferer"><AiOutlineMail /></a>
      </div>
    </div>
  )
}
