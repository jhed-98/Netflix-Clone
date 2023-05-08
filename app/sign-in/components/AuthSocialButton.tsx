import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType
  onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition text-gray-900">
      <Icon />
    </button>
  );
}

export default AuthSocialButton;