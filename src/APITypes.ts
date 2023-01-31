import { DeepOmit } from './DeepOmit'
import {
  Construction as C,
  Part,
  Provision
} from './API'

export type Construction = DeepOmit<
  Exclude<C, null>,
  '__typename'
>

export type Constructions = Array<Construction> | null