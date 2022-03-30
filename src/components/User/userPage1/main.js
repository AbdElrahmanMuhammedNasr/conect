import React, {useState } from 'react'
import image from '../../../assest/1.svg'
import arrg from '../../../assest/arrg.svg'
import video from '../../../assest/intro.mp4'
import { useNavigate } from "react-router-dom";


export const Main = ()=>{
    let navigate = useNavigate();
    const [item , setItem] = useState([
        {
            pathname:'client',
            name:'Client',
            dec:'Customize any part of our components to match your design needs'
        }, {
            pathname:'customer',
            name:'Customer',
            dec:'Customize any part of our components to match your design needs'
        }, {
            pathname:'x',
            name:'Client',
            dec:'Customize any part of our components to match your design needs'
        }, {
            pathname:'v',
            name:'Client',
            dec:'Customize any part of our components to match your design needs'
        }, {
            pathname:'n',
            name:'Client',
            dec:'Customize any part of our components to match your design needs'
        }, {
            pathname:'h',
            name:'Client',
            dec:'Customize any part of our components to match your design needs'
        },
    ])

    const goTo =(event , path)=>{
        navigate('/details/'+path)

    }
    return (
        <>
        {/* <div className="" style={{width:'90%',height:'auto',margin:'auto', borderRadius:'20px',border:'2px solid #6c757d'}}> */}
        {/* <div className="" style={{width:'90%',height:'auto',margin:'auto', borderRadius:'20px',padding:'20px' ,backgroundColor:'#e3e2e2', boxShadow:'5px 5px 30px #6c6a6a', overflow:'hidden'}}> */}
        <div className="" style={{width:'90%',height:'auto',margin:'auto', borderRadius:'20px'}}>
            
            <div className="row">
                <div className="col-lg-7 col-sm-12">
                    <div  style={{margin:'10% 0px',color:'#2d3748'}}>
                        <h1 style={{fontSize:'3.5rem',fontStyle:'bold',fontWeight:'700'}}>Turn your Business </h1>
                        <h1 style={{fontSize:'3.5rem',fontStyle:'bold',fontWeight:'700'}}>into a <span style={{color: "#00ab55"}}> success </span> mode.</h1>
                    </div>
                      <p className="text-muted"> 
                            Conect will make your  look for  modern and professional people for saving you time.
                     </p>
                </div>

                 <div className="col-5 d-none d-sm-block" style={{backgroundImage:`url(`+image+`)`,backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}>
                 {/* <img style={{width: '102%',height: '245%'}} src={image}  class="d-inline-block align-text-top" /> */}
                </div>
            </div>
        </div>

{/*  end part one */}
{/*  start part 2 */}
        <div className='' style={{backgroundColor:'', margin:'50px 0px'}}>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" src={video} allowfullscreen autoplay></iframe>
            </div>

        </div>

{/* end part 2 */}

{/* start part 3 */}

<div class="container">
    <div className="row align-items-center justify-content-center">
        <h1  style={{fontSize:'2.5rem',fontStyle:'bold',fontWeight:'700'}}>Get your help for all kinds of businesses </h1>
        <img style={{width: '60%',height: '50%'}} src={arrg}  class="d-inline-block align-text-top" />
    </div>
</div>
{/* end part 3 */}


<br/>
{/* start part 4 */}
<div className="container">
    <div className="row align-items-center">
            {
                // , margin:'20px 10px'
                item.map((i)=>{
                    return (
                        <div onClick={(event)=>goTo(event,i.pathname)}  className="col-lg-4 col-md-6 col-sm-6 col-xs-12" style={{cursor:'pointer',padding:'15px'}}>
                        <div>
                            <div style={{display: 'flex',position: 'relative',alignItems:'center','justifyContent': 'center',borderRadius:'50%', backgroundColor:'#00ab55', color:'white', width:'50px', height:'50px'}}>
                                <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                <path  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                                </svg>
                            </div>
                         <h6  style={{fontSize:'1.25rem', fontWeight:'550'}}> {i.name}</h6> 
                        <p className="text-muted">{i.dec}</p>
                        </div>


                    </div>
                    )
                })
            }

        
    </div>
</div>
{/* end part 4 */}

        </>
    )
}