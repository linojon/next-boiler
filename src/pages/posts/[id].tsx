import { Container } from '@mui/material';
import { Post } from '@prisma/client';
import { GetServerSideProps } from 'next';
import ReactMarkdown from 'react-markdown';
import { PostProps } from 'src/components/posts/Post';
import prisma from 'src/lib/prisma';

const PostShow: React.FC<PostProps> = (props) => {
  let title = props.title;
  if (!props.published) {
    title = `${title} (Draft)`;
  }

  return (
    <Container maxWidth="lg">
      <div>
        <h2>{title}</h2>
        <p>By {props?.author?.name || 'Unknown author'}</p>
        <ReactMarkdown>{props.content}</ReactMarkdown>
      </div>
    </Container>
  );
};

export default PostShow;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // if (!params || !params.id) {
  //   return { notFound: true }
  // }
  const post = await prisma.post.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: post,
  };
};
