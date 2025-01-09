// components/ProgressBar.tsx
interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
      <div className="relative w-full h-4 mb-6 bg-opacity-20 backdrop-blur-md bg-white/10 rounded-full border border-green-300 shadow-lg shadow-green-600/50">
          {/* Background styling for glassmorphism */}
          <div
              className="absolute top-0 left-0 h-4 rounded-full"
              style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, rgba(255, 255, 0, 0.7), rgba(255, 255, 0, 1))',
                  boxShadow: '0px 0px 15px 5px rgba(255, 255, 0, 0.5)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: 'inherit',
              }}
          ></div>
          {/* Adding a holographic border and reflection effect */}
          <div className="absolute top-0 left-0 w-full h-4 rounded-full border border-green-400/60 animate-pulse"></div>
      </div>
  );
}
