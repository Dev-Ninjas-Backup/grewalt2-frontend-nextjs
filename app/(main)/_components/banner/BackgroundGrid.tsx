"use client";
import { useEffect, useState } from "react";

const BackgroundGrid = () => {
  const [gridSize, setGridSize] = useState({ cols: 0, rows: 0 });

  useEffect(() => {
    const calculateGrid = () => {
      const cols = Math.ceil(window.innerWidth / 60);
      const rows = Math.ceil(window.innerHeight / 60);
      setGridSize({ cols, rows });
    };

    calculateGrid();
    window.addEventListener("resize", calculateGrid);
    return () => window.removeEventListener("resize", calculateGrid);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div
        className="grid w-full h-full opacity-[0.4] animate-grid-drift"
        style={{
          gridTemplateColumns: `repeat(${gridSize.cols}, 60px)`,
          gridTemplateRows: `repeat(${gridSize.rows}, 60px)`,
        }}
      >
        {Array.from({ length: gridSize.cols * gridSize.rows }).map((_, i) => (
          <div
            key={i}
            className="border-[0.5px] border-slate-200 transition-all duration-500 hover:bg-[#6FDEF7]/30 hover:shadow-[inset_0_0_15px_rgba(111,222,247,0.2)] pointer-events-auto"
            style={{ width: "60px", height: "60px" }}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes grid-drift {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(30px) rotate(0.5deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
        .animate-grid-drift {
          animation: grid-drift 15s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default BackgroundGrid;
