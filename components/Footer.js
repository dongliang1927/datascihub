import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">DataSciHub</h2>
            <p className="text-gray-300">您的数据科学学习与交流平台</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">网站导航</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-white">首页</Link></li>
                <li><Link href="/learn" className="text-gray-300 hover:text-white">教学</Link></li>
                <li><Link href="/forum" className="text-gray-300 hover:text-white">交流</Link></li>
                <li><Link href="/news" className="text-gray-300 hover:text-white">新闻</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">相关资源</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-300 hover:text-white">Python文档</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white">Kaggle竞赛</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white">开源数据集</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white">学习路径</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">联系我们</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-300 hover:text-white">关于我们</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white">加入我们</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white">反馈建议</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} DataSciHub. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  );
} 