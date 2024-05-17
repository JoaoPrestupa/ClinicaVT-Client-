import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import Imagem from '@/assets/imagem-login-clinicavt.jpg'
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row w-screen h-screen overflow-hidden">
      <div className="flex flex-col w-full md:w-1/2 h-screen overflow-y-auto">
        <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
          <a href="#" className="p-4 text-xl font-bold text-white bg-green-500 hover:bg-green-400">
            Voltar
          </a>
        </div>
        <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
          <p className="text-3xl text-center">
            Bem Vindo
          </p>
          <form className="flex flex-col pt-3 md:pt-8">
            <div className="flex flex-col pt-4">
              <div className="flex relative ">
                <span className=" inline-flex  items-center px-3 border-t 
                bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <AiOutlineMail size={15} />
                </span>
                <input type="text" id="design-login-email" className=" flex-1 appearance-none border
                 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 
                 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="Email" />
              </div>
            </div>
            <div className="flex flex-col pt-4 mb-12">
              <div className="flex relative ">
                <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <AiOutlineLock size={15} />
                </span>
                <input type="password" id="design-login-password" className=" flex-1 appearance-none border 
                border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 
                focus:ring-green-600 focus:border-transparent" placeholder="Password" />
              </div>
            </div>
            <a href='/usuario'>
              Cadastrar
            </a>
            <button type="submit" className="w-full py-3 mt-6 text-lg text-white transition-colors duration-200 transform
             bg-green-500 rounded-md hover:bg-green-400 focus:outline-none">
              <a href="/dashboard">
                Login
              </a>
            </button>
          </form>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-screen relative">
        <Image src={Imagem} alt="Your Image" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}