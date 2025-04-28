import './App.css'
import { ImportExcelComponent } from './reading/components/ImportExcelComponent'
import ShowDocComponent from './reading/components/ShowDocComponent'
import { ReadingContextProvider } from './reading/context/ReadingContextProvider'
import ReadingPage from './reading/Pages/ReadingPage'


function App() {
  return (
    <>
    <ReadingContextProvider>
      <ReadingPage/>
      {/* <ShowDocComponent/> */}
      {/* <ImportExcelComponent></ImportExcelComponent> */}
      </ReadingContextProvider>
    </>
  )
}

export default App
