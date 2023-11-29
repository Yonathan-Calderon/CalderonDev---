'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { ReactLogo, JsLogo, NodeLogo, HtmlLogo, CssLogo, MySqlLogo, MongoDbLogo, ExpressJsLogo, NginxLogo } from '../components/Logos';
import { staggerContainer, fadeIn } from '../utils/motion';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`} id="skills">
    <motion.div className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col-reverse gap-8`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className={`flex-1 ${styles.flexCenter}`}
      >
        <div className="grid grid-cols-3 gap-4 w-full h-full bg-transparent border border-white rounded-xl p-4 items-center">
          <div className="lg:w-[largerSize] w-[currentSize] flex justify-center">
            <HtmlLogo />
          </div>
          <div className="lg:w-[largerSize] w-[currentSize] flex justify-center">
            <CssLogo />
          </div>
          <div className="lg:w-[largerSize] w-[currentSize] flex justify-center">
            <JsLogo />
          </div>
          <div className="lg:w-[largerSize] w-[currentSize] flex justify-center">
            <ReactLogo />
          </div>
          <div className="lg:w-[largerSize] w-[currentSize] flex justify-center">
            <NodeLogo />
          </div>
          <div className="lg:w-[largerSize] w-[currentSize] flex justify-center">
            <ExpressJsLogo />
          </div>
          <div className="lg:w-[largerSize] w-[currentSize] flex justify-center">
            <MySqlLogo />
          </div>
          <div className="lg:w-[largerSize] w-[currentSize] flex justify-center">
            <MongoDbLogo />
          </div>
          <div className="lg:w-[largerSize] w-[currentSize] flex justify-center">
            <NginxLogo />
          </div>
        </div>
      </motion.div>
      <div className="flex-[1.75] flex justify-center flex-col">
        <TypingText title="| Skills" />
        <TitleText title={<>Explore My Skills</>} />
        <div className="mt-[31px] flex flex-col  gap-[24px]">
          <motion.p variants={fadeIn('up', 'tween', 0.2, 1)} className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white">
            In the vast landscape of web development, I've honed a diverse skill set, rooted in <span className="font-extrabold text-white">HTML</span> and <span className="font-extrabold text-white">CSS</span>, flourishing in <span className="font-extrabold text-white">JavaScript</span>, and extending seamlessly into frameworks like <span className="font-extrabold text-white">React</span>,<span className="font-extrabold text-white">Next.js</span>, <span className="font-extrabold text-white">Node</span>, and <span className="font-extrabold text-white">Express</span>. From crafting interactive frontends to delving into data-driven backends with <span className="font-extrabold text-white">MongoDB</span> and MySQL, each project, whether a dynamic quoting tool, a comprehensive e-commerce platform, or an engaging blog site, is a testament to my passion and adaptability. Let's collaborate to bring your ideas to life – where innovation meets expertise, shaping the future of the digital realm together.
          </motion.p>
        </div>
      </div>
    </motion.div>
  </section>
);

export default GetStarted;
