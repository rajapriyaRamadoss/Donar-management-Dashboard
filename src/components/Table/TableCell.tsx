import React from 'react';

interface TableCellProps {
  children: React.ReactNode;
}

export function TableCell({ children }: TableCellProps) {
  return (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
      {children}
    </td>
  );
}