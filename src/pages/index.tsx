import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex" style={{ background: " radial-gradient(circle, rgba(22,18,70,1) 0%, rgba(20,21,44,1) 67%);"}}>
      <div className="container flex flex-col justify-center items-center py-12 m-auto">
        <h2 className="font-extrabold text-priamry-white text-4xl mb-4">Opal Event Management</h2>
        <div className="relative w-full m-auto h-[240px]">
          <Image src="/opal-logo-nobg.png" alt="" fill style={{objectFit: 'contain'}} />
        </div>
        <h2 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-primary-blue to-primary-pink h-[45px] mt-4">Coming Soon...</h2>
      </div>
      
    </div>
  )
}
