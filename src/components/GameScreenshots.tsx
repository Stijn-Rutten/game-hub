import { SimpleGrid, Image } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data: data, isLoading, error } = useScreenshots(gameId);

  if (error) throw error;
  if (isLoading) return null;
  const screenshots = data?.results;

  return screenshots ? (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {screenshots.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image}></Image>
      ))}
    </SimpleGrid>
  ) : null;
};

export default GameScreenshots;
