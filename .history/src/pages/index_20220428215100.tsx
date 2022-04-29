import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { getPrismicClient } from '../services/prismic';


import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  // TODO
  return(
    <>
      <Head>
        <title>Space Travel</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <Link href='#'>
            <a>
              <strong>Titulo do post</strong>
              <h4>Subtitulo do post</h4>
              <div>

                <time>
                   <img></img>
                    12/02/2020
                </time>

                <p className={styles.author}>
                   <img></img>
                   Tom barbosa
                </p>
              </div>
              
            </a>
          </Link>
        </div>
      </main>

      
    </>
  )
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient({});
//   // const postsResponse = await prismic.getByType(TODO);

//   // TODO
// };
