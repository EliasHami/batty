import { TextField, TextFieldProps } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

type Props = TextFieldProps & {
  name: string
  error?: any
}
const NumberField: React.FC<Props> = ({ name, error, ...props }) => {
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
          type="number"
          error={Boolean(error)}
          helperText={error?.message}
          fullWidth
          {...props}
        />
      )}
    />
  )
}

export default NumberField