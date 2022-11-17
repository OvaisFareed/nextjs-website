import { env } from "../../next.config";

export const Post = ({ post }) => {
  return (
    <section className="cmn-section-padding">
      <div className="container bg-white">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="blog-inner-page-main">
              <h1 className="cmn-section-title" id="blogheader">
                {post.title}
              </h1>

              <div>
                <p>
                  <img
                    src={`${env.strapiBaseUrl}${post.media.data.attributes.url}`}
                    alt={post.title}
                    width="887"
                    height="445"
                  />
                </p>
                <p>{post.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
