// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { gql, GraphQLClient } from 'graphql-request'
import type { NextApiRequest, NextApiResponse } from 'next'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string
const graphcmsToken = process.env.GRAPHCMS_TOKEN as string

export default async function comments(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphcmsToken}`
    }
  })

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: { name: $name, email: $email, comment: $comment, post: { connect:{ slug: $slug }}}) { id }
    }
  `

  try {
    const result = await graphQLClient.request(query, req.body)

    return res.status(200).send(result)
  } catch (error: any) {
    return res.status(500).send(error)
  }
}
