import './styles.css'

export default function Filter() {
    return(
     <div className="ds-filter-container">
        <form>
         <input className='ds-mb20' type="text" placeholder='Preço mínimo' />
         <input className='ds-mb20' type="text" placeholder='Preço máximo'/>
         <button>Filtrar</button>
        </form>

     </div>
    );
}