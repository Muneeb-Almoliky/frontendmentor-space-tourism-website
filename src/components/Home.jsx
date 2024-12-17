import React from "react";
import "../index.css";

export default function Home() {
    return(
        <>
            <main className="home-container" style={{color: 'white'}}>
                    <section className="home-content">
                        <h1>
                            SO, YOU WANT TO TRAVEL TO <span>SPACE</span>
                        </h1>
                        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. 
                            Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </section>
                    <div>
                    <div className="explore-btn">
                        EXPLORE
                    </div>
                    </div>
            </main>

        </>
    )
}