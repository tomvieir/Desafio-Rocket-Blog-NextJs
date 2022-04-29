import { GetStaticProps } from 'next';
import Link from 'next/link';
import {MdDateRange} from 'react-icons/md';
import {RiUser3Line} from 'react-icons/ri';

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


      <main className={styles.container}>
        <div className={styles.posts}>
          <Link href='#'> 
            <a>
              <strong>Como utilizar hooks</strong>
              <h4>pensando em sincronização em vez de ciclos de vida </h4>
              <div className={styles.dateSession}>

                <time>
                <MdDateRange/>
                    15 mar 2022
                </time>

                <p className={styles.author}>
                  <RiUser3Line/>
                   Tom barbosa
                </p>
              </div>
              
            </a>
          </Link>

          <Link href='#'> 
            <a>
              <strong>Como utilizar hooks</strong>
              <h4>pensando em sincronização em vez de ciclos de vida </h4>
              <div className={styles.dateSession}>

                <time>
                <MdDateRange/>
                    15 mar 2022
                </time>

                <p className={styles.author}>
                  <RiUser3Line/>
                   Tom barbosa
                </p>
              </div>
              
            </a>
          </Link>

          <Link href='#'> 
            <a>
              <strong>Como utilizar hooks</strong>
              <h4>pensando em sincronização em vez de ciclos de vida </h4>
              <div className={styles.dateSession}>

                <time>
                <MdDateRange/>
                    15 mar 2022
                </time>

                <p className={styles.author}>
                  <RiUser3Line/>
                   Tom barbosa
                </p>
              </div>
              
            </a>
          </Link>
          <Link href='#'> 
            <a>
              <strong>Como utilizar hooks</strong>
              <h4>pensando em sincronização em vez de ciclos de vida </h4>
              <div className={styles.dateSession}>

                <time>
                <MdDateRange/>
                    15 mar 2022
                </time>

                <p className={styles.author}>
                  <RiUser3Line/>
                   Tom barbosa
                </p>
              </div>
              
            </a>
          </Link>
          <Link href='#'> 
            <a>
              <strong>Como utilizar hooks</strong>
              <h4>pensando em sincronização em vez de ciclos de vida </h4>
              <div className={styles.dateSession}>

                <time>
                <MdDateRange/>
                    15 mar 2022
                </time>

                <p className={styles.author}>
                  <RiUser3Line/>
                   Tom barbosa
                </p>
              </div>
              
            </a>
          </Link>
          <Link href='#'> 
            <a>
              <strong>Como utilizar hooks</strong>
              <h4>pensando em sincronização em vez de ciclos de vida </h4>
              <div className={styles.dateSession}>

                <time>
                <MdDateRange/>
                    15 mar 2022
                </time>

                <p className={styles.author}>
                  <RiUser3Line/>
                   Tom barbosa
                </p>
              </div>
              
            </a>
          </Link>
          <Link href='#'> 
            <a>
              <strong>Como utilizar hooks</strong>
              <h4>pensando em sincronização em vez de ciclos de vida </h4>
              <div className={styles.dateSession}>

                <time>
                <MdDateRange/>
                    15 mar 2022
                </time>

                <p className={styles.author}>
                  <RiUser3Line/>
                   Tom barbosa
                </p>
              </div>
              
            </a>
          </Link>
          <Link href='#'> 
            <a>
              <strong>Como utilizar hooks</strong>
              <h4>pensando em sincronização em vez de ciclos de vida </h4>
              <div className={styles.dateSession}>

                <time>
                <MdDateRange/>
                    15 mar 2022
                </time>

                <p className={styles.author}>
                  <RiUser3Line/>
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
