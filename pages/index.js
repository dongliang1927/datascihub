import Link from 'next/link';
import Profile from './components/Profile';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* 欢迎区域 */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">欢迎来到 DataSciHub</h1>
              <p className="text-xl mb-8">
                您的一站式数据科学学习与交流平台。从基础知识到前沿技术，
                我们致力于帮助您掌握数据科学的各种技能，探索数据世界的无限可能。
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/learn" className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300">
                  开始学习
                </Link>
                <Link href="/forum" className="bg-transparent hover:bg-white/10 border-2 border-white font-bold py-3 px-6 rounded-lg transition duration-300">
                  加入社区
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md h-64 md:h-80">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60"
                  alt="数据科学插图"
                  className="rounded-lg shadow-xl object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 个人主页部分 */}
      <section className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <Profile />
          </div>
        </div>
      </section>

      {/* 功能模块介绍 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">探索我们的平台</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* 教学模块 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4">数据科学教程</h3>
              <p className="text-gray-600 mb-4">从基础到高级的系统化学习内容</p>
              <Link href="/learn" className="text-blue-600 font-semibold hover:text-blue-800">
                开始学习 →
              </Link>
            </div>

            {/* 社区模块 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4">社区交流</h3>
              <p className="text-gray-600 mb-4">分享经验、提问解答</p>
              <Link href="/forum" className="text-blue-600 font-semibold hover:text-blue-800">
                参与讨论 →
              </Link>
            </div>

            {/* 动态模块 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4">行业动态</h3>
              <p className="text-gray-600 mb-4">及时了解数据科学领域的最新发展</p>
              <Link href="/news" className="text-blue-600 font-semibold hover:text-blue-800">
                浏览动态 →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 