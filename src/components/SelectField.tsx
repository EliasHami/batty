import { TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

type Props = {
  name: string
  error?: any
  options: any
}

const SelectField: React.FC<Props> = ({ name, error, options, ...props }) => {
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

export default SelectField