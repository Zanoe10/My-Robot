import React from "react";

const Card = ({name,id, email,username}) => {
    return (
     <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
        <img alt="pics" src={`https://robohash.org/${id}?200x200`} />
         <div>
            <h2>{name}</h2>
            <p>{username}</p>
            <p>{email}</p>
       </div>  
     </div>
    );
}

export default Card;