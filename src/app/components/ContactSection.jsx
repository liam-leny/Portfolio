import React from "react";
import styles from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <div className={styles.contactSection}>
      <p>
        Envie d'en savoir plus sur mes compétences et mes réalisations ?
        Contactez-moi par mail pour échanger :{" "}
        <a href="mailto:votre@adresse-email.com">liamleny@protonmail.com</a>
      </p>
    </div>
  );
};

export default ContactSection;
