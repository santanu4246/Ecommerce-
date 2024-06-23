import React from 'react'
import { useProductContext } from '../../Context/ProductContext';
const About = () => {
  const { name } = useProductContext();
  return (
    <div>{name}</div>
  )
}

export default About