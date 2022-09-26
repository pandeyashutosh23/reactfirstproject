import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex  flex-column justify-content-center">
                                    <h1>
                                        {props.name}<br />
                                        <strong className="brand-name">  Info Tech</strong>
                                    </h1>
                                    <h2 className="my-3">
                                        we have talented website developer....
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} className="getStart-btn ">
                                            {props.btnName}

                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <img src={props.imgsrc} alt='error.....' className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Common;