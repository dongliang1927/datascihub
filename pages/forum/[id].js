import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CodeBlock from '../../components/CodeBlock';

// 模拟帖子数据
const postData = {
  id: 1,
  title: '如何优化随机森林模型以提高准确率？',
  author: 'data_explorer',
  avatar: '/images/avatars/user1.jpg',
  date: '2023-09-15',
  tags: ['机器学习', '随机森林', '模型优化'],
  content: `
我正在处理一个分类问题，使用随机森林算法。目前的准确率约为82%，但我觉得还有提升空间。

以下是我的基本设置：
- 特征数：约50个（经过特征选择）
- 样本数：训练集10,000，测试集2,500
- 目前参数：n_estimators=100, max_depth=None, min_samples_split=2

我已经尝试了以下方法：
1. 增加树的数量 (n_estimators=200, 500)
2. 调整max_features参数
3. 进行简单的网格搜索

但准确率提升有限。有人能分享一些优化随机森林的经验和技巧吗？特别是处理类似规模数据集时的最佳实践？
  `,
  codeExample: `
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV

# 当前模型
rf = RandomForestClassifier(
    n_estimators=100, 
    max_depth=None,
    min_samples_split=2,
    random_state=42
)

# 网格搜索尝试
param_grid = {
    'n_estimators': [100, 200, 300],
    'max_features': ['sqrt', 'log2', None],
    'max_depth': [None, 10, 20, 30],
    'min_samples_split': [2, 5, 10]
}

grid_search = GridSearchCV(
    estimator=rf,
    param_grid=param_grid,
    cv=5,
    n_jobs=-1,
    verbose=2
)

grid_search.fit(X_train, y_train)
print(f"最佳参数: {grid_search.best_params_}")
print(f"最佳交叉验证分数: {grid_search.best_score_:.4f}")
  `,
  replies: [
    {
      id: 1,
      author: 'ml_expert',
      avatar: '/images/avatars/user2.jpg',
      date: '2023-09-15',
      content: `
从你的描述来看，你已经尝试了一些常见的优化方法。这里有几个可能有帮助的额外建议：

1. **特征工程**：有时比调参更重要
   - 尝试创建交互特征
   - 对数值特征进行标准化或规范化
   - 考虑主成分分析(PCA)减少特征维度

2. **处理类别不平衡**：
   - 使用class_weight参数
   - 或尝试SMOTE等过采样技术

3. **集成不同参数的随机森林**：
   - 训练几个不同参数配置的随机森林
   - 对它们的预测进行软投票

4. **调整更多高级参数**：
   - min_samples_leaf: 控制叶节点最小样本数
   - max_samples: 控制自助采样的样本比例

希望这些建议对你有帮助！如果你实现了其中一些方法，请分享结果。
      `,
      votes: 12,
    },
    {
      id: 2,
      author: 'python_guru',
      avatar: '/images/avatars/user3.jpg',
      date: '2023-09-16',
      content: `
除了前面提到的优化方法，我想补充一个经常被忽视但很重要的方面：**特征选择**。

虽然随机森林对特征选择不是很敏感，但移除噪声特征仍然可能提高性能。你可以利用随机森林自带的特征重要性来做这件事：

\`\`\`python
# 获取特征重要性
importances = rf.feature_importances_
indices = np.argsort(importances)[::-1]

# 打印特征排名
for f in range(X_train.shape[1]):
    print(f"{f + 1}. 特征 {indices[f]} ({importances[indices[f]]:.4f})")

# 只选择重要性大于阈值的特征
threshold = 0.01
selected_indices = np.where(importances > threshold)[0]
X_train_selected = X_train[:, selected_indices]
X_test_selected = X_test[:, selected_indices]
\`\`\`

另外，还可以尝试与其他模型结合：
1. 使用XGBoost或LightGBM
2. 在随机森林的基础上添加一个逻辑回归层
3. 尝试不同的集成方法

祝你好运！
      `,
      votes: 8,
      codeExample: `
import numpy as np
from sklearn.ensemble import RandomForestClassifier, VotingClassifier
from sklearn.linear_model import LogisticRegression
import xgboost as xgb

# 特征选择
rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X_train, y_train)

# 获取重要特征
importances = rf.feature_importances_
threshold = 0.01
selected_indices = np.where(importances > threshold)[0]
X_train_selected = X_train[:, selected_indices]
X_test_selected = X_test[:, selected_indices]

# 模型集成
rf_model = RandomForestClassifier(
    n_estimators=200, 
    max_features='sqrt',
    min_samples_split=5,
    random_state=42
)

xgb_model = xgb.XGBClassifier(
    n_estimators=100,
    learning_rate=0.1,
    max_depth=5,
    random_state=42
)

lr_model = LogisticRegression(C=1.0, random_state=42)

# 创建投票分类器
ensemble = VotingClassifier(
    estimators=[
        ('rf', rf_model),
        ('xgb', xgb_model),
        ('lr', lr_model)
    ],
    voting='soft'  # 使用概率进行加权投票
)

ensemble.fit(X_train_selected, y_train)
ensemble_accuracy = ensemble.score(X_test_selected, y_test)
print(f"集成模型准确率: {ensemble_accuracy:.4f}")
      `
    }
  ]
};

