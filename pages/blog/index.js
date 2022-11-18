import useSWR, { SWRConfig } from "swr";
import { Banner } from "../../components/blog/banner";
import { BlogContentLayout } from "../../components/blog/blog-content-layout";
import { env } from "../../next.config";

const API = `${env.strapiAPIBaseUrl}blogs?populate=*`;
const fetcher = (apiUrl) =>
  fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${env.authToken}`,
    },
  }).then((res) => res.json());

export async function getServerSideProps() {
  const repoInfo = await fetcher(API);
  return {
    props: {
      fallback: {
        [API]: repoInfo,
      },
    },
  };
}

function BlogRenderer() {
  const { data, error } = useSWR(API);
  if (error) {
    return <h4>Error in getting blogs</h4>;
  }

  if (!data) {
    return <h4>Error in getting blogs</h4>;
  }

  const blogs = data.data;

  return (
    <>
      <Banner
        title="Blog & Press Room"
        description="Discover global trends, inspiring customer stories, and how to make the most of your international money transfers."
        redirectLink="../register/index.html"
        bannerSource="/media/zyopoa5z/blog-press-room.jpg"
      />
      <BlogContentLayout
        title="Blog"
        redirectLink="/blogs"
        blogs={blogs.filter((blog) => blog.attributes.category == "Blog")}
      />
      <BlogContentLayout
        title="Press Room"
        redirectLink="/pressroom"
        blogs={blogs.filter((blog) => blog.attributes.category == "Press Room")}
      />
    </>
  );
}

export default function Blog({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <BlogRenderer />
    </SWRConfig>
  );
}
