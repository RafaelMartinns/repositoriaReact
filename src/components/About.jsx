import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="mt-20 mb-11 text-center text-4xl">Sobre <span className="text-neutral-500">Mim</span></h2>
        <div className="flex flex-wrap">
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.5}}
            
            className="w-full lg:w-1/2 lg:p-8 lg:pb-20">
                <div className="flex items-center justify-center ">
                    <img src={aboutImg} alt="about" className=" w-64 h-64 lg:w-80 lg:h-80 rounded-2xl flex-shrink-0 "/>
                </div>
            </motion.div>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:65}}
            transition={{duration:0.5}}
            
            className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className=" my-2 max-w-xl py-6 font-light tracking-tighter">{ABOUT_TEXT}</p>
                    </div>
            </motion.div>
                

        </div>
    </div>
  )
}

export default About