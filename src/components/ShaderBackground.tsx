'use client';

import { MeshGradient } from '@paper-design/shaders-react';

interface ShaderBackgroundProps {
  children: React.ReactNode;
}

const ShaderBackground = ({ children }: ShaderBackgroundProps) => {
  return (
    <div className='min-h-dvh bg-black relative overflow-hidden'>
      <svg className='absolute inset-0 w-0 h-0'>
        <defs>
          <filter
            id='glass-effect'
            x='-50%'
            y='-50%'
            width='200%'
            height='200%'
          >
            <feTurbulence baseFrequency='0.005' numOctaves='1' result='noise' />
            <feDisplacementMap in='SourceGraphic' in2='noise' scale='0.3' />
            <feColorMatrix
              type='matrix'
              values='1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0'
              result='tint'
            />
          </filter>
          <filter
            id='gooey-filter'
            x='-50%'
            y='-50%'
            width='200%'
            height='200%'
          >
            <feGaussianBlur in='SourceGraphic' stdDeviation='4' result='blur' />
            <feColorMatrix
              in='blur'
              mode='matrix'
              values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'
              result='gooey'
            />
            <feComposite in='SourceGraphic' in2='gooey' operator='atop' />
          </filter>
        </defs>
      </svg>

      <MeshGradient
        className='absolute inset-0 w-full h-full'
        colors={['#000000', '#4b5563', '#1f2937', '#374151', '#6b7280']}
        speed={0.3}
      />
      <MeshGradient
        className='absolute inset-0 w-full h-full opacity-60'
        colors={['#000000', '#6b7280', '#4b5563', '#000000']}
        speed={0.2}
      />

      {children}
    </div>
  );
};

export default ShaderBackground;
