import React, { Suspense, useEffect, lazy, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/header/header.component";
import { GlobalStyle } from "./global.styles";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import { lightTheme, darkTheme } from "./themes";
import { fetchCollectionsStart } from "./redux/shop/shop.actions";
import NotFound from "./components/notfound/notfound.component";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component")
);
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));
const ContactPage = lazy(() => import("./pages/contact/contactpage.component"));
const CollectionsOverviewContainer = lazy(() =>
  import("./components/collections-overview/collections-overview-container")
);
const CollectionPageContainer = lazy(() =>
  import("./components/collection/collection.container")
);

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
    dispatch(fetchCollectionsStart());
  }, [dispatch]);
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div>
        <BrowserRouter>
          <ErrorBoundary>
            <GlobalStyle />
            <Header themeToggler={themeToggler} />
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/shop">
                  <Route index element={<CollectionsOverviewContainer />} />
                  <Route path=":id" element={<CollectionPageContainer />} />
                </Route>
                <Route exact path="/checkout" element={<CheckoutPage />} />
                <Route exact path="/contact" element={<ContactPage />} />
                <Route
                  exact
                  path="/signin"
                  element={
                    currentUser ? <Navigate to="/" /> : <SignInAndSignUpPage />
                  }
                />
                <Route path="*" exact={true} element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
