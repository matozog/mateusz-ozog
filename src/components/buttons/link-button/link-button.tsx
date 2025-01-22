import { FC, MouseEventHandler } from 'react';

interface ILinkButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const LinkButton: FC<ILinkButtonProps> = ({ text, onClick }) => {
  return (
    <div
      className="text-xl hover:cursor-pointer hover:underline hover:text-[#185f28]"
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default LinkButton;
