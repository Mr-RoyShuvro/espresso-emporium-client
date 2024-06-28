import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {

    const { createUser} = useContext(AuthContext);

    const handleSignUpUser = e => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.first.value;
        const lastName = form.last.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(firstName, lastName, phone, address, email, password);

        createUser(email, password)
        .then(result =>{
            console.log(result.user);

            const createdTime = result.user.metadata.creationTime;
            const user = {firstName, lastName, phone, address, email, password, createdTime};
            /* Store user in database */
            fetch('http://localhost:5000/user', {
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res=> res.json())
            .then(data=>{
                console.log(data);

                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Added Item Successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })
        })
        .catch(error=>{
            console.error(error);
        })
    }

    return (
        <div className="bg-base-200 min-h-screen">
            <h1 className="text-5xl font-bold text-center py-5">Sign Up!</h1>
            <div className="hero-content max-w-6xl mx-auto">
                <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUpUser} className="card-body">
                        <div className="flex flex-col md:gap-5 md:flex-row">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input type="text" name="first" placeholder="First Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input type="text" name="last" placeholder="Last Name" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="flex flex-col md:gap-5 md:flex-row">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="text" name="phone" placeholder="Phone" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" name="address" placeholder="Address" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;