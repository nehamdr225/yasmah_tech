import React from "react";
import styles from "../../styles/NavBar.module.css";

// interface Props {
//   history: [string, React.Dispatch<React.SetStateAction<string>>];
// }

export default function Nav() {
  

  return (
    <nav>
      <div className={styles.logo_holder}>
        <div className={styles.logo}></div>
        <div className={styles.avatar__title}>
          <h3>Neha</h3>
          <h4> Developer</h4>
        </div>
      </div>

      
    </nav>
  );
}