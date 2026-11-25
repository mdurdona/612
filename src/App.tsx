import Footer from "./Footer";
import Header from "./Header";


export default function App() {
    return <div className="min-h-screen bg-[#111315] px-4 pt-5 text-white md:px-8">
        <Header />

        <div className="flex h-13.75 items-center gap-3 overflow-hidden pl-2 text-xs text-[#858B8F] md:pl-8">
            <img className="h-5 w-5 shrink-0" src="/home.svg" alt="icon" />
            <p className="shrink-0 text-sm text-[#6D7274]">Asosiy</p>
            <img className="h-2 w-2 shrink-0" src="/Frame.svg" alt="icon" />
            <p className="shrink-0 text-sm text-[#6D7274]">Kutubxona</p>
            <img className="h-2 w-2 shrink-0" src="/Frame.svg" alt="icon" />
            <p className="truncate text-sm text-white">Shaxmatdagi qobiliyatlaringizga qayta baho bering</p>
        </div>

        <div className="flex flex-col items-start gap-6 lg:flex-row">
            <div className="min-w-0 w-full flex-1 rounded-xl border border-[#25292C] bg-[#1A1D1F] p-4 md:p-7">
                <div className="flex flex-col gap-5 sm:flex-row">
                    <img className="h-66 w-47.5 shrink-0 rounded-md object-cover" src="/book-cover.png" alt="Shaxmatdagi qobiliyatlaringizga qayta baho bering" />
                    <div className="min-w-0 flex-1">
                        <h1 className="mb-4 text-2xl font-bold leading-tight md:text-[28px]">Shaxmatdagi qobiliyatlaringizga qayta baho bering</h1>
                        <div className="mb-6 flex flex-wrap items-center gap-3">
                            <img className="h-7 w-7" src="/price.svg" alt="Narx" />
                            <p className="text-xl font-bold">55 000.00 UZS</p>
                            <p className="text-sm text-[#777B7D] line-through">160 000.00 UZS</p>
                        </div>
                        <div className="mb-5 grid grid-cols-2 border border-[#2B3033] md:grid-cols-4">
                            <div className="border-b border-r border-[#2B3033] px-3 py-2.5 md:border-b-0"><p className="text-sm text-[#858B8F]">♙ Daraja</p><p className="text-sm">Boshlang‘ich</p></div>
                            <div className="border-b border-[#2B3033] px-3 py-2.5 md:border-b-0 md:border-r"><p className="text-sm text-[#858B8F]">♙ Muallif</p><p className="text-sm">Jeremy Silman</p></div>
                            <div className="border-r border-[#2B3033] px-3 py-2.5"><p className="text-sm text-[#858B8F]">▤ Sahifa soni</p><p className="text-sm">231</p></div>
                            <div className="px-3 py-2.5"><p className="text-sm text-[#858B8F]">▦ Chop etilgan sana</p><p className="text-sm">2002</p></div>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                            <button className="flex h-12 items-center gap-3 rounded-lg bg-[#1C92E0] px-6 text-lg font-medium md:px-10">
                                <img className="h-6 w-6" src="/savat.svg" alt="" />Savatga</button>
                            <button className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#666B6E] bg-[#292D30]">
                                <img className="h-6 w-6" src="/heart.svg" alt="Sevimlilar" />
                            </button>
                            <button className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#666B6E] bg-[#292D30]">
                                <img className="h-6 w-6" src="/share.svg" alt="Ulashish" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <h2 className="mb-3 text-2xl font-bold">Kitob haqida</h2>
                    <p className="text-base leading-[1.45] text-[#B6B9BB]">Shaxmatni qanday qayta baholash kerak, uzoq vaqtdan beri zamonaviy klassika hisoblangan. Ushbu 4-nashr Silmanning nomutanosiblik haqidagi innovatsion kontseptsiyasini butunlay yangi darajaga olib chiqadi. 1400 dan 2100 gacha bo‘lgan reyting oralig‘idagi o‘yinchilar va shaxmat bo‘yicha tayyor o‘quv dasturini qidirayotgan o‘qituvchilar uchun mo‘ljallangan muallif o‘quvchini nomutanosiblik asoslari orqali olib boradigan, barcha nomutanosibliklarning har bir tafsiloti o‘zlashtirilishini ta’minlaydigan aqlni kengaytiruvchi sayohatni baham ko‘radi. Va shaxmat o‘yinchisini/sevuvchisini har doim xohlagan, lekin erisha olishiga ishonmagan narsasi bilan qoldiradi: usta darajasidagi pozitsion poydevor.</p>
                </div>
            </div>

        </div>
        <Footer />
    </div>;
}
