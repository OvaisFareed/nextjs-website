import { Post } from "../../components/blog/post";
import { SignupNewsletter } from "../../components/blog/signup-newsletter";
import { FAQ } from "../../components/faq";
import { env } from "../../next.config";

export default function BlogDetail({ blog }) {
  if (blog) {
    return (
      <>
        <Post post={blog} />
        <SignupNewsletter />
        <FAQ />
      </>
    );
  } else {
    return <>NAN</>;
  }
}

export async function getServerSideProps(context) {
  try {
    const blogs = await fetch(
      `${env.strapiAPIBaseUrl}blogs?filters[slug][$eqi]=${context.params.slug}&populate=*`,
      {
        headers: {
          Authorization: `Bearer ${env.authToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => data.data);

    return {
      props: {
        blog: blogs[0].attributes,
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
