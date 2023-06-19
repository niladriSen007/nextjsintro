"use client"
import React, { useContext } from 'react'
import styles from "./darkmodetoggle.module.css"
import { ThemeContext } from '../../../context/ThemeContext'

const DarkmodeToggle = () => {
    //const mode="dark"

    const {toggleMode,mode} = useContext(ThemeContext)
    // console.log(mode)
  return (
    <div className={styles.container}  onClick={toggleMode}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
       
      />
    </div>
  )
}

export default DarkmodeToggle