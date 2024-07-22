import React from 'react';
import { useSearch } from '../contexts/Search';
import PropertyCard from '../components/cards/PropertyCard';
import Footer from '../components/Footer';

const SearchResults = () => {
  const [values] = useSearch();

  return (
    <div>
      <div className="row">
        {values.results.length > 0 ? (
          values.results.map((p) => (
            <div key={property._id} className="col-md-4">
              <PropertyCard property={p} />
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SearchResults;
