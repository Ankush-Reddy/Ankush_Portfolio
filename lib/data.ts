import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaBriefcase } from "react-icons/fa";
import watchitImg from "@/public/watchit.png";
import bankofapisImg from "@/public/bankofapis.png";
import mentalhealthImg from "@/public/mentalhealth.png";
import dynamicpriceImg from "@/public/dynamicprice.png";
import hospitalImg from "@/public/HospitalImage.jpeg"; 

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Indiana University - Data Engineer Research Assistant",
    location: "Bloomington, Indiana",
    description: [
      "Designed scalable ETL pipelines to process 500K+ records from Glassdoor (JSON) and LinkedIn (Parquet).",
      "Generated employer-level descriptive analytics summarizing temporal insights from 500K+ raw review data.",
      "Built a full-stack React + Spring Boot application using OpenAI API to extract insights from academic papers.",
      "Automated personalized feedback generation with GPT-4o-mini via Python-Spring Boot integration.",
    ],
    icon: React.createElement(FaBriefcase),
    date: "March 2025 - Present",
  },
  {
    title: "Concurrent LLC (Martha AI) - Software Engineer",
    location: "Bloomington, Indiana",
    description: [
      "Architected user onboarding flow for an AI ad optimization platform, boosting activation rate by 18%.",
      "Designed 15+ conversational AI prompts to capture user intent and generate tailored ad recommendations.",
      "Improved UI through custom dashboards and optimized user management components for better usability.",
    ],
    icon: React.createElement(FaBriefcase),
    date: "October 2024 - February 2025",
  },
  {
    title: "NatWest Group - Software Engineer",
    location: "Chennai, India",
    description: [
      "Migrated financial application from SAS to AWS, enabling scalable pipelines and boosting performance by 30%.",
      "Built ETL workflows with Python, PySpark, and Airflow to streamline financial data processing.",
      "Enabled system accessibility for 20,000+ users while integrating data governance and quality practices.",
      "Integrated advanced big data technologies, improving data management workflows.",
      "Collaborated across teams to deploy analytics features, improving operational risk evaluation.",
      "Implemented data quality checks to detect and fix integrity issues in cloud pipelines.",
    ],
    icon: React.createElement(FaBriefcase),
    date: "July 2022 - July 2023",
  },
  {
    title: "Shiash Info Solutions PVT.LTD - Data Engineer",
    location: "Chennai, India",
    description: [
      "Engineered a cutting-edge application leveraging NLP and ML to detect emotions and extract named entities.",
      "Engineered an NER model that reduced resume screening time by 50%, increasing HR efficiency by 80%",
      "Utilized Emotion Detection with NLP to analyze user-generated data, achieving an accuracy rate of 85 percent",
      "Built and validated structured datasets from unstructured sources, improving accuracy for NLP-based insights.",
      "Delivered structured reports and dashboards using Power BI to monitor model results and stakeholder KPIs.",
    ],
    icon: React.createElement(FaBriefcase),
    date: "Jan 2022 - June 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Predictive Analytics for Mental Health Trends in Tech",
    description:
      "Employed various Python machine learning classification algorithms to analyze and predict mental health disorders in the tech sector, achieving a 92 percent accuracy rate. Executed a comprehensive project covering data pre-processing, normalization, visualization, and deployment of a wide range of ML techniques, resulting in a 95 % precision rate.",
    tags: ["Data Analysis", "Python", "ETL", "Machine Learning", "Feature Engineering"],
    imageUrl: mentalhealthImg,
  },
  {
    title: "Hospital Resource Optimization System",
    description:
      "Designed and deployed a data-driven system to streamline hospital operations and improve patient care. Built scalable ETL pipelines to integrate and process real-time data from over 15 hospital departments, including patient flow and bed occupancy metrics. Leveraged Apache Airflow to orchestrate workflows that processed 50,000+ daily records with 99% accuracy. Implemented predictive analytics models to optimize emergency room operations, resulting in a 40% reduction in patient wait times. Developed an automated alerting system for critical resource shortages, ensuring timely interventions. The entire solution was containerized with Docker and maintained a consistent uptime of 99.8%.",
    tags: ["Python", "SQL", "Apache Airflow", "PostgreSQL", "Pandas", "Docker"],
    imageUrl: hospitalImg,
  },
  {
    title: "Dynamic Price Optimization for E-commerce",
    description:
      "Developed a price optimization model for e-commerce using machine learning (Random Forest) and deep learning techniques, achieving an R2 score of 0.87 by engineering features and applying advanced preprocessing like normalization, encoding, and outlier detection. Visualized price-demand curves to guide data-driven pricing strategies, maximizing revenue through optimized pricing decisions.",
    tags: ["Data Visualization", "Python", "Machine Learning", "Deep Learning", "Feature Engineering", "Data Analytics"],
    imageUrl: dynamicpriceImg,
  },
   {
    title: "WatchIt",
    description:
      "Developed a movie recommendation system that streamlined the process for users to browse, search, and book movie tickets, significantly improving user engagement. Implemented advanced search functionality and real-time booking capabilities, ensuring accurate availability updates and a seamless ticket purchasing process.",
    tags: ["Java", "React", "SpringBoot", "MySql", "BootStrap"],
    imageUrl: watchitImg,
  },
  {
    title: "Bank of API’s",
    description:
      "Implemented a centralized platform that allows clients to add multiple bank accounts and view individual statements across all their accounts, increasing efficiency by up to 55%. Enabled seamless interbank transfers, allowing clients to send money from one account to another, enhancing convenience and user satisfaction.",
    tags: ["React", "SpringBoot", "MicroServices", "MySql", "BootStrap", "Java"],
    imageUrl: bankofapisImg,
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "SQL",
  "AWS",
  "Data Analytics",
  "Data Engineering",
  "Data Modeling",
  "Data Governance",
  "Machine Learning",
  "NLP",
  "NumPy",
  "Pandas",
  "Scikit-Learn",
  "PyTorch",
  "Matplotlib",
  "NLTK",
  "Spacy",
  "Docker",
  "PowerBI",
  "Tableau",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "SpringBoot",
  "RESTful API's",
  "MongoDB",
  "Git",
  "Postman",
  "Jira",
  "BootStrap",
] as const;
