import DeleteIcon from '@mui/icons-material/Delete'
import { Box, Button, IconButton, TableCell, TableRow, Tooltip } from "@mui/material"
import { useFieldArray, useFormContext } from "react-hook-form"
import { TextField } from ".."

type Props = {
  lineName: string
  errors: any
}

export default function Elements({ lineName, errors }: Props) {
  const elementName = `${lineName}.elements`

  const { control } = useFormContext()

  const { fields: elements, append: addElement, remove: deleteElement } = useFieldArray({
    control,
    name: elementName
  })

  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell colSpan={5} >
        <Box sx={{ display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>
          {elements?.map((element, j) => (
            <Box key={element?.id} sx={{ display: 'flex', width: "100%" }}>
              <TextField
                name={`${elementName}.${j}.name`}
                error={errors?.elements?.[j]}
              />
              <Tooltip title="Delete">
                <IconButton onClick={() => deleteElement(j)}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Box>
          ))
          }
          <Button onClick={() => addElement({ name: "" })}>+ Add an element</Button>
        </Box>
      </TableCell>
    </TableRow>
  )
}