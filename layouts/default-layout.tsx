'use client';

import React from "react";
import { useSignals } from "@preact/signals-react/runtime";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { SessionToken } from "@/utils/app.event";
import { NonAuthRoutes } from "@/utils/app.router";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useSignals();
  const [toggled, setToggled] = React.useState(true);
  const [isMounted, setIsMounted] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const isNonAuthRoute = NonAuthRoutes.includes(pathname);
  const showSidebar = isMounted && SessionToken.value && !isNonAuthRoute;
  // const backgroundClass = ""; // Handled by inner layouts or global styles

  return (
    <>
      <div className='relative w-full flex flex-col h-[calc(100vh-10px)] overflow-hidden gap-2 bg-[#e8f0ff] dark:bg-[#1f2937]'>
        <Navbar onToggle={() => setToggled(!toggled)} />
        <main className="container mx-auto flex-grow h-full overflow-hidden">
          <div className="flex gap-2 h-full overflow-hidden">
            {showSidebar && (
              <Sidebar isOpen={toggled} onToggle={() => setToggled(!toggled)} />
            )}
            <div className="flex-grow overflow-auto h-[calc(100vh-82px)]">{children}</div>
          </div>
        </main>
      </div>
    </>
  );
}
