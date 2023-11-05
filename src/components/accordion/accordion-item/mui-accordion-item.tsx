import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FC } from 'react';

export interface IMuiAccordionItem {
    title: string;
    details: string;
}

interface IMuiAccordionItemProps {
    titleText: string;
    detailsText: string;
}

const MuiAccordionItem: FC<IMuiAccordionItemProps> = ({
    detailsText,
    titleText,
}) => {
    return (
        <Accordion className="w-full bg-black text-white">
            <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-white" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{titleText}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>{detailsText}</Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export default MuiAccordionItem;
