import React from "react";

function Card(props){
    return(
        <div className="card">
        <div className="top">
          <h2 class="name">{props.name}</h2>
          <img
          class="circle-img"
            src={props.img}
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <info
          infotel = {props.tel}
          infoemail =  {props.email} 
          />
        </div>
      </div>

    )
}

export default Card;