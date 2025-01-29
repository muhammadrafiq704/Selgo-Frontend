import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import routes from "./routes/routes";
import NotFoundPage from "./components/NotFound/NotFound";
import "./App.css";
import LoadingPage from "./components/Loading/LoadingPage";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
              errorElement={<NotFoundPage />}
            >
              {/* child routes if exist within applayout  */}
              {route.children?.map((child, childIndex) => (
                <Route
                  key={childIndex}
                  path={child.path}
                  element={child.element}
                >
                  {child?.sub_child?.map((subChild, index) => (
                    <Route
                      index
                      key={index}
                      path={subChild.path}
                      element={subChild.element}
                      errorElement={<NotFoundPage />}
                    />
                  ))}
                </Route>
              ))}
            </Route>
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
