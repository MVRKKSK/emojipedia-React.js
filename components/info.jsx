import React from "react";

function info(props) {
    return <div className="info"><p class="infotel">{props.tel}</p>
    <p class="infoemail">{props.email}</p></div>
}

export default info;