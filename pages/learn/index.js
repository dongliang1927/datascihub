import { useState } from 'react';
import Link from 'next/link';

// 课程数据
const courses = [
  {
    id: 'python-basics',
    title: 'Python 基础',
    description: '学习 Python 编程基础，为数据科学打下坚实基础',
    level: '初级',
    topics: ['变量与数据类型', '条件与循环', '函数', '列表与字典'],
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 'data-analysis',
    title: '数据分析基础',
    description: '使用 Pandas 和 NumPy 进行数据清洗、转换和分析',
    level: '初级',
    topics: ['NumPy 数组操作', 'Pandas 数据处理', '数据清洗', '探索性数据分析'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 'data-visualization',
    title: '数据可视化',
    description: '通过 Matplotlib 和 Seaborn 创建直观的数据可视化',
    level: '中级', 
    topics: ['基础图表绘制', '多变量可视化', '交互式可视化', '地理数据可视化'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 'machine-learning',
    title: '机器学习入门',
    description: '学习常见机器学习算法及其在 Scikit-learn 中的应用',
    level: '中级',
    topics: ['监督学习', '非监督学习', '模型评估', '特征工程'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 'deep-learning',
    title: '深度学习基础',
    description: '探索神经网络基础和使用 TensorFlow/PyTorch 构建模型',
    level: '高级',
    topics: ['神经网络入门', '卷积神经网络', '循环神经网络', '模型部署'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 'nlp',
    title: '自然语言处理',
    description: '使用 Python 进行文本分析和自然语言处理',
    level: '高级',
    topics: ['文本预处理', '词向量', '情感分析', '主题建模'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=60'
  }
];

export default function LearnPage() {
  const [filter, setFilter] = useState('all');
  
  const filteredCourses = filter === 'all' 
    ? courses 
    : courses.filter(course => course.level === filter);
  
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">数据科学教学中心</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            从基础到高级，掌握数据科学所需的各项技能。每门课程都包含详细教程和实用的Python代码示例。
          </p>
        </div>
        
        {/* 过滤器 */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              onClick={() => setFilter('all')}
              className={`py-2 px-4 text-sm font-medium rounded-l-lg ${
                filter === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              全部课程
            </button>
            <button
              onClick={() => setFilter('初级')}
              className={`py-2 px-4 text-sm font-medium ${
                filter === '初级'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              初级
            </button>
            <button
              onClick={() => setFilter('中级')}
              className={`py-2 px-4 text-sm font-medium ${
                filter === '中级'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              中级
            </button>
            <button
              onClick={() => setFilter('高级')}
              className={`py-2 px-4 text-sm font-medium rounded-r-lg ${
                filter === '高级'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              高级
            </button>
          </div>
        </div>
        
        {/* 课程列表 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gray-200 relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-bold px-3 py-1 m-2 rounded-full">
                  {course.level}
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{course.title}</h2>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">主要内容：</h3>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                <Link href={`/learn/${course.id}`} className="block w-full text-center bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded transition duration-300">
                  开始学习
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* 学习路径指南 */}
        <div className="mt-16 bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-6">数据科学学习路径</h2>
          <div className="relative">
            {/* 连接线 */}
            <div className="absolute left-6 top-0 w-1 h-full bg-primary-100 hidden md:block"></div>
            
            {/* 路径步骤 */}
            <div className="space-y-12">
              {[
                { 
                  title: '1. 编程基础', 
                  desc: '学习Python基础编程，掌握变量、条件语句、循环、函数等概念。', 
                  courses: ['Python 基础'] 
                },
                { 
                  title: '2. 数据操作', 
                  desc: '学习如何使用NumPy和Pandas进行数据分析和处理。', 
                  courses: ['数据分析基础'] 
                },
                { 
                  title: '3. 数据可视化',
                  desc: '学习如何使用Matplotlib和Seaborn创建引人注目的可视化。',
                  courses: ['数据可视化'] 
                },
                { 
                  title: '4. 机器学习基础',
                  desc: '学习机器学习的基本概念和算法，以及如何使用Scikit-learn。',
                  courses: ['机器学习入门'] 
                },
                { 
                  title: '5. 高级主题',
                  desc: '深入学习深度学习、自然语言处理或其他专业领域。',
                  courses: ['深度学习基础', '自然语言处理'] 
                }
              ].map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 relative">
                    <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-lg hidden md:flex">
                      {index + 1}
                    </div>
                  </div>
                  <div className="ml-0 md:ml-8">
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-gray-600 mt-2">{step.desc}</p>
                    <div className="mt-2">
                      <span className="text-sm font-medium text-gray-500">推荐课程：</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {step.courses.map((course, idx) => (
                          <span key={idx} className="bg-primary-50 text-primary-700 text-xs font-medium px-2.5 py-1 rounded">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 