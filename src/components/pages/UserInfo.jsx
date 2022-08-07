import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Breadcrumb from "../layouts/Breadcrumb";
import Content from "../sections/user-info/UserInfo";

const pagelocation = "User Information";

class UserInfo extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Hotel Miranda - React Template | {pagelocation}</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Header />
        <Breadcrumb breadcrumb={{ pagename: pagelocation }} />
        <Content />
        <Footer footer={{ style: "", logo: "assets/img/footer-logo.png" }} />
      </Fragment>
    );
  }
}

export default UserInfo;
