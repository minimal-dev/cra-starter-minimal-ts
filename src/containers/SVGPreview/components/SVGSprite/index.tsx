import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { parse } from 'svg-parser'

import Icon from '~components/Icon'
import svgSrc from '~components/Icon/icons.svg'

import * as style from './SVGSprite.module.scss'

interface SVGSpriteProps {
  className?: string
  variant?: 'def' | 'sl'
}

const SVGSprite: React.FC<SVGSpriteProps> = (props) => {
  const { className, variant = 'def', ...rest } = props

  const [symbols, setSymbols] = useState([])

  const fetchSymbols = () => {
    fetch(svgSrc)
      .then((res) => res.text())
      .then((res) => {
        const parsedRes = parse(res)
        // @ts-ignore
        const parsedSymbols = parsedRes?.children?.[0]?.children

        if (!parsedSymbols?.length) return

        const formattedSymbols = parsedSymbols
          .filter((symbol: any) => symbol.tagName === 'symbol')
          .map((symbol: any) => symbol.properties)
          .map((symbol: any) => {
            const { viewBox = '0 0 32 32' } = symbol
            const [, , width, height] = viewBox.split(' ')

            return { ...symbol, width, height }
          })

        setSymbols(formattedSymbols)
      })
  }

  useEffect(() => fetchSymbols(), [])

  return (
    <table
      {...rest}
      className={classNames(
        style.table,
        { [style[variant]]: variant },
        className
      )}
    >
      <thead>
        <tr>
          <th>Icon</th>
          <th>Icon (inverted)</th>
          <th>Name</th>
          <th>Width</th>
          <th>Height</th>
        </tr>
      </thead>
      <tbody>
        {symbols.map((symbol: any) => (
          <tr>
            <td>
              <div className={style.iconWrapper} title={symbol.id}>
                <Icon name={symbol.id} size={[symbol.width, symbol.height]} />
              </div>
            </td>
            <td>
              <div className={style.iconWrapperBlack} title={symbol.id}>
                <Icon name={symbol.id} size={[symbol.width, symbol.height]} />
              </div>
            </td>
            <td>{symbol.id}</td>
            <td>{symbol.width}</td>
            <td>{symbol.height}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default SVGSprite
