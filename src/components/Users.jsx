import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {

    const loadedUsers = useLoaderData();

    const [users, setUsers] = useState(loadedUsers);


    const handleDeleteUser = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/user/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = users.filter(user => user._id !== id)
                            setUsers(remaining);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    let a = 1;

    return (
        <div>
            <h3>Users:{loadedUsers.length}</h3>
            <div className="overflow-x-auto">
                <table className="table max-w-6xl mx-auto">
                    {/* head */}
                    <thead>
                        <tr className="bg-cyan-800 text-white font-semibold text-base">
                            <th></th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Created Time</th>
                            <th>Last Sign In</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-cyan-500 text-black font-medium">
                        {
                            users.map(user => <tr key={user._id} className="hover:bg-cyan-400">
                                <th>{a++}</th>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.phone}</td>
                                <td>{user.address}</td>
                                <td>{user.email}</td>
                                <td>{user.createdTime}</td>
                                <td>{user.lastSignInTime}</td>
                                <td className="flex justify-center">
                                    <button onClick={() => handleDeleteUser(user._id)} className="btn font-bold text-white bg-red-700 border-none hover:bg-red-800">X</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;