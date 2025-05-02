
type AProps = {
    href: string,
    children:  React.ReactNode,
    onClick?: () => void
}

export default function A({href, children, onClick}: AProps) {
  return (
    <a href={href} onClick={onClick} >{children}</a>
  )
}
