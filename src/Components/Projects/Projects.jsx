import React from "react";
import ProjectCard from "./ProjectCard";
import pj from "./Pj.png";
import pj2 from "./image.png";
import pj3 from "./defi.png";
import pj4 from "./url sh.png";
import pj5 from "./Job.png";



const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
          <ProjectCard
          title="Project Management System"
          main="This app helps individuals and teams organize tasks, track progress, and collaborate seamlessly. With features to create, assign, and update tasks, it simplifies workflows and keeps everyone aligned "
          demo="https://task-finall.vercel.app/"
          source="https://github.com/raunak123455/Task-final/tree/main"
          img={pj}
        />
                 <ProjectCard
          title="Collaborative Whiteboard"
          main="This project is a real-time collaborative whiteboard that allows multiple users to join a shared room and draw together instantly. It’s built with React (frontend), Node.js/Express (backend), and Socket.IO (real-time communication)."
          demo="https://whitboarrd-wcqr.vercel.app/"
          source="https://github.com/raunak123455/Collaborative-Whiteboard-draw-"
          img={pj2}
        />

         <ProjectCard
          title="Finance Dashboard"
          main="Personal Investment Tracking Web App Designed and developed a responsive finance dashboard using modern web technologies to track and visualize personal investment data"
          demo="https://finance-dashboard-rose.vercel.app/"
          source="https://github.com/raunak123455/Finance-dashboard"
          img={pj2}
        />
          <ProjectCard
          title="DEFI Marketplace"
          main="This is a DeFi marketplace that allows users to create tokens, launch ICOs, and seamlessly trade or purchase tokens in a decentralized environment "
          demo="https://defi-marketplacee.vercel.app/"
          source="https://github.com/raunak123455/DEFI-MARKETPLACE-2"
          img={pj3}
        />
          <ProjectCard
          title="Job Finder"
          main="This fullstack job finder platform is designed to simplify and streamline the job search and hiring process. Built with a modern and scalable tech stack, it provides seamless functionality for both job seekers and employers."
          demo="https://naukri-ten.vercel.app/"
          source="https://github.com/raunak123455/Naukri"
          img={pj5}
        />
       
      
      
         <ProjectCard
          title="URL shortener"
          main="This is a full-stack application that shortens long URLs, tracks click analytics, and handles redirection using React, Node.js, Express, and MongoDB. Includes RESTful APIs, unique URL generation, and click tracking"
          demo="https://url-shortner-theta-sage.vercel.app"
          source="https://github.com/raunak123455/Url-shortner"
          img={pj4}
        />
      </div>
    </div>
  );
};

export default Projects;
