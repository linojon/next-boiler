import { GetStaticProps } from 'next';
import prisma from 'src/lib/prisma';
import Post, { PostProps } from 'src/components/posts/Post';
import { Container } from '@mui/material';

type Props = {
  feed: PostProps[];
};

const Posts: React.FC<Props> = (props) => {
  return (
    <Container maxWidth="lg">
      <h1>Posts</h1>
      <main>
        {props.feed.map((post) => {
          return (
            <div key={post.id}>
              <Post post={post} />
            </div>
          );
        })}
      </main>
    </Container>
  );
};

export default Posts;

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return {
    props: { feed },
    revalidate: 10,
  };
};
