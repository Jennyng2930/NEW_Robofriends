import React from 'react';

const Card = ( { name, id, email } ) => {
    return (
        <div className="tc bg-light-green br3 pa3 ma2 grow dib bw2 shadow-5">
                <div> 
                    <img alt='robots' src={`https://robohash.org/${id}/?set=set4`}/>
                    <div>
                        <h2> {name} </h2>
                        <p> {email}</p>
                    </div>
                </div>
        </div>
    )
}

export default Card; 
