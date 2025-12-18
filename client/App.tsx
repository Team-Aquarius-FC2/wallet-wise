// import { Form } from "./components/groups-overview/Forms";
// import { Button } from "./components/groups-overview/Buttons";
// import { List } from "./components/groups-overview/List"
// import { Plus } from "lucide-react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { CreateNewGroup } from "./pages/createNewGroup";
// import { GroupTripDetails } from "./pages/groupTripDetails";

// const FirstPage = () => {
//   return (
//     <div>
//       <div>
//           <Form/>
//           <div className="flex justify-center">
//             <Button 
//             className="flex items-center gap-2 bg-[#3A7FE5] text-white px-4 py-2 rounded font-bold"
//               name= "Create New Group" 
//               variant= "ho" 
//               isActive={true}
//               onClick={()=> console.log("Button Click Success!")}
//               plusIcon={<Plus />}
//               route="/create-group"
//             />
//           </div>
//           <h2 className="font-bold text-4 pl-3 mt-4 mb-4">All groups</h2>
//           <div>
//             <div className= 'flex flex-col justify-center items-center gap-3' >
//               <List
//                 title="Trip to Paris"
//                 subtitle= "4 members"
//                 amount= {1300}
//               />
//               <List
//                 title="Trip to Tokyo"
//                 subtitle= "3 members"
//                 amount= {2000}
//               />
//               <List
//                 title="Trip to Cartagena"
//                 subtitle= "7 members"
//                 amount= {4000}
//               />
//                 <List
//                 title="Trip to Islamabad"
//                 subtitle= "5 members"
//                 amount= {1800}
//               />
//             </div>
//           </div>
//         </div>
      
//     </div>
//       )
// }

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//           <Routes>
//             <Route path="/create-group" element={<CreateNewGroup />}/>
//             <Route path="/" element={<FirstPage/>}/>
//             <Route path="/trip-name" element={< GroupTripDetails/>} />
//           </Routes>
//       </BrowserRouter>
//   </div>
//   )
// }


// //Database--Integration
// // function App() {
// //   return (
// //     <div>
// //       <BrowserRouter>
// //           <Routes>
// //             <Route path="/create-adventure" element={<CreateNewGroup />}/>
// //             <Route path="/" element={<FirstPage/>}/>
// //             <Route path="/trip-name" element={<GroupTripDetails/>}>
// //               <Route index element={<Navigate to="expenses" replace />} />
// //               <Route path="expenses" element={<Expenses />} />
// //               <Route path="balances" element={<Balances />} />
// //             </Route>
// //             <Route path="/adventure-details" element={<AddExpense/>}/>
// //           </Routes>
// //       </BrowserRouter>
// //   </div>
// //   )
// // }

// export default App;

//!ROSE
import { Routes, Route } from 'react-router-dom';
import { CreateNewGroup } from './components/groups-overview/createNewGroup.tsx';
import { GroupTripDetails } from './pages/groupTripDetails.tsx';
import {FirstPage} from "./pages/FirstPage.tsx"
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


//<Route path="/create-adventure" element={<CreateNewGroup />}/>
//             <Route path="/" element={<FirstPage/>}/>
//             <Route path="/trip-name" element={<GroupTripDetails/>}>
//               <Route index element={<Navigate to="expenses" replace />} />
//               <Route path="expenses" element={<Expenses />} />
//               <Route path="balances" element={<Balances />} />
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
