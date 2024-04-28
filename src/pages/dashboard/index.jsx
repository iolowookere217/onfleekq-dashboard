import { Suspense, lazy } from "react";
import { Outlet, Route } from "react-router-dom";
import { sideNavData } from "../../utils/links";
import LoadingSpinner from "../../components/loading";
import ProtectedLayout from "../../components/layout/protected-layout";
import Finance from "./finance-dashboard";

const DashBoardRoutes = (
  <Route
    element={
      <ProtectedLayout navData={sideNavData}>
        <Outlet />
      </ProtectedLayout>
    }
    errorElement={<Error />}
  >
    <Route
      path="/dashboard/finance"
      element={
        <Suspense fallback={<LoadingSpinner />}>
          <Finance />
        </Suspense>
      }
    />
  </Route>
);

export default DashBoardRoutes;
