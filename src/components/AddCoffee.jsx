import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const price = form.price.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, chef, supplier, price, category, details, photo };
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Added Item Successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })
    }

    return (
        <div className="bg-white">
            <div className="bg-[#F4F3F0] max-w-6xl mx-auto">
                <h4 className="text-center text-3xl font-bold text-[#374151] py-10">Add New Item</h4>
                <p className="max-w-3xl mx-auto text-center">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form onSubmit={handleAddCoffee} className="card-body">
                    {/* form name and chef row */}
                    <div className="md:flex md:gap-6 md:mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-black text-lg font-semibold">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter coffee name" className="input input-bordered bg-white w-full" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-black text-lg font-semibold">Chef</span>
                            </label>
                            <input type="text" name="chef" placeholder="Enter coffee chef" className="input input-bordered bg-white w-full" required />
                        </div>
                    </div>
                    {/* form supplier and price row */}
                    <div className="md:flex md:gap-6 md:mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-black text-lg font-semibold">Supplier</span>
                            </label>
                            <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input input-bordered bg-white w-full" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-black text-lg font-semibold">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Enter coffee price" className="input input-bordered bg-white w-full" required />
                        </div>
                    </div>
                    {/* form category and details row */}
                    <div className="md:flex md:gap-6 md:mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-black text-lg font-semibold">Category</span>
                            </label>
                            <input type="text" name="category" placeholder="Enter coffee category" className="input input-bordered bg-white w-full" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-black text-lg font-semibold">Details</span>
                            </label>
                            <input type="text" name="details" placeholder="Enter coffee details" className="input input-bordered bg-white w-full" required />
                        </div>
                    </div>
                    {/* form photo row */}
                    <div className="form-control mb-6">
                        <label className="label">
                            <span className="label-text text-black text-lg font-semibold">Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered bg-white w-full" required />
                    </div>
                    {/* btn */}
                    <input type="submit" value="Add Coffee" className="btn mb-10 border-2 border-[#331A15] bg-[#D2B48C] text-[#331A15] hover:bg-[#331A15] hover:text-[#D2B48C] text-base font-semibold" />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;