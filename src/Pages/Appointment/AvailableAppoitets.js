import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';
import Bookingodals from './Bookingodals';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AvailableAppoitets = ({ date, setDate }) => {
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');

    const {data:services, isLoading, refetch} = useQuery(['available', formattedDate], ()=> fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
            )

            if(isLoading){
                return <Loading></Loading>
            }


    return (
        <div className=" mx-auto">
            <h2 className="text-primary text-center text-xl font-bold py-8"> Available appoitments on {format(date, 'PP')}</h2>
            <div className="grid lg:grid-cols-3 gap-5 items-center">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <Bookingodals
                treatment={treatment}
                date={date}
                refetch={refetch}
                setTreatment={setTreatment}>

            </Bookingodals>}
        </div>
    );
};

export default AvailableAppoitets;