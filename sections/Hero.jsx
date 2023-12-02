/* eslint-disable react/jsx-closing-tag-location */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const fadeInVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 2, delay: 1 } },
};

const Hero = () => (
  <section className={`${styles.yPaddings} md:h-screen`}><motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className={`${styles.innerWidth} mx-auto flex flex-col md:flex-row items-center h-full`}>
    <div className="flex flex-col justify-center items-center w-full md:w-1/2 md:-mt-40"><motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading} lg:text-[100px]`}><div className="presentation"><span className="intro-gradient">Hi, I'm</span> <span className="name-text">Calderon</span></div></motion.h1><motion.div className="description md:-mt-12" variants={textVariant(1.1)}>Fullstack Developer</motion.div>
      <div className="flex flex-row justify-center items-center space-x-4 mb-4 mt-8 gap-x-4">
        <a href="https://github.com/Yonathan-Calderon?tab=repositories">
          <motion.div variants={textVariant(1.2)}>
            <svg className="icon hoverable-icon" width="40" height="40" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.01-2.04-3.338.722-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.107-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"> </path>
            </svg>
          </motion.div>
        </a>
        <a href="https://www.linkedin.com/in/yonathan-ezequiel-calderon-0b5605245/">
          <motion.div variants={textVariant(1.3)}>
            <svg className="icon hoverable-icon" width="40" height="40" viewBox="0 0 24 24"><path d="M22.225 0H1.77C.79 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.77 24h20.452C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0zM3.555 20.452H7.12V9H3.556v11.452zM5.338 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm15.11 13.019h-3.554v-5.569c0-1.328-.026-3.037-1.852-3.037-1.852 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.415v1.561h.045c.477-.9 1.638-1.85 3.37-1.85 3.602 0 4.268 2.37 4.268 5.455v6.286z"> </path>
            </svg>
          </motion.div>
        </a>
        <a href="/cv/Yonathan Calderon -- Mid-Level Full-Stack Developer.pdf" download>
          <motion.div variants={textVariant(1.4)}>
            <svg className="icon hoverable-icon" width="40" height="40" viewBox="0 0 24 24"><path d="M12 14l7-8H5l7 8zm0 4v-4H8l4 4 4-4h-4v4zM2 19v2h20v-2"> </path>
            </svg>
          </motion.div>
        </a>
      </div>

      <div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="group duration-300 intro-gradient description"
          variants={fadeInVariant}
          initial="initial"
          animate="animate"
          transition="transition"
        >
          <motion.h2 variants={textVariant(1.1)} className={`${styles.heroExplore} text-[40px] mb-4 md:mb-8 hidden md:block lg:mt-24 lg:p-4`}>Get To Know Me
            <motion.svg
              className="ml-4 w-8 h-8 -mt-3 inline transform transition-transform duration-300 group-hover:translate-y-[-2px]"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              variants={fadeInVariant}
              initial="initial"
              animate="animate"
              transition="transition"
            ><path d="M10 10L20 20L30 10" stroke="#3a94df" strokeWidth="1.5" fill="none" /><path d="M10 20L20 30L30 20" stroke="#3a94df" strokeWidth="1.5" fill="none" />
            </motion.svg>
          </motion.h2>
        </motion.div>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center w-full md:w-1/2 ">
      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="relative w-full md:mt-4">
        <div className="flex justify-center">
          <Image
            src="/ImagenEsquina1.webp"
            alt="hero_cover"
            width={1200}
            height={700}
            className="max-w-xl mx-auto w-full h-auto object-cover z-10 relative pl-9 -mt-6"
          />
        </div>
      </motion.div>
    </div>
  </motion.div>
  </section>

);

export default Hero;

