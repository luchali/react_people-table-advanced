import { PeopleFilters } from './PeopleFilters';
import { Loader } from './Loader';
import { PeopleTable } from './PeopleTable';
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { getPeople } from '../api';
import { Person } from '../types';

export const PeoplePage: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [people, setPeople] = useState<Person[]>();
  const [errorMessage, setErrorMessage] = useState('');
  const { slug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setIsLoading(true);
    setErrorMessage('');

    getPeople()
      .then((res: Person[]) => {
        setPeople(res);
        setIsLoading(false);
        if (res.length === 0) {
          setErrorMessage('There are no people on the server');
        }
      })
      .catch(() => {
        setErrorMessage('Something went wrong');
        setIsLoading(false);
      });
  }, []);

  const peopleExist = people !== undefined && people.length !== 0;

  return (
    <>
      <h1 className="title">People Page</h1>

      <div className="block">
        <div className="columns is-desktop is-flex-direction-row-reverse">
          {peopleExist && (
            <div className="column is-7-tablet is-narrow-desktop">
              <PeopleFilters
                searchParams={searchParams}
                setSearchParams={setSearchParams}
              />
            </div>
          )}

          <div className="column">
            <div className="box table-container">
              {isLoading && <Loader />}
              {errorMessage && (
                <p data-cy="peopleLoadingError">Something went wrong</p>
              )}

              {!isLoading && errorMessage && !peopleExist && (
                <p data-cy="noPeopleMessage">
                  There are no people on the server
                </p>
              )}

              <p>There are no people matching the current search criteria</p>

              {peopleExist && (
                <PeopleTable
                  people={people}
                  selectedSlug={slug}
                  searchParams={searchParams}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
