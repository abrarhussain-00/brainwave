//==========Component Imports==========
import Navigation from './components/Navigation';
import Home  from './components/Home';
import  Emails  from './components/Emails';
import ProductDescription from './components/ProductDescription';
import  Tweets  from './components/Tweets';
import  Seo  from './components/Seo';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product-description' element={<ProductDescription/>}/>
        <Route path='/cold-emails' element={<Emails/>}/>
        <Route path='/tweets' element={<Tweets/>}/>
        <Route path='/seo' element={<Seo/>}/>
      </Routes>
    </div>
  );
}

export default App;