export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  const [replyContent, setReplyContent] = useState('');
  const [showReplyForm, setShowReplyForm] = useState(false);
  
  // 在实际应用中，这里会根据ID从API获取帖子数据
  const post = postData;
  
  const handleSubmitReply = (e) => {
    e.preventDefault();
    // 在实际应用中，这里会发送回复到后端API
    console.log({ postId: id, content: replyContent });
    
    // 模拟提交成功
    alert('回复已发布！');
    setReplyContent('');
    setShowReplyForm(false);
  };
  
  const handleVote = (replyId, action) => {
    // 在实际应用中，这里会发送投票到后端API
    console.log({ replyId, action });
  };
  
  if (router.isFallback) {
    return <div className="container mx-auto px-4 py-12">加载中...</div>;
  }
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          帖子不存在或已被删除
        </div>
        <div className="mt-4">
          <Link href="/forum" className="text-primary-600 hover:underline">
            返回论坛
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link href="/forum" className="text-primary-500 hover:text-primary-600 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            返回论坛
          </Link>
        </div>
        
        {/* 帖子详情 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="border-b px-6 py-4">
            <h1 className="text-2xl font-bold text-gray-900">{post.title}</h1>
            <div className="flex items-center mt-2 text-sm text-gray-500">
              <span className="mr-4">作者: {post.author}</span>
              <span>{post.date}</span>
            </div>
          </div>
          
          <div className="p-6">
            <div className="prose max-w-none mb-6">
              {post.content.split('\n\n').map((paragraph, i) => (
                <p key={i} className="mb-4">{paragraph}</p>
              ))}
            </div>
            
            {post.codeExample && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">代码示例：</h3>
                <CodeBlock code={post.codeExample} />
              </div>
            )}
            
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span key={index} className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* 回复列表 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="border-b px-6 py-4">
            <h2 className="text-xl font-bold">回复 ({post.replies.length})</h2>
          </div>
          
          <div className="divide-y">
            {post.replies.map((reply) => (
              <div key={reply.id} className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="ml-4 flex-grow">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium text-gray-900">{reply.author}</span>
                        <span className="text-sm text-gray-500 ml-2">{reply.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleVote(reply.id, 'up')}
                          className="text-gray-500 hover:text-primary-600"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                          </svg>
                        </button>
                        <span className="text-sm text-gray-500">{reply.votes}</span>
                        <button
                          onClick={() => handleVote(reply.id, 'down')}
                          className="text-gray-500 hover:text-red-600"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    <div className="mt-2 prose max-w-none">
                      {reply.content.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                    
                    {reply.codeExample && (
                      <div className="mt-4">
                        <CodeBlock code={reply.codeExample} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* 回复表单 */}
          {showReplyForm ? (
            <div className="p-6 border-t">
              <form onSubmit={handleSubmitReply}>
                <div className="mb-4">
                  <label htmlFor="reply" className="block text-sm font-medium text-gray-700 mb-2">
                    写下你的回复
                  </label>
                  <textarea
                    id="reply"
                    rows={4}
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="分享你的想法..."
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowReplyForm(false)}
                    className="px-4 py-2 text-gray-700 hover:text-gray-900"
                  >
                    取消
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                  >
                    发布回复
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="p-6 border-t">
              <button
                onClick={() => setShowReplyForm(true)}
                className="w-full py-2 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
              >
                写回复
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 