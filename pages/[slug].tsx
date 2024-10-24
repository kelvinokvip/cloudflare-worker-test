//@ts-nocheck
import { CustomCard } from "@/components/Card"
import DefaultLayout from "@/layouts/default"
import { getAllCategory, getCateBySlug } from "@/lib/query/category"
import { getAllPost, getPostByCate, getPostBySlug } from "@/lib/query/post"
import { GRAPH_STYLE_API } from "@/lib/query/style"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"


export default function SlugPage({ post, seoContent, isCate, catePost }: { post: any, seoContent: any, isCate: boolean, catePost?: any }) {
    const router = useRouter()

    return (
        <DefaultLayout styleSheet={post?.enqueuedStylesheets?.nodes} seoContent={seoContent}>
            <main>
                <h1 className="text-black text-7xl text-center pb-20">{post?.title || post?.name}</h1>
                <div dangerouslySetInnerHTML={{ __html: !isCate ? post?.content : post?.description }}>
                </div>

                {isCate && <div className="grid grid-cols-3 gap-4 pt-20">
                    {catePost?.map((item): any => {
                        return <Link href={item?.slug} className="hover:cursor-pointer" key={item?.slug}><CustomCard title={item?.title} image={item?.featuredImage?.node?.sourceUrl} onClick={() => router.push(item?.slug)} /></Link>
                    })}
                </div>}
            </main>
        </DefaultLayout>
    )
}


export async function getStaticProps({ params }: { params: any }) {
    const response = await getPostBySlug(params.slug)
    let post = response
    let isCate = false
    let catePost: any = []
    if (!post) {
        const cate_response = await getCateBySlug(params.slug)
        if (cate_response) {
            post = cate_response
            catePost = await getPostByCate(cate_response?.categoryId)
            isCate = true
        }
    }
    return {
        props: {
            post,
            seoContent: post?.seo,
            isCate,
            catePost
        }
    }
}

export async function getStaticPaths() {
    const paths: any = []
    const dataCate = await getAllCategory()
    if (dataCate) {
        paths.push(...dataCate?.map(item => {
            return {
                params: {
                    slug: item?.slug
                }
            }
        }))
    }
    const dataPostWithCate = await Promise.all(dataCate?.map(async item => {
        const dataPost = await getPostByCate(item?.categoryId)
        if(dataPost){
            paths.push(...dataPost?.map(item =>{
                return {
                    params:  {
                        slug: item?.slug
                    }
                }
            }))
        }
    }))
    return {
        paths,
        fallback: true
    }
}