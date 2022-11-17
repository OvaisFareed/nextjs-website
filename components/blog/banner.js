import { Button } from "../button";

export const Banner = ({ bannerSource, title, description, redirectLink }) => {
  return (
    <section
      className="cmn-banner position-relative d-flex align-items-center"
      style={{
        backgroundImage: `url(${bannerSource})`,
      }}
    >
      <div className="cmn-gradiant-overlay-dark"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12 col-sm-12 col-12">
            <div className="cmn-banner-caption">
              <h1 className="caption-lg-text">{title}</h1>
              <h2 className="caption-sm-text">{description}</h2>
              <div className="register-btn">
                <a href={redirectLink} target="_blank">
                  <Button className="btn cmn-register-btn" btnText="Register" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
