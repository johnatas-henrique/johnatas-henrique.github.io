import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, ProjectImage, Meta } from '../../components/projects';
import P from '../../components/paragraph';
import Layout from "../../components/layouts/article";
import fetchApiData from "../../libs/fetchApiData";
import NotFound from "../404";

import Loading from "../../components/loading";

const Project = () => {
  const router = useRouter();
  const [apiData, setApiData] = useState([]);
  const url = 'https://gitconnected.com/v1/portfolio/johnatas-henrique';
  const { query: { slug } } = router;

  useEffect(() => {
    fetchApiData(url, setApiData);
  }, []);
  const { projects } = apiData;
  const actualProject = projects ? projects.find(item => item.name === slug) : null;

  if (actualProject) {
    const {
      repositoryUrl, website, displayName, start: { year }, summary, languages, libraries, images
    } = actualProject;
    return (
      <Layout>
        <Container>
          <Title>
            {displayName} <Badge>{year}</Badge>
          </Title>
          <P>
            {summary}
          </P>
          <List ml={4} my={4}>
            <ListItem>
              <Meta>Website</Meta>
              <Link href={website} target='_blank'>
                {website}
                <ExternalLinkIcon mx='2px' />
              </Link>
            </ListItem>
            <ListItem>
              <Meta>GitHub</Meta>
              <Link href={repositoryUrl} target='_blank'>
                {repositoryUrl}
                <ExternalLinkIcon mx='2px' />
              </Link>
            </ListItem>
            <ListItem>
              <Meta>Stack</Meta>
              <span>{libraries.concat(languages).join(' | ')}</span>
            </ListItem>
          </List>
          <ProjectImage src={images[0].resolutions.desktop.url} alt={`foto do ${displayName}`} />
        </Container>
      </Layout>
    )
  }

  if (projects && !actualProject) return (<NotFound />)

  return (<Loading />)
}

export default Project;
