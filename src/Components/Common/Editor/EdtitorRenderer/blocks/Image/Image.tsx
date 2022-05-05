import { FC } from 'react'
import cn from 'classnames'
import styles from './Image.module.scss'

type ImageFile = {
  url: string
}

type Content = {
  file: ImageFile
  caption?: string
  withBorder?: boolean
  stretched?: boolean
  withBackground?: boolean
}

type ImageProps = {
  data: Content
  className?: string
}

export const Image: FC<ImageProps> = ({ data, className }) => {
  return (
    <figure
      className={cn(
        styles.image,
        {
          [styles.bordered]: data.withBorder,
          [styles.stretched]: data.stretched,
          [styles.withBackground]: data.withBackground,
        },
        className,
      )}
    >
      <div className={styles.cover}>
        <img src={data.file.url} alt={data.caption || ''} className={cn(styles.file, className)} />
      </div>
      {data.caption && <figcaption className={styles.caption}>{data.caption}</figcaption>}
    </figure>
  )
}
