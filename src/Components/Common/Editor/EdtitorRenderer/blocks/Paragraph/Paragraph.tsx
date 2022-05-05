import { FC, memo } from 'react'
import cn from 'classnames'
import parse from 'html-react-parser'
import styles from './Paragraph.module.scss'

type Content = {
  text: string
  alignment?: string
}

type ParagraphProps = {
  data: Content
  className?: string
}

export const Paragraph: FC<ParagraphProps> = memo(({ data, className }) => {
  return <p className={cn(styles.paragraph, className)}>{parse(data.text)}</p>
})
