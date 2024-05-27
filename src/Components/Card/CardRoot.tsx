import { ReactNode } from "react"


interface CardRootProps {
  children?: ReactNode,
  className?: string
}

export function CardRoot({children, className} : CardRootProps) {
  return (
    <div className={`bg-white shadow-lg rounded-lg p-4 ${className}`}>  
      { children }
    </div>
  );
}