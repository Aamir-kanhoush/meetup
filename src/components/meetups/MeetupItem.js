import {useContext} from 'react';
import classes from './MeetupItem.module.css';
import Card from '../UI/Card';
import FavoriteContext from '../../store/favorites-context';

function MeetupItem (props){
    const favoritesCtx = useContext(FavoriteContext);
    
    const itemIsFavorite=favoritesCtx.itemIsFavorite(props.id);
    
    function toggleFavoriteStatusHandler(){
        if(itemIsFavorite){
            favoritesCtx.removeFavorite(props.id);
        }else{
        favoritesCtx.addFavorite({
            id: props.id,
            title: props.title,
            image: props.image,
            address: props.address,
            description: props.description,
        });}
    }


    return( 
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Unfavorite' : 'Favorite'}</button>
                </div>
            </Card> 
        </li>
    );
}

export default MeetupItem;