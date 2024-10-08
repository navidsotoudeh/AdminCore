import cn from 'clsx'
import React, { CSSProperties } from 'react'

export interface TextProps {
  variant?: Variant
  htmlTag?: htmlTag
  lang?: Lang
  className?: string
  style?: CSSProperties
  children?: React.ReactNode
  onClick?: () => void
}
type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'subtitle1'
  | 'subtitle2'
  | 'subtitle3'
  | 'subtitle4'
  | 'subtitle5'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4'
  | 'discount1'
  | 'discount2'
  | 'caption1'
  | 'caption2'
  | 'caption3'
  | 'button1'
  | 'button2'
  | 'label'

type htmlTag =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'p'
  | 'span'
  | 'caption'
  | 'label'

type Lang = 'fa' | 'en'

export const Text: React.FC<TextProps> = ({
  style,
  className = '',
  variant = 'body',
  htmlTag = 'span',
  lang = 'fa',
  onClick,
  children,
}) => {
  const componentsMap = {
    p: 'p',
    span: 'span',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    h7: 'h1',
    label: 'label',
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const Component = componentsMap[htmlTag]

  const rootClassName = cn(className, `text-${variant}-${lang}`)

  return (
    <Component style={style} className={rootClassName} onClick={onClick}>
      {children}
    </Component>
  )
}
