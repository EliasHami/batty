import { useFormContext, Controller } from 'react-hook-form'
import { TextField, TextFieldProps } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'

type Props = TextFieldProps & {
  name: string
  error?: any
  variant?: any
}

export default function DateField(
  { name, error, ...props }: Props): React.ReactElement {
  const { control } = useFormContext()

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