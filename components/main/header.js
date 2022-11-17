import Link from "next/link";

export const Header = () => {
  const openUrlInNewWindow = (url) => {
    // Todo: open url in a new window
  };

  return (
    <header className="header">
      <div className="my-header">
        <div className="container-md">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-2 col-lg-2 col-md-2 col-sm-12 col-12">
              <div className="navigation-responsive-hamburger">
                <div className="nav-top d-block d-md-none">
                  <span className="hamburger toggle-menu" id="ham">
                    <i className="fas fa-bars fs-20"></i>
                  </span>
                </div>
                <div className="logo">
                  <a href="index.html">
                    <img
                      src="media/erqezory/mtfx-25-years_300x57.svg"
                      alt="MTFX Foreign Exchange"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-6 col-12 order-lg-1 order-md-1 order-xl-0  d-none d-md-block">
              <div className="navigation-container">
                <div className="main-menu">
                  <div className="" id="">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a
                          className="nav-link "
                          href="transfer-money/index.html"
                        >
                          Transfer Money
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " href="business/index.html">
                          Business
                        </a>
                        <ul className="subMenu">
                          <div>
                            <li className="nav-item ">
                              <a href="business/small-business/index.html">
                                Small Business
                              </a>
                            </li>
                            <li className="nav-item ">
                              <a href="business/medium-business/index.html">
                                Medium Business
                              </a>
                            </li>
                            <li className="nav-item ">
                              <a href="business/multinationals/index.html">
                                Multinationals
                              </a>
                            </li>
                            <li className="nav-item ">
                              <a href="business/online-sellers/index.html">
                                Online Sellers
                              </a>
                            </li>
                            <li className="nav-item ">
                              <a href="business/global-payment-solutions/international-payments/index.html">
                                Global Payment Solutions
                              </a>

                              <ul className="thiredLevelSubmenu">
                                <li className="nav-item ">
                                  <a href="business/global-payment-solutions/international-payments/index.html">
                                    International Payments
                                  </a>
                                </li>
                                <li className="nav-item ">
                                  <a href="business/global-payment-solutions/incoming-payments/index.html">
                                    Incoming Payments
                                  </a>
                                </li>
                                <li className="nav-item ">
                                  <a href="business/global-payment-solutions/batch-payments/index.html">
                                    Batch Payments
                                  </a>
                                </li>
                                <li className="nav-item ">
                                  <a href="business/global-payment-solutions/multi-currency-accounts/index.html">
                                    Multi Currency Accounts
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="nav-item ">
                              <a href="business/risk-management/forward-contracts/index.html">
                                Risk Management
                              </a>

                              <ul className="thiredLevelSubmenu">
                                <li className="nav-item ">
                                  <a href="business/risk-management/forward-contracts/index.html">
                                    Forward Contracts
                                  </a>
                                </li>
                                <li className="nav-item ">
                                  <a href="business/risk-management/market-orders/index.html">
                                    Market Orders
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </div>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link "
                          href="industry-solutions/business/index.html"
                        >
                          Industry Solutions
                        </a>
                        <ul className="subMenu">
                          <div>
                            <li className="nav-item ">
                              <a href="industry-solutions/business/index.html">
                                Business
                              </a>
                            </li>
                            <li className="nav-item ">
                              <a href="industry-solutions/online-sellers/index.html">
                                Online Sellers
                              </a>
                            </li>
                            <li className="nav-item ">
                              <a href="industry-solutions/travel/index.html">
                                Travel
                              </a>
                            </li>
                            <li className="nav-item ">
                              <a href="industry-solutions/education/index.html">
                                Education
                              </a>
                            </li>
                            <li className="nav-item ">
                              <a href="industry-solutions/legal/index.html">
                                Legal
                              </a>
                            </li>
                            <li className="nav-item ">
                              <a href="industry-solutions/technology-companies/index.html">
                                Technology Companies
                              </a>
                            </li>
                            <li className="nav-item ">
                              <a href="industry-solutions/medical/index.html">
                                Medical
                              </a>
                            </li>
                            <li className="nav-item ">
                              <a href="industry-solutions/mining/index.html">
                                Mining
                              </a>
                            </li>
                          </div>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link "
                          href="tools/economic-calendar/index.html"
                        >
                          Tools
                        </a>
                        <ul className="subMenu">
                          <div>
                            <li className="nav-item ">
                              <a href="tools/economic-calendar/index.html">
                                Economic Calendar
                              </a>
                            </li>
                            <li className="nav-item ">
                              <a href="tools/live-exchange-rates/index.html">
                                Live Exchange Rates
                              </a>
                            </li>
                            <li className="nav-item ">
                              <a href="tools/mtfx-rate-calculator/index.html">
                                Rate Calculator
                              </a>
                            </li>
                            <li className="nav-item ">
                              <a href="tools/currency-charts/index.html">
                                Currency Charts
                              </a>
                            </li>
                            <li className="nav-item ">
                              <a href="tools/historical-currency-exchange-rates/index.html">
                                Historical Rates
                              </a>
                            </li>
                            <li className="nav-item ">
                              <a href="tools/daily-exchange-rate-lookup/index.html">
                                Daily Exchange Rate Lookup
                              </a>
                            </li>
                            <li className="nav-item ">
                              <a href="tools/currency-rate-alerts/index.html">
                                Currency Rate Alerts
                              </a>
                            </li>
                            <li className="nav-item ">
                              <a href="tools/fx-market-updates/index.html">
                                FX Market Updates
                              </a>
                            </li>
                          </div>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link "
                          href="currency-updates/index.html"
                        >
                          Currency Updates
                        </a>
                        <ul className="subMenu">
                          <li className="nav-item ">
                            <a href="fx-daily/index.html">FX Daily</a>
                          </li>
                          <li className="nav-item ">
                            <a href="fx-weekly/index.html">FX Weekly</a>
                          </li>
                          <li className="nav-item ">
                            <a href="fx-monthly/index.html">FX Monthly</a>
                          </li>
                          <li className="nav-item  ">
                            <a href="fx-forecast/index.html">
                              Canadian 5 Bank Forecast
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href={"blog"}>
                          Blog &amp; Press Room
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-7 order-lg-2 order-md-2 order-xl-0">
              <div className="header-action-btn text-right">
                <button
                  type="button"
                  className="btn cmn-white-btn"
                  onClick={openUrlInNewWindow("https://www.mtfxonline.com/")}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
          {/* responsive menu */}
          <div className="responsive-menu">
            <div className="res-menu-overlay">
              <nav className="nav-drill">
                <div className="res-header">
                  <span className="hamburger toggle-menu" id="ham">
                    <i className="fas fa-times fs-20"></i>
                  </span>
                  <div className="logo">
                    <a href="#">
                      <img
                        src="media/ocspr4jh/logo-sm.png"
                        alt="MTFX Foreign Exchange"
                        className="Image-fluid sm-logo"
                      />
                    </a>
                  </div>
                  <div className="ml-auto">
                    <div className="header-action-btn">
                      <button
                        type="button"
                        className="btn cmn-white-btn mr-10"
                        onClick={openUrlInNewWindow(
                          "https://www.mtfxonline.com/"
                        )}
                      >
                        LOGIN
                      </button>
                      <button
                        type="button"
                        onClick={openUrlInNewWindow("Register/index-2.html")}
                        className="btn cmn-orange-btn"
                      >
                        SIGN UP
                      </button>
                    </div>
                  </div>
                </div>
                <ul className="nav-items nav-level-1">
                  <li className="nav-item">
                    <a className="nav-link" href="transfer-money/index.html">
                      Transfer Money
                    </a>
                  </li>
                  <li className="nav-item nav-expand">
                    <a
                      className="nav-link nav-expand-link"
                      href="business/index.html"
                    >
                      Business
                    </a>
                    <span className="open-submenu-link">click</span>
                    <ul className="nav-items nav-expand-content">
                      <li className="nav-item">
                        <a className="nav-link nav-back-link">Back</a>
                      </li>
                      <li className="nav-item nav-expand ">
                        <a
                          className="nav-link "
                          href="business/small-business/index.html"
                        >
                          {" "}
                          Small Business
                        </a>
                      </li>
                      <li className="nav-item nav-expand ">
                        <a
                          className="nav-link "
                          href="business/medium-business/index.html"
                        >
                          {" "}
                          Medium Business
                        </a>
                      </li>
                      <li className="nav-item nav-expand ">
                        <a
                          className="nav-link "
                          href="business/multinationals/index.html"
                        >
                          {" "}
                          Multinationals
                        </a>
                      </li>
                      <li className="nav-item nav-expand ">
                        <a
                          className="nav-link "
                          href="business/online-sellers/index.html"
                        >
                          {" "}
                          Online Sellers
                        </a>
                      </li>
                      <li className="nav-item nav-expand ">
                        <a
                          className="nav-link "
                          href="business/global-payment-solutions/index.html"
                        >
                          {" "}
                          Global Payment Solutions
                        </a>
                        <span className="open-submenu-link">click</span>
                        <ul className="nav-items nav-expand-content">
                          <li className="nav-item">
                            <a className="nav-link nav-back-link">Back</a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="business/global-payment-solutions/international-payments/index.html"
                            >
                              {" "}
                              International Payments
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="business/global-payment-solutions/incoming-payments/index.html"
                            >
                              {" "}
                              Incoming Payments
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="business/global-payment-solutions/batch-payments/index.html"
                            >
                              {" "}
                              Batch Payments
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="business/global-payment-solutions/multi-currency-accounts/index.html"
                            >
                              {" "}
                              Multi Currency Accounts
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item nav-expand ">
                        <a
                          className="nav-link "
                          href="business/risk-management/index.html"
                        >
                          {" "}
                          Risk Management
                        </a>
                        <span className="open-submenu-link">click</span>
                        <ul className="nav-items nav-expand-content">
                          <li className="nav-item">
                            <a className="nav-link nav-back-link">Back</a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="business/risk-management/forward-contracts/index.html"
                            >
                              {" "}
                              Forward Contracts
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="business/risk-management/market-orders/index.html"
                            >
                              {" "}
                              Market Orders
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item nav-expand">
                    <a
                      className="nav-link nav-expand-link"
                      href="industry-solutions/business/index.html"
                    >
                      Industry Solutions
                    </a>
                    <span className="open-submenu-link">click</span>
                    <ul className="nav-items nav-expand-content">
                      <li className="nav-item">
                        <a className="nav-link nav-back-link">Back</a>
                      </li>
                      <li className="nav-item nav-expand ">
                        <a
                          className="nav-link "
                          href="industry-solutions/business/index.html"
                        >
                          {" "}
                          Business
                        </a>
                      </li>
                      <li className="nav-item nav-expand ">
                        <a
                          className="nav-link "
                          href="industry-solutions/online-sellers/index.html"
                        >
                          {" "}
                          Online Sellers
                        </a>
                      </li>
                      <li className="nav-item nav-expand ">
                        <a
                          className="nav-link "
                          href="industry-solutions/travel/index.html"
                        >
                          {" "}
                          Travel
                        </a>
                      </li>
                      <li className="nav-item nav-expand ">
                        <a
                          className="nav-link "
                          href="industry-solutions/education/index.html"
                        >
                          {" "}
                          Education
                        </a>
                      </li>
                      <li className="nav-item nav-expand ">
                        <a
                          className="nav-link "
                          href="industry-solutions/legal/index.html"
                        >
                          {" "}
                          Legal
                        </a>
                      </li>
                      <li className="nav-item nav-expand ">
                        <a
                          className="nav-link "
                          href="industry-solutions/technology-companies/index.html"
                        >
                          {" "}
                          Technology Companies
                        </a>
                      </li>
                      <li className="nav-item nav-expand ">
                        <a
                          className="nav-link "
                          href="industry-solutions/medical/index.html"
                        >
                          {" "}
                          Medical
                        </a>
                      </li>
                      <li className="nav-item nav-expand ">
                        <a
                          className="nav-link "
                          href="industry-solutions/mining/index.html"
                        >
                          {" "}
                          Mining
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item nav-expand">
                    <a
                      className="nav-link nav-expand-link"
                      href="tools/economic-calendar/index.html"
                    >
                      Tools
                    </a>
                    <span className="open-submenu-link">click</span>
                    <ul className="nav-items nav-expand-content">
                      <li className="nav-item">
                        <a className="nav-link nav-back-link">Back</a>
                      </li>
                      <li className="nav-item nav-expand ">
                        <a
                          className="nav-link "
                          href="tools/economic-calendar/index.html"
                        >
                          {" "}
                          Economic Calendar
                        </a>
                      </li>
                      <li className="nav-item nav-expand ">
                        <a
                          className="nav-link "
                          href="tools/live-exchange-rates/index.html"
                        >
                          {" "}
                          Live Exchange Rates
                        </a>
                      </li>
                      <li className="nav-item nav-expand ">
                        <a
                          className="nav-link "
                          href="tools/mtfx-rate-calculator/index.html"
                        >
                          {" "}
                          Rate Calculator
                        </a>
                      </li>
                      <li className="nav-item nav-expand ">
                        <a
                          className="nav-link "
                          href="tools/currency-charts/index.html"
                        >
                          {" "}
                          Currency Charts
                        </a>
                      </li>
                      <li className="nav-item nav-expand ">
                        <a
                          className="nav-link "
                          href="tools/historical-currency-exchange-rates/index.html"
                        >
                          {" "}
                          Historical Rates
                        </a>
                      </li>
                      <li className="nav-item nav-expand ">
                        <a
                          className="nav-link "
                          href="tools/daily-exchange-rate-lookup/index.html"
                        >
                          {" "}
                          Daily Exchange Rate Lookup
                        </a>
                      </li>
                      <li className="nav-item nav-expand ">
                        <a
                          className="nav-link "
                          href="tools/currency-rate-alerts/index.html"
                        >
                          {" "}
                          Currency Rate Alerts
                        </a>
                      </li>
                      <li className="nav-item nav-expand ">
                        <a
                          className="nav-link "
                          href="tools/fx-market-updates/index.html"
                        >
                          {" "}
                          FX Market Updates
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item nav-expand">
                    <a
                      className="nav-link nav-expand-link"
                      href="currency-updates/index.html"
                    >
                      Currency Updates
                    </a>
                    <span className="open-submenu-link">click</span>
                    <ul className="nav-items nav-expand-content">
                      <li className="nav-item">
                        <a className="nav-link nav-back-link">Back</a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link" href="fx-daily/index.html">
                          FX Daily
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link" href="fx-weekly/index.html">
                          FX Weekly
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link" href="fx-monthly/index.html">
                          FX Monthly
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link" href="fx-forecast/index.html">
                          Canadian 5 Bank Forecast
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href={"blog"}>
                      Blog &amp; Press Room
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* responsive menu end */}
        </div>
      </div>
    </header>
  );
};
