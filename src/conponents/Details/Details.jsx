import { useLoaderData } from "react-router-dom";

 
const Details = () => {
     const user = useLoaderData()
    
    return (
        <div className=" border-2 border-purple-500 rounded-xl w-4/12 mx-auto mt-32 p-4">
            <h4 className="font-semibold text-2xl text-purple-500"> {user.name}</h4>
            <p className="text-lg">{user.phone}</p>
            <p className="text-lg font-semibold">{user.website}</p>
            <p>{user.company.name}</p>
            <div>
            <a href="/users"> <button className="border rounded-2xl px-4 py-2 mt-4 bg-purple-200 font-semibold text-lg mb">Back</button> </a>
            </div>
        </div>
    );
};

export default Details;