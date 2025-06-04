"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a passionate <span className="font-medium">Data Engineer</span> with a Master’s in <span className="font-medium">Computer Science</span> from Indiana University Bloomington.{" "}
        With two years of professional experience and a strong technical foundation, complemented by a strong academic foundation in object-oriented programming, data structures, algorithms and Data Engineering. I’m passionate about building reliable, scalable data systems that help organizations turn raw data into meaningful insights.
        
      </p> 

      <p className="mb-3"> 
        My journey in tech spans a wide array of interests, including Data Engineering, Data Science, and cutting-edge fields like ML, AI and NLP. With hands-on experience in technologies like{" "}
        <span className="font-medium">
        Python, SQL, and PySpark
        </span>
        to build robust data pipelines and transform large-scale datasets. My experience spans across orchestrating workflows using <span className="font-medium">Apache Airflow</span>, leveraging big data frameworks such as <span className="font-medium">Apache Spark and Hadoop</span> for distributed processing, and deploying scalable data solutions on <span className="font-medium">AWS</span> services including <span className="font-medium">S3, Redshift, EMR, IAM and Lambda.</span> I’m also proficient in <span className="font-medium">data modeling, ETL/ELT processes,</span> and optimizing performance for real-time and batch data workflows.
        My background also includes experience in <span className="font-medium">Machine Learning</span> and <span className="font-medium">Natural Language Processing</span>, enabling me to integrate intelligent analytics into data solutions. On the visualization side, I use tools like <span className="font-medium">Power BI, Tableau </span> to create clear, impactful dashboards that support informed decision-making.
        . I enjoy building scalable, efficient solutions for complex problems. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a Data Engineer.
      </p>

      <p>
      What drives me is the challenge of solving complex data problems and the opportunity to collaborate with teams to build systems that scale. I’m currently looking for a full-time role where I can continue growing as a Data Engineer and contribute to innovative, data-centric solutions.
      </p>

      <p>
      Outside of work, I enjoy watching cricket and keeping up with the latest advancements in AI, ML, and data engineering.
      </p>
    </motion.section>
  );
}
