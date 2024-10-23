import DefaultLayout from "@/layouts/default"
import { GRAPH_API } from "@/lib/query/post"
import { GRAPH_STYLE_API } from "@/lib/query/style"
import Head from "next/head"


export default function SlugPage({ post }: { post: any }) {

    return (
        <DefaultLayout styleSheet={post?.enqueuedStylesheets?.nodes}>
            <main>
                <div className="siteHeader">
                    {/* <h1 className="title">
                        {post.title}
                    </h1> */}
                    <p>✍️  &nbsp;&nbsp;{`${post?.author?.node.firstName} ${post?.author.node?.lastName}`} | 🗓️ &nbsp;&nbsp;{new Date(post.date).toLocaleDateString()}</p>
                </div>
                <article dangerouslySetInnerHTML={{ __html: post.content }}>
                </article>
            </main>
        </DefaultLayout>
    )
}


export async function getStaticProps({ params }: { params: any }) {
    const api = new GRAPH_API()
    const response = await api.getPostBySlug(params.slug)
    const post = response

    return {
        props: {
            post,
        }
    }
}

export async function getStaticPaths() {
    const paths: any = []
    return {
        paths,
        fallback: 'blocking'
    }
}