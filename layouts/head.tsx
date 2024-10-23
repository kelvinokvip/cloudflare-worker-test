import React from "react";
import NextHead from "next/head";

import { siteConfig } from "@/config/site";
import { GRAPH_STYLE_API } from "@/lib/query/style";

export const Head = ({ style, }: { style: any, }) => {
  return (
    <NextHead>
      <title>{siteConfig.name}</title>
      <meta key="title" content={siteConfig.name} property="og:title" />
      <meta content={siteConfig.description} property="og:description" />
      <meta content={siteConfig.description} name="description" />
      <meta
        key="viewport"
        content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        name="viewport"
      />
      <link href="/favicon.ico" rel="icon" />
      {style?.length > 0 && style?.map((item: any, index: number) => {
        if (item?.src) {
          let linkStyle = item?.src
          if (!linkStyle?.includes("http")) {
            linkStyle = `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}${linkStyle}`
          }
          return <link rel="stylesheet" href={linkStyle} key={index} />
        } else {
          return <style key={index}>{item?.after}</style>
        }
      })}

    </NextHead>
  );
};



export async function getStaticProps({ }) {
  // const response = await getPostByUri(params.uri)
  // const post = response?.data?.post

  //  the params argument for this function corresponds to the dynamic URL segments
  //  we included in our page-based route. So, in this case, the `params` object will have
  //  a property named `uri` that contains that route segment when a user hits the page
  const api = new GRAPH_STYLE_API()
  const response = await api.getStyle()
  const data = response
  console.log(data, '12312312')

  return {
    props: {
      data
    }
  }
}
