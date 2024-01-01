import Image from "next/image";

const Tokenomics = () => {
    return (
        
        <div className="bg-yellow-200">
              <div className="flex flexbox flex-row justify-center text-[#b20d1d] text-6xl">tokenomics
</div>
            <div className="flex flex-col gap-4 text-6xl font-bold text-red-400 ">


                <div className="flex flexbox flex-row px-[150px] mt-[80px] justify-between">
                    <Image className="mt-[100px] mb-[100px] rounded-[150px]" src="/dn.png" width={500} height={500} alt="Yoda Peepo" />

<div className="flex flexbox flex-col justify-center">
<div className="flex flexbox flex-row justify-center text-[#b20d1d] text-4xl px-12">token supply: 420,000,000,000
</div>
<div className="flex flexbox flex-row justify-center text-[#b20d1d] text-4xl px-12">based devs
</div>
<div className="flex flexbox flex-row justify-center text-[#b20d1d] text-4xl px-12">No Taxes
</div>
<div className="flex flexbox flex-row justify-center text-[#b20d1d] text-4xl px-12">LP Burnt
</div>
<div className="flex flexbox flex-row justify-center text-[#b20d1d] text-4xl px-12">100 Score
</div>
<div className="flex flexbox flex-row justify-center text-[#b20d1d] text-4xl px-12">Ownership Renounced
</div>
    </div>
                </div>
                
            </div>



    


        </div>
    );
};

export default Tokenomics;
