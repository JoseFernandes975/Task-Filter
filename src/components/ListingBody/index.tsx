import Filter from '../Filter';
import Listing from '../Listing';
import './styles.css';

export default function ListingBody(){
    return(
     <main>
        <section id='ds-listing-body-section' className='ds-container'>
          <Filter />

          <Listing />
        </section>
     </main>
    );
}