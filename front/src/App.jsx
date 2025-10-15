import React from 'react'
import { Routes, Route } from 'react-router'
import HomePage from './Pages/HomePage'
import CreatePage from './Pages/CreatePage'
import NoteDetailPage from './Pages/NoteDetailPage'
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div data-theme="forest">
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/create" element={ <CreatePage/> } />
        <Route path="/note/:id" element={ <NoteDetailPage/> } />
      </Routes>

    </div>
  )
}

export default App
