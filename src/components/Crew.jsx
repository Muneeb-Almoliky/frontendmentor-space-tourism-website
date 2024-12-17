import React from "react";
import {useState} from "react";
import data from "../data.json"
import "../index.css"

export default function Crew() {
    const [crews] = useState(data.crew);
    const [crewIndex, setCrewIndex] = useState(0);    

    const {name, images, role, bio} = crews[crewIndex];


    return(
        <>
            <div className="crew-container">
                
                    <section className="crew-tabs">
                        <h1 className="title"><span>02</span> MEET YOUR CREW</h1>
                        <div className="crew-content">
                            <h1 className="role">{role}</h1>
                            <h1 className="name">{name}</h1>
                            <p className="description">{bio}</p>
                        </div>
                        <img src={images.png} alt="" />
                        <div className="dot-indicators">
                            {crews.map((person, index) => {
                                return(
                                    <button key={index} onClick={() => {setCrewIndex(index);}} className={`${index===crewIndex? 'active':''}`}></button>

                                )
                            })}
                        </div>
                    </section>
                
            </div>
        </>
    )
}