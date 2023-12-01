import ReadMoreTwo from './ReadMoreTwo';

const ActivitiesAnnouncemetns = () => {
    return (
        <div className='mt-10 flex flex-col lg:flex-row'>
            {/* Activities */}
            <div className='w-full lg:w-[50%] flex flex-col gap-[16px]'>
                <h1 className=' text-[30px] text-[--text-color] text-center'>Activities</h1>
                <div className='w-full flex flex-col gap-[16px] '>
                    <h2 className='w-[90%] lg:text-[17px] md:text-[20px] leading-[28px] font-[500] opacity-70'>Donation ceremony of the Constitutional</h2>
                    <p className=' w-[90%] lg:text-[14px] md:text-[18px] leading-[28px] lg:leading-[26px]  font-[500] opacity-60'>
                        <span className=' pl-8'>National</span> Constitutional Court The (13th) Kathanlya robe donation ceremony of staff families will be held at 10:00 this morning at the State
                        Constitutional Court. It was held in office No. (2).
                    </p>
                    <ReadMoreTwo />
                </div>
            </div>

            {/* Announcemetns */}
            <div className='w-full lg:w-[50%] flex flex-col gap-[16px] mt-8 lg:mt-0'>
                <h1 className=' text-[30px] text-[--text-color] text-center'>Announcemetns</h1>
                <div className='w-full flex flex-col gap-[16px] '>
                    <h2 className='w-[90%] lg:text-[17px] md:text-[20px] leading-[28px] lg:leading-[24px]  font-[500] opacity-70'>Online Law Library can be accessed </h2>
                    <p className=' w-[90%] lg:text-[14px] md:text-[18px] leading-[28px]  font-[500] opacity-60'>
                        <span className=' pl-8'>Myanmar</span> Constitutions, other Countries Constitutions, Laws from 1955 to till date, Burma Code Volume 1 to 13 can be read and downloaded in Online
                        Law Library of the Constitutional Tribunal of the Union.
                    </p>
                    <ReadMoreTwo />
                </div>
            </div>
        </div>
    );
};

export default ActivitiesAnnouncemetns;
