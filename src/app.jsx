import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes/routesConfig";
import PrivateRoute from "./routes/privateRoute";
import LoadingPage from "./pages/pageCondition/loading.index";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          {publicRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}

          <Route element={<PrivateRoute />}>
            {privateRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
