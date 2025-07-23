import { Users, Target, Lightbulb, Award, Calendar, MapPin } from 'lucide-react';

const milestones = [
  {
    year: '2023',
    title: '公司成立',
    description: '熵变智元(北京)科技有限公司正式成立，专注AI Agent技术研发'
  },
  {
    year: '2023',
    title: '技术突破',
    description: '完成核心AI Agent框架开发，获得多项技术专利'
  },
  {
    year: '2024',
    title: '市场拓展',
    description: '成功服务100+企业客户，在多个行业建立标杆案例'
  },
  {
    year: '2024',
    title: '融资发展',
    description: '完成A轮融资，加速产品研发和市场推广'
  }
];

const values = [
  {
    icon: Lightbulb,
    title: '创新驱动',
    description: '持续技术创新，引领AI Agent发展趋势'
  },
  {
    icon: Users,
    title: '客户至上',
    description: '以客户需求为导向，提供优质解决方案'
  },
  {
    icon: Target,
    title: '专业专注',
    description: '专注AI领域，打造专业技术团队'
  },
  {
    icon: Award,
    title: '追求卓越',
    description: '追求技术和服务的卓越品质'
  }
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              关于
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                熵变智元
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              我们是一支专注于AI Agent技术的创新团队，致力于推动人工智能技术在各行业的深度应用，
              为企业数字化转型提供强有力的技术支撑。
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                公司简介
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  熵变智元(北京)科技有限公司成立于2023年，是一家专注于AI Agent技术研发与应用的创新型科技企业。
                  公司汇聚了来自清华大学、北京大学、中科院等知名院校的顶尖人才，在人工智能、机器学习、
                  自然语言处理等领域拥有深厚的技术积累。
                </p>
                <p>
                  我们的使命是通过先进的AI Agent技术，帮助企业实现智能化转型，提升运营效率，
                  降低成本，创造更大的商业价值。我们相信，人工智能将成为推动社会进步的重要力量，
                  而AI Agent技术将是连接人类智慧与机器智能的重要桥梁。
                </p>
                <p>
                  公司秉承"创新、专业、合作、共赢"的核心价值观，致力于成为AI Agent领域的领军企业，
                  为客户提供最优质的技术服务和解决方案。
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 flex items-center justify-center">
                <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center">
                  <span className="text-gray-500">公司形象</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">我们的使命</h3>
              <p className="text-gray-600 leading-relaxed">
                通过先进的AI Agent技术，赋能企业智能化转型，提升运营效率，
                创造更大的商业价值，推动人工智能技术在各行业的深度应用与创新发展。
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">我们的愿景</h3>
              <p className="text-gray-600 leading-relaxed">
                成为全球领先的AI Agent技术服务提供商，构建智能化生态系统，
                让每个企业都能享受到人工智能技术带来的便利和价值。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              发展历程
            </h2>
            <p className="text-xl text-gray-600">
              见证我们的成长足迹
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-5 h-5 text-blue-600" />
                        <span className="text-blue-600 font-semibold">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              核心价值观
            </h2>
            <p className="text-xl text-gray-600">
              指引我们前进的价值理念
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              企业文化
            </h2>
            <p className="text-xl text-gray-600">
              营造积极向上的工作氛围
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">学习成长</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                我们鼓励员工持续学习，提供丰富的培训资源和成长机会，
                支持员工在技术和职业发展道路上不断进步。
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• 技术分享会</li>
                <li>• 外部培训支持</li>
                <li>• 职业发展规划</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">团队协作</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                我们倡导开放、透明的沟通文化，鼓励跨部门协作，
                共同解决挑战，实现团队目标。
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• 敏捷开发模式</li>
                <li>• 跨团队协作</li>
                <li>• 开放式沟通</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">工作生活平衡</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                我们关注员工的身心健康，提供灵活的工作安排，
                营造轻松愉快的工作环境。
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• 弹性工作时间</li>
                <li>• 团建活动</li>
                <li>• 健康福利</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            加入我们，共创AI未来
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            如果您对AI技术充满热情，欢迎加入我们的团队
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300">
              查看职位
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              了解更多
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}