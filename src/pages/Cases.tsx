import { ExternalLink, Calendar, Users, TrendingUp, Award, Star, Quote } from 'lucide-react';
import { useState } from 'react';

const categories = ['全部', '金融服务', '制造业', '零售电商', '医疗健康', '教育培训'];

const cases = [
  {
    id: 1,
    title: '智能客服系统',
    category: '金融服务',
    client: '某大型银行',
    description: '基于大语言模型构建的智能客服系统，支持多轮对话和复杂业务咨询',
    image: 'intelligent%20customer%20service%20system%2C%20banking%20AI%20chatbot%2C%20modern%20interface%2C%20blue%20color%20scheme',
    results: [
      '客户满意度提升35%',
      '人工客服成本降低60%',
      '问题解决效率提升80%'
    ],
    technologies: ['GPT-4', 'LangChain', 'Vector Database', 'React'],
    duration: '6个月',
    featured: true
  },
  {
    id: 2,
    title: '智能质检系统',
    category: '制造业',
    client: '某汽车制造企业',
    description: '基于计算机视觉的智能质检系统，实现产品缺陷自动识别和分类',
    image: 'intelligent%20quality%20inspection%20system%2C%20automotive%20manufacturing%2C%20computer%20vision%2C%20blue%20color%20scheme',
    results: [
      '检测精度达到99.5%',
      '检测速度提升10倍',
      '人工成本降低70%'
    ],
    technologies: ['Computer Vision', 'Deep Learning', 'OpenCV', 'TensorFlow'],
    duration: '8个月',
    featured: true
  },
  {
    id: 3,
    title: '个性化推荐引擎',
    category: '零售电商',
    client: '某知名电商平台',
    description: '基于用户行为和商品特征的个性化推荐系统，提升用户购买转化率',
    image: 'personalized%20recommendation%20engine%2C%20e-commerce%20platform%2C%20data%20analytics%2C%20blue%20color%20scheme',
    results: [
      '点击率提升45%',
      '转化率提升30%',
      '用户停留时间增加50%'
    ],
    technologies: ['Machine Learning', 'Collaborative Filtering', 'Deep Learning', 'Spark'],
    duration: '4个月',
    featured: false
  },
  {
    id: 4,
    title: '医疗影像诊断助手',
    category: '医疗健康',
    client: '某三甲医院',
    description: '基于深度学习的医疗影像分析系统，辅助医生进行疾病诊断',
    image: 'medical%20imaging%20diagnosis%20AI%2C%20healthcare%20technology%2C%20digital%20radiology%2C%20blue%20color%20scheme',
    results: [
      '诊断准确率达到95%',
      '诊断时间缩短60%',
      '医生工作效率提升40%'
    ],
    technologies: ['Deep Learning', 'Computer Vision', 'Medical Imaging', 'PyTorch'],
    duration: '10个月',
    featured: true
  },
  {
    id: 5,
    title: '智能学习平台',
    category: '教育培训',
    client: '某在线教育公司',
    description: '个性化学习路径规划和智能题目推荐系统，提升学习效果',
    image: 'intelligent%20learning%20platform%2C%20online%20education%2C%20adaptive%20learning%2C%20blue%20color%20scheme',
    results: [
      '学习效率提升40%',
      '完课率提升25%',
      '学生满意度提升35%'
    ],
    technologies: ['Machine Learning', 'Knowledge Graph', 'NLP', 'Vue.js'],
    duration: '5个月',
    featured: false
  },
  {
    id: 6,
    title: '风险控制系统',
    category: '金融服务',
    client: '某互联网金融公司',
    description: '基于机器学习的实时风险评估和反欺诈系统',
    image: 'risk%20control%20system%2C%20financial%20technology%2C%20fraud%20detection%2C%20blue%20color%20scheme',
    results: [
      '欺诈检测率提升80%',
      '误报率降低50%',
      '风险损失减少70%'
    ],
    technologies: ['Machine Learning', 'Real-time Processing', 'Graph Analysis', 'Kafka'],
    duration: '7个月',
    featured: false
  }
];

