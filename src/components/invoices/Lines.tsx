import { Box, Button, InputAdornment, MenuItem, TableCell, TableRow } from '@mui/material';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { NumberField, SelectField, TextField } from 'src/components';
import { Units } from 'src/types/API';
import DeleteLine from './DeleteLine';
import Elements from './Elements';
import LineMenu from './LineMenu';

type Props = {
  errors: any
  sectionIndex: number
}

export default function Lines({ errors, sectionIndex }: Props): React.ReactElement<Props> {
  const lineName = `sections.${sectionIndex}.lines`

  const { control, getValues, setValue } = useFormContext()

  const { fields: lines, append: addLine, remove: deleteLine } = useFieldArray({
    control,
    name: lineName
  })

  const onQuantityChange = (event, index) => {
    const quantity = event.target.value
    const price = getValues(`${lineName}.${index}.price`)
    const total = parseInt(quantity) * parseInt(price)
    setValue(`${lineName}.${index}.total`, total)
  }

  const onPriceChange = (event, index) => {
    const price = event.target.value
    const quantity = getValues(`${lineName}.${index}.quantity`)
    const total = parseInt(quantity) * parseInt(price)
    setValue(`${lineName}.${index}.total`, total)
  }

  console.log({ toto: getValues(`${lineName}.0`), errors })

  return (
    <>
      {lines?.map((line, i) => (
        <>
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
                  options={<MenuItem value={"Fourniture"}>Fourniture</MenuItem>}// TODO: ajouter la liste des services
                />
              </Box>
            </TableCell>
            <TableCell>
              <NumberField
                name={`${lineName}.${i}.quantity`}
                error={errors?.[i]?.quantity}
                onChange={(event) => onQuantityChange(event, i)}
              />
            </TableCell>
            <TableCell>
              <SelectField
                name={`${lineName}.${i}.unit`}
                error={errors?.[i]?.price}
                options={Object.keys(Units).map(unit => (
                  <MenuItem key={unit} value={unit}>{Units[unit]}</MenuItem>
                ))}
              />
            </TableCell>
            <TableCell>
              <NumberField
                name={`${lineName}.${i}.price`}
                error={errors?.[i]?.price}
                onChange={(event) => onPriceChange(event, i)}
                endAdornment={<InputAdornment position="start">€</InputAdornment>}
              />
            </TableCell>
            <TableCell>
              <NumberField
                name={`${lineName}.${i}.total`}
                InputProps={{
                  readOnly: true,
                }}
                endAdornment={<InputAdornment position="start">€</InputAdornment>}
              />
            </TableCell>
            <TableCell>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <DeleteLine onDelete={() => deleteLine(i)} />
                <LineMenu onDelete={() => deleteLine(i)} onDuplicate={() => addLine({ ...getValues(`${lineName}.${i}`) })} />
              </Box>
            </TableCell>
          </TableRow>
          <Elements lineName={`${lineName}.${i}`} errors={errors?.[i]?.elements} />
        </>
      ))}
      <Button onClick={() => addLine({ name: "" })}>+ Add a line</Button>
    </>
  );
}