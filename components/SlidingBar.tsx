import React from "react";
import "./css/slidingbar.css"; // Import the CSS file here

export function Slidingbar() {
    return (
        <div className="wrapper">
            <div className="container">
                <input type="radio" name="slide" id="c1" defaultChecked />
                <label htmlFor="c1" className="card">
                    <div className="row">
                        <div className="icon">1</div>
                        <div className="description">
                            <h4>Winter</h4>
                            <p>Winter has so much to offer - creative activities</p>
                        </div>
                    </div>
                </label>
                <input type="radio" name="slide" id="c2" />
                <label htmlFor="c2" className="card">
                    <div className="row">
                        <div className="icon">2</div>
                        <div className="description">
                            <h4>Digital Technology</h4>
                            <p>Gets better every day - stay tuned</p>
                        </div>
                    </div>
                </label>
                <input type="radio" name="slide" id="c3" />
                <label htmlFor="c3" className="card">
                    <div className="row">
                        <div className="icon">3</div>
                        <div className="description">
                            <h4>Globalization</h4>
                            <p>Help people all over the world</p>
                        </div>
                    </div>
                </label>
                <input type="radio" name="slide" id="c4" />
                <label htmlFor="c4" className="card">
                    <div className="row">
                        <div className="icon">4</div>
                        <div className="description">
                            <h4>New technologies</h4>
                            <p>Space engineering becomes more and more advanced</p>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    );
}
