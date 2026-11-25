export default function Footer() {
    return <div className="-mx-4 mt-16 bg-[#1A1D1F] text-white md:-mx-8">
        <div className="flex min-h-[154px] flex-col items-center justify-center gap-3 px-3 py-6">
            <img src="/logo.svg" alt="logo" className="w-[110px]" />
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6"><p className="text-sm">Biz haqimizda</p><p className="text-sm">Cookie fayllari siyosati</p><p className="text-sm">Foydalanish qoidalari</p><p className="text-sm">Cookie fayllari siyosati</p></div>
            <div className="flex items-center gap-3"><img className="h-5 w-5" src="/instagram.svg" alt="icon" /><img className="h-5 w-5" src="/telegram.svg" alt="icon" /><img className="h-5 w-5" src="/youtube.svg" alt="icon" /><img className="h-5 w-5" src="/twitter.svg" alt="icon" /><img className="h-5 w-5" src="/facebook.svg" alt="icon" /></div>
        </div>
        <div className="flex min-h-[45px] items-center justify-between gap-2 border-t border-[#303436] px-4 py-3 text-xs md:px-6 md:text-sm"><p>© UzChess. All rights reserved.</p><img className="hidden h-[18px] w-[33px] md:block" src="/Group.svg" alt="icon" /><p>Foydalanish qoidalari</p></div>
    </div>;
}
