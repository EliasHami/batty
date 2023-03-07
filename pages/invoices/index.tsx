import { withSSRContext, Amplify } from 'aws-amplify'
import { IconButton, Tooltip, Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

import { Invoice } from 'src/types'
import { Link } from 'src/components'
import Delete from 'src/components/invoices/Delete'
import awsExports from "src/aws-exports"
import { listInvoices } from 'src/graphql/queries'

Amplify.configure({ ...awsExports, ssr: true })

export default function Invoices({ invoices }: { invoices: Invoice[] }) {

  return (

    <Box>
      <Typography>Invoices</Typography>
      <Button>
        <Link href="/invoices/add">Add Invoice</Link>
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="invoices table">
          <TableHead>
            <TableRow>
              <TableCell>Number</TableCell>
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
                <TableCell align="right">{invoice.status}</TableCell>
                <TableCell align="right">{invoice.customerID}</TableCell>
                <TableCell align="right">{invoice.constructionID}</TableCell>
                <TableCell align="right">{invoice.issueDate}</TableCell>
                <TableCell align="right">{invoice.expirationDate}</TableCell>
                <TableCell align="right">
                  <Tooltip title="Edit">
                    <IconButton>
                      <Link href={`/invoices/${invoice.id}`}><EditIcon /></Link>
                    </IconButton>
                  </Tooltip>
                  <Delete id={invoice.id} />
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
  let invoices: Invoice[] = []
  try {
    const response = await SSR.API.graphql({ query: listInvoices })
    invoices = response.data.listInvoices.items
  } catch (error) {
    console.error('error', error)
  }
  return {
    props: { invoices }
  }
}
