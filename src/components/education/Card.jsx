import React from 'react'

const Card = (props) => {
  return (
    <div className="timeline__item">
        <i className={props.icon}></i>
        <span className="timeline__date">{props.year}</span>
        <h4 className="timeline__title">{props.title}</h4>
        <h3 className="timeline__placeofstudy">{props.placeofstudy}</h3>
        <h4 className="timeline__board">{props.board}</h4>
        <h3 className="timeline__percent">{props.percent}</h3>
        <h4 className="timeline__link"><a href="https://drive.google.com/file/d/1Jcv27Jpi89i_11vSpZSZbsYPhMmZgcQI/view?usp=sharing" target='_blank'>{props.link}</a></h4>
    </div>
  )
}

export default Card