import Image from "next/image";

const Buy = () => {
    return (
        <div className="bg-[#b20d1d]">
              <div className="flex flexbox flex-row justify-center text-white text-4xl mt-[220px]">how to buy deez?
</div>
            <div className="flex flex-col gap-4 text-6xl font-bold text-red-400">


                <div className="flex justify-center mt-[80px]">
                    <Image className="rounded-[150px] mb-12" src="/deez.png" width={800} height={500} alt="Yoda Peepo" />
                </div>
            </div>


 <div className="flex flexbox flex-row justify-center ">
 <div className="rounded-[80px] flex flexbox items-center justify-center gap-4 bg-[#b20d1d] max-w-[1300px] px-6">
            <Image src="/birdeye.png" width={300} height={100} alt="Bird Eye View" />
            <Image src="/raydium.svg" width={200} height={80} alt="Raydium Logo" />
            <a href="https://solscan.io/token/65nTNuJGHme4PQvKQyJykKp1bJAkK4A8Q66sd2yBWugf" target="_blank" rel="noopener noreferrer">
                <Image src="/solscan.svg" width={150} height={150} alt="Solscan Logo" />
            </a>
            <Image src="/X.png" width={40} height={40} alt="X Mark" />
            <Image src="/telegram.png" width={50} height={50} alt="Telegram Logo" />
        </div>
 </div>
    

<div className="flex flexbox flex-col justify-center p-[150px] gap-12  mb-[200px]">
<div className="flex flexbox flex-col justify-center items-center h-[150px] border-2 rounded-[80px] text-4xl ">
                DEEZ 🐲
            </div>
            <div className="flex flexbox flex-row justify-center items-center h-[150px] border-2 rounded-[80px] text-4xl ">
            <Image src="/solana.svg" width={100} height={50} alt="Telegram Logo" /> How to Buy? Wallet: Phantom, Sollet.io, Solflare.com
            </div>
            <div className="flex flexbox flex-row justify-center items-center h-[150px] border-2 rounded-[80px] text-4xl ">
            <Image src="/currency.svg" width={100} height={50} alt="Telegram Logo" /> Get some Solana (SOL) from Phantom, Binance, Coinbase, or Crypto.com
            </div>
            <div className="flex flexbox flex-row justify-center items-center h-[150px] border-2 rounded-[80px] text-4xl ">
            <Image src="/raydium.svg" width={100} height={50} alt="Telegram Logo" /> Go to Raydium.io and click on the &quot;Swap&quot; tab 
            </div>
            <div className="flex flexbox flex-row justify-center items-center h-[150px] border-2 rounded-[80px] text-4xl ">
            <Image src="/dn.png" width={100} height={50} alt="Telegram Logo" />Swap your SOL for DEEZ (65nTNuJGH12432245dft3sd2yBWugf) $DEEZ
            </div>
    </div>
        </div>
    );
};

export default Buy;
