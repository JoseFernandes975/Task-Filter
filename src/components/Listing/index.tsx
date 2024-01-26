import { ProductDTO } from '../../models/products';
import './styles.css';

type Props = {
    products?: ProductDTO[];
}

export default function Listing({products}: Props) {
    return(
     <div className='ds-listing-container'>
        <div className='ds-listing-products-container'>

         {
            products &&
            products.map(x => <div key={x.id} className='ds-product'> <p>{x.name}</p> <h2>R$ {x.price}</h2></div> )
         }

        </div>

     </div>
    );
}