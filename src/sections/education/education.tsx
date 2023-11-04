import { IMuiAccordionItem } from '../../components/accordion/accordion-item/mui-accordion-item';
import MuiAccordion from '../../components/accordion/mui-accordion';

const Education = () => {
    const educationData: Array<IMuiAccordionItem> = [
        {
            details: 'First step',
            title: 'Engineering',
        },
        {
            details: 'Second step',
            title: 'Master',
        },
    ];

    return (
        <div>
            <span className="w-100 flex justify-center text-3xl">
                Education
            </span>
            <MuiAccordion accordionItems={educationData} />
        </div>
    );
};

export default Education;
