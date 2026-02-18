'use client';

import Image from 'next/image';

// import ProgressBar from "@/public/assets/icons/progress-bar.svg";

export default function AppLoading() {
  return (
    <div className='fixed inset-0 bg-gray-900 bg-opacity-40 flex items-center justify-center z-50'>
      {/* Loading Spinner and Title */}
      <div className='flex flex-col items-center'>
        {/* <div dangerouslySetInnerHTML={{ __html: ProgressBar }} /> */}
        {/* SVG Circle Spinner */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#FF0000" stroke="#FF0000" strokeWidth="2" r="15" cx="35" cy="100"><animate attributeName="cx" calcMode="spline" dur="1" values="35;165;165;35;35" keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin="0"></animate></circle><circle fill="#FF0000" stroke="#FF0000" strokeWidth="2" opacity=".8" r="15" cx="35" cy="100"><animate attributeName="cx" calcMode="spline" dur="1" values="35;165;165;35;35" keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin="0.05"></animate></circle><circle fill="#FF0000" stroke="#FF0000" strokeWidth="2" opacity=".6" r="15" cx="35" cy="100"><animate attributeName="cx" calcMode="spline" dur="1" values="35;165;165;35;35" keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin=".1"></animate></circle><circle fill="#FF0000" stroke="#FF0000" strokeWidth="2" opacity=".4" r="15" cx="35" cy="100"><animate attributeName="cx" calcMode="spline" dur="1" values="35;165;165;35;35" keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin=".15"></animate></circle><circle fill="#FF0000" stroke="#FF0000" strokeWidth="2" opacity=".2" r="15" cx="35" cy="100"><animate attributeName="cx" calcMode="spline" dur="1" values="35;165;165;35;35" keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin=".2"></animate></circle></svg> */}
        {/* Title */}
        <Image alt='Timesheet' height={200} src='/assets/icons/progress-bar.svg' width={200} />
      </div>
    </div>
  );
}
