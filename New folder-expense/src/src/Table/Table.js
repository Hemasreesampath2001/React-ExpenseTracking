import Expense from '../Expense/Expense';
import  './Table.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';



const Table=()=>{
  const [getList, setList] = useState([]);
  const navigate = useNavigate();
  const onClickHandler = () =>{
    navigate('/expense');
 }
 const onClickHandler2 = () =>{
  navigate('/about');
}
 const onClickHandler3 = () =>{
  navigate('/login');
}

const getListAPI = () => {
  axios.get(`http://localhost:3000/expense}`).then((result) => {
    setList(result.data);
  }).catch(() => {

  })
}
useEffect(() => {
  getListAPI();
}, [])



    return(  <div >
     
    <div className="row">
    <nav className="one5 navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"><i className="fa fa-handshake-o" aria-hidden="true"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className=" c" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li> */}
            <li className="nav-item active">
              <a className="nav-link" onClick={onClickHandler2}>About</a>
            </li>
            
            
            <li className="nav-item active">
              <a className="nav-link disabled" onClick={onClickHandler}>Expense</a>
            </li>
            {/* <li className="nav-item active">
              <a className="nav-link disabled"  >Table</a>
            </li> */}
            {/* <li className=" nav-item active">
              <a className="nav-link disabled" href="http://localhost:3000/">signup</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link disabled" href="http://localhost:3000/login">login</a>
            </li> */}
            <li className="nav-item active">
              <a className=" nav-link disabled"  onClick={onClickHandler3} >Logout    <i class="fa fa-sign-out"></i></a>
            </li>
          </ul>
          </div>
          </nav>
       <table className="two5 table ">
           <thead >
             <tr>
               <th scope="col" className="col-2">SI NO</th>
               <th scope="col"className="col-2">EXPENSE TITLE</th>
               <th scope="col"className="col-2">EXPENSE CATEGORY</th>
               <th scope="col"className="col-2">EXPENSE AMOUNT</th>
               <th scope="col"className="col-2">PAID BY</th>
               <th scope="col"className="col-2">DATE</th>
             </tr>
           </thead>
           <tbody  >
             <tr className=" col-2">  
               <th scope="row">1</th>
               <td>Mark</td>
               <td>Otto</td>
               <td>@mdo</td>
               <td>@mdo</td>
               <td>@mdo</td>
             </tr>
            
            
           </tbody>
         </table>

   
 </div>
</div>
      );


}
export default Table;