import React from 'react'
import styles from './Experience.module.css'

const Experience = () => {
  return (
    <div className={styles.container} id='experience'>
        <div className={styles.experienceContainer}>
            <div className={styles.experienceDate}>
                <p style={{ opacity: "0.5", margin: "0", fontSize: "0.8rem"}}>2024 - PRESENT</p>
            </div>
            <div className={styles.experienceDetails}>
                <div className={styles.experienceTitle}>
                    <p style={{ opacity: "1", margin: "0" }}>Developer Intern &#183; DashProphet</p>
                </div>
                <div className={styles.experienceDescription}>
                    <p style={{ fontSize: "0.85rem", opacity: 0.75}}>
                    As a developer intern at DashProphet, I have worked on a variet of projects,
                    on both the front end and back end of the application. I am also working with data
                    analysts to write python scripts for data processing. I&apos;m also working on my AWS 
                    Cloud Practitioner certification to further contribute to the team.
                    </p>
                </div>
                <div className={styles.experienceTech}>
                    <div><p className={styles.individualTech}>React</p></div>
                    <div><p className={styles.individualTech}>TypeScript</p></div>
                    <div><p className={styles.individualTech}>Node</p></div>
                    <div><p className={styles.individualTech}>HTML/CSS</p></div>
                    <div><p className={styles.individualTech}>AWS</p></div>
                    <div><p className={styles.individualTech}>Python</p></div>
                </div>
            </div>
        </div>
        <div className={styles.experienceContainer}>
            <div className={styles.experienceDate}>
                <p style={{ opacity: "0.5", margin: "0", fontSize: "0.8rem"}}>2024</p>
            </div>
            <div className={styles.experienceDetails}>
                <div className={styles.experienceTitle}>
                    <p style={{ opacity: "1", margin: "0" }}>Front End Developer &#183; Greek Chapter</p>
                </div>
                <div className={styles.experienceDescription}>
                    <p style={{ fontSize: "0.85rem", opacity: 0.75}}>
                    Greek Chapter is a startup that aims to provide a platform for 
                    fraternities and sororities to manage their chapters. I built their entire UI,
                    from Figma to implementation. I also built out a few features for them,
                    including creating a page to add and manage study locations and a page to
                    manage house memeber points.
                    </p>
                </div>
                <div className={styles.experienceTech}>
                    <div><p className={styles.individualTech}>React</p></div>
                    <div><p className={styles.individualTech}>TypeScript</p></div>
                    <div><p className={styles.individualTech}>Firebase</p></div>
                    <div><p className={styles.individualTech}>HTML/CSS</p></div>
                    <div><p className={styles.individualTech}>Node</p></div>
                </div>
            </div>
        </div>
        <div className={styles.experienceContainer}>
            <div className={styles.experienceDate}>
                <p style={{ opacity: "0.5", margin: "0", fontSize: "0.8rem"}}>2023 - 2024</p>
            </div>
            <div className={styles.experienceDetails}>
                <div className={styles.experienceTitle}>
                    <p style={{ opacity: "1", margin: "0" }}>Software Engineering Fellow &#183; Parsity</p>
                </div>
                <div className={styles.experienceDescription}>
                    <p style={{ fontSize: "0.85rem", opacity: 0.75}}>
                    As a Parsity fellow, I learned valuable skills in web development, including
                    React, NextJS, TypeScript, Node, Express, MongoDB, and more. I also learned 
                    about software engineering principles and practices, such as version control,
                    testing, and deployment. I worked on a team project to build a full stack
                    application for managing planning trips which connected to an API that showed 
                    users things to do in the area of their destination.
                    </p>
                </div>
                <div className={styles.experienceTech}>
                    <div><p className={styles.individualTech}>React</p></div>
                    <div><p className={styles.individualTech}>Redux</p></div>
                    <div><p className={styles.individualTech}>TypeScript</p></div>
                    <div><p className={styles.individualTech}>MongoDB</p></div>
                    <div><p className={styles.individualTech}>Express</p></div>
                    <div><p className={styles.individualTech}>Node</p></div>
                    <div><p className={styles.individualTech}>Agile Development</p></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience