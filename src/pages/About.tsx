import React from 'react'
import { Link } from 'react-router-dom'

const About = () => (
  <>
    <h1>
      Сторінка інформації
    </h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus nobis sit quasi explicabo vitae quos doloremque, dolorem voluptate molestias asperiores autem earum ullam molestiae dolorum aspernatur omnis esse reiciendis.</p>
    <Link className="btn" to='/'>
      На головну
    </Link>
  </>
);

export default About
