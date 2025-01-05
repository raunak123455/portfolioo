import React, { useState } from "react";
import {
  FaCss3,
  FaEthereum,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { SiMysql, SiRedis } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
import hierarchy from "./hierarchy.png";
import Tc from "./Tc.png";
import Cn from "./Cn.png";
import in2 from "./introis.jpg";
import og2 from "./og.jpg";
import ed from "./ed.jpg";
import unl from "./unl.jpg";
const Experience = () => {
  const [activeCategory, setActiveCategory] = useState("development");
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl flex-col">
            <FaHtml5 color="#E34F26" size={50} />
            <p className="text-white">HTML</p>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl flex-col">
            <FaCss3 color="#1572B6" size={50} />
            <p className="text-white">CSS</p>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl flex-col">
            <FaReact color="#61DAFB" size={50} />
            <p className="text-white">React</p>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl flex-col">
            <FaJs color="#F7DF1E" size={50} />
            <p className="text-white">Javascript</p>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl flex-col">
            <FaFigma color="#F24E1E" size={60} />
            <p className="text-white">Figma</p>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl flex-col">
            <SiMongodb color="#47A248" size={50} />
            <p className="text-white">Mongo Db</p>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl flex-col">
            <FaEthereum color="#475ca2" size={50} />
            <p className="text-white">Blockchain</p>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl flex-col">
            <img src={hierarchy} alt="folder" className="w-[60px] h-[50px]" />
            <p className="text-white">DSA</p>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl flex-col">
            <SiMysql color="#4753a2" size={50} />
            <p className="text-white">SQL</p>
          </span>
        </div>
        <div className="wrapper">
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setActiveCategory("development")}
              className={`px-4 py-2 rounded-lg text-white ${
                activeCategory === "development"
                  ? "bg-[#465697]"
                  : "bg-zinc-800"
              }`}
            >
              Development
            </button>
            <button
              onClick={() => setActiveCategory("sales")}
              className={`px-4 py-2 rounded-lg text-white ${
                activeCategory === "sales" ? "bg-[#465697]" : "bg-zinc-800"
              }`}
            >
              Sales
            </button>
          </div>

          {activeCategory === "development" && (
            <div>
              <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
                <img src={in2} alt="folder" className="w-[60px] h-[50px]" />
                <span className="text-white">
                  <h2 className="leading-tight">MERN Stack Developer Intern</h2>
                  <h2>Introis technologies</h2>
                  <p className="text-sm leading-tight font-thin">
                    July 2024 - Sept 2024
                  </p>
                  <ul className="text-sm p-2">
                    <li>- Worked on Full Stack apps</li>

                    <a
                      href="https://drive.google.com/drive/folders/1uO51egDkO-4mLFV8E4bP7tAmU73GXn5X"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="mt-2 text-white py-1 px-3 text-sm hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-2xl bg-[#465697]">
                        See Work
                      </button>
                    </a>
                  </ul>
                </span>
              </div>
              <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
                <img src={Tc} alt="folder" className="w-[60px] h-[50px]" />
                <span className="text-white">
                  <h2 className="leading-tight">Full Stack Blockchain dev</h2>
                  <h2>Time chain Labs</h2>
                  <p className="text-sm leading-tight font-thin">
                    Sept 2023 - Dec 2023
                  </p>
                  <ul className="text-sm p-2">
                    <li>- Worked on Full Stack Dapps</li>
                    <li>- Developed and deployed smart contracts</li>
                    <li>- Integrated web3 functionality</li>
                    <a
                      href="https://drive.google.com/drive/folders/1ApoQzYItUKYz9T4EN22r6YS_YFB4pPyD"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="mt-2 text-white py-1 px-3 text-sm hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-2xl bg-[#465697]">
                        See Work
                      </button>
                    </a>
                  </ul>
                </span>
              </div>
              <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
                <img src={Cn} alt="folder" className="w-[60px] h-[50px]" />
                <span className="text-white">
                  <h2 className="leading-tight">Smart Contract Auditor</h2>
                  <h2>Code4rena</h2>
                  <p className="text-sm leading-tight font-thin">
                    Jan 2023 - Aug 2023
                  </p>
                  <ul className="text-sm p-2">
                    <li>- Debugged and audited smart contracts</li>
                    <li>- Identified and reported vulnerabilities</li>

                    <a
                      href="https://drive.google.com/drive/folders/your-folder-id"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="mt-2 text-white py-1 px-3 text-sm hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-2xl bg-[#465697]">
                        See Work
                      </button>
                    </a>
                  </ul>
                </span>
              </div>
            </div>
          )}

          {activeCategory === "sales" && (
            <div>
              <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
                <img src={unl} alt="folder" className="w-[60px] h-[50px]" />
                <span className="text-white">
                  <h2 className="leading-tight">Unleash Tech worx</h2>
                  <h2>Bussiness Dev Intern</h2>
                  <p className="text-sm leading-tight font-thin">
                    Jan 2024 - March 2024
                  </p>
                  <ul className="text-sm p-2">
                    <li>- Achieved 120% of sales targets</li>
                    <li>- Managed key client relationships</li>

                    <a
                      href="https://drive.google.com/drive/folders/your-folder-id"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="mt-2 text-white py-1 px-3 text-sm hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-2xl bg-[#465697]">
                        See Work
                      </button>
                    </a>
                  </ul>
                </span>
              </div>
              <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
                <img src={og2} alt="folder" className="w-[60px] h-[50px]" />
                <span className="text-white">
                  <h2 className="leading-tight">Sales & Marketing Intern</h2>
                  <h2>BlocOgs</h2>
                  <p className="text-sm leading-tight font-thin">
                    November 2023 - Jan 2024
                  </p>
                  <ul className="text-sm p-2">
                    <li>- Achieved 120% of sales targets</li>
                    <li>- Managed key client relationships</li>

                    <a
                      href="https://drive.google.com/drive/folders/1c66wGcURr0rxO79JQLqpIBzZra4xTYpy?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="mt-2 text-white py-1 px-3 text-sm hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-2xl bg-[#465697]">
                        See Work
                      </button>
                    </a>
                  </ul>
                </span>
              </div>
              <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
                <img src={ed} alt="folder" className="w-[60px] h-[50px]" />
                <span className="text-white">
                  <h2 className="leading-tight"> Marketing Intern</h2>
                  <h2>Edvance today</h2>
                  <p className="text-sm leading-tight font-thin">
                    June 2022 - Dec 2022
                  </p>
                  <ul className="text-sm p-2">
                    <li>- Developed sales strategies</li>
                    <li>- Increased revenue by 35%</li>
                    <li>- Expanded client base by 50%</li>
                    <a
                      href="https://drive.google.com/drive/folders/1V9-UZEsdQYwORElOiaayVcI4MqLwx3bk?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="mt-2 text-white py-1 px-3 text-sm hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-2xl bg-[#465697]">
                        See Work
                      </button>
                    </a>
                  </ul>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    // </div>
    //     </div>
  );
};

export default Experience;
