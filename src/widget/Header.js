export const Header=(props)=>{
    return(<>
    <div className="row justify-content-between">
        <div className="col col-md-1">
            <img src="http://toptissue.com/staking/images/logo_1.png" style={{width:'100%'}}/>
        </div>
        <div className=" col col-md-9" style={{textAlign:'end'}}>
            <button type="submit" style={{border:'none',background:'transparent',color:'#fff'}}>
            <i className="fas fa-bars" ></i>
            </button>
        </div>

    </div>
    </>)
}