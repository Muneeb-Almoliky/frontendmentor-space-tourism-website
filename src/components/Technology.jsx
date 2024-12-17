import React, { useState } from "react";
import data from "../data.json";

export default function Technology() {
    const [technology] = useState(data.technology);
    const [technologyIndex, setTechnologyIndex] = useState(0);

    const {name, images, description} = technology[technologyIndex];

    return(
        <>
            <section className="technology-container" style={{color: 'white'}}>
            <section className="crew-tabs">
                        <h1 className="title"><span>03</span> Space launch 101</h1>
                        <div className="crew-content">
                            <h1 className="name">{name}</h1>
                            <p className="description">{description}</p>
                        </div>
                        <img src={images.portrait} alt="" />
                        <div className="dot-indicators">
                            {technology.map((person, index) => {
                                return(
                                    <button key={person.name} className={index===technologyIndex? 'active': undefined} onClick={() => {setTechnologyIndex(index)}}>{index+1}</button>

                                )
                            })}
                        </div>
                    </section>
            </section>
        </>
    )
}