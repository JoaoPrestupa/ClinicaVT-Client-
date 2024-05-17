export default function TableModal({ children }: { children: any }) {
    

    return (
        <div className="p-6 space-y-6">
            <div className="grid grid-cols-6 gap-6">
                {children}
            </div>
        </div>
    )
}