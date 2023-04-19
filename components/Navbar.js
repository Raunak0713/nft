import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
    const connectMetaMask = useMetamask();
    const address = useAddress();
    const disconnectToWallet = useDisconnect();
    return (
        <>
            <header className="border border-l-0 border-r-0 bg-[#1B2129] border-white/10 h-[9vh] flex items-center justify-center fixed top-0 left-0 right-0 opacity-100 z-[2000]">
                <nav className="flex items-center justify-between w-10/12 m-auto lg:w-11/12">
                    <Link href={`/`} passHref><div className="flex items-center"><Image src={`https://raw.githubusercontent.com/thirdweb-dev/typescript-sdk/main/logo.svg`} alt='thirdweb/logo' width={45} height={43} priority decoding="async" style={{objectFit: 'cover'}} /> <span className="text-2xl text-slate-300 font-bold ml-2">EtherVault</span></div></Link>

                    {!address ? (
                        <ul className="flex items-center">
                            <button type="button" className="text-lg text-blue-500 ring-2 ring-blue-600 rounded-lg px-5 py-1.5 hover:text-slate-300 hover:bg-blue-600 transition-all active:scale-90 shadow-lg hover:shadow-blue-600 md:text-sm md:px-4 md:py-1" onClick={connectMetaMask}>Connect Wallet</button>
                        </ul>
                    ) : (
                        <ul className="group relative">
                            <div className="border border-slate-600 bg-black/50 cursor-pointer flex items-center justify-between px-3 gap-3 py-1 rounded-md hover:border-blue-500 group-hover:bg-slate-900 xsm:gap-2 transition-all" onClick={onTriggerPopup}>
                            <div className="flex items-center "><Image src={`https://ethereum.org/static/a183661dd70e0e5c70689a0ec95ef0ba/81d9f/eth-diamond-purple.webp`} alt='img/eth' width={15} height={25} style={{ objectFit: 'contain'}} /></div>
                            <div className="grid items-center">
                                <p className="text-xs leading-tight text-gray-400 group-hover:text-slate-300">{balanceState?.substring(0, 6)} <span className="capitalize">{networkState}</span>Eth</p>
                                <p className="text-xs leading-tight text-gray-400 group-hover:text-slate-300">{address?.substring(0,4)}...{address?.substring(address.length - 4)} <span className="capitalize">{networkState}</span></p>
                            </div>
                            <div className="flex items-center"><Image src={`https://thirdweb.com/_next/static/media/metamask-fox.a725b9ae.svg`} alt='img/eth' width={23} height={23} style={{ objectFit: 'contain'}} /></div>
                            </div>
                        </ul>
                    )}

                </nav>
            </header>
        </>
    );
}

export default Navbar;