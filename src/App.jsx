import Create from "./component/Create"
import Home from "./component/Home"

import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Update from "./component/Update"

const App = () => {

  return (
    <div>
         <Router>
               <Routes>
                     <Route path="/" element={<Home/>} />
                     <Route path="/create" element={<Create/>} />
                     <Route path={`/edit/:id`} element={<Update/>} />
               </Routes>
         </Router>
    </div>
  )
}

export default App
