import { Card } from "../card";
import { InputFormField } from "../input-form-field";
import { TermsAndCondition } from "../terms-and-condition";

export const SignupNewsletter = () => {
  return (
    <div id="newslettertools-outer" className="cmn-section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <h4 className="cmn-section-title">
              Sign up to receive the latest market news from our experts.
            </h4>
          </div>
        </div>
        <div className="currency-cn-frm">
          <form
            action="https://www.mtfxgroup.com/umbraco/Surface/Tools/SubmitNewsletterForm?Length=5"
            className="cmn-forms form-xl"
            data-ajax="true"
            data-ajax-failure="newsletterformtools.showCurrent"
            data-ajax-method="POST"
            data-ajax-mode="replace"
            data-ajax-success="OnSuccess()"
            data-ajax-update="#newsletterformtools-result"
            id="newsletterformtools"
            method="post"
          >
            {" "}
            <div className="row">
              <div className="offset-xl-3 offset-lg-3 offset-md-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <InputFormField
                  label="Name"
                  fieldName="FullName"
                  type="text"
                  placeholder="Enter Name"
                  value=""
                  validationMessage="Please enter your Full Name"
                  isRequired="true"
                />
              </div>
              <div className="offset-xl-3 offset-lg-3 offset-md-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <InputFormField
                  label="Email"
                  fieldName="NewsletterEmail"
                  type="email"
                  placeholder="Enter Email"
                  value=""
                  validationMessage="Please enter a valid email address"
                  isRequired="true"
                  regex="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                />
              </div>
            </div>
            <div className="row mt-15 mb-15">
              {[1, 2, 3].map((num, i) => {
                return (
                  <div
                    key={i}
                    className="col-lg-4 col-md-6 col-sm-12 col-12 d-flex align-items-stretch"
                  >
                    <Card />
                  </div>
                );
              })}
            </div>
            <TermsAndCondition />
          </form>{" "}
        </div>
      </div>
    </div>
  );
};
