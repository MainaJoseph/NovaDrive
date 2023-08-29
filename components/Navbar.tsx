import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center pt-1'>
      <h1 className='text-3xl font-bold text-black cursor-pointer'>NovaDrive</h1>
      </Link>

      <CustomButton
        title='Sign in'
        btnType='button'
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
      />
    </nav>
  </header>
);

export default NavBar;
