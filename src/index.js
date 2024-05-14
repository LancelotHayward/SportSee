import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./components/Header/Header.jsx"
import Dashboard from "./pages/Dashboard/Dashboard.jsx"

import mock_main from "./mocks/mainpage.js"
import mock_performance from "./mocks/performance.js"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Dashboard data={mock_main} performance={mock_performance}/>} />
			</Routes>
		</Router>
	</React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
