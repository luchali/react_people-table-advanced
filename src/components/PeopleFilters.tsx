import React from 'react';
import { NameFilter } from './NameFilter';
import { SetURLSearchParams } from 'react-router-dom';
import { CenturyFilter } from './CenturyFilter';
import { SexFilter } from './SexFilter';

type PeopleFiltersProps = {
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
};

export const PeopleFilters: React.FC<PeopleFiltersProps> = ({
  searchParams,
  setSearchParams,
}) => {
  const handleReset = () => {
    const resetParams = new URLSearchParams(searchParams);

    resetParams.delete('query');
    resetParams.delete('centuries');
    resetParams.delete('sex');

    setSearchParams(resetParams);
  };

  return (
    <nav className="panel">
      <p className="panel-heading">Filters</p>

      <SexFilter
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />

      <div className="panel-block">
        <NameFilter
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </div>

      <div className="panel-block">
        <div className="level is-flex-grow-1 is-mobile" data-cy="CenturyFilter">
          <div className="level-left">
            <CenturyFilter
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
          </div>
        </div>
      </div>

      <div className="panel-block">
        <a
          className="button is-link is-outlined is-fullwidth"
          href="#/people"
          onClick={handleReset}
        >
          Reset all filters
        </a>
      </div>
    </nav>
  );
};
