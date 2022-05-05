import {FC} from 'react'
import cn from 'classnames'
import parse from 'html-react-parser'
import styles from './Warning.module.scss'

type Content = {
  title: string
  message: string
}

type WarningProps = {
  data: Content
  className?: string
}

export const Warning: FC<WarningProps> = ({data, className}) => {
  return (
    <dl className={cn(styles.warning, className)}>
      <dt className={styles.name}>{parse(data.title)}</dt>
      <dd className={styles.message}>{parse(data.message)}</dd>
    </dl>
  )
}
