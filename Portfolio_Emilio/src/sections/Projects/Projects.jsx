import React from 'react'
import styles from './ProjectsStyle.module.css'
import viberr from '../../assets/viberr.png'
import coffe from '../../assets/coffe.png'
import unet from '../../assets/Unet.png'
import cart from '../../assets/cart.jpeg'
import wiki from '../../assets/wiki.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id='projects' className={styles.container}>

      <h1 className='sectionTitle'>Projects</h1>

      <div className={styles.projectsContainer}>

        <ProjectCard src={wiki} link={"https://github.com/EmilioBT/WikiEF"} h3={"WikiEf"} p={"Physical Education app"}/>
        <ProjectCard src={unet} link={"https://github.com/EmilioBT/Unet_Model"} h3={"Unet-Model"} p={"Unet detection app"}/>
        <ProjectCard src={cart} link={"https://github.com/EmilioBT/Cart_App_SpringBoot-React"} h3={"Cart-app"} p={"Shopping cart management"}/>
        <ProjectCard src={coffe} link={"https://github.com/EmilioBT/Web_Empresa_Django2"} h3={"Coffe-app"} p={"Business management"}/>
        <ProjectCard src={viberr} link={"https://github.com/EmilioBT/Web_Playground_Django2"} h3={"Playground app"} p={"Different features"}/>

      </div>
    
    </section>
  )
}

export default Projects