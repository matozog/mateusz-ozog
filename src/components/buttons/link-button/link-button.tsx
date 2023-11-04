import { FC, MouseEventHandler } from 'react';

interface ILinkButtonProps {
    text: string;
    onClick: MouseEventHandler<HTMLDivElement>;
}

const LinkButton: FC<ILinkButtonProps> = ({ text, onClick }) => {
    return (
        <div
            className="text-lg hover:cursor-pointer hover:underline"
            onClick={onClick}
        >
            {text}
        </div>
    );
};

export default LinkButton;
