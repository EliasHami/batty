
type Construction = {
  id: number,
  name: string,
  address: string,
  type: string,
  isDeleting: boolean,
}

type Constructions = Array<Construction> | null

export type {Construction, Constructions}