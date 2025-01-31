import React from 'react';

interface EducationItem {
  startYear: string;
  endYear?: string;
  collegeName?: string;
  schoolName?: string;
  gradePointAverage?: string;
}

const EducationData: EducationItem[] = [
  {
    startYear: '2019',
    endYear: '2022',
    collegeName: 'Diploma of Education, Manajemen Sistem Informasi',
    schoolName: 'Universitas AMIKOM Yogyakarta',
    gradePointAverage: 'Currently Studying GPA : 3.85 of 4.00',
  },
  {
    startYear: '2022',
    endYear: '2024',
    collegeName: 'Bachelors degree, Information Systems',
    schoolName: 'Universitas AMIKOM Yogyakarta',
    gradePointAverage: 'Currently Studying GPA : 3.89 of 4.00',
  },
];

const Education: React.FC = () => {
  return (
    <div className='flex flex-col gap-4 w-full -z-10'>
      <h1 className='text-2xl font-bold'>Education</h1>

      <ol className='relative border-s border-gray-200 dark:border-gray-700'>
        {EducationData.map((item, index) => (
          <li
            key={index}
            className={`mb-10 ms-4 ${
              index === EducationData.length - 1 ? 'mb-0' : ''
            }`}
          >
            <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
            <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
              {item.startYear} - {item.endYear || 'Present'}
            </time>
            <h2 className='text-lg font-bold text-gray-900 dark:text-white'>
              {item.schoolName}
            </h2>
            <h4 className='text-sm font-semibold text-gray-600 dark:text-white'>
              {item.collegeName}
            </h4>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              {item.gradePointAverage}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Education;
