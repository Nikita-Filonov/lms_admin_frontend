import { FC, memo } from 'react'
import cn from 'classnames'
import parse from 'html-react-parser'
import styles from './Quote.module.scss'

type Content = {
  text: string
  caption: string
}

type QuoteProps = {
  data: Content
  className?: string
}

export const Quote: FC<QuoteProps> = memo(({ data, className }) => {
  return (
    <figure className={cn(styles.quote, className)}>
      <blockquote className={styles.blockquote}>{parse(data.text)}</blockquote>
      <figcaption className={styles.caption}>
        <cite>{parse(data.caption)}</cite>
      </figcaption>
    </figure>
  )
})
