import { lazy, Suspense } from "react";

import { GoogleOAuthProvider } from "@react-oauth/google";

//components
import UserProvider from "./context/UserProvider";
import AccountProvider from "./context/AccountProvider";

import Loader from "./components/loader/Loader";

const Messenger = lazy(() => import("./components/Messenger"));

function App() {
  // const clientId =
  //   "246648691460-bsj1rub53iami1btvii0577h1on2je01.apps.googleusercontent.com";

  // const clientId =
  //   "233766042213-bl59anm9n0gdl9t6dafhpvn82bhmd5o0.apps.googleusercontent.com"; //my-1

  const clientId =
    "183248843173-qoreaicahengc9vgruuqsg66b3d9labh.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <UserProvider>
        <AccountProvider>
          <Suspense fallback={<Loader />}>
            <Messenger />
          </Suspense>
        </AccountProvider>
      </UserProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
