import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

// import { AppRouter } from '@/utils/app.router';
// import AstroPeaceImage from '@/public/assets/images/footer-logo.png';
import YoutubeImage from '@/public/assets/images/youtube.png';
import InstagramImage from '@/public/assets/images/instagram.png';
import FacebookImage from '@/public/assets/images/facebook.png';

const FooterComponent = () => {
  const { t } = useTranslation();

  return (
    <footer className='w-full bg-primary flex flex-col items-center py-10 lg:py-16 space-y-8'>
      <div className='w-full max-w-screen-xl text-center md:text-left px-4 md:px-8'>
        {/* Small screen layout */}
        <div className='md:hidden flex flex-col space-y-4'>
          {/* Links as single line */}
          <div className='flex flex-wrap justify-center gap-2 text-xs mb-4'>
            <Link className='text-white hover:underline' href='/astrologers/astrologers'>
              {t("astrologers")}
            </Link>
            <Link className='text-white hover:underline' href='/offerings'>
              {t("offerings")}
            </Link>
            <Link
              className='text-white hover:underline'
              href='https://www.youtube.com/@timesheet'
              target='_blank'
            >
              {t("journey")}
            </Link>
            {/* <Link className='text-white hover:underline' href={AppRouter.ABOUTUS}>
              About Us
            </Link>
            <Link className='text-white hover:underline' href={AppRouter.CONTACTUS}>
              Contact Us
            </Link> */}
            <Link className='text-white hover:underline' href='/terms-conditions'>
              {t("terms")}
            </Link>
            <Link className='text-white hover:underline' href='/privacy-policy'>
              {t("privacy")}
            </Link>
            <Link className='text-white hover:underline' href='/returns-refunds'>
              {t("refunds")}
            </Link>
            {/* <Link className='text-white hover:underline' href={AppRouter.PRIVACY_POLICIES}>
              Pricing
            </Link> */}
          </div>

          {/* Follow Us On - Now at the bottom */}
          <div className='flex flex-col items-center mt-4'>
            <h2 className='text-white text-xs font-semibold mb-1'>{t("followUs")}</h2>
            <div className='flex gap-2'>
              <Link href='https://www.youtube.com/@timesheet' target='_blank'>
                <Image alt='YouTube' className='h-4' src={YoutubeImage.src} />
              </Link>
              <Link href='https://www.instagram.com/timesheet/' target='_blank'>
                <Image alt='Instagram' className='h-4' src={InstagramImage.src} />
              </Link>
              <Link href='https://www.facebook.com/timesheet' target='_blank'>
                <Image alt='Facebook' className='h-4' src={FacebookImage.src} />
              </Link>
            </div>
          </div>
        </div>

        {/* Normal layout for medium and above screens */}
        <div className='hidden md:grid grid-cols-1 md:grid-cols-4 gap-8 mt-8'>
          <div className='flex justify-center w-full'>
            {/* <Image
              alt='AstroPeace Logo'
              className='h-20 md:h-20 lg:h-40'
              src={AstroPeaceImage.src}
            /> */}
          </div>

          <div className='flex flex-col w-full space-y-4'>
            <h2 className='text-2xl font-semibold text-white mb-4'>{t("services")}</h2>
            <ul className='space-y-1'>
              <li>
                <Link
                  className='text-md text-white hover:underline'
                  href='/astrologers/astrologers'
                >
                  {t("astrologers")}
                </Link>
              </li>
              <li>
                <Link className='text-md text-white hover:underline' href='/offerings'>
                  {t("offerings")}
                </Link>
              </li>
              <li>
                <Link
                  className='text-md text-white hover:underline'
                  href='https://www.youtube.com/@timesheet'
                  target='_blank'
                >
                  {t("journey")}
                </Link>
              </li>
            </ul>
          </div>

          <div className='flex flex-col w-full space-y-4'>
            <h2 className='text-2xl font-semibold text-white mb-4'>{t("info")}</h2>
            <ul className='space-y-1'>
              {/* <li>
                <Link className='text-md text-white hover:underline' href={AppRouter.ABOUTUS}>
                  About Us
                </Link>
              </li>
              <li>
                <Link className='text-md text-white hover:underline' href={AppRouter.CONTACTUS}>
                  Contact Us
                </Link>
              </li> */}
              <li>
                <Link className='text-md text-white hover:underline' href='/terms-conditions'>
                  {t("termsConditions")}
                </Link>
              </li>
              <li>
                <Link className='text-md text-white hover:underline' href='/privacy-policy'>
                  {t("privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link className='text-md text-white hover:underline' href='/returns-refunds'>
                  {t("returnsRefunds")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className='text-2xl font-semibold text-white mb-4'>{t("followUs")}</h2>
            <div className='flex gap-6 justify-center md:justify-start'>
              <Link href='https://www.youtube.com/@timesheet' target='_blank'>
                <Image alt='YouTube' className='h-6' src={YoutubeImage.src} />
              </Link>
              <Link href='https://www.instagram.com/ant.web/' target='_blank'>
                <Image alt='Instagram' className='h-6' src={InstagramImage.src} />
              </Link>
              <Link href='https://www.facebook.com/timesheet' target='_blank'>
                <Image alt='Facebook' className='h-6' src={FacebookImage.src} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center mt-10 text-xs text-white opacity-80'>
        <p>&copy; 2025 HATCH AND MARK INDIA LLP. {t("allRightsReserved")}.</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
