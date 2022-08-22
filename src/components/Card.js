import React from "react";

const Card = ({name,id, email,username}) => {
    return (
     <div className='tc bg-light-green dib br3 pa1 mar2 grow bw2 shadow-5'>
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