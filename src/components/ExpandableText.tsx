import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
  limit?: number;
}

const ExpandableText = ({ children, limit = 300 }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded
    ? children
    : `${children.substring(0, limit).trim()}...`;

  return (
    <Text>
      {summary}
      <Button
        marginLeft={1}
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less" : "Show more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
