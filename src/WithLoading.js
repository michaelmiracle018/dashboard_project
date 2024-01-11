import React, { Suspense } from "react";
import Loader from "./components/Loader";

export const withLoading = (Component) => (
  <Suspense fallback={<Loader />}>
    <Component />
  </Suspense>
);
