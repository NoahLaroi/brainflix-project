import search from "../../assets/icons/search.svg";
import Mohan from "./Mohan";
function SearchSection() {
  return (
    <section className="searchSectionContainer">
      <div className="searchSection">
        <img src={search} alt="maginfying glass" />
        <div>
          <input className="searchBar" type="search" placeholder="Search" />
        </div>
      </div>
      <Mohan />
    </section>
  );
}
export default SearchSection;
