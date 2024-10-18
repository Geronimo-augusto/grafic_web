import { Outlet } from "react-router-dom"
import Nav from "./components/Nav/Nav"
import Sensor from "./components/Sensor/Sensor.jsx"




function App() {
 

  return (
    <>
    <Nav/>
    <Outlet/>
    </>
  )
}

export default App
