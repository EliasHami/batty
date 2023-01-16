"use client"
import { useFormContext, useFieldArray } from "react-hook-form"
import * as React from 'react'
import Provisions from "./Provisions"
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box } from "@mui/system"

export default function Parts() {
  const { control, register, formState, watch } = useFormContext()
  const { errors } = formState
  const { fields, append, remove } = useFieldArray({
    control,
    name: "parts"
  })

  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleExpand =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  const getName = (index:number) => watch(`parts.${index}.name`)

  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent:"space-between", height:"100%" }}>
      {fields.map((item, index) => (
        <Accordion expanded={expanded === `panel${index}`} onChange={handleExpand(`panel${index}`)} key={item.id} >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box sx={{ width :"100%", display: "flex", justifyContent : "space-between"}}>
              <Typography>{ getName(index) || `Part ${index}`}</Typography>
              <button type="button" className="btn btn-danger" onClick={() => remove(index)}>X</button>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <div className="form-group col">
              <label>Part name</label>
              <input type="text" {...register(`parts.${index}.name`)} className={'form-control' + (errors.parts?.[index] ? ' is-invalid' : '')} />
              <div className="invalid-feedback">{errors.parts?.[index]?.name}</div>
            </div>
            <Provisions />
          </AccordionDetails>
        </Accordion>
      ))}
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => {
          append({ name: "", provisions: [] })
          setExpanded(`panel${fields.length}`)
        }}
      >
        Add
      </button>
    </Box>
  )
}