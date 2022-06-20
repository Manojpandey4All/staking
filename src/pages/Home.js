import { CatCard } from "../components/catCard"
import { CatConatiner } from "../containers/catCardContainer"
import { VideoCardContainer } from "../containers/videoCardContainer"
import { PrimumShowContainer, VideoShowContainer } from "../containers/PrimumShowContainer"
import { CreatorContainer } from "../containers/creatorContainer"
import { CarsoleContainer } from "../containers/carsoleContainer"
import { Header } from "../widget/Header"

export const Home=(props)=>{
return(
    <>
    <Header/>
    <VideoCardContainer/>
    <CatConatiner/>
    <PrimumShowContainer/>
    <CreatorContainer/>
    <CarsoleContainer/>
    </>
)

}