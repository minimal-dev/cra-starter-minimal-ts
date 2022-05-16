import React from 'react'
// @ts-ignore
import sprite from './icons.svg'

const paramToArray = (param: number | [number, number]) =>
  typeof param === 'object' ? param : [param, param]

interface IconPropTypes extends React.ComponentPropsWithoutRef<'svg'> {
  name: string
  size: number | [number, number]
  viewbox?: number | [number, number]
  isFromInlineDefs?: boolean
}

const Icon = React.forwardRef<SVGSVGElement, IconPropTypes>(
  // eslint-disable-next-line react/prop-types
  ({ name, size, viewbox, isFromInlineDefs = false, ...rest }, ref) => {
    const sizes = paramToArray(size)
    const vbox = viewbox ? paramToArray(viewbox) : sizes
    return (
      <svg
        {...rest}
        xmlns="http://www.w3.org/2000/svg"
        width={sizes[0]}
        height={sizes[1]}
        viewBox={`0 0 ${vbox[0]} ${vbox[1]}`}
        ref={ref}
        fill="currentColor"
      >
        <use xlinkHref={`${isFromInlineDefs ? '' : sprite}#${name}`} />
      </svg>
    )
  }
)

export default Icon
