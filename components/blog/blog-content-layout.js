import Link from "next/link";
import { Button } from "../button";
import { MainBlogLayout } from "./main-blog-layout";
import { SmallBlogLayout } from "./small-blog-layout";

export const BlogContentLayout = ({ title, redirectLink, blogs, error }) => {
  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <h2>Error in getting {title}(s)</h2>
      </div>
    );
  } else {
    return (
      <section className="cmn-section-padding">
        <div className="container">
          <div className="row blog-row">
            <div className="col-lg-12 col-md-12">
              <div className="blog-title">
                <Link
                  className="d-flex justify-content-between align-items-center cursor-pointer"
                  href={blogs.length ? redirectLink : ""}
                  scroll={!!blogs.length}
                >
                  <span className="blog-title-text">{title}</span>
                  {blogs.length ? (
                    <Button
                      className="cmn-orange-btn text-center"
                      btnText="View More"
                    />
                  ) : null}
                </Link>
              </div>
            </div>
            {!blogs.length ? (
              <div className="d-flex justify-content-center align-items-center">
                <h2>No Data to Show</h2>
              </div>
            ) : (
              <>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  {blogs
                    .filter((blog) => blog.attributes.isMain)
                    .map((blog) => {
                      return (
                        <MainBlogLayout
                          key={blog.id}
                          blog={blog.attributes}
                        ></MainBlogLayout>
                      );
                    })}
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="row">
                    {" "}
                    {blogs
                      .filter((blog) => !blog.attributes.isMain)
                      .slice(0, 2)
                      .map((blog) => {
                        return (
                          <SmallBlogLayout
                            key={blog.id}
                            blog={blog.attributes}
                          ></SmallBlogLayout>
                        );
                      })}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    );
  }
};
