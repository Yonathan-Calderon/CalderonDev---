'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index, url }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4 md:items-center"
    style={{ textDecoration: 'none' }}
  >
    <Image
      src={imgUrl}
      alt="blog_image"
      width={1200}
      height={700}
      className="md:w-[400px] w-full h-[250px] rounded-[32px] object-cover"
    />
    <div className="w-full flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
      <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
        {title}
      </h4>
      <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
        {subtitle}
      </p>
    </div>
  </motion.a>
);

export default InsightCard;
