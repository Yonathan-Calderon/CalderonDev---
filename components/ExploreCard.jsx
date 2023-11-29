'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick, githubUrl, websiteUrl }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt="planet-04"
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-7 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] mb-[16px]`}>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <svg className="icon hoverable-icon" width="40" height="40" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.01-2.04-3.338.722-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.107-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
          </a>
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 mx-2 mt-0.6 text-white">
            <svg className="icon hoverable-icon" width="40" height="40" viewBox="0 0 24 24">
              <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fontSize="7" fill="currentColor">WWW</text>
              <circle cx="12" cy="12" r="11" strokeWidth="1" stroke="currentColor" fill="none" />
            </svg>
          </a>
        </div>
        <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase ">Calderon Dev</p>
        <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="text-white">
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white hover:text-blue-400">{title}
          </h2>
        </a>

      </div>
    )}
  </motion.div>
);

export default ExploreCard;
