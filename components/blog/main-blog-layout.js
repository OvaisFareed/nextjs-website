import { env } from "../../next.config";

export const MainBlogLayout = ({ blog }) => {
  return (
    <div className="blog-main">
      <div className="card blog-card">
        <div className="c-update-img-parents">
          <div
            className="card-img-top blog-img"
            style={{
              backgroundImage: `url(${env.strapiBaseUrl}${blog.media.data.attributes.url})`,
            }}
          ></div>
        </div>
        <div className="card-body blog-card-body">
          <div className="blog-cat-post d-flex">
            <div className="blog-category">{blog.category}</div>

            <div className="blog-post-date ml-auto">
              <i className="far fa-clock"></i>
              <time dateTime={new Date(blog.createdAt).toDateString()}>
                {new Date(blog.createdAt).toDateString()}
              </time>
            </div>
          </div>
          <h5 className="cmn-blog-title">
            <a href="../post/is-billing-foreign-customers-in-their-local-currency-better/index.html">
              {blog.title}
            </a>
          </h5>
          <div className="cmn-blog-description">{blog.content}</div>
        </div>
      </div>
    </div>
  );
};
