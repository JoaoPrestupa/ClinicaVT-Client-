import Image from "next/image";

export function FieldInsert({ children, icone, placeHolder, type }: { children: React.ReactNode, icone?: any, placeHolder?: string, type?: string }) {
    return (
        <div className="flex flex-col pt-4">
            <div className="flex relative ">
                <span className=" inline-flex  items-center px-3 border-t 
                  bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <Image src={icone} alt="icone" width={15} height={15} />
                </span>
                <input type={type} className=" flex-1 appearance-none border
                   border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 
                   shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder={placeHolder} />
            </div>
        </div>
    );
}




