"use client"
import * as React from 'react'
import { Box } from "@mui/system"

export default function Parts() {
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleExpand =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }


  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>

    </Box>
  )
}