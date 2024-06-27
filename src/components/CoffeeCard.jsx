import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, chef, price, photo } = coffee;

    const handleDeleteCoffee = id => {
        console.log(id);

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
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee item has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(coffee=> coffee._id !== id)
                            setCoffees(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div className="hero-content flex justify-between bg-[#F5F4F1] w-full rounded-lg">
            <img src={photo} className="w-36 h-52 rounded-lg " />
            <div>
                <h3><span className="text-lg font-semibold text-black">Name: </span>{name}</h3>
                <h3><span className="text-lg font-semibold text-black">Chef: </span>{chef}</h3>
                <h3><span className="text-lg font-semibold text-black">Price: </span>{price}</h3>
            </div>
            <div>
                <div className="join join-vertical space-y-2">
                    <button className="btn bg-[#D2B48C] text-white border-none"><FaEye className="w-5 h-5"></FaEye></button>
                    <Link to={`/update/${_id}`}>
                        <button className="btn bg-[#3C393B] text-white border-none"><FaPen className="w-5 h-5"></FaPen></button>
                    </Link>
                    <button onClick={() => handleDeleteCoffee(_id)} className="btn bg-[#EA4744] text-white border-none"><MdDelete className="w-5 h-5"></MdDelete></button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;