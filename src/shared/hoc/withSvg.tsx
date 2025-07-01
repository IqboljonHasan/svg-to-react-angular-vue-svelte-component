// src/components/icons/withSvg.tsx

import type { SVGProps, FC } from "react"

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number
  color?: string
}

export function withSvg(Path: JSX.Element): FC<IconProps> {
  return ({ size = 20, color, viewBox = "0 0 24 24", ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={size}
      height={size}
      fill="none"
      color={color}
      {...props}
    >
      {Path}
    </svg>
  )
}
