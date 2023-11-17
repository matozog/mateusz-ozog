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
        <Accordion className="w-full bg-dark-color text-white">
            <AccordionSummary
                className="rounded-2xl"
                expandIcon={
                    <ExpandMoreIcon className="text-white" fontSize="large" />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className="text-lg md:text-2xl p-2 md:p-4 font-[Ubuntu]">
                    {titleText}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography className="text-lg md:text-2xl p-2 md:p-4 font-[Ubuntu]">
                    {detailsText}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export default MuiAccordionItem;
