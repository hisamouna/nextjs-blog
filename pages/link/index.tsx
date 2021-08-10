import Link from 'next/link'

function Home() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/example/cache">
          <a>Cache</a>
        </Link>
      </li>
    </ul>
  )
}

export default Home
