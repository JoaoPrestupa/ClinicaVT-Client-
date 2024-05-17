"use client"
import Eu from "@/assets/me I , myself.jpg";
import { Row } from "@/components/Table/Row";
import { EditButton } from "@/components/Button/EditButton";
import { SearchButton } from "@/components/Button/SearchButton";

export default function VisualizarUsuarios() {
    
    return (
        <div className="relative w-4/5 overflow-x-scroll bg-white shadow-2xl sm:rounded-lg p-6 m-4">
            <div className="flex gap-10 items-center flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white ">
                <EditButton/>
                <SearchButton/>
            </div>

            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">

                        </th>
                        <th scope="col" className="px-3 py-1">
                            Nome
                        </th>
                        <th scope="col" className="px-3 py-1">
                            Função
                        </th>
                        <th scope="col" className="px-3 py-1">
                            Data de Entrada
                        </th>
                        <th scope="col" className="px-3 py-1">
                            Ativo
                        </th>
                        <th scope="col" className="px-3 py-1">
                            Ação
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <Row
                    name="João Pedro"
                    picture={Eu}
                    role="Desenvolvedor"
                    status={true}
                    username="joaopedro"
                    data="20/04/2022"
                    />
                                        <Row
                    name="João Pedro"
                    picture={Eu}
                    role="Desenvolvedor"
                    status={true}
                    username="joaopedro"
                    data="20/04/2022"
                    />
                                        <Row
                    name="João Pedro"
                    picture={Eu}
                    role="Desenvolvedor"
                    status={true}
                    username="joaopedro"
                    data="20/04/2022"
                    />
                                        <Row
                    name="João Pedro"
                    picture={Eu}
                    role="Desenvolvedor"
                    status={true}
                    username="joaopedro"
                    data="20/04/2022"
                    />
                                        <Row
                    name="João Pedro"
                    picture={Eu}
                    role="Desenvolvedor"
                    status={true}
                    username="joaopedro"
                    data="20/04/2022"
                    />
                </tbody>
            </table>
            
        </div>
    )
}