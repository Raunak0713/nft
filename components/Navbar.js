import Image from "next/image";
import Link from "next/link";

function Navbar() {
    return (
        <>
            <header>
                <nav>
                <Link href={`/`} passHref><div className="flex items-center"><Image src={`https://raw.githubusercontent.com/thirdweb-dev/typescript-sdk/main/logo.svg`} alt='thirdweb/logo' width={45} height={43} priority decoding="async" style={{objectFit: 'cover'}} /> <span className="text-2xl text-slate-300 font-bold ml-2">NFTs</span></div></Link>
                </nav>
            </header>
        </>
    );
}

export default Navbar;