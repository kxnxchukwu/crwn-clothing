import { Suspense, useEffect, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/header/header.component";
import { GlobalStyle } from "./global.styles";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser, checkUserSession } from "./features/user-reducer";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import { lightTheme, darkTheme } from "./themes";
import { fetchCollectionsStart } from "./features/shop-slice";
import NotFound from "./components/notfound/notfound.component";
import { selectTheme } from "./features/theme-slice";
import ProductDetailsPage from "./pages/productdetails/ProductDetails.component";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const SignInAndSignUpPage = lazy(
  () => import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component")
);
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));
const ContactPage = lazy(() => import("./pages/contact/contactpage.component"));
const CollectionsOverviewContainer = lazy(
  () =>
    import("./components/collections-overview/collections-overview-container")
);
const CollectionPageContainer = lazy(
  () => import("./components/collection/collection.container")
);

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
    dispatch(fetchCollectionsStart());
  }, [dispatch]);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div>
        <BrowserRouter>
          <ErrorBoundary>
            <>
              <GlobalStyle />
              <Header />
              <Suspense fallback={<Spinner />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/shop">
                    <Route index element={<CollectionsOverviewContainer />} />
                    <Route path="/shop/:id">
                      <Route index element={<CollectionPageContainer />} />
                      <Route
                        path=":productId"
                        element={<ProductDetailsPage />}
                      />
                    </Route>
                  </Route>
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route
                    path="/signin"
                    element={
                      currentUser ? (
                        <Navigate to="/" />
                      ) : (
                        <SignInAndSignUpPage />
                      )
                    }
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </>
          </ErrorBoundary>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
