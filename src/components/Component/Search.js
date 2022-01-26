import search from '../../assets/icons/search.svg'
function SearchSection() {
    return (
        <div className='searchSection'>
         <img src={search} alt ='maginfying glass'/>
        <div>
            <input className='searchBar' type='search' placeholder='Search'/>
        </div>
        </div>
    )
} 
export default SearchSection