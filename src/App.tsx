import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Top from './ui/Top';
import CreateThread from './ui/CreateThread';
import PostsList from './ui/PostsList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/thread" element={<Top />} />
        <Route path="/thread/new" element={<CreateThread />} />
        <Route path="/thread/:threadId" element={<PostsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
