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



    return <li className={Classes.item} key={ele.id}>
    <Card>
    <div className={Classes.image}>
        <img src={ele.image} alt={ele.title}></img>
    </div>
    <div className={Classes.content}>
        <h3>{ele.title}</h3>
        <address>{ele.address}</address>
        <p>{ele.description}</p>
    </div>
    <div className={Classes.actions}>
        <button onClick={FavouritesStatusHandler}>{itemIsFavourite ? "Remove from Favourites" : "To Favourites"}</button>
    </div>
    </Card>                  
</li>
}

export default MeetupItem;