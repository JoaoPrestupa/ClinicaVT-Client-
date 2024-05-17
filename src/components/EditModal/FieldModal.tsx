export default function FieldModal({ title, type, placeholder }: { title: string, type?: string, placeholder?: string }) {

    return (
        <div className="col-span-6 sm:col-span-3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{title}</label>
            <input type={type ?? "text"}  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900
             text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder={placeholder} />
        </div>
    )
}