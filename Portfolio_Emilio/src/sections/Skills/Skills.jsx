import React from "react";
import styles from "./SkillsStyle.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillsList from "../../common/SkillsList";

function Skills() {
    return (
        <section id="skills" className={styles.container}>
            <h1>Skills</h1>
            <div className={styles.skillList}>
                <SkillsList src={checkMarkIcon} skill="HTML" />
                <SkillsList src={checkMarkIcon} skill="CSS" />
                <SkillsList src={checkMarkIcon} skill="SQL" />
                <SkillsList src={checkMarkIcon} skill="JavaScript" />
                <SkillsList src={checkMarkIcon} skill="Java" />
                <SkillsList src={checkMarkIcon} skill="Python" />
                <SkillsList src={checkMarkIcon} skill="C++" />
                <SkillsList src={checkMarkIcon} skill="Dart" />
            </div>

            <hr />

            <div className={styles.skillList}>
                <SkillsList src={checkMarkIcon} skill="React" />
                <SkillsList src={checkMarkIcon} skill="Angular" />
                <SkillsList src={checkMarkIcon} skill="Spring Boot" />
                <SkillsList src={checkMarkIcon} skill="Django" />
                <SkillsList src={checkMarkIcon} skill="Flutter" />
                <SkillsList src={checkMarkIcon} skill="Android Studio" />
            </div>

            <hr />

            <div className={styles.skillList}>
                <SkillsList src={checkMarkIcon} skill="Git" />
                <SkillsList src={checkMarkIcon} skill="Docker" />
                <SkillsList src={checkMarkIcon} skill="Boostrap" />
                <SkillsList src={checkMarkIcon} skill="OpenCV" />
                <SkillsList src={checkMarkIcon} skill="Firebase" />
                <SkillsList src={checkMarkIcon} skill="YoloV7" />
            </div>
        </section>
    );
}

export default Skills;
