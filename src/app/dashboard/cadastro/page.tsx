"use client"
import { NavigatorItem } from "@/components/Navigator/NavigatorItem";
import { NavigatorList } from "@/components/Navigator/NavigatorList";
import { PageContainer } from "@/components/PageContainer/PageContainer";
import { Title } from "@/components/Title/Title";
import { useEffect, useState } from "react";
import VisualizarClientes from "./cliente/page";
import CadastrarUsuarios from "./usuario/insert/page";
import VisualizarUsuarios from "./usuario/page";
import CadastrarVeterinarios from "./veterinario/insert/page";
import VisualizarVeterinarios from "./veterinario/page";

export default function CadastroPage() {

    const [activeItem, setActiveItem] = useState('');

    const items = [
        { title: 'Visualizar Usuários', isActive: activeItem === 'Visualizar Usuários' },
        { title: 'Cadastrar Usuários', isActive: activeItem === 'Cadastrar Usuários' },
        { title: 'Visualizar Veterinários', isActive: activeItem === 'Visualizar Veterinários' },
        { title: 'Cadastrar Veterinários', isActive: activeItem === 'Cadastrar Veterinários' },
        { title: 'Visualizar Clientes', isActive: activeItem === 'Visualizar Clientes' },
    ];

    const handleItemClick = (title: string) => {
        setActiveItem(title);
    }

    useEffect(() => {
        // fetch
    }, []);

    return (
        <PageContainer>
            <div className="flex flex-col sm:flex-row pl-20 sm:pl-64 pr-4">
                <Title>
                    Área de Visualização e Cadastro
                </Title>
            </div>

            <div className="flex flex-col sm:flex-row pl-20 sm:pl-64 pr-4">
                <NavigatorList>
                    {items.map((item, index) => (
                        <NavigatorItem
                            key={index}
                            title={item.title}
                            isActive={item.isActive}
                            onClick={() => handleItemClick(item.title)}
                        />
                    ))}
                </NavigatorList>
            </div>

            {activeItem === 'Visualizar Usuários' && <VisualizarUsuarios />}
            {activeItem === 'Cadastrar Usuários' && <CadastrarUsuarios />}
            {activeItem === 'Visualizar Veterinários' && <VisualizarVeterinarios />}
            {activeItem === 'Cadastrar Veterinários' && <CadastrarVeterinarios />}
            {activeItem === 'VisualizarClientes' && <VisualizarClientes />}

        </PageContainer>

    );
}