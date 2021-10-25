import {useContext,React} from "react"
import Card from "../ui/Card";
import Classes from "./MeetupItem.module.css"
import FavouritesContext from "../../store/favourites-context"


function MeetupItem(props){
    const ele=props.data;

    const favouritesContext=useContext(FavouritesContext)
    
    const itemIsFavourite=favouritesContext.itemIsFavourite(ele.id);

    function FavouritesStatusHandler(){
        if(itemIsFavourite){
            favouritesContext.removeFavourite(ele.id);
        }
        else{
            favouritesContext.addFavourite(ele);
        }
    }



    return <div></div>
}

export default MeetupItem;
