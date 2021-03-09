import React from "react";
import styles from "./Home.module.css"

export function Home() {
    return (

        <div className={styles.container}>
            <div className={styles.appCard}>
                <h1 className={styles.boxHeading}>
                    Welcome!
                </h1>

                <p>
                    Welcome to this website.
                </p>

            </div>
        </div>

    )
}