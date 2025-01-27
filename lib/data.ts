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
    title: "NatWest Group - Software Engineer",
    location: "Chennai, India",
    description: [
      "Led the seamless migration of the economic capital application from SAS to the AWS cloud platform within the Finance and Risk Solutions Business Unit’s Economic Capital team.",
      "Developed the EC application using Python, PySpark, and Airflow, enhancing financial stability calculations.",
      "Achieved a 30% increase in platform performance by replicating full SAS functionality on AWS.",
      "Ensured seamless system access for 20,000+ employees, maintaining operational continuity.",
      "Integrated advanced big data technologies, improving data management workflows.",
      "Collaborated with cross-functional teams to deploy new features, resulting in enhanced system reliability.",
    ],
    icon: React.createElement(FaBriefcase),
    date: "July 2022 - July 2023",
  },
  {
    title: "Shiash Info Solutions - Developer Intern",
    location: "Chennai, India",
    description: [
      "Engineered a cutting-edge application leveraging NLP and ML to detect emotions and extract named entities.",
      "Optimized system performance to process 1,000+ inputs per second, enhancing data analysis capabilities",
      "Engineered an NER model that reduced resume screening time by 50%, increasing HR efficiency by 80%",
      "Leveraged Emotion Detection via NLP to analyze user-generated data, achieving an accuracy rate of 85 percent.",
      "Primarily derived insights from text sources like user comments and occasionally from voice inputs, potentially boosting decision-making accuracy by up to 25 percent.",
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
    title: "Predicting Mental Health",
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
