import { createContext, useState } from "react"; 

const FavoriteContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
}); 

export function FavoriteContextProvider(props){

    const [userFavorites, setUserFavorites]=useState([]);
    
    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites(
            (prevUserFavorite) => {
            return prevUserFavorite.concat(favoriteMeetup);
        }
    );
    }

    function removeFavoriteHandler(meetupId){
        setUserFavorites(
            prevUserFavorite =>{
                return(prevUserFavorite.filter(meetup => meetup.id !== meetupId));
            }
        );
    }

    function itemIsFavoriteHandler(meetupId){
        return userFavorites.some(meetup => meetup.id === meetupId);
    }
    
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return(<FavoriteContext.Provider value={context}>
        {props.children}
    </FavoriteContext.Provider>);
}

export default FavoriteContext;