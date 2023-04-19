import Image from "next/image";

export default function MintNFTs() {
    const dummyNFTs = {
        image: 'https://img.seadn.io/files/4b5e1469b134d0c6cc20a113e34b2c65.jpg?fit=max&auto-format',
        collection: '100 Ethicon',
        name: 'Blue Ethicon',
        symbol: 'ETH',
        price: "0.01"
    };
    return (
        <>
            <div className="my-11">
                <div className="text-center mb-5">
                    <h1 className="text-4xl lg:text-4xl md:text-2xl font-bold text-slate-300">Top Most NFTs</h1>
                    <h1 className="text-4xl lg:text-4xl md:text-2xl font-bold text-slate-300">Extra Ordinary Collection</h1>
                </div>
                {[dummyNFTs,dummyNFTs,dummyNFTs,dummyNFTs,dummyNFTs,dummyNFTs,dummyNFTs].map((val, ind) => {
                    return (
                        <div key={ind} className="border border-slate-700 rounded-lg grid items-center">
                            <div className="flex items-center"><Image src={val.image} alt={val.name} priority decoding="async" width={450} height={430} style={{ objectFit: 'cover' }}/></div>
                            <div className="bg-white/5 flex items-center justify-between px-4 py-4">
                                <div className="grid items-center">
                                    <p className="font-bold text-sm text-blue-500">{val.collection}</p>
                                    <p className="font-bold text-sm text-lime-500">{val.name}</p>
                                </div>
                                <div className="grid items-center">
                                    <p className="font-bold text-sm text-blue-500">Price ({val.symbol})</p>
                                    <div className="flex items-center justify-around">
                                        <Image src={`https://ethereum.org/static/a183661dd70e0e5c70689a0ec95ef0ba/81d9f/eth-diamond-purple.webp`} alt='ethereum/icon' priority decoding="async" width={13} height={19} style={{objectFit: 'fill'}} />
                                        <p className="font-bold text-base text-purple-500">{val.price}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex item-center justify-center px-4 my-3">
                            <button type="button" className="text-base sm:text-sm w-full py-2 bg-gradient-to-br from-pink-600 to-violet-600 rounded-md shadow-md shadow-rose-600 active:scale-90  transition-all">Mint NFTs</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    ); 
}
