import { PremimunVideo } from "../components/premimumVideo"

export const PrimumShowContainer=(props)=>{
    return(
        <>
        <div className="row">
        <div className="col col-md-12">
        <PremimunVideo/>
        </div>
        <div className="col col-md-12">
        <PremimunVideo/>
        </div>
        <div className="col col-md-12">
        <PremimunVideo/>
        </div>

        </div>
         <div className="row" style={{marginTop:'20px',textAlign: 'end',marginLeft: '50px',marginBottom:'40px'}}>
         <div className='col col-md-11'>
             <button  className="btn" type="submit" style={{padding:'10px',borderRadius:'20px',color:'#fff',backgroundColor:'#532c73',width:'100%'}}>Explore Vids</button>
         
         </div>

     </div>
     </>
    )
}