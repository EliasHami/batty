import { useFormContext, Controller } from 'react-hook-form'
import { TextField } from '@mui/material'

type Props = {
  name: string
  error?: any
  options: any
}

export default function SelectField(
  { name, error, options, ...props }: Props): React.ReactElement {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          id={name}
          select
          error={Boolean(error)}
          helperText={error?.message}
          fullWidth
          {...props}
        >
          {options}
        </TextField>
      )}
    />
  )
}