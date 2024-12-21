import React from 'react';

interface TableHeaderProps {
  children: React.ReactNode;
  onClick?: () => void;
  sortable?: boolean;
}

export function TableHeader({ children, onClick, sortable }: TableHeaderProps) {
  return (
    <th 
      className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
        sortable ? 'cursor-pointer hover:text-gray-700' : ''
      }`}
      onClick={onClick}
    >
      {children}
    </th>
  );
}