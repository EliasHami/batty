import { TextField, TextFieldProps } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

type Props = TextFieldProps & {
  name: string
  error?: any
  onChange?: any
}
const NumberField: React.FC<Props> = ({ name, onChange = () => { }, error, ...props }) => {
  const { control } = useFormContext()

  if (!name) return null

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          onChange={(event => {
            field.onChange(event)
            onChange(event)
          })}
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