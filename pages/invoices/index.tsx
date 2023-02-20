import { withSSRContext } from 'aws-amplify'
import { Amplify } from '@aws-amplify/core'
import { serializeModel } from "@aws-amplify/datastore/ssr"

import { Invoice } from 'src/models'
import { Link } from 'src/components'
// import Delete from 'src/components/constructions/Delete'

import awsExports from "src/aws-exports"

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Box, Button, Typography } from '@mui/material'


Amplify.configure({ ...awsExports, ssr: true })

export default function Invoices({ invoices }: { invoices: Invoice[] }) {

  return (

    <Box>
      <Typography>Invoices</Typography>
      <Button>
        <Link href="/invoices/add">Add Construction</Link>
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="invoices table">
          <TableHead>
            <TableRow>
              <TableCell>Number</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell />
              <TableCell align="right">Client</TableCell>
              <TableCell align="right">Construction</TableCell>
              <TableCell align="right">Issue date</TableCell>
              <TableCell align="right">Expiration date</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow
                key={invoice.number}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {invoice.number}
                </TableCell>
                <TableCell align="right">{invoice.amount}</TableCell>
                <TableCell align="right">{invoice.status}</TableCell>
                <TableCell align="right">{invoice.customerID}</TableCell>
                <TableCell align="right">{invoice.constructionID}</TableCell>
                <TableCell align="right">{invoice.issueDate}</TableCell>
                <TableCell align="right">{invoice.expirationDate}</TableCell>
                <TableCell align="right">
                  <Button>
                    <Link href={`/invoices/${invoice.id}`}>Edit</Link>
                  </Button>
                  {/* <Delete id={invoice.id} /> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}


export async function getServerSideProps({ req }: { req: Object }) {
  const SSR = withSSRContext({ req })
  let invoices
  try {
    const model = await SSR.DataStore.query(Invoice)
    invoices = serializeModel(model) as any // can't do anything with JSON type
  } catch (error) {
    console.log('error', error)
  }
  return {
    props: { invoices }
  }
}
