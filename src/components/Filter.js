import app from '../App';
import React from 'react';
import './Filter.css';
import img from "./images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FiAlignJustify } from "react-icons/fi";
import { MdCancelPresentation } from "react-icons/md";

const Filter = (props) => {
  let filterData=props.filterData;
  let category=props.category;
  let setCategory=props.setCategory;

  function filterHandler(title){
   setCategory(title);   
  }

  return(
    <div className="body">
    <div className="   ">
   <nav>
      <ul className="nav-bar">
    <input type="checkbox" id="check"/>
      <span className="menu">
        {
            filterData.map((data)=>(//fun to get category which we clicked category
               <li> <button className={`  text-2xl text-white p-3 rounded-md bg-blue-950 hover:bg-opacity-50 border-2 ${category=== data.title ?"bg-opacity-60 border-white":"bg-opacity-40 border-transparent"}`} key={data.id} onClick={()=>filterHandler(data.title)}>{data.title}</button></li>
            ))
        }
    <label for="check" className="close-menu"><MdCancelPresentation />
</label>
   </span>
    <label for="check" className="open-menu"><FiAlignJustify /></label>
    </ul>
    </nav>
    </div>
    </div>
  )
}
export default Filter;