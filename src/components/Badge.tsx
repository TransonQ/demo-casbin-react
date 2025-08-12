import React from 'react'

export function Badge({
  children,
  status,
}: {
  children: React.ReactNode
  status: 'success' | 'error'
}) {
  return (
    <span
      className={`font-bold ${
        status === 'success' ? 'text-green-600' : 'text-red-600'
      }`}
    >
      {children}
    </span>
  )
}
