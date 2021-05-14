import React, { useContext } from 'react';
import ISSContext from '../context/ISSContext';
import useTimer from '../effects/useTimer';

const FIVE_SECONDS = 5000;

function PeopleInSpace() {
  const { peopleInSpace, fetchPeopleInSpace } = useContext(ISSContext);

  useTimer(fetchPeopleInSpace, FIVE_SECONDS);

  return (
    <section className="people-in-space">
      <span>{`Atualmente há ${peopleInSpace.length} pessoas no espaço`}</span>
      <ul className="people-list">
        {peopleInSpace.map(({ name }) => <li key={ name }>{name}</li>)}
      </ul>
    </section>
  );
}

export default PeopleInSpace;
