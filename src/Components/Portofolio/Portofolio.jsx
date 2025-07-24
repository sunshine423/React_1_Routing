import { Helmet } from "react-helmet";
import port1 from "../../assets/images/port1.png";
import port2 from "../../assets/images/port2.png";
import port3 from "../../assets/images/port3.png";
import PageHeader from "../PageHeader/PageHeader";
import style from "./Portofolio.module.css";

export default function Portofolio() {
  return (
    <>
      <Helmet>
        <title>Portofolio</title>
      </Helmet>
      <div className="container-fluid start_after_navbar pb-5 mt-5 full_screen display-flex  align-content-center">
        <PageHeader color={"#2c3e50"} header_title={"Portofolio Component"} />
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div
                className={`rounded-3 position-relative text-white ${style.img_box}`}
              >
                <img src={port1} alt="wooden cabin" className="w-100" />
                <div
                  className={`${style.layer} position-absolute w-100 h-100 top-0 d-flex justify-content-center align-items-center `}
                >
                  <i className="fas fa-plus fa-6x"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className={`rounded-3 position-relative text-white ${style.img_box}`}
              >
                <img
                  src={port2}
                  alt="Cake with red cherry on the top"
                  className="w-100"
                />
                <div
                  className={`${style.layer} position-absolute w-100 h-100 top-0 d-flex justify-content-center align-items-center `}
                >
                  <i className="fas fa-plus fa-6x"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className={`rounded-3 position-relative text-white ${style.img_box}`}
              >
                <img src={port3} alt="Circus" className="w-100" />
                <div
                  className={`${style.layer} position-absolute w-100 h-100 top-0 d-flex justify-content-center align-items-center`}
                >
                  <i className="fas fa-plus fa-6x"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className={`rounded-3 position-relative text-white ${style.img_box}`}
              >
                <img src={port1} alt="wooden cabin" className="w-100" />
                <div
                  className={`${style.layer} position-absolute w-100 h-100 top-0 d-flex justify-content-center align-items-center `}
                >
                  <i className="fas fa-plus fa-6x"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className={`rounded-3 position-relative text-white ${style.img_box}`}
              >
                <img
                  src={port2}
                  alt="Cake with red cherry on the top"
                  className="w-100"
                />
                <div
                  className={`${style.layer} position-absolute w-100 h-100 top-0 d-flex justify-content-center align-items-center `}
                >
                  <i className="fas fa-plus fa-6x"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className={`rounded-3 position-relative text-white ${style.img_box}`}
              >
                <img src={port3} alt="Circus" className="w-100" />
                <div
                  className={`${style.layer} position-absolute w-100 h-100 top-0 d-flex justify-content-center align-items-center`}
                >
                  <i className="fas fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
