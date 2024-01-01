import Image from "next/image";

const Roadmap = () => {
    return (
        
        <div className="bg-red-600">
              <div className="flex flexbox flex-row justify-center text-white text-6xl mt-10 mb-[110px]">roadmap
</div>
            <div className="flex flex-col gap-4 text-6xl font-bold text-red-400 mt-[100px] mb-[240px]">


                <div className="flex flexbox flex-row justify-end mt-[80px]">
                <div className="flex flexbox flex-row justify-start mt-[80px] mr-[250px]">
                    I fuck bitches all by my lonely
                </div>
                    <Image className="rounded-[150px] mr-[50px] " src="/rm.png" width={800} height={500} alt="Yoda Peepo" />
              

            </div>
</div>

            <div className="flex flexbox flex-row justify-center text-white text-4xl mb-[40px]">buy. hodl. win.
</div>
    


        </div>
    );
};

export default Roadmap;
