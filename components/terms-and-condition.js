export const TermsAndCondition = ({ blog }) => {
  const submit = () => {
    // Todo
  };

  return (
    <>
      <div className="agreement-chk pt-15">
        <div>
          <div className="custom-control custom-checkbox fancy-chk square-chk">
            <input
              ng-model="agree"
              type="checkbox"
              className="custom-control-input"
              id="aggree"
            />
            <label className="custom-control-label" for="aggree">
              Yes, I agree to give MTFX authorization to contact me about the
              information on this page and other products, services, and
              promotions.
            </label>
          </div>
        </div>
      </div>
      <div className="mt-15 text-center">
        <div id="newsletterformtools-result"></div>
        <p className="text-left note-discription">
          By entering your email address you agree to the{" "}
          <a className="fc-orange" href="../../terms-of-use/index.html">
            MTFX Terms Of Use
          </a>{" "}
          and{" "}
          <a className="fc-orange" href="../../privacy-policy/index.html">
            MTFX Privacy Policy
          </a>{" "}
          and agree and agree to receive sales and marketing communications.
          Unsubscribe at anytime.
        </p>
        <input
          id="NewsLtrCountryName"
          name="CountryName"
          type="hidden"
          value=""
        />
        <input id="NewsLtrRegion" name="Region" type="hidden" value="" />
        <input
          className="NewsletterFormRecaptchaKey"
          id="RecaptchaKey"
          name="RecaptchaKey"
          type="hidden"
          value=""
        />
        <button
          id="btnSubscribe"
          disabled="disabled"
          type="button"
          onClick={submit}
          className="btn cmn-orange-btn"
        >
          Subscribe
        </button>
      </div>
    </>
  );
};
