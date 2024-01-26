import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Spinner from './components/Spinner';
import {apiUrl,filterData} from './data';
import {useState, useEffect} from 'react';
import {toast} from 'react-toastify';


function App() {
  const [loading,setLoading]=useState(true);
  const [courses,setCourses]=useState(null);
  const [category, setCategory]=useState(filterData[0].title);
  async function fetchData(){
    setLoading(true);
    try{
      let response=await fetch(apiUrl);
      let output =await response.json();
      setCourses(output.data);
    }
    catch(error){
         toast.error("Network issue");
    }
    setLoading(false);
  }

useEffect(()=>{
  fetchData();
},[]);


  return (
    <div className="bg-blue-300 min-h-screen flex flex-col ">
      <div >
          <Navbar/>
      </div>
      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory}/>
      </div>
      {/*if loading is taking place then show loading sign else data. */}
      <div className="w-11/13 flex max-w-[1200px] mx-auto flex flex-wrap  justify-center item-center min-h-[50vh]" >
      {
        loading ?(<Spinner/>):(<Cards courses={courses} category={category}/>)
      }
      
      </div>
      </div>

  );
};

export default App;
