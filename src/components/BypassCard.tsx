import React from "react";
import Data from "./bypass.json";

function BypassCard() {
    return (

        <div className="bypassDiv1 bg-base-200">
        <div className="bypassDiv flex flex-row flex-wrap pt-6 py-6">
            {Data.map((bypass => {
                return (
                    <>
                <div key={bypass.title}></div>
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={bypass.image} alt={bypass.title} width="350" height="350" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{bypass.title}</h2>
                    <p>{bypass.description}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">View</button>
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

export default BypassCard;