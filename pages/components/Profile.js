export default function Profile() {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="relative">
        {/* 头像容器 */}
        <div className="w-32 h-32 mx-auto mt-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src="/avatar.jpg"
            alt="个人头像"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* 个人信息 */}
        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">董良</h2>
          <p className="mt-2 text-gray-600">
            数据科学爱好者
          </p>
          <p className="mt-4 text-gray-600 text-sm">
            长期从事统计分析工作，拥有多年的数据分析与挖掘经验，擅长数据的探索性分析与建模分析，熟悉机器学习和数据挖掘领域常用的聚类、分类、回归以及因果推断算法。
          </p>
          <p className="mt-2 text-gray-600 text-sm">
            电话：15522662503；邮箱：dongliangdeepl@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
} 