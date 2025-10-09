import { MeshGradient } from '@paper-design/shaders-react';

const ShaderBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <MeshGradient
      className='min-h-dvh absolute w-full bg-gray-800'
      colors={['#000000', '#4f4f4f', '#737373']}
      distortion={0.8}
      swirl={0.1}
      grainMixer={0}
      grainOverlay={0}
      speed={0.65}
    >
      {children}
    </MeshGradient>
  );
};

export default ShaderBackground;
