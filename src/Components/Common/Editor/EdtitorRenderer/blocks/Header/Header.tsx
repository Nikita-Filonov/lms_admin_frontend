import { FC, memo } from 'react'
import cn from 'classnames'
import parse from 'html-react-parser'
import styles from './Header.module.scss'

type Content = {
  text: string
  alignment: string
  level: number
}

type HeaderProps = {
  data: Content
  alignment?: string
  className?: string
}

export const Header: FC<HeaderProps> = memo(({ data, alignment = 'left', className }) => {
  const classes = cn(styles.header, className)

  switch (data.level) {
    case 1:
      return <h1 className={classes}>{parse(data.text)}</h1>
    case 2:
      return <h2 className={classes}>{parse(data.text)}</h2>
    case 3:
      return <h3 className={classes}>{parse(data.text)}</h3>
    case 4:
      return <h4 className={classes}>{parse(data.text)}</h4>
    case 5:
      return <h5 className={classes}>{parse(data.text)}</h5>
    case 6:
      return <h6 className={classes}>{parse(data.text)}</h6>
    default:
      return null
  }
})
