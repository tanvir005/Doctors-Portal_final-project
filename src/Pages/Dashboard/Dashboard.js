import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
  
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content text-center">
                {/* <!-- Page content here --> */}
                <h1 className='text-5xl text-secondary font-bold'>Dashboard</h1>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto lg:w-80 w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link className="font-bold uppercase text-primary" to="/dashboard">My Appointment</Link></li>
                    <li><Link className="font-bold uppercase text-primary" to="/dashboard/review">My Reviews</Link></li>
                    {admin && <li><Link className="font-bold uppercase text-primary" to="/dashboard/allusers">All Users</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;