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
            <a href="../post/what-is-the-best-way-to-pay-an-overseas-bill/index.html">
              {blog.title}
            </a>
          </h5>
          <div className="cmn-blog-description">{blog.content}</div>

          <div className="blog-cat-post-right">
            <div className="blog-post-date ml-auto">
              <i className="far fa-clock"></i>
              <time dateTime={new Date(blog.createdAt).toDateString()}>
                {new Date(blog.createdAt).toDateString()}
              </time>
            </div>
            <div className="blog-category">{blog.category}</div>
          </div>
        </div>
      </div>
    </>
  );
};
