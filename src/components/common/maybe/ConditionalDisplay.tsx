import React from "react";

type ConditionalDisplayProps = {
  condition: boolean;
  children: React.ReactNode;
  alternativeComponent?: React.ReactNode | null;
};

const ConditionalDisplay: React.FC<ConditionalDisplayProps> = ({
  condition,
  children,
  alternativeComponent,
}) => {
  return condition ? <>{children}</> : <>{alternativeComponent}</>;
};

export default ConditionalDisplay;
