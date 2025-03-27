import { useState } from 'react';
import Link from 'next/link';
import CodeBlock from '../../components/CodeBlock';

// 章节数据
const chapters = [
  {
    id: 'introduction',
    title: '1. Python简介',
    content: `
Python是一种高级编程语言，它的设计强调代码的可读性和简洁性。作为一种解释型语言，Python代码不需要编译就可以直接运行，这使得开发过程更加高效。

Python在数据科学领域非常流行，主要原因包括：
- 简单易学的语法
- 丰富的数据科学库（NumPy, Pandas, Scikit-learn等）
- 强大的可视化工具
- 活跃的社区支持

在本课程中，我们将学习Python的基础知识，为后续的数据科学学习打下坚实基础。
    `
  },
  {
    id: 'variables',
    title: '2. 变量与数据类型',
    content: `
在Python中，变量是用来存储数据的命名空间。Python是动态类型语言，这意味着我们不需要预先声明变量的类型。

### 基本数据类型

Python中有几种基本的数据类型：
1. 整数（int）：如 1, 100, -10
2. 浮点数（float）：如 3.14, -0.001
3. 字符串（str）：如 "Hello", 'World'
4. 布尔值（bool）：True 或 False

### 示例代码
    `,
    code: `# 整数
age = 25
print(f"年龄: {age}, 类型: {type(age)}")

# 浮点数
pi = 3.14159
print(f"圆周率: {pi}, 类型: {type(pi)}")

# 字符串
name = "数据科学爱好者"
print(f"姓名: {name}, 类型: {type(name)}")

# 布尔值
is_student = True
print(f"是否是学生: {is_student}, 类型: {type(is_student)}")

# 类型转换
string_number = "42"
number = int(string_number)
print(f"转换后的数字: {number}, 类型: {type(number)}")`
  },
  {
    id: 'lists',
    title: '3. 列表与集合',
    content: `
Python提供了多种集合类型来存储和组织数据。最常用的是列表（list）、元组（tuple）、集合（set）和字典（dict）。

### 列表（List）

列表是Python中最常用的数据结构之一，它是有序的、可变的，可以存储不同类型的元素。

主要特点：
- 使用方括号 [] 创建
- 元素可以被修改、添加或删除
- 支持索引和切片操作
- 可以嵌套（列表中的元素也可以是列表）

### 示例代码
    `,
    code: `# 创建列表
fruits = ["苹果", "香蕉", "橙子", "葡萄"]
print(f"水果列表: {fruits}")

# 访问列表元素
first_fruit = fruits[0]  # 索引从0开始
print(f"第一个水果: {first_fruit}")

# 修改列表元素
fruits[1] = "草莓"
print(f"修改后的水果列表: {fruits}")

# 添加元素
fruits.append("芒果")
print(f"添加后的水果列表: {fruits}")

# 删除元素
removed = fruits.pop(2)  # 移除索引为2的元素
print(f"移除了: {removed}")
print(f"当前水果列表: {fruits}")

# 列表长度
print(f"列表长度: {len(fruits)}")

# 列表切片
subset = fruits[1:3]  # 获取索引1到3（不包括3）的元素
print(f"列表切片: {subset}")

# 列表推导式
squares = [x**2 for x in range(1, 6)]
print(f"平方数列表: {squares}")`
  },
  {
    id: 'conditionals',
    title: '4. 条件语句与循环',
    content: `
条件语句和循环是程序控制流的基本结构，允许我们根据条件执行不同的代码块或重复执行某些代码。

### 条件语句

Python使用 if, elif 和 else 关键字来构建条件语句。

基本语法:
\`\`\`python
if 条件1:
    # 如果条件1为True，执行这里的代码
elif 条件2:
    # 如果条件1为False且条件2为True，执行这里的代码
else:
    # 如果以上条件都为False，执行这里的代码
\`\`\`

### 循环

Python有两种主要的循环结构：for循环和while循环。

1. for循环：用于遍历序列（如列表、元组、字符串等）
2. while循环：当条件为True时重复执行代码块

### 示例代码
    `,
    code: `# if-elif-else 条件语句
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"分数: {score}, 等级: {grade}")

# for 循环
print("遍历列表:")
fruits = ["苹果", "香蕉", "橙子"]
for fruit in fruits:
    print(f"- {fruit}")

# 使用range()生成数字序列
print("使用range():")
for i in range(5):  # 0, 1, 2, 3, 4
    print(f"数字: {i}")

# while 循环
print("while循环:")
count = 0
while count < 5:
    print(f"计数: {count}")
    count += 1  # 增加计数器

# break和continue
print("带break的循环:")
for i in range(10):
    if i == 5:
        break  # 当i等于5时跳出循环
    print(i)

print("带continue的循环:")
for i in range(10):
    if i % 2 == 0:
        continue  # 跳过偶数
    print(i)`
  },
  {
    id: 'functions',
    title: '5. 函数',
    content: `
函数是组织代码的基本单位，它允许我们将代码块封装成可重用的组件。

### 定义函数

使用 def 关键字定义函数:

\`\`\`python
def 函数名(参数1, 参数2, ...):
    # 函数体
    return 返回值
\`\`\`

### 函数参数

Python函数支持多种参数类型:
1. 必需参数：调用函数时必须提供的参数
2. 默认参数：有默认值的参数，如果不提供则使用默认值
3. 关键字参数：使用参数名指定的参数
4. 不定长参数：使用 *args 和 **kwargs 接收不定数量的参数

### 示例代码
    `,
    code: `# 定义简单函数
def greet(name):
    return f"你好，{name}！"

# 调用函数
message = greet("数据科学家")
print(message)

# 带默认参数的函数
def power(x, n=2):
    """计算x的n次方"""
    return x ** n

print(f"3的平方: {power(3)}")      # 使用默认参数n=2
print(f"2的3次方: {power(2, 3)}")  # 显式指定n=3

# 使用关键字参数
def describe_person(name, age, profession="学生"):
    return f"{name}是一名{age}岁的{profession}。"

# 不同调用方式
print(describe_person("张三", 25, "工程师"))
print(describe_person(age=30, name="李四"))  # 使用关键字参数，顺序可以改变
print(describe_person("王五", 22))  # 使用默认profession值

# 不定长参数 *args
def sum_all(*numbers):
    """计算所有传入数字的和"""
    total = 0
    for num in numbers:
        total += num
    return total

print(f"求和结果: {sum_all(1, 2, 3, 4, 5)}")

# 不定长关键字参数 **kwargs
def print_info(**kwargs):
    """打印所有传入的关键字参数"""
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="数据科学", year=2023, field="机器学习")`
  },
  {
    id: 'dictionaries',
    title: '6. 字典',
    content: `
字典（Dictionary）是Python中另一个非常重要的数据结构。它是一种键值对的集合，其中每个键都是唯一的。

### 字典特点

- 使用大括号 {} 创建
- 由键值对组成（key: value）
- 键必须是不可变类型（如字符串、数字、元组）
- 值可以是任何类型
- 访问、添加和修改元素都通过键完成

字典在数据科学中广泛用于表示结构化数据，如配置信息、特征映射等。

### 示例代码
    `,
    code: `# 创建字典
student = {
    "name": "张三",
    "age": 20,
    "major": "数据科学",
    "courses": ["Python编程", "统计学", "机器学习"]
}

print(f"学生信息: {student}")

# 访问字典元素
name = student["name"]
print(f"学生姓名: {name}")

# 使用get()方法（推荐，避免键不存在时出错）
gpa = student.get("gpa", "未记录")  # 如果键不存在，返回默认值
print(f"学生GPA: {gpa}")

# 修改字典元素
student["age"] = 21
print(f"更新后的年龄: {student['age']}")

# 添加新元素
student["gpa"] = 3.8
print(f"添加GPA后: {student}")

# 删除元素
courses = student.pop("courses")
print(f"删除的课程: {courses}")
print(f"当前学生信息: {student}")

# 检查键是否存在
has_major = "major" in student
print(f"是否有专业信息: {has_major}")

# 字典方法
keys = student.keys()
values = student.values()
items = student.items()  # 返回(键, 值)对的列表

print(f"所有键: {list(keys)}")
print(f"所有值: {list(values)}")

# 遍历字典
print("遍历学生信息:")
for key, value in student.items():
    print(f"- {key}: {value}")`
  }
];

