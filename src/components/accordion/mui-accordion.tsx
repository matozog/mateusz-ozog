import MuiAccordionItem, {
    IMuiAccordionItem,
} from './accordion-item/mui-accordion-item';

import { FC } from 'react';

interface IMuiAccordionProps {
    accordionItems: Array<IMuiAccordionItem>;
}

const MuiAccordion: FC<IMuiAccordionProps> = ({ accordionItems }) => {
    return (
        <div className="gap-y-4 flex-col flex">
            {accordionItems.map((item, index) => (
                <MuiAccordionItem
                    detailsText={item.details}
                    titleText={item.title}
                    key={`${item.title}_${index}`}
                />
            ))}
        </div>
    );
};

export default MuiAccordion;
