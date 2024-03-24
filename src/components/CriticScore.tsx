import { Badge } from "@chakra-ui/react";

function CriticScore({ score }: { score: number }) {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge colorScheme={color} fontSize={14} paddingX={2} borderRadius={3}>
      {score}
    </Badge>
  );
}

export default CriticScore;
