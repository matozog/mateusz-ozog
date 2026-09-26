import { useMemo, useRef } from 'react';

import EducationItemDetails from './education-item/education-item-details';
import EducationItemTitle from './education-item/education-item-title';
import { IMuiAccordionItem } from '../../components/accordion/accordion-item/mui-accordion-item';
import MuiAccordion from '../../components/accordion/mui-accordion';
import { educationData } from '../../data/education';
import useIntersectionHook from '../../hooks/useIntersectionHook';

const Education = () => {
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const { isVisible } = useIntersectionHook(headerRef);
  const educationAccordionItems: IMuiAccordionItem[] = useMemo(
    () =>
      educationData.map((education, index) => ({
        id: `education-${index}`,
        title: <EducationItemTitle educationData={education} />,
        details: <EducationItemDetails educationData={education} />,
      })),
    []
  );

  return (
    <section id="education" className="scroll-mt-20">
      <h2
        ref={headerRef}
        className={`w-full flex justify-center section-title ${
          isVisible ? 'animate__pulse' : ''
        } animate__animated`}
      >
        Education
      </h2>
      <MuiAccordion accordionItems={educationAccordionItems} />
    </section>
  );
};

export default Education;
