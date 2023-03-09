import { TextField, TextFieldProps } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { Controller, useFormContext } from 'react-hook-form'

type Props = TextFieldProps & {
  name: string
  error?: any
  variant?: any
}

const DateField: React.FC<Props> = ({ name, error, ...props }) => {
  const { control } = useFormContext()

  if (!name) return null

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <DatePicker
          {...field}
          onChange={value => field.onChange(dayjs(value).format('YYYY-MM-DD'))}
          renderInput={(params) => (
            <TextField
              {...params}
              id={name}
              error={Boolean(error)}
              helperText={error?.message}
              label="Issue Date"
              fullWidth
              {...props}
            />
          )}
        />
      )}
    />
  )
}

export default DateField