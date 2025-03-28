import Link from 'next/link';
import { useRouter } from 'next/router';
import CodeBlock from '../../components/CodeBlock';

// 模拟新闻数据 - 完整文章
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
    featured: true,
    content: `
OpenAI正式发布了期待已久的GPT-4多模态版本，这一突破性的人工智能模型不仅可以处理文本，还能同时理解和分析图像内容，为AI应用开辟了全新的可能性。

## 多模态能力的突破

与仅限于文本输入的传统语言模型不同，GPT-4多模态版本可以接受图像和文本的组合输入，并生成相应的文本输出。这意味着用户可以向模型展示图片，并询问关于图像内容的问题，模型能够理解图像内容并提供准确的文字回答。

根据OpenAI的技术报告，GPT-4多模态模型在图像理解方面的能力远超前代产品：

- 能够准确识别图像中的物体、人物和场景
- 理解图表、图形和复杂的可视化信息
- 可以解读手写文本和手绘图
- 分析医学图像并提供初步见解
- 识别截图中的用户界面元素和流程

## 应用场景广泛

GPT-4多模态能力的加入为各行各业带来了丰富的应用可能：

1. **辅助视障人士**：描述图像内容，帮助视障人士更好地理解视觉信息
2. **医疗诊断**：协助医生分析X光片、MRI等医学图像
3. **教育领域**：解答学生提交的包含图表、公式、手写作业的问题
4. **内容创作**：根据图像生成相关文本，如新闻报道、产品描述
5. **图像搜索**：通过自然语言描述查找特定图像内容

## 安全与限制

尽管功能强大，OpenAI表示该模型仍有一定局限性。模型可能无法识别极度复杂或模糊的图像，并存在一定的视觉推理错误率。此外，OpenAI也加强了安全措施，防止模型被用于违法或不道德的用途。

## 行业影响

专家认为，GPT-4多模态模型代表了人工智能向更全面的信息处理能力迈进的重要一步。传统上，AI系统处理不同类型的数据（如文本、图像、音频）需要多个专门模型，而多模态AI提供了统一理解多种信息的能力，更接近人类的感知方式。

随着多模态模型的发展，我们可能很快会看到能够同时处理文本、图像、音频甚至视频的通用AI系统，为各行各业带来更具变革性的应用。
    `
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
    featured: true,
    content: `
Python数据分析库Pandas迎来了重要更新，2.1版本今日正式发布，为数据科学家和分析师带来了显著的性能提升和一系列新功能，进一步巩固了其作为Python数据分析生态系统核心工具的地位。

## 性能优化：速度提升显著

Pandas 2.1最引人注目的改进是全面的性能优化，特别是针对大型数据集的处理能力。根据官方基准测试，新版本在多项常见操作上实现了显著的速度提升：

- **数据分组操作**：GroupBy操作速度提升高达300%
- **数据合并**：大型DataFrame的merge操作提升约50-70%
- **过滤与查询**：复杂条件过滤速度提升约40%
- **聚合函数**：常用聚合函数（如sum、mean、max等）速度普遍提升20-50%

这些改进主要通过以下技术实现：
- 重写了核心算法的C扩展实现
- 优化了内存使用模式和垃圾回收
- 改进了并行计算的实现
- 增强了JIT编译支持

## 与现代数据处理工具的集成

Pandas 2.1增强了与Apache Arrow和Polars等现代数据处理工具的互操作性：

- **Arrow集成**：通过新的to_arrow()和from_arrow()方法提供更高效的数据转换
- **Polars互操作**：简化了与高性能数据框架Polars的数据交换
- **NumPy互操作改进**：零拷贝视图操作优化，减少内存消耗

## 新功能与API改进

除性能优化外，Pandas 2.1还带来了多项实用新功能：

1. **PyArrow引擎改进**：read_csv(), read_json()等IO函数现在默认使用更快的PyArrow引擎
2. **新的分组操作**：引入了groupby().value_counts()等新方法简化常见任务
3. **缺失值处理增强**：新增interpolate方法和缺失值检测功能
4. **类型系统扩展**：改进了类型推断和自定义数据类型支持
5. **绘图功能增强**：新增多种可视化选项和样式定制功能

## 代码示例

以下是Pandas 2.1中一些新功能的示例代码：

\`\`\`python
import pandas as pd

# 使用PyArrow引擎读取CSV（现在是默认行为）
df = pd.read_csv("large_dataset.csv")

# 新的分组操作
result = df.groupby("category").value_counts()

# 改进的内存使用信息
memory_usage = df.memory_usage(deep=True)
print(f"DataFrame内存占用: {memory_usage.sum() / 1024**2:.2f} MB")

# 与Arrow互操作
import pyarrow as pa
arrow_table = df.to_arrow()
df_back = pd.DataFrame.from_arrow(arrow_table)
\`\`\`

## 迁移与兼容性

Pandas 2.1保持了对Python 3.9及以上版本的支持，但包含了一些API变更：

- 移除了之前版本已弃用的功能
- 部分函数参数默认值发生变化
- 调整了某些边缘情况的行为

官方文档提供了详细的迁移指南，帮助用户平滑升级。

## 总结

Pandas 2.1版本代表了这一流行数据分析工具的重要进步，尤其是在性能和互操作性方面。对于数据科学家和分析师来说，升级到新版本将带来明显的生产力提升，特别是在处理大型数据集时。

随着数据规模不断增长和实时分析需求增加，Pandas通过这次更新展示了其持续适应现代数据科学挑战的能力。
    `
  }
];

