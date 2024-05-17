import Link from "next/link";

export function SaveField({ confirm, back, backTo }: { confirm?: string, back?: string, backTo?: string }) {
    return (
        <div className="flex justify-center w-full px-4 pb-4 ml-auto text-gray-500 gap-10">
            <button type="submit" className="py-2 px-4  bg-green-600 hover:bg-green-500 focus:bg-white
             text-white w-full transition ease-in duration-200 text-center 
     text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
        <a href="/login">{confirm ?? "Salvar"}</a>
            </button>
            <button type="submit" className="py-2 px-4  bg-red-600 hover:bg-red-500 focus:bg-white
             text-white w-full transition ease-in duration-200 text-center 
     text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                <Link href={backTo ?? '/'} />
                <span >
                    {back ?? "Cancelar"}
                </span>
            </button>
        </div>
    )
}