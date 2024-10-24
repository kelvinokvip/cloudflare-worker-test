import DefaultLayout from "@/layouts/default"
import { GRAPH_CATE_API } from "@/lib/query/category"
import { GRAPH_POST_API } from "@/lib/query/post"
import { GRAPH_STYLE_API } from "@/lib/query/style"
import Head from "next/head"


export default function SlugPage({ post, seoContent, isCate }: { post: any, seoContent: any, isCate: boolean }) {

    return (
        <DefaultLayout styleSheet={post?.enqueuedStylesheets?.nodes} seoContent={seoContent}>
            <main>
                <div dangerouslySetInnerHTML={{ __html: !isCate ? post?.content : post?.description }}>
                </div>
            </main>
        </DefaultLayout>
    )
}


export async function getStaticProps({ params }: { params: any }) {
    const api = new GRAPH_POST_API()
    const response = await api.getPostBySlug(params.slug)
    let post = response
    console.log(post, '123123')
    let isCate = false
    if (!post) {
        const cate_api = new GRAPH_CATE_API()
        const cate_response = await cate_api.getCateBySlug(params.slug)
        if (cate_response) {
            post = cate_response
            isCate = true
        }
    }
    console.log(post)
    return {
        props: {
            post,
            seoContent: post?.seo,
            isCate
        }
    }
}

export async function getStaticPaths() {
    const paths: any = []
    return {
        paths,
        fallback: true
    }
}