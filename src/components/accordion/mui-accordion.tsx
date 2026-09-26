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
      {accordionItems.map((item) => (
        <MuiAccordionItem
          id={item.id}
          details={item.details}
          title={item.title}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default MuiAccordion;
