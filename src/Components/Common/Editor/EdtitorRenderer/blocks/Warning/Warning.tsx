import {FC} from 'react'
import {Alert, AlertTitle} from "@mui/material";

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
    <Alert severity="warning">
      <AlertTitle>{data.title}</AlertTitle>
      {data.message}
    </Alert>
  )
}
