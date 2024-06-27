import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";


const Home = () => {

    const allCoffee = useLoaderData();

    const [coffees, setCoffees] = useState(allCoffee);

    return (
        <div className="bg-white">
            <h3 className="text-5xl text-red-700 text-center">This is Home</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto py-20">
                {
                    coffees.map(coffee => <CoffeeCard coffee={coffee} coffees={coffees} setCoffees={setCoffees} key={coffee._id}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;