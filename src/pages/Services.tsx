import { Bot, Zap, Target, Users, Award, TrendingUp, Sparkles, Brain, Rocket, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Brain,
    title: 'AI Agent开发',
    description: '定制化智能代理解决方案，提升业务自动化水平',
    features: ['智能对话系统', '自动化流程', '决策支持', '多模态交互'],
    price: '定制报价'
  },
  {
    icon: Sparkles,
    title: '智能解决方案',
    description: '企业级智能化改造，基于AI技术的优化升级',
    features: ['业务流程优化', '智能分析', '预测建模', '个性化推荐'],
    price: '定制报价'
  },
  {
    icon: Rocket,
    title: '技术咨询',
    description: '专业AI技术咨询，助力企业数字化转型',
    features: ['技术评估', '方案设计', '实施指导', '培训支持'],
    price: '定制报价'
  }
];

const advantages = [
  {
    title: '技术领先',
    description: '拥有自主研发的AI Agent核心技术，在行业内处于领先地位'
  },
  {
    title: '经验丰富',
    description: '服务过100+企业客户，在多个行业积累了丰富的实践经验'
  },
  {
    title: '定制化服务',
    description: '根据客户具体需求，提供个性化的解决方案和服务'
  },
  {
    title: '持续支持',
    description: '提供7x24小时技术支持，确保系统稳定运行'
  }
];

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              我们的
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                服务
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              专注于AI Agent技术研发与应用，为企业提供全方位的智能化解决方案，
              助力企业实现数字化转型和智能化升级。
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              核心服务
            </h2>
            <p className="text-xl text-gray-600">
              为您提供专业的AI技术服务
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">
                        {service.price}
                      </span>
                      <Link
                        to="/contact"
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2"
                      >
                        咨询
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              服务流程
            </h2>
            <p className="text-xl text-gray-600">
              专业的服务流程，确保项目成功交付
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: '需求分析', description: '深入了解客户需求，制定初步方案' },
              { step: '02', title: '方案设计', description: '设计详细的技术方案和实施计划' },
              { step: '03', title: '开发实施', description: '按照方案进行开发和部署实施' },
              { step: '04', title: '测试交付', description: '全面测试验收，正式交付使用' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              我们的优势
            </h2>
            <p className="text-xl text-gray-600">
              为什么选择熵变智元
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            准备开始您的AI项目？
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            联系我们，获取专业的AI解决方案咨询
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300"
          >
            立即咨询
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}