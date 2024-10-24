import { client } from '../apollo';
import { gql } from "@apollo/client";

export const getPostBySlug = async (slug: any) => {
    try {
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

        }).catch(error => { console.log(error, "11111111") })
        const post = response?.data?.post
        if (post) {
            return post
        }
    } catch (error) {
        console.log(error, 22222222222222222)
        return false
    }

}
export const getPostByCate = async (cateId: string) => {
    const query = gql`
            query GetPostByCate($id: Int!) {
                posts(where: {categoryId: $id}) {
                    nodes{
                        id
                        title
                        date
                        slug
                        featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                    }
                    
                }
            }
      `

    const response = await client.query({
        query: query,
        variables: {
            id: cateId
        }
    })
    const post = response?.data?.posts?.nodes
    if (post) {
        return post
    }
}
export const getAllPost = async () => {
    const query = gql`
            query MyQuery2 {
                posts(first: 1000) {
                    nodes {
                    uri
                    }
                }
            }
      `

    const response = await client.query({
        query: query,
        // variables: {
        //     LIMIT: 1000
        // }
    })
    const post = response?.data?.posts
    console.log(post?.nodes)
    if (post) {
        return post
    }
}


export const getPostWithQuery = async (after: string, before: string, first: number, last: number) => {
    const query = gql`
            query GET_PAGINATED_POSTS(
                    $first: Int
                    $last: Int
                    $after: String
                    $before: String
                ) {
                    posts(first: $first, last: $last, after: $after, before: $before) {
                        pageInfo {
                            hasNextPage
                            hasPreviousPage
                            startCursor
                            endCursor
                        }
                        edges {
                            cursor
                            node {
                                id
                                postId
                                title
                                slug
                                uri
                            }
                        }
                    }
                }
      `

    const response = await client.query({
        query: query,
        // variables: {
        //     LIMIT: 1000
        // }
    })
    const post = response?.data?.posts
    console.log(post?.nodes)
    if (post) {
        return post
    }
}