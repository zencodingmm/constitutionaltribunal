import React from 'react';
import Library from '../../../public/assets/Images/library.png';
import Ruling from '../../../public/assets/Images/ruling.jpg';
import Judgments from '../../../public/assets/Images/Judgments.jpg';
import Constitution from '../../../public/assets/Images/constitution.jpg';
import AACC from '../../../public/assets/Images/aacc.jpg';
import Journal from '../../../public/assets/Images/library.png';
import Gallery from '../../../public/assets/Images/gallery.jpg';
import Card from './Card';

const Library_Decision_Publication = () => {
    return (
        <section className='container-fluid'>
            <div className='flex flex-wrap w-[90%] m-auto gap-[27px] lg:gap-[36px]'>
                <Card src={Library} alt={'Law Library'} text={'Law Library'} href={''} />
                <Card src={Ruling} alt={'Ruling'} text={'Rulings'} href={''} />
                <Card src={Judgments} alt={'Judgments'} text={'Judgments'} href={''} />
                <Card src={Constitution} alt={'Constitution'} text={'Constitution'} href={''} />
                <Card src={AACC} alt={'AACC'} text={'AACC'} href={''} />
                <Card src={Gallery} alt={'Gallery'} text={'Gallery'} href={''} />
                <Card src={Journal} alt={'Journal'} text={'Journal'} href={''} />
            </div>
        </section>
    );
};

export default Library_Decision_Publication;
