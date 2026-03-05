import { RouterProvider } from "react-router-dom";
import router from './routerconfig';


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;