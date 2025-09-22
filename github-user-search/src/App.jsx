import { Routes,Route } from "react-router-dom";
import Homepage from "./Homepage";
import Services from "./services/Services";
const App = () => {
  return (
    <Routes>
      <Route index element={<Homepage/>}/>
      <Route path="/services" element={<Services/>}/>
    </Routes>
  )
}
export default App;