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
      <p className="mb-3" style={{ textAlign: "justify" }}>
        I'm a passionate <span className="font-medium">Data Engineer</span> with a Master’s in <span className="font-medium">Computer Science</span> from Indiana University Bloomington and two years of professional experience.{" "}
        My journey has been shaped by a strong academic foundation in object-oriented programming, data structures, algorithms, and data engineering principles, combined with real-world experience in designing scalable data systems that turn raw information into valuable insights.
        
      </p> 

      <p className="mb-3" style={{ textAlign: "justify" }}> 
      My interests lie at the intersection of Data Engineering, Data Science, and emerging technologies like Machine Learning, AI, and Natural Language Processing. I have hands-on experience building robust data pipelines using{" "}
        <span className="font-medium">
        Python, SQL, and PySpark </span>
        and have worked extensively with <span className="font-medium">Apache Airflow</span> for workflow orchestration. I’ve leveraged big data frameworks like <span className="font-medium">Apache Spark and Hadoop</span> for distributed data processing and deployed scalable solutions on <span className="font-medium">AWS</span> services such as <span className="font-medium">S3, Redshift, EMR, IAM and Lambda. </span> 
        In addition to strong  <span className="font-medium">ETL/ELT</span> skills and experience in data modeling, I focus on optimizing real-time and batch data workflows for performance and reliability. I also enjoy translating data into clear business insights through visualization tools like Power BI and Tableau.{" "}
      </p>

      <p className="mb-3" style={{ textAlign: "justify" }}>
      What motivates me is the challenge of solving complex data problems and collaborating with others to build systems that scale and make an impact. I'm currently seeking a full-time opportunity where I can continue growing as a Data Engineer and contribute to innovative, data-driven solutions.
      </p>

      <p className="mb-3" style={{ textAlign: "justify" }}>
      Outside of work, I enjoy watching cricket and keeping up with the latest advancements in AI, ML, and data engineering.
      </p>
    </motion.section>
  );
}
