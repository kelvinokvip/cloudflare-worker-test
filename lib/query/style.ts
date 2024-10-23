import { client } from '../apollo';
import { gql } from "@apollo/client";
export class GRAPH_STYLE_API {
    getStyle = async () => {
        const query = gql`
            query GetGlobalStyle {
                registeredStylesheets {
                    nodes {
                        after
                        src
                    }
                }
                registeredScripts{
                    nodes {
                        after
                        src
                    }
                }
            }
      `

        const response = await client.query({
            query: query,
        })
        const style = response?.data?.registeredStylesheets.nodes
        const script = response?.data?.registeredScripts.nodes

        return { style, script }
    }
}