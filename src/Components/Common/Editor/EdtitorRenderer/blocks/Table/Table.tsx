import { FC, useMemo } from 'react'
import cn from 'classnames'
import parse from 'html-react-parser'
import styles from './Table.module.scss'

type Content = {
  content: [string[]]
  withHeadings: boolean
}

type TableProps = {
  data: Content
  className?: string
}

export const Table: FC<TableProps> = ({ data, className }) => {
  const rows = useMemo(
    () => (!data?.withHeadings ? data.content : data.content.filter((item, index) => index !== 0)),
    [data],
  )

  return (
    <table className={cn(styles.table, className)}>
      {data.withHeadings && data.content[0]?.length && (
        <thead>
          <tr>
            {data.content[0].map((th, thIndex) => (
              <th key={thIndex}>{parse(th)}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map((tr, trIndex) => (
          <tr key={trIndex}>
            {tr.map((td, tdIndex) => (
              <td key={tdIndex}>{parse(td)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
