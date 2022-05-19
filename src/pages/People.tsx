import React, { useEffect, useState } from 'react';
import { Params, useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import User from '../components/User';
import { ISpecies } from '../helpers/interfaces/ISpecies';
import { TSpeciesProp } from '../helpers/types/TSpeciesProp';
import { getUser } from '../services/getUser';

const People = ({ species }: TSpeciesProp): JSX.Element => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [specieName, setSpecieName] = useState<string | undefined>('');
    const [people, setPeople] = useState<string | undefined>('');
    const [userName, setUserName] = useState<string | undefined>('');

    const params: Params<string> = useParams();

    useEffect(() => {
        const specie: ISpecies | undefined = species.find(({ name }) => name === params.specieId);
        setSpecieName(specie?.name);
        setPeople(specie?.people ? specie?.people[0] : undefined);

        if (people) {
            const user: Promise<any> = getUser(people);
            user.then((userName: string) => {
                setUserName(userName);
                setIsLoaded(true);
            })
                .catch(() => {
                    alert('Nekaj ni vredu!');
                })
                .finally(() => {
                    setIsLoaded(true);
                });
        }
    }, [species, people]);

    if (!isLoaded) {
        return <Loader />;
    }

    return <User specieName={specieName} userName={userName} />;
};

export default People;
