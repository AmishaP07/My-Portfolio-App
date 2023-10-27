import React from 'react';
import './education.css';
import Data from'./Data';
import Card from './Card';

const Education = () => {
  return (
    <section className="education container section" id="education">
      <h2 className="section__title">Education</h2>
      <div className="education__container grid">
        <div className="timeline grid">
          {Data.map((val,id) => {
            if(val.category === "education"){
              return (
                <Card 
                key={id} 
                icon={val.icon} 
                title={val.title} 
                year={val.year} 
                placeofstudy={val.placeofstudy} 
                board={val.board} 
                percent={val.percent}
                />
              );
            }
          })}
        </div>

      </div>
    </section>
  )
}

export default Education