import History from '@/components/Home/History';
import Library_Decision_Publication from '@/components/Home/Library_Decision_Publication';
import News from '@/components/Home/News';

export default function Home() {
    return (
        <main className='container-fluid'>
            <History />

            <Library_Decision_Publication />

            <News />
        </main>
    );
}
