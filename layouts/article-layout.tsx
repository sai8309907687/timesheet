export const ArticleLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <article className='conatiner top-0 p-4 mx-auto min-w-[360px] pb-2 bg-white dark:bg-black rounded-none'>
      {children}
    </article>
  );
};
