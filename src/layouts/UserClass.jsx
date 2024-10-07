import React from "react";
import "../styles/UserClass.scss";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Aashutosh Mishra",
        location: "Mumbai",
      }
    };
  }

  
  
 
  render() {
    const {
      name,
      location,
      bio,
      email,
      blog,
    } = this.state.userInfo;
    return (
     
        <div className="flex flex-col items-center gap-5">
          <img
            className="h-auto w-64 rounded-full mb-5"
            src={"/profile.jpg"}
            alt=""
          />
          <p className="text-2xl">{name}</p>
          
          <p className="my-2">{bio}</p>
          <p> {location}</p>
          <p>{"xyz@gmail.com"}</p>
        </div>
       
      
    );
  }
}
export default UserClass;
