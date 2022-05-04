import { GetStaticPaths, GetStaticProps } from 'next';
import { RichText } from 'prismic-dom';
import { MdDateRange, MdOutlineWatchLater } from 'react-icons/md';
import { RiUser3Line } from 'react-icons/ri';
import Prismic from '@prismicio/client';

import { getPrismicClient } from '../../services/prismic';
import styles from './post.module.scss';

interface Post {
  updatedAt: string;
  data: {
    title: string;
    subtitle: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  posts: Post;
}

export default function Post({ posts }: PostProps) {
  // TODO

  return (
    <>
      <main className={styles.container}>
        <div className={styles.post}>
          <div className={styles.banner}>
            <img src={posts.data.banner.url} alt='banner' />
          </div>



          <div className={styles.content}>
            <div className={styles.head}>
              <h1>{posts.data.title}</h1>
              <div className={styles.infoArea}>
                <time className={styles.date}>
                  <MdDateRange />
                  {posts.updatedAt}
                </time>

                <p className={styles.author}>
                  <RiUser3Line />
                  {posts.data.author}
                </p>

                <time className={styles.readTime}>
                  <MdOutlineWatchLater />
                  4 min
                </time>
              </div>
            </div>


            {posts.data.content.map(content => {
              return (
                <article className={styles.contentA}>
                  <h2>{ content.heading}</h2>
                  <p>
                    {RichText.asText(content.body)}
                  </p>

               </article>
              )
            })}

          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {

  return {
    paths: [],
    fallback: 'blocking'
  }

}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params
  const prismic = getPrismicClient({})
  const response = await prismic.getByUID('my-custom-post', String(slug),)




  const posts = {
    slug,
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'numeric',
      year: 'numeric'
    }),

    data: {

      title: response.data.title,
      subtitle: response.data.subtitle,
      author: RichText.asText(response.data.author),
      banner: {
        url: response.data.banner.url,
      },
      content: response.data.content.map(content => {
        return {
          heading: content.heading,
          body: [...content.body],
        };
      }),
    },
  };


  console.log(posts);

  return {
    props: {
      posts
    }
  }



}

