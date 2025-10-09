'use client';

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

      <div
        className='absolute inset-0 w-full h-full'
        style={{
          background: `
            radial-gradient(ellipse at top left, #4b5563 0%, transparent 50%),
            radial-gradient(ellipse at top right, #1f2937 0%, transparent 50%),
            radial-gradient(ellipse at bottom left, #374151 0%, transparent 50%),
            radial-gradient(ellipse at bottom right, #6b7280 0%, transparent 50%),
            linear-gradient(135deg, #000000 0%, #1f2937 25%, #374151 50%, #4b5563 75%, #000000 100%)
          `,
        }}
      />

      <div
        className='absolute inset-0 w-full h-full opacity-60'
        style={{
          background: `
            radial-gradient(circle at 20% 20%, #6b7280 0%, transparent 30%),
            radial-gradient(circle at 80% 80%, #4b5563 0%, transparent 30%),
            radial-gradient(circle at 40% 60%, #000000 0%, transparent 40%)
          `,
        }}
      />

      {children}
    </div>
  );
};

export default ShaderBackground;
