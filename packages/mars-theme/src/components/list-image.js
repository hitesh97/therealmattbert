import React from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";

const ListMedia = ({ state, id }) => {
  const media = state.source.attachment[id];

  if (!media) return null;

  const srcset =
    Object.values(media.media_details.sizes)
      // Get the url and width of each size.
      .map(item => [item.source_url, item.width])
      // Recude them to a string with the format required by `srcset`.
      .reduce(
        (final, current, index, array) =>
          final.concat(
            `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
          ),
        ""
      ) || null;

  return (
    <Container>
      <StyledImage
        alt={media.title.rendered}
        src={media.source_url}
        srcSet={srcset}
      />
    </Container>
  );
};

export default connect(ListMedia);

const Container = styled.div`
  margin: 16px 0;
  height: 350px;

  @media screen and (max-width: 800px) {
    & {
      height: auto;
      margin: 0 auto;
      width: 50%;
    }
  }
`;

const StyledImage = styled(Image)`
  display: block;
  width: 300px;
  height: 75%;
  border-radius: 15px;

  @media screen and (max-width: 800px) {
    & {
      width: 100%;
      margin: 0 auto;
      margin-bottom: 20px;
      height: auto;
    }
  }
`;
