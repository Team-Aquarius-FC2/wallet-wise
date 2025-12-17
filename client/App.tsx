import { Routes, Route } from 'react-router-dom';
import { CreateNewGroup } from './components/CreateNewGroup.tsx';
import { GroupTripDetails } from './components/GroupTripDetails.tsx';
import FirstPage from "./components/FirstPage.tsx"
import { useEffect, useState } from 'react';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchFunc = async () => {
      try {
        const response = await fetch('http://localhost:3000/');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log(result);

        setData(result);
      } catch (error) {
        console.error('Error getting the information', error);
      }
    };

    fetchFunc();
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/create-group' element={<CreateNewGroup />} />
        <Route path='/' element={<FirstPage data={data} />} />
        <Route path='/trip-name' element={<GroupTripDetails />} />
      </Routes>
    </div>
  );
}

//Database--Integration
// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//           <Routes>
//             <Route path="/create-adventure" element={<CreateNewGroup />}/>
//             <Route path="/" element={<FirstPage/>}/>
//             <Route path="/trip-name" element={<GroupTripDetails/>}>
//               <Route index element={<Navigate to="expenses" replace />} />
//               <Route path="expenses" element={<Expenses />} />
//               <Route path="balances" element={<Balances />} />
//             </Route>
//             <Route path="/adventure-details" element={<AddExpense/>}/>
//           </Routes>
//       </BrowserRouter>
//   </div>
//   )
// }

export default App;

//searchGroup.tsx
// import { Search } from "lucide-react"  //lucide-react is the figma icons

// export const SearchGroup = () => {
//     return (
//         <div>
//             <Search />
//             <p>Group Trips </p>
//         </div>
//     )
// }
