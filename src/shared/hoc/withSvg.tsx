import type { SVGProps } from "react"
import React from "react"

type BaseProps = SVGProps<SVGSVGElement> & {
  size?: number
  color?: string
  fill?: string
}

/**
 * Icon is visible to screen readers (accessibility required)
 * 👉 Must provide a `title`
 */
type AccessibleProps = {
  "aria-hidden"?: false
  role?: "img"
  title: string
}

/**
 * Icon is hidden from screen readers
 * 👉 Should not have `title`
 */
type DecorativeProps = {
  "aria-hidden"?: true
  role?: "presentation"
  title?: undefined
}

/**
 * IconProps: Accept either accessible or decorative
 */
export type IconProps = BaseProps & (AccessibleProps | DecorativeProps)

export function withSvg(Path: JSX.Element) {
  return ({
    size = 20,
    color,
    fill = "none",
    title,
    ...props
  }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={fill}
      stroke={color}
      {...props}
    >
      {title && <title>{title}</title>}
      {Path}
    </svg>
  )
}
