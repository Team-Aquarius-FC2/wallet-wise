import { List } from "../components/groups-overview/List"
import { Button } from "../components/groups-overview/Buttons";
import { ChevronLeft, Plus } from "lucide-react";
import { Link } from "react-router-dom";


//do we also have to think about state here? ... or are we fine with hardcoding info?

export const GroupTripDetails = () => {
    return (
        <div>
            <div>
             <Link to="/create-group">
            <ChevronLeft />
            </Link>
                <List 
                    title="Trip to Paris"
                    subtitle="4 members"
                />
            </div>
            {/* //how do we make this so that it autopopulates with the group name that already exists? */}
            <div>
                <Button 
                    className="flex items-center gap-2 bg-[#3A7FE5] text-white px-4 py-2 rounded font-bold"
                    name= "Expenses" 
                    variant= "ho" 
                    isActive={true}
                    onClick={()=> console.log("Button Click Success!")}
                />
                <Button 
                    className="flex items-center gap-2 bg-[#3A7FE5] text-white px-4 py-2 rounded font-bold"
                    name= "Balances" 
                    variant= "ho" 
                    isActive={true}
                    onClick={()=> console.log("Button Click Success!")}
                />
                {/* by clicking on balances will we route to a new page toe list balance info?... more routing required? And should another page be -esm */}
            </div>
            <div>
                <List 
                    title="Groceries"
                    subtitle= "Paid by you"
                    amount= {250}
                />
                <List 
                    title="Dinner at restaurant"
                    subtitle= "Paid by Erika"
                    amount= {0}
                />
                <List 
                    title="Flights"
                    subtitle= "Paid by Arsy"
                    amount= {1500}
                />
                <List 
                    title="Hotel Booking"
                    subtitle= "Paid by youErika"
                    amount= {600}
                />
            </div>
        </div>
    )
}


//Database-Integration

// import { Button } from "../components/groups-overview/Buttons";
// import { ChevronLeft, Plus } from "lucide-react";
// import { Link, Outlet } from "react-router-dom";


// //do we also have to think about state here? ... or are we fine with hardcoding info?

// export const GroupTripDetails = () => {
//     return (
//         <div>
//             <div className="relative w-full text-xl ">
//                 <Link to="/" className="absolute left px-4 py-2 pt-4 ">
//                 <ChevronLeft />
//                 </Link>
//                 <h1 className="text-center font-medium pt-4">Adventure Details</h1>
//             </div>
//                 <div className="border-none">
//                     <h1 className="pl-4 font-bold pt-4 text-[19px]">Trip to California</h1>
//                     <h2 className="text-4 mb-4 px-4 pl-4 text-[14px] font-medium text-grey-400">5 members</h2>             
//                 </div>
//             <div className="flex flex-col items-center w-full mt-4">
//                   <div className="flex gap-2 justify-center w-full">
//                 <Button 
//                     className="flex items-center gap-2 bg-[#3A7FE5] text-white px-4 py-2 rounded font-bold w-35 justify-center"
//                     name="Expenses"
//                     variant="ho"
//                     isActive={true}
//                     onClick={() => console.log("Button Click Success!")} route={"expenses"}                />
//                 <Button 
//                     className="flex items-center gap-2 bg-[#3A7FE5] text-white px-4 py-2 rounded font-bold w-35 justify-center"
//                     name="Balances"
//                     variant="ho"
//                     isActive={true}
//                     onClick={() => console.log("Button Click Success!")} route={"balances"}                />
//                 {/* by clicking on balances will we route to a new page toe list balance info?... more routing required? And should another page be -esm */}
//                   </div>
//                   <Outlet />
//             </div>
//             <Link to="/adventure-details">
//             <div className="flex justify-center items-center  bg-[#3A7FE5] w-15 h-15 rounded-[30px] ml-70 mt-40 text-white ">
//                 <Plus  />
//             </div>
//             </Link>
//         </div>
//     )
// }
