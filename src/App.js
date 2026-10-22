import logo from './logo.svg';
import './App.css';
import LoginPage from './LoginPage';
import { createContext ,useContext} from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Dashboard from './Dashboard';
import CreateComapny from './CreateCompany';
import ForgetPassword from './ForgetPassword';


import NewRegistration from './NewRegstration';
import { Router,createBrowserRouter,BrowserRouter, RouterProvider } from 'react-router-dom';
import CompanyList from './CompanyList';
import DeleteCompany from './DeleteCompany';
import Company from './Company';
export const Mycontext =createContext()
function App() {
const [data, setdata] = useState(() => {
  try {
    const store = localStorage.getItem('data_form');
    return store ? JSON.parse(store) : [];
  } catch {
    return [];
  }
});
useEffect(() => {
  localStorage.setItem('data_form', JSON.stringify(data));
}, [data]);
const [myCompany,setmyCompany]=useState()

const accountCategory = [
  "Sundry Debtors",
  "Sundry Creditors",
  "Cash-in-Hand",
  "Bank Accounts",
  "Direct Expenses",
  "Indirect Expenses",
  "Direct Income",
  "Indirect Income",
  "Sales Account",
  "Purchase Account",
  "Capital Account",
  "Loans & Advances",
  "Current Assets",
  "Fixed Assets",
  "Duties & Taxes",
  "Investments",
  "Misc Expenses",
  "Stock-in-Hand",
  "Suspense Account"
];
const gstRegistrationType = [
  "Registered",
  "Unregistered",
  "Composition",
  "Consumer",
  "Overseas",
  "SEZ",
  "Deemed Export",
  "Exempted",
  "Government Department",
  "Tax Deductor",
  "Tax Collector"
];
const unit = ["Nos","PCS","Box","Pack","Dozen","Kg","Gram","Litre","ML","Meter","CM","MM","Feet","Inch","Bag","Bottle","Can","Carton","Pair","Roll","Set","Ton","Quintal","Tray","Jar","Tablet","Strip"];
const taxRate = ["0%","5%","12%","18%","28%"];
   const [register,setregister]=useState({fullName:"",userName:"",email:"",mobile:"",passward:"",confirmPassward:"",secQues1:"",secQues2:"",secQues3:"",secQues4:""
   });
   const defaultDate ="01-04-2026"
   const [company,setcompany]=useState({companyName:"",gstin:"",email:"",mobile:"",Date:defaultDate,fy:`${defaultDate.slice(6, 10)}-${Number(defaultDate.slice(8, 10)) + 1}`,panNo:"",address:"",country:"",state:""})
   const countryStateData = { India: ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi"], USA: ["California", "Texas", "Florida", "New York", "Illinois", "Washington", "Ohio", "Georgia", "Arizona", "Colorado"], Canada: ["Ontario", "Quebec", "British Columbia", "Alberta", "Manitoba", "Saskatchewan", "Nova Scotia"], Australia: ["New South Wales", "Victoria", "Queensland", "South Australia", "Western Australia", "Tasmania"], Germany: ["Bavaria", "Berlin", "Hamburg", "Hesse", "Saxony", "Brandenburg"], Japan: ["Tokyo", "Osaka", "Kyoto", "Hokkaido", "Okinawa", "Hiroshima"], UAE: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Fujairah"] };

  const [login, setlogin]=useState({user:"", passward:""})
const [account ,setaccount ]=useState({name:"",alias:"",category:"",opening:"",address:"",country:"",state:"",type:"",gstin:"",mobile:"",mail:""})
const [screen, setscreen]=useState({home:true,sales:false,item:false,account:false})
const [item,setitem] =useState({name:"",alias:"",category:"",unit:"",tax:"",hsn:"",opstock:"",opvalue:"",sprice:"",pprice:"",des:""})
  const router = createBrowserRouter([
    {path:'/',
  element:<LoginPage/>

},
    {
path:'/NewRegistration',
element:<NewRegistration/>
  },
     {
path:'/Dashboard',
element:<Dashboard/>
  },
  {path: '/CreateCompany',
element:<CreateComapny/>
  },
  {path:'/CompanyList',
    element:<CompanyList/>
},
{
  path:'/DeleteCompany',
    element:<DeleteCompany/>
},
{path:'/ForgetPassword',
  element:<ForgetPassword/>

}
,{
  path:'/Company',
  element:<Company/>
}


])
  return (
    <div className="App">
      <Mycontext.Provider value={{login,setlogin,register,setregister,data,setdata,countryStateData,company,setcompany,myCompany,setmyCompany,account,setaccount,accountCategory,gstRegistrationType,screen,setscreen
        ,unit,taxRate,item,setitem
      }}>
 
<RouterProvider router={router} />
      </Mycontext.Provider>
     
    </div>
  );
}

export default App;
