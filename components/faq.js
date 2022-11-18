export const FAQ = () => {
  const faqs = [
    {
      question: "Who can use the MTFX payment service?",
      answer: `Individuals and businesses who need to send money in
      foreign currency internationally can use MTFX’s services.
      The beneficiary of the transfer must have a bank account
      for the funds to be paid into. Personal clients usually
      use our services to transfer money between their own
      accounts in two different countries. Business clients
      usually use our services to transfer funds to suppliers,
      fund international operations, or repatriate overseas
      earnings.`,
    },
    {
      question: "Why should I use MTFX and not my own bank?",
      answer: `MTFX offers currency exchange rates that are 2-5% better
      than those offered by the banks. Personal clients usually
      save hundreds of dollars per transfer and for larger
      transfers, the savings can run into the thousands. We also
      offer excellent customer service, dedicated currency
      specialists, and a 24/7 online platform with best-in-className
      technology that allows you to complete transfers from any
      device virtually anywhere in the world. Business customers
      save with better currency exchange rates and proven
      solutions geared towards managing and mitigating foreign
      exchange risk. Our solutions include forward contracts,
      market orders, rate alert services, and much more - all
      backed by great technology and great people.`,
    },
    {
      question: "How do customers send funds to MTFX?",
      answer: `Funds can be transferred via wire transfer, Electronic
      Funds Transfer (EFT), or ACH payment services. MTFX
      maintains bank accounts in all major currencies with
      highly-rated banks. Our banking infrastructure ensures
      that you can transfer funds to us quickly and securely.`,
    },
    {
      question: "How long does it take MTFX to transfer funds?",
      answer: `Our global network of banking partners allows us to get
      funds to virtually anywhere in the world quickly and
      efficiently. Most wire transfers from MTFX will be
      received by your beneficiary within 24-48 hours. MTFX also
      offers same-day transfers that are almost instantaneous,
      as well as low-cost in-country payment services for your
      less urgent transfers. For further information please
      speak to one of our currency specialists.`,
    },
  ];

  return (
    <section className="faq cmn-section-padding">
      <div className="container">
        <h4 className="cmn-section-title">FAQs</h4>
        <div className="row">
          <div className="offset-lg-1 col-lg-10 col-md-12 col-12">
            <div className="faq-accordian">
              <div id="accordion">
                {faqs.map((faq, i) => {
                  return (
                    <div key={i} className="card">
                      <div
                        id={`header${i}`}
                        className="card-header collapsed"
                        data-toggle="collapse"
                        data-target={`#accordion${i}`}
                        aria-expanded="false"
                        aria-controls={`accordion${i}`}
                      >
                        <h5 className="">
                          <span className="accordian-arrow">
                            <img
                              src="../../media/3jxbfs2s/faq.svg"
                              alt="Down Arrow"
                            />
                          </span>{" "}
                          {faq.question}
                        </h5>
                      </div>
                      <div
                        id={`accordion${i}`}
                        aria-labelledby={`header${i}`}
                        className="collapse"
                        data-parent="#accordion"
                      >
                        <div className="card-body">{faq.answer}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="text-center mt-30">
              <a
                href="../../faq/index.html"
                className="btn cmn-white-btn mr-10"
              >
                VIEW ALL FAQS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
