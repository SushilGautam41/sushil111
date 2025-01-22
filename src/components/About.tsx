import React, { useState } from 'react';
import { Code2, GraduationCap, Award, User } from 'lucide-react';
import { motion } from 'framer-motion';

const tabs = [
  { id: 'info', label: 'Personal Info', icon: <User className="w-5 h-5" /> },
  { id: 'education', label: 'Education', icon: <GraduationCap className="w-5 h-5" /> },
  { id: 'experience', label: 'Experience', icon: <Award className="w-5 h-5" /> },
];

export function About() {
  const [activeTab, setActiveTab] = useState('info');

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-gray-900"
        >
          About Me
        </motion.h2>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex justify-center space-x-4 p-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {tab.icon}
                  <span className="ml-2">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'info' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-semibold mb-4">Personal Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  I am a passionate Full Stack Developer with a keen eye for design and a strong
                  foundation in modern web technologies. My approach combines technical expertise
                  with creative problem-solving to deliver exceptional user experiences.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <InfoItem label="Location" value="Radhe Radhe, Bhaktapur" />
                  <InfoItem label="Email" value="sushilgautam3898@gmail.com" />
                  <InfoItem label="Phone" value="+977 9843086470" />
                  <InfoItem label="Languages" value="English, Nepali" />
                </div>
              </motion.div>
            )}

            {activeTab === 'education' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold mb-4">Education Journey</h3>
                <EducationItem
                  degree="Bachelor in Computer Science"
                  institution="Example University"
                  year="2018 - 2022"
                  description="Focused on software development, algorithms, and web technologies."
                />
                <EducationItem
                  degree="Higher Secondary Education"
                  institution="Example College"
                  year="2016 - 2018"
                  description="Science stream with Computer Science as major subject."
                />
              </motion.div>
            )}

            {activeTab === 'experience' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold mb-4">Professional Experience</h3>
                <ExperienceItem
                  role="Full Stack Developer"
                  company="Tech Company"
                  period="2022 - Present"
                  description="Developing and maintaining web applications using React, Node.js, and PostgreSQL."
                />
                <ExperienceItem
                  role="Frontend Developer Intern"
                  company="Startup"
                  period="2021 - 2022"
                  description="Worked on responsive web design and modern JavaScript frameworks."
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-gray-900 font-medium">{value}</p>
    </div>
  );
}

function EducationItem({ degree, institution, year, description }: {
  degree: string;
  institution: string;
  year: string;
  description: string;
}) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h4 className="text-lg font-semibold text-gray-900">{degree}</h4>
      <p className="text-blue-600">{institution}</p>
      <p className="text-gray-500 text-sm">{year}</p>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}

function ExperienceItem({ role, company, period, description }: {
  role: string;
  company: string;
  period: string;
  description: string;
}) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h4 className="text-lg font-semibold text-gray-900">{role}</h4>
      <p className="text-blue-600">{company}</p>
      <p className="text-gray-500 text-sm">{period}</p>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}