import Image from "next/image";
import { ImageInfo } from "./ImageInfo/ImageInfo";
import photoUser from "@/assets/me I , myself.jpg";
import ClinicaImagem from "@/assets/logoClinica.png";

export function Infobar() {
    return (
        <nav className="fixed top-0 z-50 w-full bg-white shadow-md">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <a href="/dashboard" className="fixed ms-2 md:me-24">
                            <Image src={ClinicaImagem} alt="logo" height={70} width={70} objectFit="contain" />
                        </a>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center ms-3">
                            <ImageInfo petName="Fred" username="Joao" photoPet={photoUser} />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}