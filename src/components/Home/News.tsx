import Image from 'next/image';
import chairPerson from '../../../public/assets/Images/chairperson_1.jpeg';
import firstImage from '../../../public/assets/Images/U Aung Kyaw Zin (Eng).jpg';
import secondImage from '../../../public/assets/Images/Dr May Kyawt Hmue(Eng)-1.jpg';
import thirdImage from '../../../public/assets/Images/6.jpg';
import ReadMoreTwo from './ReadMoreTwo';
import ActivitiesAnnouncemetns from './Activities-Announcemetns ';

const News = () => {
    return (
        <section className=' container-fluid py-[5rem]   bg-[--bg-first] '>
            {/* News Section */}
            <div className='mx-auto w-[90%]'>
                <h1 className=' text-[30px] text-[--text-color] text-center mb-8'>Daily News</h1>
                <div className=' flex gap-10 flex-col lg:flex-row'>
                    {/* left section */}
                    <div className='w-full lg:w-[50%] flex flex-col gap-[inherit]'>
                        <div className='basis-[50%]'>
                            <Image className='object-cover w-full h-full' src={chairPerson} alt='new-image' />
                        </div>
                        <div className='w-full flex flex-col gap-[16px]'>
                            <p className='text-[16px] opacity-80 font-[500]'>Nay Pyi Taw, November 11</p>
                            <h2 className='w-[90%] lg:text-[17px] md:text-[20px] leading-[28px] font-[500] opacity-80'>
                                2023 On November 21 (1385, the 9th day of the new moon of Tasoung Moen), the (13th) Kathinlya robe donation ceremony of the Constitutional Tribunal of the Union was
                                held
                            </h2>
                            <ReadMoreTwo />
                        </div>
                    </div>

                    {/* right section */}
                    <div className='w-full lg:w-[50%] flex flex-col gap-[inherit]'>
                        {/* first */}
                        <div className='flex flex-col md:flex-row gap-5 basis-[30%]'>
                            <div className='basis-[40%] '>
                                <Image src={thirdImage} alt='image' className='object-cover w-full h-full' />
                            </div>
                            <div className='basis-[60%] flex flex-col gap-[inherit] lg:gap-[10px]'>
                                <p className='text-[16px] opacity-80 font-[500]'>Nay Pyi Taw, October 27</p>
                                <p className=' w-full mx-auto lg:text-[13px] xl:text-[14px] font-[500] leading-7 opacity-70'>
                                    2023 Thadingyut paying respect ceremony was held at the Constitutional Tribunal
                                </p>
                                <ReadMoreTwo />
                            </div>
                        </div>

                        {/* second  */}
                        <div className='flex flex-col md:flex-row gap-5  basis-[30%]'>
                            <div className='basis-[40%]'>
                                <Image src={secondImage} alt='image' className='object-cover w-full h-full' />
                            </div>
                            <div className='basis-[60%] flex flex-col gap-[inherit] lg:gap-[10px]'>
                                <p className='text-[16px] opacity-80 font-[500]'>Nay Pyi Taw, November 9</p>
                                <p className=' w-full mx-auto lg:text-[13px] xl:text-[14px] font-[500] leading-7 opacity-70'>
                                    Seminar on Constitutional Law and Adjudication Papers of the Consitutional Tribunal of the Union
                                </p>
                                <ReadMoreTwo />
                            </div>
                        </div>

                        {/* third */}
                        <div className='flex flex-col md:flex-row gap-5  basis-[30%]'>
                            <div className='basis-[40%]'>
                                <Image src={firstImage} alt='image' className='object-cover w-full h-full' />
                            </div>
                            <div className='basis-[60%] flex flex-col gap-[inherit] lg:gap-[10px]'>
                                <p className='text-[16px] opacity-80 font-[500]'>Nay Pyi Taw, November 23</p>
                                <p className=' w-full mx-auto lg:text-[13px] xl:text-[14px] font-[500] leading-7 opacity-70'>
                                    Seminar on Constitutional Law and Adjudication Papers of the Consitutional Tribunal of the Union
                                </p>
                                <ReadMoreTwo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Activities And Announcemetns */}
            <ActivitiesAnnouncemetns />
        </section>
    );
};

export default News;
