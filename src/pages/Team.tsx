import { Github, Linkedin, Mail, Award, Users, Target, Lightbulb } from 'lucide-react';

const teamMembers = [
  {
    name: '张伟',
    position: '创始人 & CEO',
    bio: '清华大学计算机博士，前阿里巴巴技术专家，在AI领域有10年研发经验',
    avatar: 'professional%20CEO%20portrait%2C%20Chinese%20male%2C%20confident%20expression%2C%20business%20suit%2C%20blue%20background',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'zhang.wei@sbzytech.cn'
    },
    expertise: ['AI Strategy', 'Team Leadership', 'Product Vision']
  },
  {
    name: '李明',
    position: 'CTO & 联合创始人',
    bio: '北京大学人工智能博士，前百度资深工程师，专注于大模型和Agent技术',
    avatar: 'professional%20CTO%20portrait%2C%20Chinese%20male%2C%20technical%20expert%2C%20casual%20business%20attire%2C%20blue%20background',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'li.ming@sbzytech.cn'
    },
    expertise: ['Large Language Models', 'AI Agent', 'System Architecture']
  },
  {
    name: '王芳',
    position: '产品总监',
    bio: '中科院计算所硕士，前腾讯产品经理，擅长AI产品设计和用户体验优化',
    avatar: 'professional%20product%20director%20portrait%2C%20Chinese%20female%2C%20confident%20smile%2C%20business%20attire%2C%20blue%20background',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'wang.fang@sbzytech.cn'
    },
    expertise: ['Product Design', 'User Experience', 'Market Analysis']
  },
  {
    name: '陈强',
    position: '技术总监',
    bio: '华中科技大学计算机硕士，前字节跳动高级工程师，深度学习和NLP专家',
    avatar: 'professional%20technical%20director%20portrait%2C%20Chinese%20male%2C%20focused%20expression%2C%20casual%20shirt%2C%20blue%20background',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'chen.qiang@sbzytech.cn'
    },
    expertise: ['Deep Learning', 'Natural Language Processing', 'MLOps']
  },
  {
    name: '刘洋',
    position: '算法专家',
    bio: '上海交通大学AI博士，前微软亚洲研究院研究员，计算机视觉领域专家',
    avatar: 'professional%20algorithm%20expert%20portrait%2C%20Chinese%20male%2C%20intelligent%20look%2C%20casual%20attire%2C%20blue%20background',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'liu.yang@sbzytech.cn'
    },
    expertise: ['Computer Vision', 'Machine Learning', 'Research']
  },
  {
    name: '赵敏',
    position: '市场总监',
    bio: '复旦大学MBA，前华为企业业务部门负责人，在B2B市场营销方面经验丰富',
    avatar: 'professional%20marketing%20director%20portrait%2C%20Chinese%20female%2C%20professional%20smile%2C%20business%20suit%2C%20blue%20background',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'zhao.min@sbzytech.cn'
    },
    expertise: ['B2B Marketing', 'Business Development', 'Strategic Partnerships']
  }
];

const values = [
  {
    icon: Lightbulb,
    title: '创新驱动',
    description: '我们相信创新是推动技术进步的核心动力，始终保持对新技术的敏锐嗅觉和探索精神。'
  },
  {
    icon: Users,
    title: '团队协作',
    description: '我们倡导开放、透明的团队文化，鼓励跨部门协作，共同解决复杂的技术挑战。'
  },
  {
    icon: Target,
    title: '客户至上',
    description: '我们始终以客户需求为导向，致力于为客户创造最大价值，建立长期合作关系。'
  },
  {
    icon: Award,
    title: '追求卓越',
    description: '我们对技术和产品质量有着极高的要求，不断追求卓越，力求在每个细节上做到最好。'
  }
];

const achievements = [
  {
    title: '技术专利',
    count: '15+',
    description: '在AI Agent和大模型领域获得多项技术专利'
  },
  {
    title: '论文发表',
    count: '30+',
    description: '在顶级AI会议和期刊发表高质量学术论文'
  },
  {
    title: '行业奖项',
    count: '8',
    description: '获得多个行业技术创新和产品设计奖项'
  },
  {
    title: '开源贡献',
    count: '20+',
    description: '积极参与开源社区，贡献多个AI相关项目'
  }
];

export default function Team() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              我们的
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                团队
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              汇聚顶尖AI人才，以技术创新为驱动，致力于推动人工智能技术的产业化应用
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              核心团队
            </h2>
            <p className="text-xl text-gray-600">
              经验丰富的专业团队，为您提供最优质的服务
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src={`https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=${member.avatar}&image_size=square`}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">专业领域</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.github}
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-gray-400 hover:text-red-600 transition-colors duration-300"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              团队价值观
            </h2>
            <p className="text-xl text-gray-600">
              指引我们前进的核心理念
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 text-center">
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

      {/* Team Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              团队成就
            </h2>
            <p className="text-xl text-gray-600">
              我们在技术创新和学术研究方面的成果
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {achievement.count}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            加入我们的团队
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            如果您对AI技术充满热情，欢迎加入我们，一起创造AI的未来
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