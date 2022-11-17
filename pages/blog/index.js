import { Banner } from "../../components/blog/banner";
import { BlogContentLayout } from "../../components/blog/blog-content-layout";
import { env } from "../../next.config";

export default function Blog({ blogs }) {
  return (
    <>
      <Banner
        title="Blog & Press Room"
        description="Discover global trends, inspiring customer stories, and how to make the most of your international money transfers."
        redirectLink="../register/index.html"
        bannerSource="/media/zyopoa5z/blog-press-room.jpg"
      />
      <BlogContentLayout title="Blog" redirectLink="/blogs" blogs={blogs} />
      <BlogContentLayout
        title="Press Room"
        redirectLink="/pressroom"
        blogs={blogs}
      />
    </>
  );
}
export async function getServerSideProps() {
  try {
    const res = await fetch(`${env.strapiAPIBaseUrl}blogs?populate=*`, {
      headers: {
        Authorization: `Bearer ${env.authToken}`,
      },
    });

    const blogs = await res.json();

    return {
      props: {
        blogs: blogs.data,
      },
    };
  } catch (error) {
    return {
      props: {
        error,
      },
    };
  }
}
