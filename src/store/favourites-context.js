import {createContext,useState,React} from "react";

// Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree. Context provides data that can be considered global for a tree of React components without explicitly passing data to every component of a nested tree. 


//HERE WE ARE CREATING CONTEXT
const FavouritesContext=createContext({ //in createContext we are providing a object with default value in case if component does not find the matching provider
    favourites:[],
    totalFavourites:0,
    addFavourite:(favouriteMeetup) =>{},
    removeFavourite:(meetupId) =>{},
    itemIsFavourite:(meetupId) =>{}
})

//PROVIDER COMPONENT
export function FavouritesContextProvider(props){

    const [userFavourites,setUserFavourites]=useState([]);    

    function addFavouriteHandler(favouriteMeetup){
        setUserFavourites(prevUserFavourites =>{ //we are passing function beacause we want to add new favourites to prev state
            return prevUserFavourites.concat(favouriteMeetup);
        })
    }
    function removeFavouriteHandler(meetupId){
        setUserFavourites(prevUserFavourites =>{
            return prevUserFavourites.filter(meetup => meetup.id!== meetupId); //here filter removes the element from an array if gets false value
        })
    }
    function itemIsFavouriteHandler(meetupId){
            return userFavourites.some(meetup => meetup.id=== meetupId) //this function will return true if any meetup id matches with meetupId
    }

    const context={
        favourites:userFavourites,
        totalFavourites:userFavourites.length,
        addFavourite:addFavouriteHandler,
        removeFavourite:removeFavouriteHandler,
        itemIsFavourite:itemIsFavouriteHandler
    }

    return <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>
}

export default FavouritesContext;