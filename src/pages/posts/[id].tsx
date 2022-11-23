import { Container } from '@mui/material';
import { Post } from '@prisma/client';
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import Router from 'next/router';
import ReactMarkdown from 'react-markdown';
import { PostProps } from 'src/components/posts/Post';
import prisma from 'src/lib/prisma';

const PostShow: React.FC<PostProps> = (props) => {
  const { data: session, status } = useSession();
  if (status === 'loading') {
    return <div>Authenticating ...</div>;
  }
  const userHasValidSession = Boolean(session);
  const postBelongsToUser = session?.user?.email === props.author?.email;

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
        {!props.published && userHasValidSession && postBelongsToUser && (
          <p>
            <button onClick={() => publishPost(props.id)}>Publish</button>
          </p>
        )}
        {userHasValidSession && postBelongsToUser && (
          <p>
            <button onClick={() => deletePost(props.id)}>Delete</button>
          </p>
        )}
      </div>
    </Container>
  );
};

export default PostShow;

//
async function publishPost(id: string): Promise<void> {
  await fetch(`/api/post/publish/${id}`, {
    method: 'PUT',
  });
  await Router.push('/posts');
}

//
async function deletePost(id: string): Promise<void> {
  await fetch(`/api/post/${id}`, {
    method: 'DELETE',
  });
  Router.push('/posts');
}

//
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
        select: { name: true, email: true },
      },
    },
  });
  return {
    props: post,
  };
};
