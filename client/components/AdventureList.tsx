import { Navigate } from "react-router-dom";

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
    start_date: number,
    end_date: number,
    created_by: number, 

}

//! We can use map later to render the child <div> for this components
//We are passing data as props from the App component, and then rendering 
 const AdventureList = ({ data }: ListProps) => {
    return(

    //Add on click button 
        <div>
            {data.map((item)=>(
                <div key={item.id} className="flex justify-between items-center rounded-[10px] border border-[#DEDEDE] bg-white text-black w-80 h-15 p-2 font-semibold " >
                    <div className="text-[16px]"> {item.groupName}  </div>
                    <div className="text-[14px] text-[#8F8F8F] justify-left font-medium">{`${item.members.length} members`}</div>
                    <div className="flex justify-end items-center text-[16px]"> ${item.amount} </div> 
                </div>
            ))}
            
        </div>
    )
}

export default AdventureList;



//Previous Code
   {/* <div>
            <p className="text-[16px]"> {title}  </p>
               <p className="text-[14px text-[#8F8F8F] font-medium">{subtitle}</p> 
            </div>
            <div className="flex justify-end items-center align-text-"> 
              <p className="flex justify-end items-center align-text-  text-[16px]"> ${amount} </p>
            </div> */}