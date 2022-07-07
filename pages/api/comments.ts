// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { gql, GraphQLClient } from 'graphql-request'
import type { NextApiRequest, NextApiResponse } from 'next'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string

export default async function comments(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const graphQLlient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`
    }
  })

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: { name: $name, email: $email, comment: $comment, post: { connect:{ slug: $slug }}}) { id }
    }
  `

  const result = await graphQLlient.request(query, req.body)

  return res.status(200).send(result)
}
