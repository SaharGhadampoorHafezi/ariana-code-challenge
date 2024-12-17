import { Route, Routes } from "react-router"
import { ChartPage, FormPage, TablePage } from "./pages"


function App() {
 

  return (
    <>
     <Routes>
      <Route path="/" element={<FormPage />} />
      <Route path="table" element={<TablePage />} />
      <Route path="chart" element={<ChartPage />} />
     </Routes>
    </>
  )
}

export default App
