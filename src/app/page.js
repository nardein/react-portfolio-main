//--========== React Portfolio Website ==========--//

//--===== For using useState =====--//
"use client";

//--===== Imported Head =====--//
import Head from "next/head";

//--===== Imported ReactIcons =====--//
import { BsFillMoonStarsFill } from 'react-icons/bs';

//--===== Imported 3D Icons =====--//
import Image from "next/image";
import profilepic from "../app/public/dev/profilepic.png"
import figma from "../app/public/dev/3Dicons/png/figma/figma-dynamic-color.png"
import blender from "../app/public/dev/3Dicons/png/blender/blender-dynamic-color.png"
import photoshop from "../app/public/dev/3Dicons/png/adobe/adobe-photoshop.png"
import illustrator from "../app/public/dev/3Dicons/png/adobe/adobe-illustrator.png"
import aftereffects from "../app/public/dev/3Dicons/png/adobe/adobe-after-effects.png"
import premier from "../app/public/dev/3Dicons/png/adobe/adobe-premier.png"
import vscode from "../app/public/dev/3Dicons/png/adobe/vscode.png"
import lightroom from "../app/public/dev/3Dicons/png/adobe/lightroom.png"
import TwitterLinkIcon from "./components/Twitter";
import InstagramLinkIcon from "./components/Instagram";
import Resume from "./components/Resume";

//--===== Imported Image --=====//
import church from "../app/public/dev/images/ChurchSurreal.png"
import cityneon from "../app/public/dev/images/cityneon.png"
//import potion from "../app/public/dev/images/images/frocio.png" //
import { useState } from "react";


//--===== Main code =====--//
export default function Home() {

  const [darkMode, setDarkMode] = useState(false); //--===== Dark mode setting =====--//
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title> Leonardo Colonna Portfolio</title>
        <meta name="description" content="Generated"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800">
        <section className="max-h-fit">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl dark:text-white">developedbylc</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl dark:text-white"/>
              </li>
              <li>
                <a href="C:\Users\leona\OneDrive\Desktop\portfolio\react-portfolio-main\react-portfolio-main\src\app\public\dev\document\curriculum.pdf" target="_blank"   className="bg-gradient-to-r from-violetPastel to-rosePastel text-white px-4 py-2 rounded-md ml-8">resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-violetNeon font-medium dark:text-violetNeon">Leonardo Colonna</h2>
            <h3 className="text-2xl py-2 leading-8 text-gray-800 dark:text-white"> Developer and Graphic Designer</h3>
            <p className="dark:text-white">Freelancer providing website and graphic content consulting and project</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-violetNeon">
            <TwitterLinkIcon/>
            <InstagramLinkIcon/>
          </div>
          <div className="relative  mx-auto bg-gradient-to-b from-violetPastel to-rosePastel rounded-full w-96 h-96 mt-10 overflow-hidden dark:bg-gradient-to-b from-violetNeon to-roseNeon">
            <Image  src={profilepic} layout="fill" objectFit="cover" style={{position: 'absolute', top: '0%', left: '-7%', }}/>
          </div>
        </section>
        <section className="mt-20">
          <div>
            <h3 className="text-3xl py-1 text-center dark:text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 text-center dark:text-white">
            My portfolio showcases my expertise in <span className="text-teal-500">3D modeling</span>, graphic design, and minimalist <span className="text-teal-500">website development</span>. <br></br>
             I take pride in crafting each project to meet the specific <span className="text-teal-500">needs of my clients</span>, from concept to completion. <br></br>
            Let's bring your ideas to life with stunning visuals and <span className="text-teal-500">functional designs</span>.
            </p>
          </div>
          <div>
            <div className=" bg-gradient-to-t from-violetNeon to-roseNeon text-center shadow-lg p-10 rounded-xl my-10">
              <h1 className="text-6xl font-bold pb-8 text-white">Skills</h1>
              <div className="flex justify-center my-auto">
              <Image src={figma}        width={100} height={100} className="mx-auto" />
              <Image src={blender}      width={100} height={100} className="mx-auto" />
              <Image src={photoshop}    width={100} height={100} className="mx-auto" />
              <Image src={illustrator}  width={100} height={100} className="mx-auto" />
              <Image src={aftereffects} width={100} height={100} className="mx-auto" />
              <Image src={premier}      width={100} height={100} className="mx-auto" />
              <Image src={vscode}       width={100} height={100} className="mx-auto" />
              <Image src={lightroom}    width={100} height={100} className="mx-auto" />
              </div>
            </div>
          </div>
          <div>
          <h1 className="text-3xl font-bold dark:text-white">Portfolio</h1>
            <div className=" bg-gradient-to-t from-violetNeon to-roseNeon text-center shadow-lg p-10 rounded-xl my-10">
              <div>
                <Image src={church} width={960} height={540} className="mx-auto rounded-xl flex"/>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
    );
}