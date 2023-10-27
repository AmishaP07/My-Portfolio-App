import React, { useState } from 'react';
import './portfolio.css';
import Portfolioitem from './Portfolioitem';


const Portfolio = () => {
  const[items,setItems] = useState(Portfolioitem);
  const filterItem=(categoryItem) =>{
    const updatedItems=Portfolioitem.filter((curElem)=>{
      return curElem.category === categoryItem;
    });setItems(updatedItems);
  }

  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Portfolio</h2>
      <div className="work__filters">
        <span className="work__items" onClick={()=> setItems(Portfolioitem)}>All</span>
        <span className="work__items" onClick={()=> filterItem("Project")}>Projects</span>
        <span className="work__items" onClick={()=> filterItem("Certificate")}>Certifications</span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const{id,category,title,image,months,link} = elem;
          return(
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              
              <a href="#resume" className="btn">Description</a>
              <a href={link} className="work__button" target='_blank'>
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio