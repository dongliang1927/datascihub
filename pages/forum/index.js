import { useState } from 'react';
import Link from 'next/link';

// 模拟论坛帖子数据
const posts = [
  {
    id: 1,
    title: '如何优化随机森林模型以提高准确率？',
    author: 'data_explorer',
    date: '2023-09-15',
    tags: ['机器学习', '随机森林', '模型优化'],
    replies: 12,
    views: 238,
    excerpt: '我正在处理一个分类问题，使用随机森林算法。目前的准确率约为82%，但我觉得还有提升空间。有人能分享一些优化随机森林的经验和技巧吗？',
  },
  {
    id: 2,
    title: 'Pandas DataFrame 操作的最佳实践',
    author: 'python_lover',
    date: '2023-09-10',
    tags: ['Python', 'Pandas', '数据处理'],
    replies: 24,
    views: 456,
    excerpt: '我发现在处理大型数据集时，一些Pandas操作非常慢。想和大家讨论一下在处理大数据集时提高Pandas效率的方法和最佳实践。',
  },
  {
    id: 3,
    title: '深度学习入门：从零开始学习神经网络',
    author: 'ai_beginner',
    date: '2023-09-05',
    tags: ['深度学习', '神经网络', '入门'],
    replies: 18,
    views: 392,
    excerpt: '作为一名深度学习初学者，我想分享我的学习路径和一些有用的资源。同时也希望听取更有经验的同学的建议。',
  },
  {
    id: 4,
    title: '数据可视化：如何选择合适的图表类型？',
    author: 'viz_master',
    date: '2023-09-01',
    tags: ['数据可视化', 'Matplotlib', 'Seaborn'],
    replies: 15,
    views: 284,
    excerpt: '在数据分析中，选择合适的可视化方式非常重要。我想讨论不同类型数据适合的图表类型，以及如何让可视化更加清晰有效。',
  },
  {
    id: 5,
    title: '求职经验分享：如何准备数据科学面试？',
    author: 'job_hunter',
    date: '2023-08-28',
    tags: ['求职', '面试', '职业发展'],
    replies: 32,
    views: 621,
    excerpt: '最近我成功应聘了一家科技公司的数据科学职位，想分享一下我的准备过程和面试经验，希望对正在求职的朋友有所帮助。',
  },
  {
    id: 6,
    title: '推荐几本数据科学入门必读书籍',
    author: 'book_worm',
    date: '2023-08-20',
    tags: ['书籍推荐', '学习资源', '入门'],
    replies: 27,
    views: 503,
    excerpt: '想请教各位有哪些数据科学的必读书籍？特别是适合初学者的，包括统计学、机器学习和编程方面的基础知识。',
  },
  {
    id: 7,
    title: '时间序列预测：ARIMA vs LSTM',
    author: 'time_traveler',
    date: '2023-08-15',
    tags: ['时间序列', '预测', 'LSTM'],
    replies: 14,
    views: 312,
    excerpt: '我在做一个销售预测项目，尝试了传统的ARIMA模型和LSTM神经网络。想和大家分享一下两种方法的比较和我的一些发现。',
  },
];

// 论坛分类
const categories = [
  { id: 'all', name: '全部话题' },
  { id: 'ml', name: '机器学习' },
  { id: 'dl', name: '深度学习' },
  { id: 'python', name: 'Python编程' },
  { id: 'visualization', name: '数据可视化' },
  { id: 'career', name: '职业发展' },
  { id: 'resources', name: '学习资源' },
];

export default function ForumPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // 根据搜索和分类过滤帖子
  const filteredPosts = posts.filter(post => {
    // 根据搜索查询过滤
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    // 根据分类过滤
    const matchesCategory = selectedCategory === 'all' || 
      post.tags.some(tag => {
        if (selectedCategory === 'ml') return tag === '机器学习' || tag === '随机森林' || tag === '模型优化';
        if (selectedCategory === 'dl') return tag === '深度学习' || tag === '神经网络';
        if (selectedCategory === 'python') return tag === 'Python' || tag === 'Pandas';
        if (selectedCategory === 'visualization') return tag === '数据可视化' || tag === 'Matplotlib' || tag === 'Seaborn';
        if (selectedCategory === 'career') return tag === '求职' || tag === '面试' || tag === '职业发展';
        if (selectedCategory === 'resources') return tag === '书籍推荐' || tag === '学习资源';
        return false;
      });
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">数据科学交流论坛</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            与全球数据科学爱好者交流经验，分享见解，解决问题
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 侧边栏：分类 */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-primary-600 text-white py-4 px-6">
                <h2 className="text-xl font-bold">论坛分类</h2>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-primary-100 text-primary-700 font-medium'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 border-t">
                <Link href="/forum/new" className="block w-full py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-center font-medium rounded-md transition-colors">
                  发布新帖子
                </Link>
              </div>
            </div>
            
            {/* 热门标签 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
              <div className="bg-gray-800 text-white py-4 px-6">
                <h2 className="text-xl font-bold">热门标签</h2>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {['Python', '机器学习', '深度学习', 'Pandas', '数据可视化', '神经网络', '求职', '入门'].map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* 主内容区域 */}
          <div className="lg:w-3/4">
            {/* 搜索栏 */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="搜索帖子..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <svg 
                  className="w-5 h-5 text-gray-400 absolute left-3 top-3" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                  />
                </svg>
              </div>
            </div>
            
            {/* 帖子列表 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-50 border-b px-6 py-4 flex justify-between items-center">
                <h2 className="text-lg font-semibold">
                  {selectedCategory === 'all' ? '全部话题' : categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <div className="text-sm text-gray-500">
                  共 {filteredPosts.length} 个帖子
                </div>
              </div>
              
              <div className="divide-y">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => (
                    <div key={post.id} className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between">
                        <Link href={`/forum/${post.id}`} className="text-xl font-bold text-primary-700 hover:text-primary-900 transition-colors mb-2 block">
                          {post.title}
                        </Link>
                        <div className="text-sm text-gray-500">
                          {post.date}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <div className="text-gray-600">
                          作者: <span className="text-primary-600">{post.author}</span>
                        </div>
                        <div className="text-gray-500">
                          <span className="mr-4">{post.replies} 回复</span>
                          <span>{post.views} 浏览</span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-10 text-center text-gray-500">
                    没有找到符合条件的帖子
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 