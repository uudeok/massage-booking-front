type TProps = {
  children: JSX.Element;
  isShow?: boolean;
  fallbackChildren?: JSX.Element;
};

const ConditionalDisplay = ({ isShow, children, fallbackChildren }: TProps) => {
  return <>{isShow ? children : fallbackChildren ?? null}</>;
};

export default ConditionalDisplay;
