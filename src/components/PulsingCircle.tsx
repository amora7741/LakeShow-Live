'use client';

import { PulsingBorder } from '@paper-design/shaders-react';
import { motion } from 'framer-motion';

const PulsingCircle = () => {
  return (
    <div className='relative w-20 h-20 flex items-center justify-center'>
      <PulsingBorder
        colors={[
          '#E9D5FF',
          '#C084FC',
          '#A855F7',
          '#9333EA',
          '#7E22CE',
          '#6B21A8',
          '#581C87',
        ]}
        colorBack='#00000000'
        speed={1.5}
        roundness={1}
        thickness={0.1}
        softness={0.2}
        intensity={5}
        spotSize={0.1}
        pulse={0.1}
        smoke={0.5}
        smokeSize={4}
        scale={0.65}
        rotation={0}
        frame={9161408.251009725}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
        }}
      />

      <motion.svg
        className='absolute inset-0 w-full h-full'
        viewBox='0 0 100 100'
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'linear',
        }}
        style={{ transform: 'scale(1.6)' }}
      >
        <defs>
          <path
            id='circle'
            d='M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0'
          />
        </defs>
        {Array.from({ length: 5 }, (_, i) => (
          <text key={i} className='text-sm fill-white/80 font-serif'>
            <textPath href='#circle' startOffset={`${i * 20}%`}>
              sports.
            </textPath>
          </text>
        ))}
      </motion.svg>
    </div>
  );
};

export default PulsingCircle;
