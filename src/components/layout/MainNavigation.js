import {React,useContext} from "react"
import {Link} from "react-router-dom"
import Classes from "./MainNavigation.module.css"
import FavouritesContext from "../../store/favourites-context"

function MainNavigation(){

    const fvtCxt=useContext(FavouritesContext)

    return <header className={Classes.header}>
        <div className={Classes.logo}>Meetup Pages</div>
        <nav>
            <ul>
                <li>
                    <Link to="/">AllMeetups</Link>
                </li>
                <li>
                    <Link to="/new-meetup">Add New Meetup</Link>
                </li>
                <li>
                    <Link to="/favourites">Favourites
                        <span className={Classes.badge}>{fvtCxt.totalFavourites}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;