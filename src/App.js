import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import './App.css';
import { ToggleProvider } from './components/Context/ToggleContext';
import Portal from './components/portal/Portal';
import Inbox from './components/pages/Inbox'
import Starred from './components/pages/Starred';
import Sent from './components/pages/Sent';
import '../src/components/header/MediaQuery.css'
import { HelmetProvider } from 'react-helmet-async';
import Important from './components/pages/Important';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <HelmetProvider>
          <ToggleProvider>
            <Routes>
              <Route path='/' element={<Portal />}>
                <Route path='' element={<Inbox />} />
                <Route path='starred' element={<Starred />} />
                <Route path='sent' element={<Sent />} />
                <Route path='snooze' element={<Sent />} />
                <Route path='drafts' element={<Sent />} />
                <Route path='important' element={<Important />} />
                <Route path='categories' element={<Sent />} />
              </Route>
            </Routes>
          </ToggleProvider>
        </HelmetProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
