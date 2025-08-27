import React from 'react';
import { NameFilter } from './NameFilter';
import { URLSearchParamsInit } from 'react-router-dom';

type PeopleFiltersProps = {
  searchParams: URLSearchParams;
  setSearchParams: (
    nextInit: URLSearchParamsInit,
    navigateOptions?: { replace?: boolean; state?: any },
  ) => void;
};

export const PeopleFilters: React.FC<PeopleFiltersProps> = (
  searchParams,
  setSearchParams,
) => {
  // const century = searchParams.getAll('centuries') || [];

  // const toggleCentury = (cent: string) => {
  //   const params = new URLSearchParams(searchParams);

  //   params.set('century', cent);
  //   setSearchParams(params);
  // };

  //   const visiblePeople = useMemo(() => {
  //   // фільтрація та сортування тут
  // }, [people, query, centuries, ...]);

  return (
    <nav className="panel">
      <p className="panel-heading">Filters</p>

      <p className="panel-tabs" data-cy="SexFilter">
        <a className="is-active" href="#/people">
          All
        </a>
        <a className="" href="#/people?sex=m">
          Male
        </a>
        <a className="" href="#/people?sex=f">
          Female
        </a>
      </p>

      <div className="panel-block">
        <NameFilter
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </div>

      <div className="panel-block">
        <div className="level is-flex-grow-1 is-mobile" data-cy="CenturyFilter">
          <div className="level-left">
            <a
              data-cy="century"
              className="button mr-1"
              href="#/people?centuries=16"
            >
              16
            </a>

            <a
              data-cy="century"
              className="button mr-1 is-info"
              href="#/people?centuries=17"
            >
              17
            </a>

            <a
              data-cy="century"
              className="button mr-1 is-info"
              href="#/people?centuries=18"
            >
              18
            </a>

            <a
              data-cy="century"
              className="button mr-1 is-info"
              href="#/people?centuries=19"
            >
              19
            </a>

            <a
              data-cy="century"
              className="button mr-1"
              href="#/people?centuries=20"
            >
              20
            </a>
          </div>

          <div className="level-right ml-4">
            <a
              data-cy="centuryALL"
              className="button is-success is-outlined"
              href="#/people"
            >
              All
            </a>
          </div>
        </div>
      </div>

      <div className="panel-block">
        <a className="button is-link is-outlined is-fullwidth" href="#/people">
          Reset all filters
        </a>
      </div>
    </nav>
  );
};
