import { FC, memo } from 'react'
import cn from 'classnames'
import styles from './Code.module.scss'

type Content = {
  code: string
}

type CodeProps = {
  data: Content
  className?: string
}

export const Code: FC<CodeProps> = memo(({ data, className }) => {
  return (
    <pre className={cn(styles.code, className)}>
      <code>{data.code}</code>
    </pre>
  )
})
