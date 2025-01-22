import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Layout,
  Server,
  Terminal,
  Smartphone,
  Globe,
  Cloud,
} from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: <Layout className="w-6 h-6" />,
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux'],
    color: 'from-blue-400 to-blue-600',
  },
  {
    category: 'Backend',
    icon: <Server className="w-6 h-6" />,
    items: ['Node.js', 'Express', 'NestJS', 'GraphQL', 'REST APIs'],
    color: 'from-green-400 to-green-600',
  },
  {
    category: 'Database',
    icon: <Database className="w-6 h-6" />,
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'TypeORM'],
    color: 'from-purple-400 to-purple-600',
  },
  {
    category: 'DevOps',
    icon: <Cloud className="w-6 h-6" />,
    items: ['Docker', 'AWS', 'CI/CD', 'Linux', 'Nginx'],
    color: 'from-orange-400 to-orange-600',
  },
  {
    category: 'Mobile',
    icon: <Smartphone className="w-6 h-6" />,
    items: ['React Native', 'Expo', 'Android', 'iOS', 'PWA'],
    color: 'from-pink-400 to-pink-600',
  },
  {
    category: 'Tools',
    icon: <Terminal className="w-6 h-6" />,
    items: ['Git', 'VS Code', 'Webpack', 'Vite', 'Jest'],
    color: 'from-yellow-400 to-yellow-600',
  },
];

export function Skills() {
  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Skills & Expertise</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ category, icon, items, color, index }: {
  category: string;
  icon: React.ReactNode;
  items: string[];
  color: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r ${color} text-white`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-gray-900">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}