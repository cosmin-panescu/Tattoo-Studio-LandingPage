import React, { useState } from 'react';
//  interview data

import { interviewData } from '../data';
// framer motion
import { motion } from 'framer-motion';
// modal video
import ModalVideo from 'react-modal-video';
import '../modalVideo.scss';
// animation
import { fadeIn } from '../variants';

const Interview = () => {
  // destructure interview data
  const { title, btnText, btnIcon } = interviewData;
  // open video state
  const [isOpen, setIsOpen] = useState(false);

  return <div>Interview</div>;
};

export default Interview;
