import { useState } from 'react';
import Link from 'next/link';

// 标签选项
const tagOptions = [
  '机器学习', '深度学习', 'Python', 'Pandas', 'NumPy', 'Matplotlib', 
  'Scikit-learn', 'TensorFlow', 'PyTorch', '神经网络', '数据可视化', 
  '数据清洗', '特征工程', '自然语言处理', '计算机视觉', '推荐系统',
  '时间序列', '统计学', '最佳实践', '入门', '求职', '面试'
];

export default function NewPostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [showTagSelector, setShowTagSelector] = useState(false);
  
  // 处理标签选择
  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      // 限制最多选择5个标签
      if (selectedTags.length < 5) {
        setSelectedTags([...selectedTags, tag]);
      }
    }
  };
  
  // 处理表单提交
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 在实际应用中，这里会发送数据到后端API
    console.log({ title, content, tags: selectedTags });
    
    // 模拟提交成功后的重定向
    alert('帖子发布成功！');
    window.location.href = '/forum';
  };
  
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link href="/forum">
            <a className="text-primary-500 hover:text-primary-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              返回论坛
            </a>
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-primary-600 text-white py-4 px-6">
            <h1 className="text-2xl font-bold">发布新帖子</h1>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6">
            {/* 标题 */}
            <div className="mb-6">
              <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
                标题
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="输入帖子标题"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>
            
            {/* 内容 */}
            <div className="mb-6">
              <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
                内容
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="分享您的问题、经验或见解..."
                rows="10"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <p className="mt-2 text-sm text-gray-500">
                支持Markdown格式。使用**文本**来加粗，*文本*来斜体，`代码`来标记代码。
              </p>
            </div>
            
            {/* 标签 */}
            <div className="mb-8">
              <label className="block text-gray-700 font-medium mb-2">
                标签 <span className="text-gray-500 text-sm font-normal">(最多选择5个)</span>
              </label>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {selectedTags.map((tag) => (
                  <span key={tag} className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm flex items-center">
                    {tag}
                    <button 
                      type="button"
                      onClick={() => toggleTag(tag)}
                      className="ml-1 text-primary-500 hover:text-primary-700"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </span>
                ))}
                
                {selectedTags.length < 5 && (
                  <button 
                    type="button"
                    onClick={() => setShowTagSelector(!showTagSelector)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm flex items-center"
                  >
                    {showTagSelector ? '收起' : '添加标签'}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-4 w-4 ml-1 transition-transform ${showTagSelector ? 'rotate-180' : ''}`}
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
              </div>
              
              {showTagSelector && (
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <div className="flex flex-wrap gap-2">
                    {tagOptions.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedTags.includes(tag)
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* 提交按钮 */}
            <div className="flex justify-end">
              <Link href="/forum">
                <a className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded-lg mr-4">
                  取消
                </a>
              </Link>
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-lg"
              >
                发布帖子
              </button>
            </div>
          </form>
        </div>
        
        {/* 发帖指南 */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-blue-800 mb-4">发帖指南</h2>
          <ul className="space-y-2 text-blue-700">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              使用清晰、具体的标题，这样更容易引起其他用户的注意。
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              详细描述您的问题或观点，提供相关的背景信息和您已经尝试过的方法。
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              如果分享代码，请使用代码格式化功能，增加可读性。
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              选择适当的标签，这有助于其他用户找到您的帖子。
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 