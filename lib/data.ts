import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaBriefcase } from "react-icons/fa";
import watchitImg from "@/public/watchit.png";
import bankofapisImg from "@/public/bankofapis.png";
import mentalhealthImg from "@/public/mentalhealth.png";
import dynamicpriceImg from "@/public/dynamicprice.png"; 

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
    title: "NatWest Group - Data Engineer",
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
  {
    title: "Predicting Predictive Analytics for Mental Health",
    description:
      "Employed various Python machine learning classification algorithms to analyze and predict mental health disorders in the tech sector, achieving a 92 percent accuracy rate. Executed a comprehensive project covering data pre-processing, normalization, visualization, and deployment of a wide range of ML techniques, resulting in a 95 % precision rate.",
    tags: ["Data Analysis", "Python", "ETL", "Machine Learning", "Feature Engineering"],
    imageUrl: mentalhealthImg,
  },
  {
    title: "Dynamic Price Optimization for E-commerce",
    description:
      "Developed a price optimization model for e-commerce using machine learning (Random Forest) and deep learning techniques, achieving an R2 score of 0.87 by engineering features and applying advanced preprocessing like normalization, encoding, and outlier detection. Visualized price-demand curves to guide data-driven pricing strategies, maximizing revenue through optimized pricing decisions.",
    tags: ["Data Visualization", "Python", "Machine Learning", "Deep Learning", "Feature Engineering", "Data Analytics"],
    imageUrl: dynamicpriceImg,
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "SpringBoot",
  "RESTful API's",
  "SQL",
  "MongoDB",
  "Git",
  "AWS",
  "Data Analytics",
  "Machine Learning",
  "NLP",
  "NumPy",
  "Pandas",
  "Scikit-Learn",
  "PyTorch",
  "Docker",
  "Postman",
  "Tableau",
  "PowerBI",
  "Jira",
  "BootStrap",
] as const;
