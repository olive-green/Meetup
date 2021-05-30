import {React,useContext} from "react"
import MeetupList from "../components/meetupComponents/MeetupList"
import FavouritesContext from "../store/favourites-context"

function Favourites(){

    const favouritesCxt=useContext(FavouritesContext);

    let message;
    if(favouritesCxt.totalFavourites===0){
        message=<h1>You got no Favourites yet. Start adding some?</h1>   
    }
    else{
        message=<MeetupList meetups={favouritesCxt.favourites}></MeetupList>
    }

    return <section>
        <h1>My Favourite Meetups</h1>
        {
                message
        }
        
    </section>
}

export default Favourites;