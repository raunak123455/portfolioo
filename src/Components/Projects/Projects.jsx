import React from "react";
import ProjectCard from "./ProjectCard";
import pj from "./Pj.png";
import pj2 from "./image.png";
import pj3 from "./defi.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Finance Dashboard"
          main="Personal Investment Tracking Web App Designed and developed a responsive finance dashboard using modern web technologies to track and visualize personal investment data"
          demo="https://finance-dashboard-rose.vercel.app/"
          source="https://github.com/raunak123455/Finance-dashboard"
          img={pj2}
        />
        <ProjectCard
          title="Project Management System"
          main="This app helps individuals and teams organize tasks, track progress, and collaborate seamlessly. With features to create, assign, and update tasks, it simplifies workflows and keeps everyone aligned "
          demo="https://task-finall.vercel.app/"
          source="https://github.com/raunak123455/Task-final/tree/main"
          img={pj}
        />
        <ProjectCard
          title="DEFI Marketplace"
          main="This is a DeFi marketplace that allows users to create tokens, launch ICOs, and seamlessly trade or purchase tokens in a decentralized environment "
          demo="https://defi-marketplace-2-tbfh.vercel.app/"
          source="https://github.com/raunak123455/DEFI-MARKETPLACE-2"
          img={pj3}
        />
      </div>
    </div>
  );
};

export default Projects;
