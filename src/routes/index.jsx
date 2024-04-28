import {
  createBrowserRouter,
  Outlet,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { LandingRoutes, DashBoardRoutes } from "./route";

const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <>
          <Outlet />
        </>
      }
    >
      {LandingRoutes},{DashBoardRoutes},
    </Route>
  )
);

export default AppRouter;
