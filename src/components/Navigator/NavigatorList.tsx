export function NavigatorList({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div
        className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 cursor-pointer"
      >
        <ul className="flex flex-wrap -mb-px">
          {children}
        </ul>
      </div>
    );
  }