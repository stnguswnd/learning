import { createBrowserRouter } from "react-router-dom";
import RootRayout from "../layout/RootRayout";
import PrivateLayout from "../layout/PrivateLayout";
import Home from "../Page/Home";
import Chat from "../Page/Chat";
import MemoList from "../Page/MemoList";
import Login from "../Page/Login";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootRayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/",
        Component: PrivateLayout,
        children: [
          {
            path: "/chat",
            Component: Chat,
          },
          {
            path: "/memo-list",
            Component: MemoList,
          },
        ],
      },
    ],
  },
]);

export default router;
