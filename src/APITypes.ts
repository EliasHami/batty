import { DeepOmit } from './graphql/DeepOmit'
import {
  Construction as C,
  Part,
  Provision
} from './API'

export type Construction = DeepOmit<
  Exclude<C, null>,
  '__typename'
>
