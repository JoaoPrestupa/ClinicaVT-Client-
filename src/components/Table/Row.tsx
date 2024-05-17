"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import PopUpEdit from '../EditModal/Modal';

export function Row({
    picture,
    name,
    username,
    role,
    status,
    data
}: {
    picture?: any,
    name?: string,
    username?: string,
    role?: string,
    status?: boolean,
    data?: string | any,
}) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 overflow-x-auto">
            <td className="w-2 p-2">
                <div className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded 
            focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800
             focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label className="sr-only">checkbox</label>
                </div>
            </td>
            <th scope="row" className="flex items-center px-0 py-2 text-gray-900 whitespace-nowrap dark:text-white">
                <Image className="w-8 h-8 rounded-full" src={picture} alt="Image" />
                <div className="ps-2">
                    <div className="text-base font-semibold">{name}</div>
                    <div className="font-normal text-gray-500">{username}</div>
                </div>
            </th>
            <td className="px-8 py-4">
                {role}
            </td>
            <td className="px-8 py-4">
                <div className="flex items-center">
                    <div className=" rounded-full ">
                        {data}
                    </div>
                </div>
            </td>
            <td className="px-8 py-4">
                <div className="flex items-center">
                    <div className="rounded-full bg-green-500 me-2"></div> {status == true ? "Ativo" : "Inativo"}
                </div>
            </td>
            <td className="px-8 py-4">
                <button type="button" onClick={() => setIsModalOpen(true)} className="font-medium text-blue-600 dark:text-green-500 hover:underline">
                    Editar
                </button>
            </td>
            <PopUpEdit isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} user="João Pedro" />
        </tr>
    );
}



