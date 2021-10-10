import {React,useContext,useState} from "react"
import {Link} from "react-router-dom"
import Classes from "./MainNavigation.module.css"
import FavouritesContext from "../../store/favourites-context"
import './navbar.css'
function MainNavigation(){

    const fvtCxt=useContext(FavouritesContext)
    const clickhandler = () =>{
        console.log('clicked')
    }
    const [menu, setmenu] = useState(true)
    return <header  className={Classes.header}>
        <div  className={Classes.logo}>Meetup Pages</div>
        <nav>
            <ul id={menu?'m':''} className={Classes.m}>
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
        <button className={Classes.menubtn} onClick={ ()=>{setmenu(!menu)} }>
       { menu ? <i style={{fontSize:'3rem',color:'white'}} class="fas fa-bars"></i>:<i style={{fontSize:'3rem',color:'white'}} class="fas fa-times"></i>}
    </button>
    </header>
}

export default MainNavigation;