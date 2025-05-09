
import React from "react";

const SkeletonLoader: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, idx) => (
        <div key={idx} className="bg-white p-4 rounded shadow animate-pulse">
          <div className="h-48 bg-gray-300 rounded mb-4" />
          <div className="h-4 bg-gray-300 rounded mb-2 w-3/4" />
          <div className="h-4 bg-gray-300 rounded w-1/2" />
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
