import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FC } from 'react';

export interface IMuiAccordionItem {
  title: JSX.Element;
  details: JSX.Element;
}

interface IMuiAccordionItemProps {
  title: JSX.Element;
  details: JSX.Element;
}

const MuiAccordionItem: FC<IMuiAccordionItemProps> = ({ details, title }) => {
  return (
    <Accordion className="w-full bg-dark-color text-white">
      <AccordionSummary
        className="rounded-2xl"
        expandIcon={<ExpandMoreIcon className="text-white" fontSize="large" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        {title}
      </AccordionSummary>
      <AccordionDetails>{details}</AccordionDetails>
    </Accordion>
  );
};

export default MuiAccordionItem;
