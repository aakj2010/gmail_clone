import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import './App.css';
import { ToggleProvider } from './components/Context/ToggleContext';
import Portal from './components/portal/Portal';
import Inbox from './components/pages/Inbox'
import Starred from './components/pages/Starred';
import Sent from './components/pages/Sent';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ToggleProvider>
          <Routes>
            <Route path='/' element={<Portal />}>
              <Route exact={true} path='inbox' element={<Inbox />} />
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
