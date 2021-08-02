import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';




const Layout = (props) => {



    const [count, setCount] = useState(0);
    
    function IncrementCount() { setCount(count+1)}

    function ResetCount() { setCount(0) }

    function DecrementCount() {setCount( count - 1)}







    const LoginButtonText= 'Click me and See how many times you CLICKED ME';
    return (
        
        <div className="container py-4 mt-5 border border-light shadow-sm p-3 mb-5 bg-body rounded-3">
        <div className="p-3 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
        <h1 class="display-5 text-dark"> {props.name}</h1>
                  
           <hr/> 
            <Button onClick={IncrementCount} className="w-100 btn btn-lg btn-dark">Increment Count</Button>
            
            <hr/>
            <Button onClick={DecrementCount} className="w-100 btn btn-lg btn-dark">Decrement Count</Button>
            <hr/>
            <h2>
             You have Clicked <Badge bg="secondary">{count}</Badge> Times
            </h2> 
            <hr/>
            <Button onClick={ResetCount} className="w-100 btn btn-lg btn-dark">Reset Count</Button>
            
            
          </div>
        </div>
        
                <footer className="pt-3 mt-4 text-muted border-top">
                     Menna, 2021
                     </footer>
      </div>
      
    );
}

export default Layout;
