import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, title = 'DataSciHub - 数据科学学习与交流平台', description = '数据科学学习与交流平台' }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title} - DataSciHub</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      
      <main className="flex-grow pt-16">
        {children}
      </main>
      
      <Footer />
    </div>
  );
} 