import Image from "next/image";
import Link from "next/link";

function Navbar() {
    return (
        <>
            <header className="border border-l-0 border-r-0 border-t-0 bg-[#1B2129] border-white/10 h-[9vh] flex items-center justify-center"> 
                <nav className="flex items-center justify-between w-10/12 m-auto lg:w-11/12">
                    <Link href={`/`} passHref><div className="flex items-center"><Image src={`https://raw.githubusercontent.com/thirdweb-dev/typescript-sdk/main/logo.svg`} alt='thirdweb/logo' width={45} height={43} priority decoding="async" style={{objectFit: 'cover'}} /> <span className="text-2xl text-slate-300 font-bold ml-2">NFTs</span></div></Link>

                    <ul className="flex items-center">
                        <button type="button" className="text-lg text-blue-500 ring-2 ring-blue-600 rounded-lg px-5 py-1.5 hover:text-slate-300 hover:bg-blue-600 transition-all active:scale-90 shadow-lg hover:shadow-blue-600 md:text-sm md:px-4 md:py-1">Connect Wallet</button>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Navbar;