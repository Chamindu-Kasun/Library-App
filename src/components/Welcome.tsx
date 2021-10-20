import React from "react";
import {Row,Col,Image} from "react-bootstrap";
import WelcomeImg from "../assets/images/welcome-library.webp";

const Welcome: React.FC = () => {
    return(
        <Row className={"welcome"}>
          <Col xs={12} className={"text-center my-2"}><h1>My Library</h1></Col>
          <Col xs={12} className={"mx-0 px-0"}><Image src={WelcomeImg} alt="Welcome Library Image"/></Col>
          <Col xs={12} className={"credits text-end pe-lg-5 pe-3 pe-md-3 pt-1"}>Photo by
              {" "}
              <a
                  href="https://unsplash.com/@annahunko?utm_source=unsplash&utm_medium=referral&utm_
                    content=creditCopyText"
                  rel="noreferrer"
                  target="_blank"
              >
                  Anna Hunko
                  {" "}
              </a>
              on{" "}
              <a
                  href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_
                    content=creditCopyText"
                  rel="noreferrer"
                  target="_blank"
              >
                  Unsplash{" "}
              </a>
          </Col>
    </Row>
    )
}

export default Welcome;