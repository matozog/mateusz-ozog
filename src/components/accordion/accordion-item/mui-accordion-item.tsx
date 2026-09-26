import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FC } from 'react';

export interface IMuiAccordionItem {
  id: string;
  title: JSX.Element;
  details: JSX.Element;
}

type IMuiAccordionItemProps = IMuiAccordionItem;

const MuiAccordionItem: FC<IMuiAccordionItemProps> = ({
  id,
  details,
  title,
}) => {
  return (
    <Accordion className="w-full bg-dark-color text-white">
      <AccordionSummary
        className="rounded-2xl"
        expandIcon={<ExpandMoreIcon className="text-white" fontSize="large" />}
        aria-controls={`${id}-content`}
        id={`${id}-header`}
      >
        {title}
      </AccordionSummary>
      <AccordionDetails id={`${id}-content`}>{details}</AccordionDetails>
    </Accordion>
  );
};

export default MuiAccordionItem;
