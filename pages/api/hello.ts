import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let name = "Json"
  if (req.method === 'POST') {
    name = "Poster"
  }
  console.log(`Namer ${name}`)
  res.status(200).json({ name: name})
}
