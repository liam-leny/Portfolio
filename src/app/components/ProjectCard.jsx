import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({
  title,
  tags,
  description,
  gitUrl,
  previewUrl,
  year,
}) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCardOverlay}>
        <Link href={gitUrl} className={styles.projectLink}>
          <Image
            height={60}
            width={60}
            src="/github.svg"
            alt="Logo de Github"
          />{" "}
        </Link>
        {/* <Link href={previewUrl} className={styles.projectLink}></Link> */}
      </div>
      <div className={styles.projectContent}>
        <p className={styles.projectYear}>{year}</p>
        <h5 className={styles.projectTitle}>{title}</h5>
        <div className={styles.projectTags}>
          {tags.map((tag, index) => (
            <Image
              key={index}
              src={`./${tag}.svg`}
              height={60}
              width={60}
              alt="Logo"
            />
          ))}
        </div>
        <p className={styles.projectDescription}>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
