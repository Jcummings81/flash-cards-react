import React from 'react'

const Card = ({
  id,
  front, 
  back,
  show,
  toggleEdit,
  deleteCard,
  flipCard,
}) =>  (
  <div className="col s12 m4">
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        { show === 'front' ?
            <span className="card-title">{front}</span> 
            :
            <p>{back}</p>
        }
      </div>
      <div className="card-action">
        <button className="btn" onClick={() => flipCard(id)}>Flip</button>
        <button className="btn" onClick={() => toggleEdit(id)}>Edit</button>
        <button className="btn" onClick={() => deleteCard(id)}>Delete</button>
      </div>
    </div>
  </div>
)

export default Card
