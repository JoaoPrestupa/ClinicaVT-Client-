import FieldModal from "./FieldModal";
import TableModal from "./TableModal";

export default function PopUpEdit({ isOpen, onClose, user }: { isOpen?: boolean, onClose?: any, user?: string | boolean }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-bold mb-4">Editar Usuário {user}</h2>
                <form>
                    <TableModal>
                        <FieldModal title="Nome" placeholder="Dean Winchester" />
                        <FieldModal title="Função" placeholder="Veterinário" />
                        <FieldModal title="Salário" placeholder="5.000,00" />
                        <FieldModal title="Data de Entrada" placeholder="20/04/2022" type="date" />
                        <FieldModal title="Ativo" placeholder="Ativo Ou Não" />
                        <FieldModal title="Username de Login" placeholder="dean" />
                        <FieldModal title="Senha Atual" placeholder="****" type="password" />
                        <FieldModal title="Nova Senha" placeholder="****" type="password" />
                    </TableModal>
                    <div className="flex justify-evenly">
                        <button type="button" onClick={onClose} className="mt-4 px-4 py-2 bg-green-600 text-white rounded">Salvar</button>
                        <button type="button" onClick={onClose} className="mt-4 px-4 py-2 bg-red-600 text-white rounded">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
