import { client } from '../apollo';
import { gql } from "@apollo/client";
export class GRAPH_POST_API {
    getPostBySlug = async (slug: any) => {
        const query = gql`
            query GetPostByURI($id: ID!) {
                post(id: $id, idType: URI) {
                    id
                    title
                    content
                    date
                    author {
                        node {
                                firstName
                                lastName
                            }
                        }
                    enqueuedStylesheets {
                        nodes {
                            after
                            src
                        }
                    }
                    seo {
                        fullHead
                        title
                    }
                }
            }
      `

        const response = await client.query({
            query: query,
            variables: {
                id: slug
            }
        })
        const post = response?.data?.post
        if (post) {
            return post
        }
    }
}