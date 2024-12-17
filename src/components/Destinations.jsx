import React from "react";
import {useState} from "react";
import data from "../data.json";
import '../index.css';

export default function Destinations() {
    const [planets] = useState(data.destinations);
    const [planetIndex, setPlanetIndex] = useState(0);
    
    const {name, images, description, distance, travel} = planets[planetIndex];
    
    return(
        <>
                <section className="destination-container">
                    <h1><span>01</span> Pick your destination</h1>
                    <img src={images.png} alt="" />
                        <ul className="destination-tabs">
                            {planets.map((planet, index) => {
                                return(
                                    <li key={planet.name} onClick={() => {setPlanetIndex(index)}} className={`${planetIndex===index? 'active':''}`}>{planet.name} </li>
                                   
                                )
                            })}
                        </ul>
                    <article className="destination-content">
                            <h1 className="planet-name">{name}</h1>
                            <p className="planet-description">{description}</p>
                            <div className="distance-and-travel">
                            <div className="distance">
                                <span>
                                    AVG. DISTANCE
                                </span>
                                <p>{distance}</p>
                            </div>
                            <div className="travel-time">
                                <span>
                                    Est. travel time
                                </span>
                                <p>{travel}</p>
                            </div>
                            </div>
                    </article>
                </section>
        </>
    )
}