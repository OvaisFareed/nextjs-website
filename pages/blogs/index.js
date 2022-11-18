import useSWR, { SWRConfig } from "swr";
import { env } from "../../next.config";
import { SignupNewsletter } from "../../components/blog/signup-newsletter";
import { FAQ } from "../../components/faq";
import { SmallBlogLayout } from "../../components/blog/small-blog-layout";

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

function BlogsRenderer() {
  const { data, error } = useSWR(API);
  if (error) {
    return <h4>Error in getting blogs</h4>;
  }

  if (!data) {
    return <h4>Error in getting blogs</h4>;
  }

  const blogs = data.data;

  return (
    <section className="cmn-section-padding">
      <div className="container">
        <div className="row blog-row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            {blogs.map((blog) => {
              return (
                <div className="row">
                  <SmallBlogLayout
                    key={blog.id}
                    blog={blog.attributes}
                  ></SmallBlogLayout>
                </div>
              );
            })}
          </div>
        </div>
        <SignupNewsletter />
        <FAQ />
      </div>
    </section>
  );
}

export default function Blogs({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <BlogsRenderer />
    </SWRConfig>
  );
}
