"use client"
import { SidebarItem } from "./SideBarItem/SideBarItem";
import Agendamento from "@/assets/agendamento.png";
import Monitorar from "@/assets/monitorar.png";
import Vacinar from "@/assets/vacinar.png";
import Cadastrar from "@/assets/cadastrar.png"
import { useEffect, useState } from 'react';
import Left from "@/assets/left-arrow.png";
import Right from "@/assets/right-arrow.png";
import Image from "next/image";

export function Sidebar() {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSidebarOpen(false);
            } else {
                setSidebarOpen(true);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 z-40 h-screen pt-20 bg-white shadow-md transform transition-transform duration-200 ease-in-out 
        ${isSidebarOpen ? 'w-64 ' : 'w-20'}`}>
            <div className="h-full px-3 pb-4 overflow-y-auto">
                <ul className="space-y-2 font-medium">
                    <SidebarItem logo={Agendamento} destino="/dashboard/agendamento" name={isSidebarOpen ? "Agendamento" : ""} />
                    <SidebarItem logo={Monitorar} destino="/dashboard/monitorar" name={isSidebarOpen ? "Monitorar" : ""} />
                    <SidebarItem logo={Vacinar} destino="/dashboard/vacinar" name={isSidebarOpen ? "Vacinação" : ""} />
                    <SidebarItem logo={Cadastrar} destino="/dashboard/cadastro" name={isSidebarOpen ? "Cadastrar Veterinário" : ""} />
                </ul>
                <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="absolute bottom-0 right-0 mb-5 mr-5 ">
                    {isSidebarOpen ? <Image src={Left} alt="Recolher"/> : <Image src={Right} alt="Expandir"/>}
                </button>
            </div>
        </nav>
    );
}
