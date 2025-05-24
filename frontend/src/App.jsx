import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { AuthProvider } from "./service/AuthContext";
import { Toaster } from "react-hot-toast";
import Post from "./pages/Post";
import CreatePost from "./pages/CreatePost";
import AuthCheckRoute from "./service/AuthCheckRoute";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/login" default element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/"
          element={
            <AuthCheckRoute>
              <Home />
            </AuthCheckRoute>
          }
        />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/create" element={<CreatePost />} />
      </>
    )
  );
  return (
    <>
      <AuthProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <RouterProvider router={routes} />
      </AuthProvider>
    </>
  );
}

export default App;
