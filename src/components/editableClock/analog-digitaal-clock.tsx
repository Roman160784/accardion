import React, { useEffect, useMemo, useState } from 'react';
import styles from '../editableClock/clock.module.css'


export const EditableClock = () => {
    


    let a = new Date()

    
    const secondsStyle  = {
      transform: `rotate(${a.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
      transform: `rotate(${a.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
      transform: `rotate(${a.getHours() * 30}deg)`
    };



    return (
        <div className={styles.clock}>
        
        <div className={styles["analog-clock"]}>
          
          <div className={`${styles.dial} ${styles.seconds}`} style={secondsStyle} />
          <div className={`${styles.dial} ${styles.minutes}`} style={minutesStyle} />
          <div className={`${styles.dial} ${styles.hours}`} style={hoursStyle} />
        </div>
      </div>
    )
            
        
}