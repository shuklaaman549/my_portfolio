"use client";

import { Description } from "@radix-ui/react-dialog";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis cumque molestiae tempora.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Aman Shukla",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 70040 46568",
    },
    {
      fieldName: "Codechef",
      fieldValue: "shuklaaman549",
    },
    {
      fieldName: "Leetcode",
      fieldValue: "shuklaaman549",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },
  ],
};

const Resume = () => {
  return <div>resume page</div>;
};

export default Resume;
