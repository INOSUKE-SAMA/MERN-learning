import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import CategoryPage from "./CategoryPage.jsx";
import Form from "./Form.jsx";

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav className="bg-gray-800 p-4">
          <ul className="flex justify-center gap-6">
            <li>
              <NavLink
                to="/seafood"
                className={({ isActive }) =>
                  `px-4 py-2 rounded text-white hover:bg-gray-700 ${
                    isActive ? "bg-gray-700" : ""
                  }`
                }
              >
                Seafood
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/chicken"
                className={({ isActive }) =>
                  `px-4 py-2 rounded text-white hover:bg-gray-700 ${
                    isActive ? "bg-gray-700" : ""
                  }`
                }
              >
                Chicken
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lamb"
                className={({ isActive }) =>
                  `px-4 py-2 rounded text-white hover:bg-gray-700 ${
                    isActive ? "bg-gray-700" : ""
                  }`
                }
              >
                Lamb
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/form"
               
              >
                Form
              </NavLink>
            </li>

          </ul>
        </nav>

        {/* Routes */}
        <div className="p-6">
          <Routes>
            <Route path="/seafood" element={<CategoryPage category="Seafood" />} />
            <Route path="/chicken" element={<CategoryPage category="Chicken" />} />
            <Route path="/lamb" element={<CategoryPage category="Lamb" />} />
            <Route path='/form' element={<Form/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
