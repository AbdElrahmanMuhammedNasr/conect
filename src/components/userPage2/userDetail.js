import React ,{useState} from  'react'
import {
    useSearchParams,
    useLocation
  } from "react-router-dom";

export const UserDetails =()=>{
  let location = useLocation();
  let [params] = useSearchParams();

    const [client , setClient] = useState([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])
    const [appear , setAppear] = useState(false)
    const [index , setIndex] = useState(null)


    const showDetails = (event , index)=>{
            setAppear(true)
            setIndex(index)
    }
    const disapearDetails = (event)=>{
        setAppear(false)

    }



    function block () {
        // console.log(location)
      return  (
        <div className="row align-items-center" style ={{backgroundColor:''}}> 
        {
            client.map((c,i)=>{
                    return (
                        <>

                            <div onClick={(event)=>showDetails(event,i)}  className="col-lg-4 col-md-6 col-sm-6 col-xs-12" style={{cursor:'pointer'}}>
                                <div className="card text-white bg-success mb-3" >
                                            <div className="card-header">Customer {i}   </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Mohamed Ali</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                </div>

                            </div>
                            {
                                (i == index && appear) ?  <div className="col-lg-12" >
                                    <div className="card text-center" style={{backgroundColor:'#e3e2e2',boxShadow:'5px 5px 30px #6c6a6a', margin:'10px 0px '}}>
                                            <div className="card-header">

                                                <div className='float-left'>
                                                    <p >Customer {index}</p>
                                                </div>

                                                <div className='float-right' onClick={(event)=>disapearDetails(event)}>
                                                    <i className='fa fa-times' style={{cursor:'pointer'}} ></i>
                                                </div>
                                                
                                                <div className='clear-fix'></div>
                                            </div>

                                            
                                            <div className="card-body">
                                                <h5 className="card-title">Special title treatment</h5>
                                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                            </div>
                                            <div className="card-footer text-muted">
                                                2 days ago
                                            </div>
                                    </div>

                                 </div>:null
                             }

                            </>  
                           
                    )
                })
        }
        </div>
      )
    }

     function side () {
         return (
             <div className="row" >
                <div className="col-9">  fdfjdkfjdkfjdkfjdkfj</div>
                <div className='col-3' style={{height:'80vh', overflow:'auto'}}>
                    {
                        client.map((c,i)=>{
                                    return (
                                        <div key={i}  className="" style={{cursor:'pointer'}}>
                                            <div className="card text-white bg-success mb-3" >
                                                        <div className="card-header">Customer {i}   </div>
                                                        <div className="card-body">
                                                            <h5 className="card-title">Mohamed Ali</h5>
                                                            <p className="card-text">Some quick  card's content.</p>
                                                        </div>
                                            </div>

                                        </div>
                                    )
                                })

                    }

                </div>
             </div>
         )

         
    }

    return (
        <div className="container"> 
             <h1 style={{fontSize:'1.5rem',fontWeight:'500'}}>Client Customer  <apan style={{fontSize:'1.2rem'}}>120 results</apan>  </h1>

        {   
                    block()
                    // side()
          
        }
      
        </div>

    )
}