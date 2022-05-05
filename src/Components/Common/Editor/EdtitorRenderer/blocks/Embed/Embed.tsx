import { FC, memo } from 'react'
import cn from 'classnames'
import styles from './Embed.module.scss'

type Content = {
  caption?: string
  embed: string
  source: string
  service: string
  width: number
  height: number
}

type EmbedProps = {
  data: Content
  className?: string
}

export const Embed: FC<EmbedProps> = memo(({ data, className }) => {
  const widthStyle = {
    width: !data.width ? undefined : data.width + 'px',
  }
  const heightStyle = {
    height: !data.height ? undefined : data.height + 'px',
  }

  return (
    <figure className={cn(styles.embed, styles[data.service], className)} style={widthStyle}>
      <iframe src={data.embed} title={data.caption} className={styles.iframe} style={heightStyle} />
      {data.caption && <figcaption className={styles.caption}>{data.caption}</figcaption>}
    </figure>
  )
})
