import { useContext } from 'react';
import './styles.css';
import { ContextCounterProduct } from '../../utils/context-product';

export default function Header() {

  const { contextProductCount} = useContext(ContextCounterProduct);

  return(
    <header>
        <nav className='ds-container'>
            <h1>DSFilter</h1>
            <p>{contextProductCount} produto(s)</p>
        </nav>
    </header>
  );
}