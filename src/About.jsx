import React from "react";

import about_img from '../src/img/about-img.png';
import Common from "./Common";

const About = () => {
    return (
        <>
            <Common name='Welcome to about page ' imgsrc={about_img} visit='/contact' btnName='Contact Now' />
        </>
    );
}
export default About;