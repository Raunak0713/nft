export default function Analytics({ totalNFTsSupply, totalClaimedSupply, totalUnClaimedSupply}) {
    const supplyArray = [
        {title: 'Total NFTs', count: totalNFTsSupply},
        {title: 'Claimed NFTs', count: totalClaimedSupply},
        {title: 'UnClaimed NFTs', count: totalUnClaimedSupply},
    ]
    return (
        <>
            <div className="my-11">
                <div className="text-center mb-5">
                    <h1 className="text-5xl lg:text-4xl md:text-2xl sm:text-lg font-bold text-slate-300">NFTs Analytics</h1>
                </div>
                <div>

                </div>
            </div>   
        </>
    );
}

