import { Link } from 'components'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <h1>Batty - An app to manage building projects</h1>
      <p><Link href="/projects">&gt;&gt; Projects</Link></p>
    </div>
  )
}

export default Home
