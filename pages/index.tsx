import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { getPostBySlug } from "@/lib/query/post";
import { GRAPH_STYLE_API } from "@/lib/query/style";

export default function IndexPage({ post, seoContent }: { post: any, seoContent: any }) {
  return (
    <DefaultLayout styleSheet={post?.enqueuedStylesheets?.nodes} seoContent={seoContent}>

      {/* <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>Make&nbsp;</span>
          <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
          <br />
          <span className={title()}>
            websites regardless of your design experience.
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Documentation
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing{" "}
              <Code color="primary">pages/index.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section> */}

      <article dangerouslySetInnerHTML={{ __html: post.content?.replaceAll(process.env.NEXT_PUBLIC_WORDPRESS_API_URL, process.env.NEXT_PUBLIC_URL) }}>
      </article>
    </DefaultLayout>
  );
}



export async function getStaticProps() {
  const response = await getPostBySlug("/")
  const post = response
  return {
    props: {
      post,
      seoContent: post?.seo
    }
  }
}

