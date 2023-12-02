import React from 'react';
import Image from 'next/image';
import history from '../../../public/assets/Images/history.jpg';
import ReadMore from './ReadMore';

const History = async () => {
    return (
        <section className='container-fluid bg-[--bg-first] m-auto'>
            <div className='w-full lg:w-[90%] mx-auto flex flex-col lg:flex-row lg:gap-[2.5rem]'>
                <div className='w-full lg:w-[50%]'>
                    <Image src={history} alt='history' className='w-full h-full' />
                </div>
                <div className='w-[90%] lg:w-[50%] mx-auto my-[2rem] xl:m-auto flex flex-col gap-[10px] lg:gap-[16px]'>
                    <h2 className='lg:text-[25px] md:text-[32px] text-[26px] font-[500]'>The Constitutional Tribunal of the Union</h2>
                    <p className='text-[16px] md:text-[18px] lg:text-[16px]'>
                        In the 1947 Constitution, the Supreme Court decided upon constitutional disputes and interpreted the constitution (subject to article 151). In the 1974 Constitution, only the
                        Pyithu Hluttaw (House of Representatives) had the power of interpretation (according to article 200 and 201).
                    </p>
                    <ReadMore />
                </div>
            </div>
        </section>
    );
};

export default History;
