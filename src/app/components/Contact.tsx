import Image from "next/image";

const Contact = () => {
    return (
        
        <div className="text-[#b20d1d]">
              <div className="flex flexbox flex-row justify-center text-[#b20d1d] text-4xl mt-12">about
</div>
            <div className="flex flex-col gap-4 text-6xl font-bold text-red-400">


                <div className="flex justify-center mt-[80px] rounded-[150px]">
                    <Image className="rounded-[150px]" src="/dn.png" width={500} height={500} alt="Yoda Peepo" />
                </div>
            </div>


            <div className="flex flexbox flex-row justify-center text-white text-4x mt-12">contact us
</div>
    


        </div>
    );
};

export default Contact;
