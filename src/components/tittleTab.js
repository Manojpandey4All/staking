export const Tittle=(props)=>{
    return (
        <>
        <p className="sub-heading fs-3 fw-bold sub-heading highlight" style={{marginTop:'20px',zIndex:'1000',color:'#fff', fontSize:'25px',background:'linear-gradient(90deg, #c392e8 -.95%, #719bd4 30.29%, #80d17d 63.51%, #7ecfa3 98.11%)',WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'}}>{props.title} </p>
        </>
    )
}