import { useState } from 'react'
import Header from './components/Header'
import ListingBody from './components/ListingBody'
import { ContextCounterProduct } from './utils/context-product';

function App() {

const [contextProductCount, setContextProductCount] = useState<number>(0);

  return (
    <>
      <ContextCounterProduct.Provider value={ {contextProductCount, setContextProductCount} }>
      <Header />
      <ListingBody />
      </ContextCounterProduct.Provider>
    </>
  )
}

export default App
