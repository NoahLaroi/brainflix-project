import search from "../../assets/icons/search.svg";
import mojahed from "../../assets/images/Mohan-muruge.jpg";
function SearchSection() {
  return (
    <section className="searchSectionContainer">
      <div className="searchSection">
        <img src={search} alt="maginfying glass" />
        <div>
          <input className="searchBar" type="search" placeholder="Search" />
        </div>
      </div>
      <img src={mojahed} alt="some random guy" className="mojahed" />
    </section>
  );
}
export default SearchSection;
