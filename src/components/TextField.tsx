import { useFormContext, Controller } from 'react-hook-form'
import { TextField } from '@mui/material'

type Props = {
  name: string
  error?: any
}

export default function MyTextField(
  { name, error, ...props }: Props): React.ReactElement {
  const { control } = useFormContext()

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