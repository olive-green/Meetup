import React from "react";
import {useEffect,useState} from "react";
import MeetupList from "../components/meetupComponents/MeetupList"
// const DUMMY_DATA = [
//     {
//       id: 'm1',
//       title: 'This is a first meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//     {
//       id: 'm2',
//       title: 'This is a second meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//   ];


function AllMeetups(){

    const [isLoading,setLoading]= useState(true);
    const [loadedMeetups,setLoadedMeetups]= useState([]);

    useEffect(()=>{
      fetch("https://meetupapp-6ad24-default-rtdb.firebaseio.com/meetups.json")
      .then(res=>{
        return res.json();
      }).then((data)=>{
        //this meetups is basically used for converting data object into an array 
        const meetups=[]

        for(const key in data){
          //in meetup object we store the keys or id of data object which we get from database and all nested key-properties of that id with the help of spread operator 
          const meetup={
            id:key,
            ...data[key] 
          }
          meetups.push(meetup)
        }
        //when the data is fetched from the database loading should be stopped so we set it to false
        setLoading(false);
        setLoadedMeetups(meetups);
      })
    },[]); //here in second parameter we pass an empty array as a dependency which means useEffect is not depend on any external dependency so this will render only one time.
    

    if(isLoading)
    {
      return <section>
        <h1>Loading....</h1>
      </section>
    }

    return (
    <div>
        <h1>AllMeetups</h1>
        
        <MeetupList meetups={loadedMeetups}/>

        {/* <ul className={Classes.list}>
        {
            loadedMeetups.map((ele,i) =>{
                // console.log(i)
              return(
                  <li className={Classes.item} key={ele.id}>
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
                          <button>To Favourites</button>
                      </div>
                </Card>                  
                  </li>
              )
            })
        }
        </ul> */}
    </div>)
}

export default AllMeetups;