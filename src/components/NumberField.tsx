import { useFormContext, Controller } from 'react-hook-form'
import { TextField, TextFieldProps } from '@mui/material'

type Props = TextFieldProps & {
  name: string
  error?: any
}

export default function NumberField(
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
          type="number"
          error={Boolean(error)}
          helperText={error?.message}
          fullWidth
        />
      )}
    />
  )
}