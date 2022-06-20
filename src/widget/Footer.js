export const Footer = (props) => {
    return (
        <>
<div class="accordion" id="accordionExample" style={{marginLeft:'20px'}}>
  <div class="accordion-item" style={{border:'none'}}>
    <h2 class="accordion-header" id="headingOne">
      <button style={{backgroundColor:'#212529',color:'#fff',fontSize:'1.75rem' ,padding:'30px 10px 30px 10px'}}  class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <i className="fas fa-user" style={{marginRight:'20px'}}></i>  About Us
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={{backgroundColor:"#212529",color:'#fff'}} >
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
    <div className='row'>
        <div className="col-md-12">
            <p style={{backgroundColor:'#212529',color:'#fff',fontSize:'1.75rem',padding:'30px 10px 30px 10px'}} > <i className="fas fa-bell" style={{marginRight:'10px',marginLeft:'-13px'}} ></i> Explore NFT's</p>
        </div>
        <div className="col-md-12">
            <p style={{backgroundColor:'#212529',color:'#fff',fontSize:'1.75rem',padding:'30px 10px 30px 10px'}} > <i className="fas fa-globe" style={{marginRight:'10px',marginLeft:'-13px'}} ></i> Explore Videos</p>
        </div>
    </div>
  <div class="accordion-item" style={{border:'none'}}>
    <h2 class="accordion-header" id="headingThree">
      <button style={{backgroundColor:'#212529',color:'#fff',fontSize:'1.75rem',padding:'30px 10px 30px 10px'}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <i class="fas fa-heart" style={{marginRight:'20px'}}></i>   Categories
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={{padding:'none',backgroundColor:"#212529",color:'#fff'}}>
      <ul class="list-group">
                            <li class="list-group-item" style={{Padding:'0px',borderRadius:'none',border:'none',backgroundColor:"#212529",color:'#fff'}}>Family</li>
                            <li class="list-group-item" style={{Padding:'0px',borderRadius:'none',border:'none',backgroundColor:"#212529",color:'#fff'}}>Drama</li>
                            <li class="list-group-item" style={{Padding:'0px',borderRadius:'none',border:'none',backgroundColor:"#212529",color:'#fff'}}>Romance</li>
                            <li class="list-group-item" style={{Padding:'0px',borderRadius:'none',border:'none',backgroundColor:"#212529",color:'#fff'}}>Thriller</li>
                            <li class="list-group-item" style={{Padding:'0px',borderRadius:'none',border:'none',backgroundColor:"#212529",color:'#fff'}}>Mystery</li>
                            <li class="list-group-item" style={{Padding:'0px',borderRadius:'none',border:'none',backgroundColor:"#212529",color:'#fff'}}>Documentry</li>
                            <li class="list-group-item" style={{Padding:'0px',borderRadius:'none',border:'none',backgroundColor:"#212529",color:'#fff'}}>Fantasy</li>

                            </ul>
      </div>
    </div>
  </div>
</div>













            {/* <div className="accordion bg-dark" id="accordionExample" style={{border:'none',borderRadius:'none'}}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">

                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <i className="fas fa-user"></i>  About Us
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>

            </div>

           <div className='list'>
            
                <div className="accordion bg-dark" id="accordionExample" style={{border:'none',borderRadius:'none'}}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">

                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <i className="fas fa-user"></i>  Categories
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body"style={{Padding:'0px'}}>
                        <ul class="list-group">
                            <li class="list-group-item" style={{Padding:'0px'}}>Family</li>
                            <li class="list-group-item" style={{Padding:'0px'}}>Drama</li>
                            <li class="list-group-item" style={{Padding:'0px'}}>Romance</li>
                            <li class="list-group-item" style={{Padding:'0px'}}>Thriller</li>
                            <li class="list-group-item" style={{Padding:'0px'}}>Mystery</li>
                            <li class="list-group-item" style={{Padding:'0px'}}>Documentry</li>
                            <li class="list-group-item" style={{Padding:'0px'}}>Fantasy</li>

                            </ul>
                                      </div>
                    </div>
                </div>

            </div>
                
           </div> */}
        </>
    )
}