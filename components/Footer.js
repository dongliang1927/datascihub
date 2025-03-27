import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 网站导航 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">网站导航</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/learn" className="text-gray-300 hover:text-white">
                  教学
                </Link>
              </li>
              <li>
                <Link href="/forum" className="text-gray-300 hover:text-white">
                  交流
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-white">
                  新闻
                </Link>
              </li>
            </ul>
          </div>

          {/* 学习资源 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">学习资源</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Python文档
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Kaggle竞赛
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  开源数据集
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  学习路径
                </Link>
              </li>
            </ul>
          </div>

          {/* 关于我们 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">关于我们</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  加入我们
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  反馈建议
                </Link>
              </li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系方式</h3>
            <ul className="space-y-2 text-gray-300">
              <li>邮箱：contact@datascihub.com</li>
              <li>微信：DataSciHub</li>
              <li>地址：北京市海淀区</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DataSciHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 