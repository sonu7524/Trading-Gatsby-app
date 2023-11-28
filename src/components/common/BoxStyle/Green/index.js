import React from "react";
import "./styles.css";
export default function GreenBoxStyle({ dataMap }) {
    return (
        <div className="green-boxstyle">
                {
                    dataMap.map(data => (
                        <div key={data.id} className="content-stat">
                            <div className="stats">
                                <h1>{data.title}</h1>
                                <p>{data.description}</p>   
                            </div>
                            <div className="line"></div>
                        </div>
                    ))
                }
        </div>
    )
}