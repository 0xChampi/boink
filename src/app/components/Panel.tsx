import Image from "next/image";
import Nav from "./Nav";

const Panel = () => {
    return (
        <div className="bg-[#b20d1d] ">
           
            
            <div className="flex flex-col gap-4 text-6xl font-bold text-red-400 ">


                <div className="flex justify-center ">
                    <Image src="/deez.png" width={2500} height={500} alt="Yoda Peepo" />
                </div>
            </div>


 {/* <div className="flex flexbox flex-row justify-center mt-[50px]">
 <div className="rounded-2xl flex flexbox items-center justify-center gap-4 bg-[#b20d1d] max-w-[1300px] px-6">
            <Image src="/birdeye.png" width={300} height={100} alt="Bird Eye View" />
            <Image src="/raydium.svg" width={200} height={80} alt="Raydium Logo" />
            <a href="https://solscan.io/token/65nTNuJGHme4PQvKQyJykKp1bJAkK4A8Q66sd2yBWugf" target="_blank" rel="noopener noreferrer">
                <Image src="/solscan.svg" width={150} height={150} alt="Solscan Logo" />
            </a>
            <Image src="/X.png" width={40} height={40} alt="X Mark" />
            <Image src="/telegram.png" width={50} height={50} alt="Telegram Logo" />
        </div>
 </div> */}
    


        </div>
    );
};

export default Panel;
