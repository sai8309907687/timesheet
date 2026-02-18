export const GridLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <aside className="shadow-md p-2 mx-auto w-full overflow-y-auto h-[calc(100vh-149px)]  bg-white dark:bg-black rounded-none">
      {children}
    </aside>
  );
};
