import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ErrorBoundary from "../error/ErrorBoundary";
import { lazy } from "react";
const BaseLayout = lazy(() => import("baseUi/Layout"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary fallback={<Home />}>
        <BaseLayout>
          <Home />
        </BaseLayout>
      </ErrorBoundary>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
