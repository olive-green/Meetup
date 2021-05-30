import {React} from "react"
import {useHistory} from "react-router-dom"
import NewMeetupForm from "../components/NewMeetupForm"

function NewMeetup(){

    const history=useHistory();

    function meetupHandler(meetup){
        fetch("https://meetupapp-6ad24-default-rtdb.firebaseio.com/meetups.json",{
            method:"POST",
            body:JSON.stringify(meetup),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(()=>{
            history.replace("/");
        })
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={meetupHandler} />
        </section>
    )
}

export default NewMeetup;