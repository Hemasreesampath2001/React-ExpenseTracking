import  './About.css';
import download from '../assets/image/download.jpg';
import { useNavigate } from 'react-router-dom';

const About=()=>{
  const navigate = useNavigate();
  const onClickHandler2 = () =>{
    navigate('/expense');
 }
 const onClickHandler1 = () =>{
  navigate('/table');
}
const onClickHandler3 = () =>{
  navigate('/login');
}
 
 

    return( 
       
      <div >
    <nav class="one3 navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#"><i class="fa fa-handshake-o" aria-hidden="true"/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class=" collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            {/* <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li> */}
            {/* <li class="nav-item active">
              <a class=" nav-link" >about</a>
            </li> */}
            
            
            <li class="nav-item active">
              <a class="nav-link disabled" onClick={onClickHandler2} >Expense</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link disabled" onClick={onClickHandler1}>table</a>
            </li>
            {/* <li class=" nav-item active">
              <a class="nav-link disabled" href="http://localhost:3000/">signup</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link disabled" href="http://localhost:3000/login">login</a>
            </li> */}
            <li className="nav-item active">
              <a className=" nav-link disabled"  onClick={onClickHandler3}>Logout    <i class="fa fa-sign-out"></i></a>
            </li>
          </ul>
          </div>
          </nav>
          <div class="four3 ">
                <div class=" row">
    <div class="two3 card mb-3">
      <img class="three3 card-img-top  top" src={download}   alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Budget tracking is the process of tracking expenses, receipts, and invoices so that a project can be completed within its allotted budget.  A project budget outlines the expected income, expenses, and profit for your project. Project budget tracking enables you to monitor how much of your budget has been spent over time, to see how much is remaining and course-correct when necessary.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    
  </div>
   </div>
         </div>
                )


}
export default About;