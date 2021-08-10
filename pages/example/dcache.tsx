import { GetServerSideProps } from 'next'

export default function Home({ time }) {
  return (
    <main>
      <h1>SSR Caching with Next.js</h1>
      <time dateTime={time}>{time}</time>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  //console.log(`RequestHeader: ${JSON.stringify(ctx.req.headers)}`)

  const response = await fetch('http://localhost:3000/api/hello');
  const responseJson = await response.json();
  console.log(`Jsoner ${responseJson.name}`)

  ctx.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  return {
    props: {
      time: new Date().toISOString()
    }
  }
}
