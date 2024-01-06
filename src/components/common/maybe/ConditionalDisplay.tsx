type TProps = {
  children: JSX.Element;
  isShow: boolean;
};

const ConditionalDisplay = ({ isShow, children }: TProps) => {
  return <>{isShow ? children : null}</>;
};

export default ConditionalDisplay;
