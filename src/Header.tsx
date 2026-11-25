export default function Header() {
    return <div className="flex h-[76px] w-full items-center justify-between rounded-2xl border border-[#2B3033] bg-[#1A1D1F] px-4 md:px-6">
        <div className="flex items-center gap-3 md:gap-5">
            <img className="w-[90px]" src="/logo.svg" alt="logo" />
            <div className="h-7 w-px bg-[#34383A]" />
            <div className="flex items-center gap-3 text-[15px] text-white"><p>O'zbekcha</p><p className="text-lg text-[#9DA1A3]">⌄</p></div>
        </div>
        <div className="hidden h-full items-center gap-9 text-sm text-white lg:flex">
            <p className="border-b-2 border-[#1C92E0] py-7">Asosiy</p><p>Yangiliklar</p><p>Kurslar</p><p>Kutubxona</p><p>Bog‘lanish</p>
        </div>
        <div className="flex items-center gap-3 md:gap-6">
            <img className="h-5 w-5 md:h-6 md:w-6" src="/search2.svg" alt="search" /><img className="h-5 w-5 md:h-6 md:w-6" src="/savat.svg" alt="cart" /><img className="h-5 w-5 md:h-6 md:w-6" src="/notification.svg" alt="notification" />
            <div className="hidden h-6 w-px bg-[#3D4549] md:block" /><p className="hidden whitespace-nowrap md:block">Jasurbek Pulatov</p><img className="h-8 w-8 rounded-full object-cover" src="/human.png" alt="avatar" />
        </div>
    </div>;
}
