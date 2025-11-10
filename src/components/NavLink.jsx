import Link from 'next/link'
import clsx from 'clsx'

export function NavLink({ href, children, className }) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-block rounded-lg px-2 py-1 text-sm hover:bg-slate-100/10 transition-colors",
        className || "text-slate-700 hover:text-slate-900"
      )}
    >
      {children}
    </Link>
  )
}
