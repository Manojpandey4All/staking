import { Tittle } from "../components/tittleTab"
import { Videocard } from "../components/videoCard"

export const VideoCardContainer=(props)=>{
    return (<>
        <Tittle title="Bids you wished for"/>
        <div className="row videoContainer"  style={{height:'250px',overflowX: 'scroll',flexWrap: 'nowrap'}}>
           
            <div className='col'>
                <Videocard/>
            </div>
            <div className='col'>
                <Videocard/>
            </div>
            <div className='col'>
                <Videocard/>
            </div>
            <div className='col'>
                <Videocard/>
            </div>
            <div className='col'>
                <Videocard/>
            </div>
            <div className='col'>
                <Videocard/>
            </div>

        </div>
        </>
    )
}