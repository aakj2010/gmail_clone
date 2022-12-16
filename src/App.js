import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useContext, useState } from 'react'
import './App.css';
// import './components/header/MediaQuery.css'
import { ToggleProvider } from './components/Context/ToggleContext';
import ToggleContext from '../src/components/Context/ToggleContext'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Portal from './components/portal/Portal';
import Inbox from './components/pages/Inbox'
import Starred from './components/pages/Starred';
import Sent from './components/pages/Sent';
import { social } from '../src/components/data/Primary'

function App() {
  let context = useContext(ToggleContext)
  // console.log(context.query);
  const [query, setQuery] = useState("")
  const keys = ['Title', 'Company']
  // console.log(social.filter(item => keys.some(key => item[key].toLowerCase().includes(context.query))));

  // const search = (data) => {
  //   return data.filter((item) =>
  //     keys.some(key => item[key].toLowerCase().includes(context.query))
  //   )

  // const search = (data) => {
  //     return data.filter(item => item.Title.toLocaleLowerCase().includes(context.query) ||
  //       item.Company.toLocaleLowerCase().includes(context.query))
  //   }
  
  return (
    <div className="App">
      <BrowserRouter>
        <ToggleProvider>
          <Routes>
            <Route path='/' element={<Portal />}>
              <Route path='inbox' element={<Inbox />} />
              <Route path='starred' element={<Starred />} />
              <Route path='sent' element={<Sent />} />
            </Route>
          </Routes>
        </ToggleProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
