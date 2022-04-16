import { Link } from 'components'

function Home() {
  return (
    <div>
      <h1>Batty - An app to manage building projects</h1>
      <p><Link href="/projects">&gt;&gt; Projects</Link></p>
    </div>
  )
}

export default Home
