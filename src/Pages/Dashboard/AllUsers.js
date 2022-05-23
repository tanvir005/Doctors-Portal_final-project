import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
            authorization: `Barer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    const makeAdmin = email => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error(`You have no acccess to made an Admiral General`);
                }
                return res.json()})
            .then(data => {
                if(data.modifiedCount > 0){
                    refetch();
                    toast.success(`Successfully made an Admiral General`);
                }
                
               
            })
    };
    return (
        <div>
            <p>all users: {users.length}</p>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <th>{user.email}</th>
                                    <th>{user.role === 'admin' ?
                                        <button className="btn btn-xs btn-disabled bg-secondary text-white">Admin</button>
                                        :
                                        <button onClick={() => makeAdmin(user.email)} className='btn btn-xs'> Make admin</button>}</th>
                                    <th><button className='btn btn-xs'> remove user</button></th>
                                    <th>{user.treatment}</th>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;