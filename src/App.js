import React, { Suspense, useLayoutEffect } from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import { Container, Header, List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

// Preloader
const Preloader = React.lazy(() => import("./components/layouts/Preloader"));

// Pages
const Home = React.lazy(() => import("./components/pages/Home"));
const Contact = React.lazy(() => import("./components/pages/Contact"));
const About = React.lazy(() => import("./components/pages/About"));
const Login = React.lazy(() => import("./components/pages/Login"));
const Search = React.lazy(() => import("./components/pages/Search"));
const UserInfo = React.lazy(() => import("./components/pages/UserInfo"));
const MainProduct = React.lazy(() => import("./components/pages/MainProduct"));
const Confirmation = React.lazy(() =>
  import("./components/pages/Confirmation")
);
const ManageReservation = React.lazy(() =>
  import("./components/pages/ManageReservation")
);
const ReservationList = React.lazy(() =>
  import("./components/pages/ReservationList")
);
const TermsAndServices = React.lazy(() =>
  import("./components/pages/TermsAndServices")
);
const FeedBack = React.lazy(() => import("./components/pages/FeedBack"));

// Scroll to Top
const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
});

function App() {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <ScrollToTop>
          <Preloader />
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/about" exact component={About} />
          <Route path="/login" exact component={Login} />
          <Route path="/product" exact component={MainProduct} />
          <Route path="/Confirmation" exact component={Confirmation} />
          <Route
            path="/ManageReservation"
            exact
            component={ManageReservation}
          />
          <Route path="/ReservationList" exact component={ReservationList} />
          <Route path="/TermsAndServices" exact component={TermsAndServices} />
          <Route path="/FeedBack" exact component={FeedBack} />
          <Route path="/Search" exact component={Search} />
          <Route path="/UserInfo" exact component={UserInfo} />
        </ScrollToTop>
      </Suspense>
    </Router>
  );
}

export default App;
