import { PageNotFound, RootLayout } from "@/components";
import { HomePage } from "@/pages";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// const tokenString = localStorage.getItem("token");
// const token = tokenString ? JSON.parse(tokenString) : null;

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        {/* <Route
          path="login"
          element={
            <ProtectedRoute isAllowed={!token} redirectPath="/">
              ghfdhfd
            </ProtectedRoute>
          }
        /> */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </>,
  ),
);
