import { useFieldArray } from 'react-hook-form';
import { NumberField, SelectField, TextField } from 'src/components';

import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, IconButton, InputAdornment, MenuItem, TableCell, TableRow, Tooltip } from '@mui/material';

type Props = {
  control: any
  errors: any
  sectionIndex: number
}

export default function Lines({ control, errors, sectionIndex }: Props): React.ReactElement<Props> {
  const lineName = `sections.${sectionIndex}.lines`

  // const { control } = useFormContext()

  const { fields: lines, append: addLine, remove: deleteLine } = useFieldArray({
    control,
    name: lineName
  })

  return (
    <>
      {lines?.map((line, i) => (
        <TableRow
          key={line?.id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TextField name={`${lineName}.${i}.name`} error={errors?.[i]?.name} />
              <SelectField
                name={`${lineName}.${i}.service`}
                error={errors?.[i]?.service}
                options={<MenuItem value={5}>Fourniture</MenuItem>}// TODO: ajouter la liste des services
              />
            </Box>
          </TableCell>
          <TableCell>
            <NumberField name={`${lineName}.${i}.quantity`} error={errors?.[i]?.quantity} />
          </TableCell>
          <TableCell>
            <NumberField
              name={`${lineName}.${i}.price`}
              error={errors?.[i]?.price}
              endAdornment={<InputAdornment position="start">€</InputAdornment>}
            />
          </TableCell>
          <TableCell>
            <NumberField
              value={10}//{line?.quantity * line?.price} // TODO: fix this
              InputProps={{
                readOnly: true,
              }}
              endAdornment={<InputAdornment position="start">€</InputAdornment>}
            />
          </TableCell>
          <TableCell>
            <Tooltip title="Delete">
              <IconButton onClick={() => deleteLine(i)}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </TableCell>
        </TableRow>
      ))}
      <Button onClick={() => addLine({ name: "" })}>+ Add a line</Button>
    </>
  );
}