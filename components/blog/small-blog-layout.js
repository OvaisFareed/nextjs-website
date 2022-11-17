import Link from "next/link";
import Moment from "react-moment";
import { env } from "../../next.config";

export const SmallBlogLayout = ({ blog }) => {
  return (
    <>
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <div className="blog-small">
          <div className="card blog-card">
            <div className="c-update-img-parents">
              <div
                className="card-img-top blog-img"
                style={{
                  backgroundImage: `url(${env.strapiBaseUrl}${blog.media.data.attributes.url})`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <div className="blog-small">
          <h5 className="cmn-blog-title">
            <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
          </h5>
          <div className="cmn-blog-description">{blog.content}</div>

          <div className="blog-cat-post-right">
            <div className="blog-post-date ml-auto">
              <i className="far fa-clock"></i>
              <time dateTime={new Date(blog.createdAt).toDateString()}>
                <Moment format="dddd, LL">{blog.createdAt}</Moment>
              </time>
            </div>
            <div className="blog-category">{blog.category}</div>
          </div>
        </div>
      </div>
    </>
  );
};
