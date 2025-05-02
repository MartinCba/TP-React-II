
import { ComponentType, ReactNode } from "react";

type LiProps = {
  className: string,
  href?: string,
  children: ReactNode,
  componentContent?: ComponentType<any>,
  onClick?: () => void

}

export default function Li({ className, href, children, componentContent: Component, onClick }: LiProps) {
  return (
    <li className={className}>
      {
        Component ? <Component href={href!} onClick={onClick}> {children} </Component> : children
      }
    </li>
  )
}
