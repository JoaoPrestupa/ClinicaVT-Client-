import Imagem from '@/assets/imagem-login-clinicavt.jpg'
import Image from 'next/image';
import { FormField } from '@/components/Field/FormField';
import { SaveField } from '@/components/Field/SaveField';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row w-screen h-screen overflow-hidden">
      <div className='flex flex-col w-full md:w-1/2 h-screen overflow-y-auto'>
        <section className="h-screen bg-gray-100/50">
          <form className="container max-w-2xl mx-auto shadow-md md:w-3/4">
            <div className="p-4 border-t-2 border-indigo-400 rounded-lg bg-gray-100/5 ">
              <div className="max-w-sm mx-auto md:w-full md:mx-0">
                <div className="inline-flex items-center space-x-4">
                  <h1 className="text-gray-600">
                    Cadastro de Cliente
                  </h1>
                </div>
              </div>
            </div>
            <div className="space-y-6 bg-white">
              <hr />
              <h2 className='flex justify-center'>Informações Obrigatórias</h2>
              <hr />
              <FormField placeHolder='Email' type='text' IconType='email' />
              <FormField placeHolder='Senha' type='passowrd' IconType='senha' />
              <FormField placeHolder='Repita a Senha' type='passowrd' IconType='senha' />
              <FormField placeHolder='Seu Nome' type='text' />
              <FormField placeHolder='Nome do Pet' type='text' />
              <FormField placeHolder='Telefone' type='text' />
              <FormField placeHolder='Nascimento' type='date' />
              <FormField placeHolder='CPF' type='text' />
              <hr />
              <h2 className='flex justify-center'>Opcionais</h2>
              <hr />
              <FormField placeHolder='CEP' type='text' />
              <FormField placeHolder='Bairro' type='text' />
              <FormField placeHolder='Rua' type='text' />
              <FormField placeHolder='Cidade' type='text' />
              <FormField placeHolder='UF' type='text' />
              <FormField placeHolder='Complemento' type='text' />
              <FormField placeHolder='Número' type='text' />
              <hr />
              <h3 className='flex justify-center'>Foto do Pet</h3>
              <hr />
              <FormField file={true} />
              <SaveField confirm='Cadastrar' back='Cancelar' />
            </div>
          </form>
        </section>
      </div>

      <div className="w-full md:w-1/2 h-screen relative">
        <Image src={Imagem} alt="Your Image" />
      </div>
    </div>

  );
}