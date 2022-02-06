import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../Components/Landing/landing";
import Commands from "../Components/Commands/commands"
import About from "../Components/About/about"
import Navbar from "../Components/Navbar";

const Kesha = () => {
	return (
		<BrowserRouter>
			<Navbar/>
			<Routes>
				<Route path="/" element={<Landing/>}/>
				<Route path="/about" element={<About />}/>
				<Route path="/commands" element={<Commands />}/>
			</Routes>
		</BrowserRouter>
	)
}

export default Kesha