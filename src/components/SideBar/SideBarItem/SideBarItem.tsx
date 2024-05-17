import Image from "next/image";
import Link from "next/link";

type Props = {
    name: string;
    logo: any;
    destino: string;
}

export function SidebarItem({
    logo,
    name,
    destino
}: Props) {
    return (
        <li>
            <a className="flex items-center p-2 text-black rounded-lg hover:bg-gray-400 hover:text-black">
                <div className="w-5 h-5 transition duration-100 ">
                    <Image src={logo} alt="sla" />
                </div>
                <Link className="ms-3" href={destino}>
                    {name}
                </Link>
            </a>
        </li>
    );
};
