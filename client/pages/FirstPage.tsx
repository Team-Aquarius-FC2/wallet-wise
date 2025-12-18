import { Form } from '../components/groups-overview/Forms.tsx';
import { Button } from '../components/groups-overview/Buttons.tsx';
import {List} from "../components/groups-overview/List.tsx";
import { Plus } from 'lucide-react';



//Fixing the type later
// interface GroupItems{
//     groupName:string;
//     members:string [];
//     amount:number
// }

 export const FirstPage = ({data}) => {
  return (
    <div>
      <div>
        <Form />
        <div> </div>
        <div className='flex justify-center'>
          <Button
            className='flex items-center gap-2 bg-[#3A7FE5] text-white px-4 py-2 rounded font-bold'
            name='Create New Group'
            variant='ho'
            isActive={true}
            onClick={() => console.log('Button Click Success!')}
            plusIcon={<Plus />}
            route='/create-group'
          />
        </div>
        <h2 className='font-bold text-4 pl-3 mt-4 mb-4'>All groups</h2>
        <div>
          <div className='flex flex-col justify-center items-center gap-3'>
            <List data ={data} />
          </div>
          
        </div>
      </div>
    </div>
  );
};

// export default FirstPage;