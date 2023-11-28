import React from "react";
import "./styles.css";
export default function WhiteBoxStyle({ dataMap }) {
    return (
        <div className="white-boxstyle">
                {
                    dataMap.map((data, index) => (
                        <div key={index} className="content-stat white">
                            {data.description ? <div className="stats white-stats">
                                <h1>{data.title}</h1>
                                <p>{data.description}</p>   
                            </div> : (
                                <div className="stats white-stats">
                                    <h2>{data.split(" ")[0]}</h2>
                                    <h2>{data.split(" ")[1]}</h2>   
                                </div>
                            )}
                            <div className="line white-line"></div>
                        </div>
                    ))
                }
        </div>
    )
}