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
        I'm a passionate and driven{" "}
        <span className="font-medium">Software Engineer </span> and{" "}
        <span className="font-medium">Full Stack Developer</span>, currently pursuing my Master's in <span className="font-medium">Computer Science</span> at Indiana University Bloomington.
        I have one year of professional experience in software development, complemented by a strong academic foundation in object-oriented programming, data structures, algorithms and Web Development.
        
      </p> 

      <p className="mb-3"> 
        My journey in tech spans a wide array of interests, including Full Stack Development, Data Science, and cutting-edge fields like AI/ML and Web 3.0. With hands-on experience in technologies like{" "}
        <span className="font-medium">
        Java, React, Spring Boot, AWS, SQL, Python, and PySpark
        </span>
        . I enjoy building scalable, efficient solutions for complex problems. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        In my free time, I love exploring cricket. My ultimate goal is to leverage my skills to create innovative solutions that enhance user experiences and drive meaningful change.
      </p>
    </motion.section>
  );
}
