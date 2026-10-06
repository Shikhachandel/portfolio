import HomepageTitle from "../../../components/homepage-titles";
import PublicationData from "../../../data/publications";
import {
  PublicationsContainer,
  PublicationTimeline,
  PublicationItem,
  PublicationDateBlock,
  PublicationYear,
  PublicationVenue,
  PublicationMarkerColumn,
  PublicationMarker,
  PublicationContent,
  PublicationMeta,
  PublicationTitle,
  PublicationDescription,
  PublicationLinks,
  PublicationLink,
} from "./style";

function Publications() {
  return (
    <PublicationsContainer>
      <HomepageTitle title="Publications" />
      <PublicationTimeline>
        {PublicationData.map((publication) => (
          <PublicationItem key={`${publication.year}-${publication.title}`}>
            <PublicationDateBlock>
              <PublicationYear>{publication.year}</PublicationYear>
              <PublicationVenue>{publication.venue}</PublicationVenue>
            </PublicationDateBlock>
            <PublicationMarkerColumn>
              <PublicationMarker />
            </PublicationMarkerColumn>
            <PublicationContent>
              <PublicationTitle>{publication.title}</PublicationTitle>
              <PublicationMeta>{publication.type}</PublicationMeta>
              <PublicationDescription>
                {publication.description}
              </PublicationDescription>
              {(publication.links?.github_url || publication.links?.web_url) && (
                <PublicationLinks>
                  {publication.links.github_url && (
                    <PublicationLink href={publication.links.github_url} target="_blank" rel="noreferrer">
                      GitHub
                    </PublicationLink>
                  )}
                  {publication.links.web_url && (
                    <PublicationLink href={publication.links.web_url} target="_blank" rel="noreferrer">
                      Publication
                    </PublicationLink>
                  )}
                </PublicationLinks>
              )}
            </PublicationContent>
          </PublicationItem>
        ))}
      </PublicationTimeline>
    </PublicationsContainer>
  );
}

export default Publications;
