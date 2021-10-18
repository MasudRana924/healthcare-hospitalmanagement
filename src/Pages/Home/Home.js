import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Doctors from './Doctors/Doctors';
import HealthPlanes from './HealthPlanes/HealthPlanes';
import Hospitality from './Hospitality/Hospitality';

const Home = () => {
    return (
         <>
         <Banner></Banner>
         <Services></Services>
         <HealthPlanes></HealthPlanes>
         <Doctors></Doctors>
         <Hospitality></Hospitality>
         </>
    );
};

export default Home;