import React from "react"
import classes from "./NewMeetupForm.module.css"
import Card from "./ui/Card";
import {useRef} from "react";


function NewMeetupForm(props) 
{
    //these refs are created for accessing dom nodes i.e. getting data from input boxes.
    const titleRef=useRef();
    const imageRef=useRef();
    const addressRef=useRef();
    const descriptionRef=useRef();
    function submitHandler(event){
        event.preventDefault(); //we preventDefault to avoid automatically http requests to server.

        const title=titleRef.current.value;
        const image=imageRef.current.value;
        const address=addressRef.current.value;
        const description=descriptionRef.current.value;

        const meetup={
            title,image,address,description
        };
       
        // console.log(meetup);
        //we are using onAddMeetup function to send meetup data to parent component 
        //by using props now at parentcomponent this function will looking for a meetup data which can be accessed in meetupHandler 
        props.onAddMeetup(meetup);
    }
    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" ref={titleRef} required></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="URL" id="image" ref={imageRef} required></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Meetup Address</label>
                    <input type="text" id="address"required ref={addressRef}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" required rows="5" ref={descriptionRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm;