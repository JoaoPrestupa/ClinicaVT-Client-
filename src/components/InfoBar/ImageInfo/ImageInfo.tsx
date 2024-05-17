"use client"
import Image from "next/image";
import { useState } from "react";

export function ImageInfo({ username, petName, photoPet }: { username?: string, petName?: string, photoPet?: any }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <button onClick={toggleMenu} type="button" className="...">
                <Image src={photoPet} alt="foto do pet" width={15} height={15} objectFit="contain"
                    className="w-full h-full rounded-full" />
            </button>
            {isOpen && (
                <div className="absolute right-7 transform  z-6 my-1 text-base list-none
                                     bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                    <div className="px-5 py-5" role="none">
                        <p className="text-sm text-gray-900 dark:text-white" role="none">
                            <b>Usuário</b> {username}
                        </p>
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                            <b>Pet</b> {petName}
                        </p>
                        <p className="text-sm text-gray-900 dark:text-white" role="none">
                            <b>Configuração</b>
                        </p>
                        <p className="text-sm text-gray-900 dark:text-white" role="none">
                            <b>Logout</b>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}







