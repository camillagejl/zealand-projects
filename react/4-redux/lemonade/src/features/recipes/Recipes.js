import React from "react";
import styles from "./Recipes.module.css"

export function Recipes() {
    return (

        <div className={styles.container}>
            <div className={styles.appCard}>
                <h1 className={styles.boxHeading}>
                    Recipes
                </h1>

                <p>
                    Welcome to this website.
                </p>

            </div>
        </div>

    )
}