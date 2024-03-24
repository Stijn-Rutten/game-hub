import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const genres = useGenres();
  const platforms = usePlatforms();

  const platformName =
    platforms.data.results.find(
      (platform) => platform.id === gameQuery.platformId
    )?.name || "";

  const genreName =
    genres.data.results.find((genre) => genre.id === gameQuery.genreId)?.name ||
    "";

  const header = `${platformName} ${genreName || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {header}
    </Heading>
  );
}

export default GameHeading;
