import React from "react";
import "./App.css";
import { styled } from "@stitches/react";
import Sidebar from "./components/sidebar";
import { Link } from "react-router-dom";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        {/* <Route path={`/register/`} element={<Register />} />
        <Route path={`/login/`} element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// function App() {
//   return (
//     <Flex>
//       <Sidebar
//         iconInSidebarProps={[
//           {
//             icon: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
//             text: "Google",
//           },
//           {
//             icon: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
//             text: "Google",
//           },
//           {
//             icon: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
//             text: "Google",
//           },
//           {
//             icon: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
//             text: "Google",
//           },
//         ]}
//       />
//       <ContentBox>
//         <a
//           className="App-link"
//           href="https://www.google.com/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           予想する
//         </a>
//       </ContentBox>
//     </Flex>
//   );
// }

// export default App;
