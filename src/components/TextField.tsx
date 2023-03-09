import { TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

type Props = {
  name: string
  error?: any
}

const MyTextField: React.FC<Props> = ({ name, error, ...props }) => {
  const { control } = useFormContext()

  if (!name) return null

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          id={name}
          variant="standard"
          error={Boolean(error)}
          helperText={error?.message}
          fullWidth
          {...props}
        />
      )}
    />
  )
}

export default MyTextField