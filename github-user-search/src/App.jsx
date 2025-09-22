import { Routes,Route } from "react-router-dom";
import Homepage from "./Homepage";
const App = () => {
  return (
    <Routes>
      <Route index element={<Homepage/>}/>
    </Routes>
  )
}
export default App;