import { CatCard } from "../components/catCard"
import { Tittle } from "../components/tittleTab"

export const CatConatiner=()=>{
    return(<>
          <Tittle title="Pick your preffered category"/>
        <div className="row cardContainer" style={{}}>
           
            <div className='col-md-6'style={{marginRight:'-35px',marginBottom:'-15px'}} >
                <CatCard catname="Horror"/>
            </div>
            <div className='col-md-6' style={{marginRight:'-35px',marginBottom:'-15px'}} >
                <CatCard catname="Cooking"/>
            </div>
            <div className='col-md-6' style={{marginRight:'-35px',marginBottom:'-15px'}} >
                <CatCard catname="Comedy"/>
            </div>
            <div className='col-md-6' style={{marginRight:'-35px',marginBottom:'-15px'}} >
                <CatCard catname="Action"/>
            </div>
            <div className='col-md-6' style={{marginRight:'-35px',marginBottom:'-15px'}} >
                <CatCard catname="Tragedy"/>
            </div>
            <div className='col-md-6' style={{marginRight:'-35px',marginBottom:'-15px'}} >
                <CatCard catname="Gaming"/>
            </div>

        </div>
        <div className="row" style={{marginTop:'20px',textAlign: 'end',marginLeft: '50px',marginBottom:'40px'}}>
            <div className='col col-md-11'>
                <button  className="btn" type="submit" style={{padding:'10px',borderRadius:'20px',color:'#fff',backgroundColor:'#532c73',width:'100%'}}>All Geners</button>
            
            </div>

        </div>
    </>)
}