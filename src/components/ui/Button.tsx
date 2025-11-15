import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary'|'ghost' }

export default function Button({ variant='primary', children, ...props }: Props) {
  const base = "px-4 py-2 rounded-md focus:outline-none focus:ring-2"
  const v = variant === 'primary' ? `${base} bg-primary text-white` : `${base} border`
  return <button className={v} {...props}>{children}</button>
}
