

// // #3A7FE5

// interface ListProps {
//     title: string;
//     subtitle: string;
//     amount: number;
// }

// //! We can use map later to render the child <div> for this components
// export const List = ({title, subtitle, amount}: ListProps) => {
//     return(
//         <div className="flex justify-between items-center rounded-[10px] border border-[#DEDEDE] bg-white text-black w-80 h-15 p-2 font-semibold ">
//             <div>
//             <p className="text-[16px]"> {title}  </p>
//                <p className="text-[14px text-[#8F8F8F] font-medium">{subtitle}</p> 
//             </div>
//             <div className="flex justify-end items-center align-text-">
//               <p className="text-[16px]"> ${amount} </p>
//             </div>
//         </div>
//     )
// }


// //! We can use map later to render the child <div> for this components
// export const List = ({title, subtitle, amount}: ListProps) => {
//     return(
//         <div className="flex justify-between items-center rounded-[10px] border border-[#DEDEDE] bg-white text-black w-80 h-15 p-2 font-semibold ">
//             <div>
//             <p className="text-[16px]"> {title}  </p>
//                <p className="text-[14px text-[#8F8F8F] font-medium">{subtitle}</p> 
//             </div>
//             <div className="flex justify-end items-center align-text-">
//               <p className="text-[16px]"> ${amount} </p>
//             </div>
//         </div>
//     )
// }


//!ROSE
// import { Navigate } from "react-router-dom";
import { useState } from "react";

interface ListProps {
    title: string;
    subtitle: string;
    amount: number;
    data: GroupItems [];
}

interface GroupItems{
    id: number;
    create_at: string,
    groupName: string,
    description: string,
    members: string[],
    start_date: number,
    end_date: number,
    created_by: number, 


    amount:number,

}

 export const List = ({ data }: ListProps) => {

    const [select, setSelect ] = useState <number | null> (null) //Using null because we will later assign it to a number
    
    const handleSelect = (id:number)=>{
        console.log(select)
        setSelect((set)=>(set === id ? null : id)) //Basically is the previous one you selected is pressed, it will close the details
    }
    return(

    //Add on click button 
   // onClick={handleSelect(item.id)} 

    
        <div className="">
            {data.map((item)=>(
               // const open = (select === item.id)

                <div key={`key-${item.id}`}onClick={()=> handleSelect(item.id)} className="frounded-[10px] border border-[#DEDEDE] bg-white text-black w-80 p-2 font-semibold" >
                    
                    {/* Close info to show */}
                        <div className="text-[16px]"> {item.groupName}  </div>
                       { select !== item.id && <div className="text-[14px] text-[#8F8F8F] justify-left font-medium">{`${item.members.length} members`}</div>}
                       <div className="flex justify-end items-center text-[16px]"> ${item.amount} </div>
             
                    {/* Open info to show */}
                       <div>
                        {select === item.id && ( 
                            <div className="mt-3 border-t pt-3 text-sm text-gray-700 space-y-1">
                                <div>Description: {item.description}</div>
                                <div>Members: {item.members.map(el => <div>{el}</div>)}</div>
                                <div className="flex justify-between items-center">Start date:{item.start_date}</div>
                                <div>End date:{item.end_date}</div>
                                
                            </div>)}
                      </div>
                </div>
            
            ))}

        
        </div>
        
    
    )
}

//Containers
// rounded-[10px] border border-[#DEDEDE] bg-white text-black w-80 h-15 p-2 font-semibold 


//w-full rounded-lg border border-gray-200 p-4 bg-white
//flex justify-between items-start