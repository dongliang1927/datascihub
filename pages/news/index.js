import { useState } from 'react';
import Link from 'next/link';

// 模拟新闻数据
const newsArticles = [
  {
    id: 1,
    title: 'OpenAI发布GPT-4多模态模型，可同时理解图像和文本',
    date: '2023-09-20',
    author: '李明',
    authorTitle: '人工智能研究员',
    category: '深度学习',
    tags: ['AI', 'GPT-4', '大型语言模型'],
    summary: 'OpenAI正式发布GPT-4 Multimodal模型，突破传统文本处理局限，能够接受同时包含图像和文字的输入，并提供相应的文本输出。新模型理解复杂图像的能力大幅提升，可应用于更广泛的场景。',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60',
    featured: true
  },
  {
    id: 2,
    title: '2023年数据科学十大热门技术趋势',
    date: '2023-09-18',
    author: '张华',
    authorTitle: '技术分析师',
    category: '技术趋势',
    tags: ['趋势', '技术', '数据科学'],
    summary: '随着人工智能和大数据技术的快速发展，2023年数据科学领域呈现出新的发展趋势。本文将为您解析今年最受关注的十大技术趋势，包括自动机器学习、可解释AI、联邦学习等新兴技术。',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
    featured: true
  },
  {
    id: 3,
    title: 'Pandas 2.1发布，性能大幅提升',
    date: '2023-09-15',
    author: '王芳',
    authorTitle: '数据科学工程师',
    category: '数据处理',
    tags: ['Python', 'Pandas', '数据分析'],
    summary: '开源数据分析库Pandas发布2.1版本，带来多项性能优化和新功能。新版本通过重构底层实现和使用更高效的算法，大幅提升了大型数据集的处理速度，并增强了与Arrow和Polars等现代数据处理工具的互操作性。',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop&q=60',
    featured: true
  },
  {
    id: 4,
    title: '微软推出新一代数据科学云平台',
    date: '2023-09-12',
    author: '刘强',
    authorTitle: '云计算专家',
    category: '云计算',
    tags: ['微软', '云平台', '数据科学'],
    summary: '微软发布新一代数据科学云平台，整合了机器学习、数据处理和分析等功能，提供端到端的数据科学解决方案。新平台支持多种编程语言和框架，简化了模型部署和管理流程。',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&auto=format&fit=crop&q=60',
    featured: false
  },
  {
    id: 5,
    title: '数据科学家薪资调查报告2023',
    date: '2023-09-10',
    author: '陈静',
    authorTitle: '人才顾问',
    category: '职业发展',
    tags: ['薪资', '职业', '调查报告'],
    summary: '最新调查显示，数据科学家的薪资水平持续上涨，特别是在人工智能和机器学习领域。报告详细分析了不同地区、经验水平和技术栈的薪资差异，为从业者提供参考。',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=60',
    featured: false
  }
];

// 新闻分类
const categories = [
  { id: 'all', name: '全部' },
  { id: 'ai', name: '人工智能' },
  { id: 'ml', name: '机器学习' },
  { id: 'cloud', name: '云计算' },
  { id: 'career', name: '职业发展' },
  { id: 'tools', name: '工具技术' }
];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // 根据搜索和分类过滤新闻
  const filteredNews = newsArticles.filter(article => {
    // 根据搜索查询过滤
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    
    // 根据分类过滤
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'ai' && (article.category === '深度学习' || article.tags.includes('AI'))) ||
      (selectedCategory === 'ml' && article.category === '机器学习') ||
      (selectedCategory === 'cloud' && article.category === '云计算') ||
      (selectedCategory === 'career' && article.category === '职业发展') ||
      (selectedCategory === 'tools' && (article.category === '数据处理' || article.tags.includes('工具')));
    
    return matchesSearch && matchesCategory;
  });
  
  // 分离特色新闻和普通新闻
  const featuredNews = filteredNews.filter(article => article.featured);
  const regularNews = filteredNews.filter(article => !article.featured);
  
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">数据科学新闻</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            及时了解数据科学领域的最新动态、技术趋势和行业资讯
          </p>
        </div>
        
        {/* 分类和搜索 */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className="w-full sm:w-64">
              <div className="relative">
                <input
                  type="text"
                  placeholder="搜索新闻..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <svg 
                  className="w-5 h-5 text-gray-400 absolute left-3 top-3" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
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
          </div>
        </div>
        
        {/* 特色新闻 */}
        {featuredNews.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">特色报道</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredNews.map((article) => (
                <Link href={`/news/${article.id}`} key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200 relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-bold px-3 py-1 m-2 rounded-full">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded">
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-sm ml-2">{article.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{article.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.summary}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{article.author}</span>
                      <span className="mx-2">·</span>
                      <span>{article.authorTitle}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        
        {/* 普通新闻列表 */}
        <div>
          <h2 className="text-2xl font-bold mb-6">最新资讯</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regularNews.map((article) => (
              <Link href={`/news/${article.id}`} key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gray-200 relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-bold px-3 py-1 m-2 rounded-full">
                    {article.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm ml-2">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{article.summary}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{article.author}</span>
                      <span className="mx-2">·</span>
                      <span>{article.authorTitle}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 