import EducationItemDetails from './education-item/education-item-details';
import EducationItemTitle from './education-item/education-item-title';
import { IEducationData } from '../../constants/types';
import { IMuiAccordionItem } from '../../components/accordion/accordion-item/mui-accordion-item';
import MuiAccordion from '../../components/accordion/mui-accordion';
import { useMemo } from 'react';

const educationData: IEducationData[] = [
    {
        date: '2019-2020',
        university: 'Wroclaw University of Science and Technology',
        fieldOfStudy: 'Computer science',
        studentTitle: 'Master of Information Systems in Medicine',
        thesisTopic:
            'Deep learning methods in a selected task of biomedical image analysis',
    },
    {
        date: '2015-2019',
        university: 'Wroclaw University of Science and Technology',
        fieldOfStudy: 'Computer science',
        studentTitle: 'Bachelor of IT Systems Engineering',
        thesisTopic:
            'Snippets collecting and managing application for programmers',
    },
];

const Education = () => {
    const educationAccordionItems: IMuiAccordionItem[] = useMemo(
        () =>
            educationData.map((education) => ({
                title: <EducationItemTitle educationData={education} />,
                details: <EducationItemDetails educationData={education} />,
            })),
        []
    );

    return (
        <div id="education-container">
            <span className="w-100 flex justify-center section-title animate__animated animate__jackInTheBox">
                Education
            </span>
            <MuiAccordion accordionItems={educationAccordionItems} />
        </div>
    );
};

export default Education;
