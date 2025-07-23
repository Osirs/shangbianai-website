import { ArrowRight, Bot, Zap, Target, Users, Award, TrendingUp, Sparkles, Brain, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Brain,
    title: 'AI Agent开发',
    description: '定制化智能代理解决方案',
    subtitle: '提升业务自动化水平'
  },
  {
    icon: Sparkles,
    title: '智能解决方案',
    description: '企业级智能化改造',
    subtitle: '基于AI技术的优化升级'
  },
  {
    icon: Rocket,
    title: '技术咨询',
    description: '专业AI技术咨询',
    subtitle: '助力企业数字化转型'
  }
];

const stats = [
  { label: '成功项目', value: '50+', icon: Award },
  { label: '客户满意度', value: '98%', icon: Users },
  { label: '技术专利', value: '12', icon: TrendingUp },
  { label: '服务企业', value: '100+', icon: Target }
];

const news = [
  {
    title: '熵变智元完成新一轮融资，加速AI Agent技术研发',
    date: '2024-01-15',
    category: '公司动态'
  },
  {
    title: 'AI Agent在金融行业的应用实践与思考',
    date: '2024-01-10',
    category: '技术洞察'
  },
  {
    title: '2024年人工智能发展趋势预测',
    date: '2024-01-05',
    category: '行业分析'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
        {/* Minimal Background Element */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-50 rounded-full opacity-30 blur-3xl"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-12">
            {/* Main Heading */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-medium text-blue-600 tracking-wider uppercase">熵变智元</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-light text-gray-900 tracking-tight">
                <span className="block">智能</span>
                <span className="block text-blue-600">未来</span>
              </h1>
            </div>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
              专注于AI Agent技术研发
              <br className="hidden md:block" />
              为企业提供定制化智能解决方案
            </p>
            
            {/* CTA */}
            <div className="pt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-gray-900 text-white px-12 py-4 text-lg font-medium hover:bg-gray-800 transition-all duration-300 group"
              >
                项目咨询
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-16 bg-gray-300">
            <div className="w-px h-4 bg-gray-600 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-sm font-medium text-blue-600 tracking-wider uppercase mb-4 block">核心服务</span>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              我们提供的服务
            </h2>
            <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
              专注于AI Agent解决方案，助力企业智能化转型
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group text-center space-y-6 hover:transform hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-light text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-900 font-medium">
                      {service.description}
                    </p>
                    <p className="text-gray-500">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-sm font-medium text-blue-600 tracking-wider uppercase mb-4 block">我们的成果</span>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              数据说话
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
            {stats.map((stat, index) => {
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="text-5xl md:text-6xl font-light text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 font-light">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-sm font-medium text-blue-600 tracking-wider uppercase mb-4 block">最新动态</span>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              行业洞察
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {news.map((item, index) => (
              <article
                key={index}
                className="group cursor-pointer space-y-4"
              >
                <div className="space-y-3">
                  <span className="text-sm text-blue-600 font-medium">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-light text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-relaxed">
                    {item.title}
                  </h3>
                  <span className="text-gray-500 text-sm">
                    {item.date}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              开始您的AI之旅
            </h2>
            <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
              联系我们，获取专业的AI解决方案咨询服务
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-gray-900 text-white px-12 py-4 text-lg font-medium hover:bg-gray-800 transition-all duration-300 group"
          >
            立即咨询
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
}