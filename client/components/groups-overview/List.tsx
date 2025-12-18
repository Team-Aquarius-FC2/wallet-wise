// import { Navigate } from "react-router-dom";
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

interface ListProps {
  title: string;
  subtitle: string;
  amount: number;
  data: GroupItems[];
}

interface GroupItems {
  id: number;
  create_at: string;
  name: string;
  description: string;
  members: string[];
  start_date: number;
  end_date: number;
  created_by: number;
  amount: number; //This property is not on the original Adventures table but it was added in the query when we were summing the totals from the expense table
}

export const List = ({ data }: ListProps) => {
  const [select, setSelect] = useState<number | null>(null); //Using null because we will later assign it to a number

  const handleSelect = (id: number) => {
    console.log(select);
    setSelect((set) => (set === id ? null : id)); //Basically is the previous one you selected is pressed, it will close the details
  };

  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  const formattedDate = (today: string) => {
    return new Intl.DateTimeFormat(navigator.language, options).format(
      new Date(today)
    );
  };

  return (
    <div className=''>
      {data.map((item) => (
        // const open = (select === item.id)

        <div
          key={`key-${item.id}`}
          onClick={() => handleSelect(item.id)}
          className='frounded-[10px] border border-[#DEDEDE] bg-white text-black w-80 p-2 font-semibold'
        >
          {/* Close info to show */}
          <div className='text-[16px]'> {item.name} </div>
          {select !== item.id && (
            <div className='text-[14px] text-[#8F8F8F] justify-left font-medium'>{`${
              item.members ? item.members.length : []
            } members`}</div>
          )}
          <div className='flex justify-end items-center text-[16px]'>
            {' '}
            ${item.amount}{' '}
          </div>

          {/* Open info to show */}
          <div>
            {select === item.id && (
              <div className='mt-3 space-y-2 text-sm font-normal text-gray-700'>
                <div>Description: {item.description}</div>
                <div className='flex felx-col justify'>
                  Members: 
                  {item.members.map((el) => (
                    <span className=' justify-between items-center px-2 py-0.5 rounded-full bg-gray-200 text-gray-700 text-xs font-medium'>
                      {el}
                    </span>
                  ))}
                </div>
                <div>Start date: {formattedDate(item.start_date)}</div>
                <div>End date: {formattedDate(item.end_date)}</div>
                <div>Created by: {item.created_by}</div>

                <div className='flex justify-end gap-3'>
                  <button className='justify-right items-center px-2 py-0.5 rounded-full bg-gray-200 text-gray-700 text-xs font-medium hover:bg-blue-400 transition-colors'>
                    Details
                  </button>
                  <button  className=' justify-right items-center px-2 py-0.5 rounded-full bg-gray-200 text-gray-700 text-xs font-medium hover:bg-red-400 transition-colors'>
                    Add Expense
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