export default function PythonBasics() {
  const [activeChapter, setActiveChapter] = useState(chapters[0].id);
  
  const currentChapter = chapters.find(chapter => chapter.id === activeChapter);
  
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <Link href="/learn">
            <a className="text-primary-500 hover:text-primary-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              返回课程列表
            </a>
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* 侧边栏 */}
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Python 基础</h2>
              <nav>
                <ul className="space-y-1">
                  {chapters.map((chapter) => (
                    <li key={chapter.id}>
                      <button
                        onClick={() => setActiveChapter(chapter.id)}
                        className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                          activeChapter === chapter.id
                            ? 'bg-primary-100 text-primary-800 font-medium'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        {chapter.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          
          {/* 主内容 */}
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h1 className="text-3xl font-bold mb-6">{currentChapter.title}</h1>
              
              <div className="prose max-w-none">
                {currentChapter.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
              
              {currentChapter.code && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">代码示例</h3>
                  <CodeBlock code={currentChapter.code} language="python" />
                </div>
              )}
              
              <div className="mt-12 flex justify-between">
                {chapters.indexOf(currentChapter) > 0 ? (
                  <button
                    onClick={() => setActiveChapter(chapters[chapters.indexOf(currentChapter) - 1].id)}
                    className="flex items-center text-primary-600 hover:text-primary-800"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    上一章
                  </button>
                ) : (
                  <div></div>
                )}
                
                {chapters.indexOf(currentChapter) < chapters.length - 1 ? (
                  <button
                    onClick={() => setActiveChapter(chapters[chapters.indexOf(currentChapter) + 1].id)}
                    className="flex items-center text-primary-600 hover:text-primary-800"
                  >
                    下一章
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 