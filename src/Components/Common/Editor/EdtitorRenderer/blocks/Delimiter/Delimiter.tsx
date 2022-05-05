import { FC, memo } from 'react'
import cn from 'classnames'
import styles from './Delimiter.module.scss'

type DelimiterProps = {
  className?: string
}

export const Delimiter: FC<DelimiterProps> = memo(({ className }) => {
  return <hr className={cn(styles.delimiter, className)} />
})
