import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router";

function App() {
  return (
    <main className="font-poppins">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
