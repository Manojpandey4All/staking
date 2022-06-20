import { Tittle } from "./tittleTab"

export const CatCard=(props)=>{
    return (<>
    <div className='row' style={{position:'relative'}}>
        <div className="col-md-12" style={{margin:'10px'}}>
            <img src='https://static01.nyt.com/images/2017/10/29/arts/29HORROR-BOXOFFICE1/29HORROR-BOXOFFICE1-superJumbo.jpg' style={{width:'100%'}} alt='img1'/>
        </div>
        <div className="col-md-12">
            <p className="fw-bold" style={{position:"absolute",color: '#fff',zIndex: '1000',top: '50%',left: '45%'}}>{props.catname}</p>

        </div>

        </div>
        
         </>)
}