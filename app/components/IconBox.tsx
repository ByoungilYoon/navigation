import { IconType } from "react-icons";

interface IconBoxProps {
  icon: IconType;
  label: string;
}

const IconBox: React.FC<IconBoxProps> = ({
  icon: Icon,
  label
}) => {
  return (
    <div>
      <Icon size={64} />
      <div className="font-medium text-sm">
        {label}
      </div>
    </div>
  );
}
export default IconBox;