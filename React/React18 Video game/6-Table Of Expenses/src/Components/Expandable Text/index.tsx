import { useState } from "react";

interface ExpandableTextProps {
  children: string;
  maxChars: number;
}

const ExpandableText = ({ children, maxChars }: ExpandableTextProps) => {
  const [isExpanded, setExpanded] = useState(false);
  if (children.length < maxChars) return <>{children}</>;

  const text = isExpanded ? children : children.substring(0, maxChars);
  return (
    <>
      {isExpanded ? <p>{text}</p> : <p>{text}...</p>}
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "read less" : "read more"}
      </button>
    </>
  );
};

export default ExpandableText;