const testimonials = [
  {
    name: '张总',
    position: 'CTO',
    company: '某大型银行',
    content: '熵变智元团队的专业能力令人印象深刻，他们不仅技术过硬，更重要的是能够深入理解我们的业务需求，提供的AI解决方案完全超出了我们的预期。',
    rating: 5,
    avatar: 'professional%20business%20executive%20portrait%2C%20banking%20industry%2C%20confident%20expression%2C%20blue%20suit'
  },
  {
    name: '李经理',
    position: '技术总监',
    company: '某汽车制造企业',
    content: '与熵变智元的合作非常愉快，他们的智能质检系统帮助我们大幅提升了生产效率和产品质量，是一次非常成功的数字化转型实践。',
    rating: 5,
    avatar: 'manufacturing%20industry%20executive%20portrait%2C%20technical%20director%2C%20professional%20attire%2C%20blue%20background'
  },
  {
    name: '王总监',
    position: '产品总监',
    company: '某知名电商平台',
    content: '推荐系统上线后，我们的用户转化率有了显著提升。熵变智元团队的技术实力和服务态度都非常出色，期待未来更多的合作机会。',
    rating: 5,
    avatar: 'e-commerce%20executive%20portrait%2C%20product%20director%2C%20modern%20office%20setting%2C%20blue%20theme'
  }
];

const stats = [
  { label: '成功案例', value: '50+', icon: Award },
  { label: '服务客户', value: '100+', icon: Users },
  { label: '平均ROI', value: '300%', icon: TrendingUp },
  { label: '客户满意度', value: '98%', icon: Star }
];

export default function Cases() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [selectedCase, setSelectedCase] = useState(null);

  const filteredCases = activeCategory === '全部' 
    ? cases 
    : cases.filter(c => c.category === activeCategory);

  const featuredCases = cases.filter(c => c.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              成功
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                案例
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              探索我们在各行业的成功实践，了解AI技术如何为企业创造价值
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              精选案例
            </h2>
            <p className="text-xl text-gray-600">
              我们最具代表性的成功项目
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredCases.map((caseItem, index) => (
              <div
                key={caseItem.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedCase(caseItem)}
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 p-4 flex items-center justify-center">
                  <img
                    src={`https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=${caseItem.image}&image_size=landscape_16_9`}
                    alt={caseItem.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {caseItem.category}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {caseItem.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {caseItem.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {caseItem.description}
                  </p>
                  <div className="space-y-2">
                    {caseItem.results.slice(0, 2).map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center text-blue-600 font-medium hover:gap-2 transition-all duration-300">
                    查看详情
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              全部案例
            </h2>
            <p className="text-xl text-gray-600">
              按行业分类浏览我们的项目案例
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((caseItem) => (
              <div
                key={caseItem.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedCase(caseItem)}
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 p-4 flex items-center justify-center">
                  <img
                    src={`https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=${caseItem.image}&image_size=landscape_4_3`}
                    alt={caseItem.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {caseItem.category}
                    </span>
                    {caseItem.featured && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                        精选
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {caseItem.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    客户：{caseItem.client}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {caseItem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              客户见证
            </h2>
            <p className="text-xl text-gray-600">
              听听客户对我们服务的真实评价
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full overflow-hidden mr-4">
                    <img
                      src={`https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=${testimonial.avatar}&image_size=square`}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.position}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="w-8 h-8 text-blue-200 absolute -top-2 -left-2" />
                  <p className="text-gray-700 leading-relaxed pl-6">
                    {testimonial.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Detail Modal */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  {selectedCase.title}
                </h2>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-4 mb-6">
                    <img
                      src={`https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=${selectedCase.image}&image_size=landscape_16_9`}
                      alt={selectedCase.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">项目概述</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {selectedCase.description}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">客户信息</h4>
                      <p className="text-gray-600">{selectedCase.client}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">项目周期</h4>
                      <p className="text-gray-600">{selectedCase.duration}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">项目成果</h4>
                      <div className="space-y-3">
                        {selectedCase.results.map((result, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-gray-700">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">技术栈</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCase.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            让我们为您创造下一个成功案例
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            联系我们，开启您的AI转型之旅
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300">
            立即咨询
          </button>
        </div>
      </section>
    </div>
  );
}