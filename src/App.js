import React, { Fragment, useEffect, useState } from 'react';

function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [expire, setExpire] = useState(false);

  useEffect(() => {
    const countDownDate = new Date("Oct 28, 2022").getTime();
    var x = setInterval(function () {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
      if (distance < 0) {
        clearInterval(x);
        setExpire(true);
      }
    }, 1000)
  });
  return (
    <Fragment>
      <section className="cid-qIia8mgjVj mbr-fullscreen mbr-parallax-background" id="header2-0">
        <div className="container align-center">
          <div className="row justify-content-md-center">
            <div className="mbr-white col-md-10" style={{ color: '#000' }}>
              <h2 className="mbr-section-title mbr-bold pb-3 mbr-fonts-style display-1">
                Once in a while,
                <br />
                right in the middle of an ordinary life,
                <br />
                love gives us a fairy tale
              </h2>
              <h3 className="mbr-section-subtitle align-center mbr-light pb-3 mbr-fonts-style display-2">
                October 28, 2022
              </h3>
            </div>
          </div>
        </div>
        <div className="mbr-arrow hidden-sm-down" aria-hidden="true">
          <a href="#next">
            <i className="mbri-down mbr-iconfont"></i>
          </a>
        </div>
      </section>
      <section className="mbr-section content4 cid-qIieWoha50" id="content4-2">
        <div className="container">
          <div className="media-container-row">
            <div className="title col-12 col-md-8">
              <h2 className="align-center pb-3 mbr-fonts-style display-1">Gurpreet Singh</h2>
              <h3 className="align-center mbr-light mbr-fonts-style display-7">
                s/o S. Mohinder Singh & Sdn. Harjinder Kaur
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="mbr-section article content9 cid-qIifnNA7oY" id="content9-3">
        <div className="container">
          <div className="inner-container" style={{ "width": "100%" }}>
            <hr className="line" style={{ "width": "25%" }} />
            <div className="section-text align-center mbr-fonts-style display-2">
              weds</div>
            <hr className="line" style={{ "width": "25%" }} />
          </div>
        </div>
      </section>
      <section className="mbr-section content4 cid-qIifwA2R02" id="content4-4">
        <div className="container">
          <div className="media-container-row">
            <div className="title col-12 col-md-8">
              <h2 className="align-center pb-3 mbr-fonts-style display-1">Sunaina Passi</h2>
              <h3 className="align-center mbr-light mbr-fonts-style display-7">
                d/o Mr. Madan Passi & Mrs. Deepa Passi </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="mbr-section content5 cid-qIicQ8Vcwz mbr-parallax-background" id="content5-1">
        <div className="container">
          <div className="media-container-row">
            <div className="title col-12 col-md-8">
              <h2 className="align-center mbr-bold mbr-white pb-3 mbr-fonts-style display-5">Wedding</h2>
              <h3 className="mbr-section-subtitle align-center mbr-light mbr-white pb-3 mbr-fonts-style display-2">
                Please grace the event with your presence</h3>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section className="features11 cid-qIix9MZdYF" id="features11-9">
        <div className="container">
          <div className="col-md-12">
            <div className="media-container-row">
              <div className="mbr-figure" style={{ "width": "50%" }}>
                <img src="assets/images/jaago.jpg" alt="Mobirise" title="" />
              </div>
              <div className=" align-left aside-content">
                <div className="block-content">
                  <div className="card p-3 pr-3">
                    <div className="media">
                      <div className="media-body" style={{ display: "flex", justifyContent: "center" }}>
                        <h4 className="card-title mbr-fonts-style display-2">
                          Thursday, October 27, 2022</h4>
                      </div>
                    </div>
                  </div>
                  <div className="card p-3 pr-3">
                    <div className="media">
                      <div className="media-body" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h5 className="card-title mbr-fonts-style display-2">
                          Path Sukhmani Sahib</h5>
                        <p className="block-text mbr-fonts-style display-7">
                          {`( 10 AM to 1 PM)`}
                        </p>
                        <h5 className="card-title mbr-fonts-style display-2">
                          Jaago & Lady Sangeet</h5>
                        <p className="block-text mbr-fonts-style display-7">
                          {`( 6 PM to 11 PM)`}
                        </p>
                      </div>
                    </div>
                    <div className="card-box" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <p className="block-text mbr-fonts-style display-7">
                        House #1508/48 Street #6,
                      </p>
                      <p className="block-text mbr-fonts-style display-7">
                        Harkrishan Nagar, Ludhiana, Punjab
                      </p>
                    </div>
                    <div className="card-box" style={{ display: "flex", justifyContent: "center" }}>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4224.530065863925!2d75.86967870432007!3d30.858836938803886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a829081aa5705%3A0x1ba32f0090556893!2zMzDCsDUxJzMyLjUiTiA3NcKwNTInMDUuMiJF!5e0!3m2!1sen!2sin!4v1666214662328!5m2!1sen!2sin" width="400" height="300" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section className="features11 cid-qIix9MZdYF" id="features11-9">

        <div className="container">
          <div className="col-md-12">
            <div className="media-container-row">
              <div className="mbr-figure" style={{ "width": "50%" }}>
                <img src="assets/images/lanva.jpg" alt="Mobirise" title="" />
              </div>
              <div className=" align-left aside-content">
                <div className="block-content">
                  <div className="card p-3 pr-3">
                    <div className="media">
                      <div className="media-body" style={{ display: "flex", justifyContent: "center" }}>
                        <h4 className="card-title mbr-fonts-style display-2">
                          Friday, October 28, 2022</h4>
                      </div>
                    </div>
                  </div>

                  <div className="card p-3 pr-3">
                    <div className="media">
                      <div className="media-body" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h5 className="card-title mbr-fonts-style display-2">
                          Wedding</h5>
                        <p className="block-text mbr-fonts-style display-7">
                          {`( 10 AM to 4 PM)`}
                        </p>
                      </div>
                    </div>

                    <div className="card-box" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <p className="block-text mbr-fonts-style display-7">
                        Amantran Ville
                      </p>
                      <p className="block-text mbr-fonts-style display-7">
                        New Grain Market,
                      </p>
                      <p className="block-text mbr-fonts-style display-7">
                        Gill Road,
                      </p>
                      <p className="block-text mbr-fonts-style display-7">
                        Ludhiana, Punjab 141003
                      </p>
                      <p className="block-text mbr-fonts-style display-7">
                        <a href="#map1-b">Check on Map</a>
                      </p>

                      <a target="_blank" href="https://calendar.google.com/calendar/u/0/r/eventedit?state=%5Bnull%2Cnull%2Cnull%2Cnull%2C%5B13%5D%5D">
                        Add to your calendar </a>
                      <p className="block-text mbr-fonts-style display-7">
                        <img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en.gif" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="countdown1 cid-rdSMNc6MYv" id="countdown1-5">
        <div className="container ">
          <h2 className="mbr-section-title pb-1 align-center mbr-fonts-style display-2">
            It's not that far...
          </h2>
        </div>
        <div className="container countdown-cont align-center">
          <div className="daysCountdown" title="Days"></div>
          <div className="hoursCountdown" title="Hours"></div>
          <div className="minutesCountdown" title="Minutes"></div>
          <div className="secondsCountdown" title="Seconds"></div>
          <div className="countdown pt-1 mt-2" data-due-date="2019/03/09">
            <div className="row">
              <div className="col-xs-3 col-sm-3 col-md-3">
                <span className="number-wrap">
                  <span className="number display-2">{expire ? '00' : days}</span>
                  <span mbr-text="" className="period display-7">Days</span>
                  <span className="dot">:</span>
                </span>
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3">
                <span className="number-wrap">
                  <span className="number display-2">{expire ? '00' : hours}</span>
                  <span mbr-text="" className="period display-7">Hours</span>
                  <span className="dot">:</span>
                </span>
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3">
                <span className="number-wrap">
                  <span className="number display-2">{expire ? '00' : minutes}</span>
                  <span mbr-text="" className="period display-7">Minutes</span>
                  <span className="dot">:</span>
                </span>
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3">
                <span className="number-wrap">
                  <span className="number display-2">{expire ? '00' : seconds}</span>
                  <span mbr-text="" className="period display-7">Seconds</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map1 cid-qIiXmYb55q" id="map1-b">
        <div className="google-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.4820222508956!2d75.85346741544366!3d30.873173985900774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a82f5c895b741%3A0xea3ae52e5ef60e1c!2sAmantran%20Ville-%20Wedding%20venue%20and%20Banquet%20halls!5e0!3m2!1sen!2sin!4v1666210478481!5m2!1sen!2sin" width="600" height="450" style={{ "border": "0px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>

      <section once="" className="cid-resodjsu8G" id="footer7-0">
        <div className="container">
          <div className="media-container-row align-center mbr-white">
            <div className="row row-copirayt">
              <p className="mbr-text mb-0 mbr-fonts-style mbr-white align-center display-9">
                © Copyright 2022 Gurpreet Singh - All Rights Reserved
                <br />
                Made with lots of <span className="fa fa-heart pulse2"></span> for Sunaina
              </p>
            </div>
          </div>
        </div>
      </section>
      <div id="scrollToTop" className="scrollToTop mbr-arrow-up"><a style={{ "textAlign": "center" }}><i></i></a></div>
      <input name="animation" type="hidden" />
    </Fragment>
  );
}

export default App;
