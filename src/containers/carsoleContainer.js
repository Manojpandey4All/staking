import { Carosole } from "../components/Carsole"
import { Tittle } from "../components/tittleTab"

export const CarsoleContainer=(props)=>{
    return(<>
    <Tittle title='Sweet surprise with these NFT'/>
    <Carosole/>
    <div className="row" style={{marginTop:'20px',textAlign: 'end',marginLeft: '50px',marginBottom:'40px'}}>
            <div className='col col-md-11'>
                <button  className="btn" type="submit" style={{padding:'10px',borderRadius:'20px',color:'#fff',backgroundColor:'#532c73',width:'100%'}}>Explore NFT's</button>
            
            </div>

        </div>
       </>)
}