import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

export function FormField({ placeHolder, type, IconType, file }: { placeHolder?: string, type?: string, IconType?: string, file?: boolean }) {

    if (file) {
        return (
            <input className="block w-full text-sm text-gray-900 border
            border-gray-300 rounded-lg cursor-pointer
            bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 
            dark:placeholder-gray-400" type="file" />
        )
    }

    return (
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                {IconType == 'email' ? <AiOutlineMail size={15} /> : IconType == 'senha' ? <AiOutlineLock size={15} /> : undefined}
            </div>
            <input type={type} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
         focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeHolder} />
        </div>
    );
}
