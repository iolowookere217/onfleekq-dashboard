import { Suspense, lazy } from "react";
import { Outlet, Route } from "react-router-dom";
import LoadingSpinner from "../../components/loading";

const HomePage = lazy(() => import("./home"));

const LandingRoutes = (
  <Route element={<Outlet />}>
    <Route
      index
      path="/"
      element={
        <Suspense fallback={<LoadingSpinner />}>{<HomePage />}</Suspense>
      }
    />
  </Route>
);

export default LandingRoutes;
