type TProps = {
  children: JSX.Element;
  condition: boolean;
  alternativeComponent?: JSX.Element;
};

const ConditionalDisplay = ({
  condition,
  children,
  alternativeComponent,
}: TProps) => {
  return <>{condition ? children : alternativeComponent ?? null}</>;
};

export default ConditionalDisplay;
