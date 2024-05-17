export function PageContainer({ children }: { children: React.ReactNode }) {
    return ( // tava p-4
        <section className="flex flex-col h-full w-full lg:gap- pt-[74px] px-4 lg:px-8 pb-6 bg-gray-200 overflow-y-auto sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg mt-14">
                {children}
            </div>
        </section>
    );
}
