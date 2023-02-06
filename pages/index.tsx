import { Link } from 'src/components'
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <h1>Batty - An app to manage construction projects</h1>
      <p><Link href="/constructions">&gt;&gt; Constructions</Link></p>
    </div>
  )
}

export default Home