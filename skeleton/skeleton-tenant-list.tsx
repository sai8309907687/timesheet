import React from 'react';

export const SkeletonTenantList = () => (
  <div className="flex flex-col gap-1">
    {Array.from({ length: 8 }).map((_, index) => (
      <div key={index} className="flex items-center justify-between p-3 rounded-lg">
        <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
        <div className="h-4 w-4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
      </div>
    ))}
  </div>
);
