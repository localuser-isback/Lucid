import React from "react";
import Data from "./games.json";

function GameCard() {
    return (
        <div className="gamesDiv bg-base-200">
        <div className="gamesDiv1 flex flex-row flex-wrap pt-3 py-3">
            {Data.map((game => {
                return (
                    <>
                <div key={game.title}></div>
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={game.image} alt={game.title} width="350" height="350" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{game.title}</h2>
                    <p>{game.description}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Launch</button>
                    </div>
                </div>
                </div>
                    </>
                )
            }))}
        </div>
        </div>
    )
}

export default GameCard;