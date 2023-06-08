import React from 'react'
import Admin_nav from './Admin_nav';
function Admin_users() {
    return (
        <>
            <Admin_nav />
            <div class="container mt-3">
                <h5 class="fw-bold">Search by Date</h5>
                <input class="p-3 rounded" type="date" id="date-picker" />
                <h4 class="mt-4">List of the appointment and lab test list :</h4>
            </div>
        </>
    )
}

export default Admin_users
