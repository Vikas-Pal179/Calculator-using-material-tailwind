// // import React from "react";
// // import logo from "./logo.svg";
// // import "./App.css";

// // function App() {
// //   // npx create-react-app your-app-name --template typescript
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.tsx</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;

// import React from "react";
// import { authStore, authStoreHelper } from "./components/pullstate/store";
// import PublicRoutes from "./components/publicRoutes/PublicRoutes";
// import LoggedInRoutes from "./components/loggedInRoutes/LoggedInRoutes";

// function App() {
//   const isLoggedIn = authStore.useState((s) => s.isLoggedIn);
//   console.log(isLoggedIn, "isLoggedIn");
//   React.useEffect(() => {
//     authStoreHelper.isUserLoggedIn();
//   }, []);
//   if (!isLoggedIn) return <PublicRoutes />;
//   return <LoggedInRoutes />;
// }

// export default App;

import React from "react";
import PHomePage from "./components/prediction/PHomePage";
import DragIndex from "./components/prediction/DragIndex";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div>
      {/* <DragIndex /> */}
      {/* <PHomePage /> */}
      <HomePage />
    </div>
  );
}

export default App;
