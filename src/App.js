import './App.css';
import {
  createBrowserRouter, Outlet,
  RouterProvider,
} from "react-router-dom";
import {routes} from "./router";

function App() {
  const router = createBrowserRouter(routes);

  return (
    <RouterProvider router={router}>
      <Outlet/>
    </RouterProvider>
  );
}

export default App;
