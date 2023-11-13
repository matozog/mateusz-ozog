import { IMuiAccordionItem } from '../../components/accordion/accordion-item/mui-accordion-item';
import MuiAccordion from '../../components/accordion/mui-accordion';

const Education = () => {
    const educationData: Array<IMuiAccordionItem> = [
        {
            details:
                'Wroclaw University of Science and Technology, Field of study: Computer science',
            title: '2019 - 2020 - Master of Information Systems in Medicine',
        },
        {
            details:
                'Wroclaw University of Science and Technology, Field of study: Computer science',
            title: '2015 - 2019 - Bachelor of IT Systems Engineering',
        },
    ];

    return (
        <div id="education-container">
            <span className="w-100 flex justify-center text-3xl mb-6">
                Education
            </span>
            <MuiAccordion accordionItems={educationData} />
        </div>
    );
};

export default Education;
