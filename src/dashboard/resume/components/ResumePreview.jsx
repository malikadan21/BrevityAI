import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import React, { useContext } from 'react';
import PersonalDetailPreview from './preview/PersonalDetailPreview';
import SummeryPreview from './preview/SummeryPreview';
import ExperiencePreview from './preview/ExperiencePreview';
import SkillsPreview from './preview/SkillsPreview';
import EducationalPreview from './preview/EducationPreview';

function ResumePreview() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  // Default color
  const defaultColor = '#008080';

  // Get the theme color from resumeInfo or use the default color
  const borderColor = resumeInfo?.themeColor || defaultColor;

  return (
    <div
      className='shadow-lg h-full p-14 border-t-[20px]'
      style={{
        borderColor: borderColor,
      }}
    >
      {/* Personal Detail */}
      <PersonalDetailPreview resumeInfo={resumeInfo} />
      {/* Summary */}
      <SummeryPreview resumeInfo={resumeInfo} />
      {/* Professional Experience */}
      {resumeInfo?.Experience?.length > 0 && <ExperiencePreview resumeInfo={resumeInfo} />}
      {/* Educational */}
      {resumeInfo?.education?.length > 0 && <EducationalPreview resumeInfo={resumeInfo} />}
      {/* Skills */}
      {resumeInfo?.skills?.length > 0 && <SkillsPreview resumeInfo={resumeInfo} />}
    </div>
  );
}

export default ResumePreview;
