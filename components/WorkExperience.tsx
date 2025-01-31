import React from 'react';

interface WorkExperienceItem {
  startDate: string;
  endDate?: string;
  companyName: string;
  companyLogo?: string;
  jobTitle: string;
  description: string[];
  companyLink?: string;
  tech: string[];
  typeOfJob: string;
}

const workExperienceData: WorkExperienceItem[] = [
  {
    startDate: 'Nov 2023',
    endDate: 'Jan 2025',
    companyName: 'Direktorat Perencanaan dan Keuangan Amikom',
    jobTitle: 'Full Stack Developer',
    description: [
      'Redesigned the application with a modern and user-friendly interface to enhance user experience',
      'Optimized functions and database queries for improved performance and efficiency',
      'Refactored code to boost overall application performance and maintainability',
      'Identified and resolved bugs, including edge cases that could have led to critical issues',
      'Deployed applications to production environments',
    ],
    tech: [
      'HTML',
      'Tailwind CSS',
      'TypeScript',
      'React',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Docker',
      'Gitlab',
    ],
    typeOfJob: 'Freelance',
  },
  {
    startDate: 'Agu 2023',
    endDate: 'Nov 2023',
    companyName: 'Direktorat Perencanaan dan Keuangan Amikom',
    jobTitle: 'Full Stack Developer',
    description: [
      'Developed the frontend of the application using React TypeScript and Tailwind CSS, ensuring a dynamic and responsive user experience',
      'Created and maintained RESTful APIs with Node.js (Express) and TypeScript, integrating with PostgreSQL to manage data efficiently and securely',
      'Designed and implemented the architecture of a new project from scratch, focusing on scalability, performance, and maintainability',
      'Identified and resolved bugs, including edge cases, to prevent critical issues and enhance the overall stability of the application',
      'Deployed applications to production environments',
    ],
    tech: [
      'HTML',
      'Tailwind CSS',
      'TypeScript',
      'React',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Docker',
      'Gitlab',
    ],
    typeOfJob: 'Internship',
  },
  {
    startDate: 'Agu 2023',
    endDate: 'Okt 2023',
    companyName: 'Baby Cloudfoam Indonesia',
    jobTitle: 'Full Stack Developer',
    description: [
      'Developed functions using CodeIgniter 3 and MySQL',
      'Integrated Bootstrap templates for dashboard design',
      'Refactoring Code',
    ],
    tech: [
      'HTML',
      'CSS',
      'Bootstrap',
      'JavaScript',
      'PHP',
      'CodeIgniter 3',
      'MySQL',
      'Github',
    ],
    typeOfJob: 'Freelance',
  },
  {
    startDate: 'Des 2021',
    endDate: 'Feb 2022',
    companyName: 'Kantor Urusan Agama Ngampilan',
    jobTitle: 'Full Stack Developer',
    description: [
      'Developed data management functions using CodeIgniter 3 and MySQL',
      'Implemented design layouts from Figma using CSS and Bootstrap',
    ],
    tech: [
      'HTML',
      'CSS',
      'Bootstrap',
      'JavaScript',
      'PHP',
      'CodeIgniter 3',
      'MySQL',
      'Github',
    ],
    typeOfJob: 'Freelance',
  },
  {
    startDate: 'Sep 2021',
    endDate: 'Nov 2021',
    companyName: 'Aspeksindo',
    jobTitle: 'Backend Developer',
    description: [
      'Developed REST API using Codeigniter 3 and MySQL',
      'Collaborated with a team using GIT for version control',
      'Worked with Jira for project management',
    ],
    tech: ['PHP', 'CodeIgniter 3', 'MySQL', 'Bitbucktet', 'REST APIs'],
    typeOfJob: 'Freelance',
  },
  {
    startDate: 'Apr 2021',
    endDate: 'Jun 2021',
    companyName: 'Kementerian Agama Kabupaten Klaten',
    jobTitle: 'Backend Developer',
    description: [
      'Developed and optimized data management functions using CodeIgniter 3',
      'Collaborated with a team using GIT for version control and project management',
    ],
    tech: ['PHP', 'CodeIgniter 3', 'MySQL', 'Github'],
    typeOfJob: 'Internship',
  },
];

const WorkExperience: React.FC = () => {
  return (
    <div className='flex flex-col gap-4 w-full -z-10'>
      <h1 className='text-2xl font-bold'>Work Experience</h1>

      <ol className='relative border-s border-gray-200 dark:border-gray-700'>
        {workExperienceData.map((item, index) => (
          <li
            key={index}
            className={`mb-10 ms-4 ${
              index === workExperienceData.length - 1 ? 'mb-0' : ''
            }`}
          >
            <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
            <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
              {item.startDate} - {item.endDate || 'Present'}
            </time>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              {item.companyName}
            </h3>
            <h4 className='text-base font-semibold text-gray-900 dark:text-white'>
              {item.jobTitle} - {item.typeOfJob}
            </h4>
            <div className='mb-4 text-sm font-normal text-gray-700 dark:text-gray-400'>
              <ul>
                {item.description.map((desc, index) => (
                  <li key={index}>- {desc}</li>
                ))}
              </ul>
            </div>
            <div className='flex flex-wrap gap-2'>
              {item.tech.map((skill, index) => (
                <span
                  key={index}
                  className='bg-gray-500 text-gray-100 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300'
                >
                  {skill}
                </span>
              ))}
            </div>
            {item.companyLink && (
              <a
                href={item.companyLink}
                className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700'
              >
                Learn more{' '}
                <svg
                  className='w-3 h-3 ms-2 rtl:rotate-180'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 10'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M1 5h12m0 0L9 1m4 4L9 9'
                  />
                </svg>
              </a>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default WorkExperience;
