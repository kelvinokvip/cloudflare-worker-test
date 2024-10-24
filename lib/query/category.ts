import { client } from '../apollo';
import { gql } from "@apollo/client";
export class GRAPH_CATE_API {
    getAllCategory = async () => {
        const query = gql`
            query GetAllCate {
                categories {
                    nodes {
                        name
                        uri
                        categoryId
                        slug
                        description
                    }
                }
        }
                
      `

        const response = await client.query({
            query: query,
        })
        const categories = response?.data?.categories?.nodes
        if (categories) {
            return categories
        }
    }
    getCateBySlug = async (slug: any) => {
        console.log(slug, '2222222222222222222222222222')
        const query = gql`
            query ($id: ID!) {
                category (id: $id, idType: URI){
                    categoryId
                    name
                    slug
                    description
                    seo {
                        fullHead
                        title
                    }
                    enqueuedStylesheets {
                        nodes {
                            after
                            src
                        }
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
        const category = response?.data?.category
        if (category) {
            return category
        }
    }
}