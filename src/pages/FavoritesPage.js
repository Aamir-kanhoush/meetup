import { useContext } from "react";
import FavoriteContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";


function Favorites(){

    const favoritesCtx = useContext(FavoriteContext);

    let content;
    
    if(favoritesCtx.totalFavorites ===0){
        content= <p>No favorites to display,How about you add some!!</p>
    }else{
        content = <MeetupList meetups={favoritesCtx.favorites} />
    }


    return(
        <section>
            <h1>Favorites</h1>
            {content}
        </section>
    );
}
export default Favorites;