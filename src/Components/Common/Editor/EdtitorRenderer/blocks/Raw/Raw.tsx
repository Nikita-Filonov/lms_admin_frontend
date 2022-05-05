import { FC, memo } from 'react'
import cn from 'classnames'
import dompurify from 'dompurify'
import parse from 'html-react-parser'
import styles from './Raw.module.scss'

type Content = {
  html: string
}

type RawProps = {
  data: Content
  className?: string
}

export const Raw: FC<RawProps> = memo(({ data, className }) => {
  return <div className={cn(styles.raw, className)}>{parse(dompurify.sanitize(data.html))}</div>
})
