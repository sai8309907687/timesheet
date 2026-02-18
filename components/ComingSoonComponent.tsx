import Image from 'next/image';

export default function ComingSoonComponent() {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center p-8 gap-8'>
      <h1 className='text-3xl font-bold'>Coming Soon!</h1>
      <div className='relative w-full h-48 max-w-md'>
        <Image
          alt='logo'
          className='object-contain'
          src='/next.svg'
          fill
        />
      </div>
      <div className='relative w-full h-24 max-w-md'>
        <Image
          alt='name'
          className='object-contain'
          src='/next.svg'
          fill
        />
      </div>
    </div>
  );
}
