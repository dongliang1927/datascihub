import Link from 'next/link';
import { useRouter } from 'next/router';
import CodeBlock from '../../components/CodeBlock';

// 模拟课程数据
const courses = [
  {
    id: 1,
    title: 'Python数据分析入门',
    instructor: '张三',
    instructorTitle: '资深数据分析师',
    level: '初级',
    duration: '6周',
    topics: ['Python基础', 'NumPy', 'Pandas', '数据可视化'],
    description: '这门课程将带你从零开始学习Python数据分析。你将掌握NumPy和Pandas等核心库的使用，学会数据清洗、转换、分析和可视化的基本技能。',
    image: '/images/courses/python-data-analysis.jpg',
    chapters: [
      {
        title: '第1章：Python基础回顾',
        content: `
在开始数据分析之前，我们需要先回顾一下Python的基础知识。本章将覆盖：

- Python数据类型
- 控制流语句
- 函数定义与使用
- 面向对象编程基础

示例代码：

\`\`\`python
# 数据类型示例
numbers = [1, 2, 3, 4, 5]  # 列表
person = {                 # 字典
    "name": "Alice",
    "age": 25,
    "skills": ["Python", "SQL"]
}

# 函数定义
def calculate_average(numbers):
    """计算平均值"""
    return sum(numbers) / len(numbers)

# 类定义
class DataAnalyzer:
    def __init__(self, data):
        self.data = data
    
    def get_summary(self):
        return {
            "length": len(self.data),
            "average": calculate_average(self.data),
            "max": max(self.data),
            "min": min(self.data)
        }

# 使用示例
analyzer = DataAnalyzer(numbers)
summary = analyzer.get_summary()
print(summary)
\`\`\`
        `
      },
      {
        title: '第2章：NumPy基础',
        content: `
NumPy是Python数据分析的基础库，提供了高效的数组操作功能。本章将学习：

- NumPy数组创建与操作
- 数组索引与切片
- 数组运算
- 数学函数

示例代码：

\`\`\`python
import numpy as np

# 创建数组
arr1 = np.array([1, 2, 3, 4, 5])
arr2 = np.zeros((3, 3))
arr3 = np.random.rand(5, 5)

# 数组操作
print(arr1.shape)    # 形状
print(arr1.dtype)    # 数据类型
print(arr1.mean())   # 平均值
print(arr1.sum())    # 求和

# 数组索引
print(arr3[0, 0])    # 第一个元素
print(arr3[:2, :2])  # 切片

# 数组运算
arr4 = arr1 * 2      # 乘法运算
arr5 = np.sin(arr1)  # 三角函数
\`\`\`
        `
      },
      {
        title: '第3章：Pandas数据处理',
        content: `
Pandas是Python最流行的数据分析工具之一，本章将学习：

- Series和DataFrame
- 数据读取与写入
- 数据清洗
- 数据转换

示例代码：

\`\`\`python
import pandas as pd

# 创建DataFrame
data = {
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 35],
    'city': ['Beijing', 'Shanghai', 'Guangzhou']
}
df = pd.DataFrame(data)

# 数据读取
# df = pd.read_csv('data.csv')
# df = pd.read_excel('data.xlsx')

# 数据清洗
df['age'].fillna(df['age'].mean(), inplace=True)  # 填充缺失值
df = df.drop_duplicates()                         # 删除重复行

# 数据转换
df['age_group'] = pd.cut(df['age'],              # 分箱
    bins=[0, 25, 35, 100],
    labels=['Young', 'Middle', 'Old'])

# 数据聚合
summary = df.groupby('city').agg({
    'age': ['mean', 'count']
})
\`\`\`
        `
      }
    ]
  }
];

export default function CourseDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  // 在实际应用中，这里会根据ID从API获取课程数据
  const course = courses.find(course => course.id === parseInt(id));
  
  if (router.isFallback) {
    return <div className="container mx-auto px-4 py-12">加载中...</div>;
  }
  
  if (!course) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          课程不存在或已被删除
        </div>
        <div className="mt-4">
          <Link href="/learn" className="text-primary-600 hover:underline">
            返回课程列表
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link href="/learn" className="text-primary-500 hover:text-primary-600 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            返回课程列表
          </Link>
        </div>
        
        {/* 课程头部信息 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="h-64 bg-gray-200 relative">
            {/* 实际应用中这里会放真实图片 */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
              <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
              <div className="flex items-center text-sm">
                <span className="mr-4">讲师: {course.instructor}</span>
                <span className="mr-4">{course.instructorTitle}</span>
                <span className="bg-primary-500 text-white px-2 py-1 rounded-full text-xs">{course.level}</span>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                </svg>
                <span className="text-gray-600">{course.duration}</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span className="text-gray-600">适合{course.level}学习者</span>
              </div>
            </div>
            
            <div className="text-gray-600 mb-6">
              {course.description}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {course.topics.map((topic) => (
                <span 
                  key={topic}
                  className="bg-primary-50 text-primary-700 text-sm px-3 py-1 rounded-full"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* 课程章节 */}
        <div className="space-y-6">
          {course.chapters.map((chapter, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-4">{chapter.title}</h2>
                <div className="prose max-w-none">
                  {chapter.content.split('\n\n').map((paragraph, i) => {
                    // 处理代码块
                    if (paragraph.startsWith('```')) {
                      const codeLines = paragraph.split('\n');
                      const language = codeLines[0].replace('```', '');
                      const code = codeLines.slice(1, -1).join('\n');
                      return (
                        <div key={i} className="my-6">
                          <CodeBlock code={code} language={language} />
                        </div>
                      );
                    }
                    // 处理列表
                    else if (paragraph.startsWith('- ')) {
                      return (
                        <ul key={i} className="list-disc pl-4 mb-4">
                          {paragraph.split('\n').map((item, j) => (
                            <li key={j}>{item.replace('- ', '')}</li>
                          ))}
                        </ul>
                      );
                    }
                    // 处理普通段落
                    else {
                      return <p key={i} className="mb-4">{paragraph}</p>;
                    }
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 