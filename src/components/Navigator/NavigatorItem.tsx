import React from 'react';

export function NavigatorItem({
  title,
  isActive,
  onClick,
}: {
  title: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <li className="flex mr-2">
      <a
        className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
        onClick={onClick}
        style={
          isActive
           ? { color: '#083344', borderColor: '#083344' }
            : { color: 'gray', borderColor: 'gray' }
        }
      >
        {title}
      </a>
    </li>
  );
}
