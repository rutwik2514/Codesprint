import "../Timeline/Timeline.css"
function Timeline() {
  return (
    <>
      <section className="row justify-content-center" id="timelinediv">
        <div className="row justify-content-lg-start justify-content-center pe-lg-4">
          <div className="col-md-11 row align-items-center justify-content-around">
            <div
              className="card col-8 col-md-3 my-2 shadow-lg p-4"
              style={{ height: "18rem" }}
              id="card1"
            >
              <h3 className="text-center textdarkt fw-bold my-2">
                Dive Into Web
              </h3>
              <div className="row justify-content-center align-items-center">
                <h6 className="text-center text-dark m-2">
                  18th January, 2023
                </h6>
              </div>
              <p className="text-center text-light text-light">
                Dive into the structure & introduction of the web development.
              </p>
            </div>
            <div
              className="card  col-8 col-md-3 my-2 shadow-lg p-4"
              style={{ height: "18rem" }}
              id="card2"
            >
              <h3 className="text-center text-dark fw-bold my-2">
                Let's React
              </h3>
              <div className="row justify-content-center">
                <h6 className="text-center text-dark m-2">
                  23th January, 2023
                </h6>
              </div>
              <p className="text-center text-light text-light">
                Detailed session ReactJS library which will help you grasp each
                and every of aspect of front-end stack.
              </p>
            </div>
            <div
              className="card col-8 col-md-3 my-2 shadow-lg p-4"
              style={{ height: "18rem" }}
              id="card3"
            >
              <h3 className="text-center text-dark fw-bold my-2">Code Node</h3>
              <div className="row justify-content-center">
                <h6 className="text-center text-dark m-2">
                  30th January, 2023
                </h6>
              </div>
              <p className="text-center text-light text-light">
                Session on ways to handle servers & manage databases with
                NodeJS, a complete back-end experience with many features of it.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-lg-end justify-content-center pe-lg-4">
          <div className="col-md-11 row align-items-center justify-content-around">
            <div
              className="card col-8 col-md-3 my-2 shadow-lg p-4"
              style={{ height: "18rem" }}
              id="card4"
            >
              <h3 className="text-center text-dark fw-bold my-2">API Sprint</h3>
              <div className="row justify-content-center">
                <h6 className="text-center text-dark m-2">
                  6th February, 2023
                </h6>
              </div>
              <p className="text-center text-light text-light">
                Intro to Postman API and other API rendering ways which will
                help you playing with the
              </p>
            </div>
            <div
              className="card col-8 col-md-3 my-2 shadow-lg p-4"
              style={{ height: "18rem" }}
              id="card5"
            >
              <h3 className="text-center textdark fw-bold my-2">
                Flutter Fest
              </h3>
              <div className="row justify-content-center">
                <h6 className="text-center text-dark m-2">
                  13th February, 2023
                </h6>
              </div>
              <p className="text-center text-light text-light">
                A week long program to teach flutter development for app
                developers.
              </p>
            </div>
            <div
              className="card col-8 col-md-3 my-2 shadow-lg p-2"
              style={{ height: "18rem" }}
              id="card2"
            >
              <h3 className="text-center textdark fw-bold my-2">
                DevHeat Beta
              </h3>
              <div className="row justify-content-center">
                <h6 className="text-center text-dark m-2">April, 2023</h6>
              </div>
              <p className="text-center text-light text-light">
                Devheat Beta, a week long hackathon for newbies to know &
                visualize various tech stack.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Timeline;