export default function NewsDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  // 在实际应用中，这里会根据ID从API获取新闻数据
  const article = newsArticles.find(article => article.id === parseInt(id));
  
  // 相关新闻
  const relatedArticles = newsArticles
    .filter(item => item.id !== parseInt(id))
    .slice(0, 3);
  
  if (router.isFallback) {
    return <div className="container mx-auto px-4 py-12">加载中...</div>;
  }
  
  if (!article) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          文章不存在或已被删除
        </div>
        <div className="mt-4">
          <Link href="/news" className="text-primary-600 hover:underline">
            返回新闻列表
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link href="/news" className="text-primary-500 hover:text-primary-600 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            返回新闻列表
          </Link>
        </div>
        
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* 文章头部 */}
          <div className="h-64 bg-gray-200 relative">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
              <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
              <div className="flex items-center text-sm">
                <span className="mr-4">{article.date}</span>
                <span className="mr-4">作者: {article.author}</span>
                <span className="bg-primary-500 text-white px-2 py-1 rounded-full text-xs">{article.category}</span>
              </div>
            </div>
          </div>
          
          {/* 文章内容 */}
          <div className="p-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="text-lg text-gray-600 mb-8 font-medium">
              {article.summary}
            </div>
            
            <div className="prose prose-lg max-w-none">
              {article.content.split('\n\n').map((paragraph, i) => {
                // 处理Markdown格式的标题行
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={i} className="text-2xl font-bold mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                } 
                // 处理代码块
                else if (paragraph.startsWith('```')) {
                  const codeLines = paragraph.split('\n');
                  const language = codeLines[0].replace('```', '').trim();
                  const code = codeLines.slice(1, -1).join('\n');
                  return (
                    <CodeBlock key={i} language={language} code={code} />
                  );
                }
                // 处理普通段落
                else {
                  return (
                    <p key={i} className="mb-4">
                      {paragraph}
                    </p>
                  );
                }
              })}
            </div>
            
            {/* 作者信息 */}
            <div className="mt-10 pt-6 border-t">
              <div className="flex items-center">
                <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center text-gray-600 font-bold text-lg">
                  {article.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <div className="font-bold text-lg">{article.author}</div>
                  <div className="text-gray-500">{article.authorTitle || '编辑'}</div>
                </div>
              </div>
            </div>
          </div>
        </article>
        
        {/* 分享和交互区域 */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold mb-2">分享文章</h3>
              <div className="flex space-x-4">
                <button className="text-blue-600 hover:text-blue-800">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
                <button className="text-blue-400 hover:text-blue-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.039 10.039 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.16a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                  </svg>
                </button>
                <button className="text-blue-700 hover:text-blue-900">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">评分文章</h3>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} className="text-yellow-400 hover:text-yellow-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* 相关文章 */}
        {relatedArticles.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">相关文章</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((article) => (
                <Link href={`/news/${article.id}`} key={article.id} className="hover:text-primary-600 transition">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold mb-2">{article.title}</h3>
                      <p className="text-sm text-gray-600">{article.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 