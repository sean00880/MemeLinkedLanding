// src/components/SidebarAd.tsx
interface SidebarAdProps {
  position: 'left' | 'right';
}

export default function SidebarAd({ position }: SidebarAdProps) {
  return (
    <div className={`w-1/6 ${position === 'left' ? 'mr-2' : 'ml-2'} hidden lg:block`}>
      <div className="ad-box m-2 h-96 bg-[#090909] text-center p-4 rounded-lg shadow-md">
        <p className="text-white">Advertise here</p>
      </div>
      <div className="ad-box m-2 h-96 bg-[#090909] text-center p-4 rounded-lg shadow-md">
        <p className="text-white">Advertise here</p>
      </div>
    </div>
  );
}
