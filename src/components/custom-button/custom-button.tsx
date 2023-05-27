import { Button } from "@mui/material";

type CustomButtonProps = {
  text: string | JSX.Element;
  type?: "button" | "submit";
  size?: "small" | "medium" | "large" | undefined;
  variant?: any;
  fullWidth?: boolean;
  disabled?: boolean;
  disableRipple?: boolean;
  disableFocusRipple?: boolean;
  disableElevation?: boolean;
  startIcon?: any;
  endIcon?: any;
  href?: string;
  onClick?: () => any;
  sx?: any;
  className?: any;
  id?: string;
};

const CustomButton = (props: CustomButtonProps) => {
  const {
    text,
    type = "button",
    size = "medium",
    variant = "contained",
    fullWidth = false,
    disabled = false,
    disableRipple = false,
    disableFocusRipple = false,
    disableElevation = true,
    startIcon,
    endIcon,
    href,
    onClick,
    sx,
    id,
    className
  } = props;

  return (
    <Button
      size={size}
      type={type}
      variant={variant}
      fullWidth={fullWidth}
      disabled={disabled}
      disableRipple={disableRipple}
      disableFocusRipple={disableFocusRipple}
      disableElevation={disableElevation}
      startIcon={startIcon}
      endIcon={endIcon}
      href={href}
      onClick={onClick}
      sx={sx ? sx : {}}
      id = {id}
      className={className ? className : {}}>
      {text}
    </Button>
  );
};

export default CustomButton;
