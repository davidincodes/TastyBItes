import React from "react";
import "../styles/UserClass.scss";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      userInfo: { 
        name: "Tasy Bites",
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
            src={"public/aboutus.png"}
            alt=""
          />
          <p className="font-extrabold text-orange-500 text-2xl ">{name}</p>
          
          <p className="my-2">{""}</p>
          <p className="font-extrabold text-orange-500 text-2xl"> {location}</p>
          <p className="px-10 mx-80 flex text-wrap items-center ">Welcome to Tasy Bites, where we bring you the finest culinary delights, delivered fresh to your doorstep. Our passion for food drives us to offer you a diverse menu filled with delicious options, ensuring that there’s something for every palate.<br></br><br></br>

          At Tasty Bites, we believe that food is not just about eating but an experience to be savored. Whether you're craving local favorites or exploring new cuisines, we’ve got you covered with:
          <br></br><br></br>
          Fresh Ingredients: We prioritize quality by using only the freshest ingredients to prepare our dishes.<br></br>
          Fast Delivery: Our efficient delivery system ensures your food arrives hot and on time.<br></br>
          Customer Satisfaction: Your happiness is our top priority, and we strive to provide you with the best service.<br></br>
          </p>
        </div>
       
      
    );
  }
}
export default UserClass;
