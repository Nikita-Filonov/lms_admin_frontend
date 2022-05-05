import { FC, memo } from 'react'
import Highlight from 'react-highlight'
import cn from 'classnames'
import styles from './CodeBox.module.scss'

type Content = {
  code: string
  language: string
  theme: string
}

type CodeBoxProps = {
  data: Content
  className?: string
}

export const CodeBox: FC<CodeBoxProps> = memo(({ data, className }) => {
  return (
    <>
      <link rel="stylesheet" href={data.theme} />
      {/* @ts-ignore */}
      <Highlight className={cn(styles.codeBox, className)} innerHTML={true}>
        {data.code}
      </Highlight>
    </>
  )
})
