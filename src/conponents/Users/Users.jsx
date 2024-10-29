import { useLoaderData } from "react-router-dom";
import User from "../User/User";

 

const Users = () => {
    const users = useLoaderData()

    return (
        <div  className="mt-14">
            <h4 className="font-bold text-2xl text-purple-500 mb-4">All Users : {users.length} </h4>
           <div className="grid grid-cols-3 gap-6"> 
           {
                users.map(user =><User user={user} key={user.id}></User> )
            }
           </div>
        </div>
    );
};

export default Users;