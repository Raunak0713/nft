import Hero from "./Hero";

export default function Dashboard() {
    return (
        <>
            <main className="h-screen overflow-y-scroll scroll-style">
                <div className="w-10/12 lg:w-11/12 mr-auto ml-auto mt-[12vh]">
                    <Hero />
                    {/* Analytics */}
                    {/* NFTs */}
                </div>
            </main>
        </>
    );
}

