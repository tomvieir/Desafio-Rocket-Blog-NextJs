import { GetStaticPaths, GetStaticProps } from 'next';
import { MdDateRange, MdOutlineWatchLater } from 'react-icons/md';
import { RiUser3Line } from 'react-icons/ri';

import { getPrismicClient } from '../../services/prismic';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
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
  post: Post;
}

export default function Post() {
  // TODO
  return (
    <>
      <main className={styles.container}>
        <div className={styles.post}>
          <div className={styles.banner}>
            <img src='https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt='banner'/>
          </div>

          

          <div className={styles.content}>
            <div className={styles.head}>
              <h1>titulo do post</h1>
              <div className={styles.infoArea}>
                <time className={styles.date}>
                  <MdDateRange />
                  22 mar 2022
                </time>

                <p className={styles.author}>
                  <RiUser3Line />
                  Tom Barbosa
                </p>

                <time className={styles.readTime}>
                  <MdOutlineWatchLater />
                  4 min
                </time>
              </div>
            </div>
            

            <div className={styles.contentA}>
              <h2>subtitulo grupo A</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam expedita neque voluptatibus corrupti harum optio, ea alias nemo natus necessitatibus omnis recusandae voluptas ad, qui architecto deserunt obcaecati animi vitae!
              </p>
              
            </div>

            <div className={styles.contentB}>
              <h2>subtitulo grupo B</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, ducimus assumenda pariatur quam nisi ea velit eius repudiandae eos impedit fugiat perspiciatis beatae quos! Harum itaque distinctio temporibus eaque sequi


              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, ducimus assumenda pariatur quam nisi ea velit eius repudiandae eos impedit fugiat perspiciatis beatae quos! Harum itaque distinctio temporibus eaque sequi
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, ducimus assumenda pariatur quam nisi ea velit eius repudiandae eos impedit fugiat perspiciatis beatae quos! Harum itaque distinctio temporibus eaque sequi
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, ducimus assumenda pariatur quam nisi ea velit eius repudiandae eos impedit fugiat perspiciatis beatae quos! Harum itaque distinctio temporibus eaque sequi
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, ducimus assumenda pariatur quam nisi ea velit eius repudiandae eos impedit fugiat perspiciatis beatae quos! Harum itaque distinctio temporibus eaque sequi
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, ducimus assumenda pariatur quam nisi ea velit eius repudiandae eos impedit fugiat perspiciatis beatae quos! Harum itaque distinctio temporibus eaque sequi
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, ducimus assumenda pariatur quam nisi ea velit eius repudiandae eos impedit fugiat perspiciatis beatae quos! Harum itaque distinctio temporibus eaque sequi
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, ducimus assumenda pariatur quam nisi ea velit eius repudiandae eos impedit fugiat perspiciatis beatae quos! Harum itaque distinctio temporibus eaque sequi
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, ducimus assumenda pariatur quam nisi ea velit eius repudiandae eos impedit fugiat perspiciatis beatae quos! Harum itaque distinctio temporibus eaque sequi
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, ducimus assumenda pariatur quam nisi ea velit eius repudiandae eos impedit fugiat perspiciatis beatae quos! Harum itaque distinctio temporibus eaque sequi
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, ducimus assumenda pariatur quam nisi ea velit eius repudiandae eos impedit fugiat perspiciatis beatae quos! Harum itaque distinctio temporibus eaque sequi
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, ducimus assumenda pariatur quam nisi ea velit eius repudiandae eos impedit fugiat perspiciatis beatae quos! Harum itaque distinctio temporibus eaque sequi
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, ducimus assumenda pariatur quam nisi ea velit eius repudiandae eos impedit fugiat perspiciatis beatae quos! Harum itaque distinctio temporibus eaque sequi
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, ducimus assumenda pariatur quam nisi ea velit eius repudiandae eos impedit fugiat perspiciatis beatae quos! Harum itaque distinctio temporibus eaque sequi
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, ducimus assumenda pariatur quam nisi ea velit eius repudiandae eos impedit fugiat perspiciatis beatae quos! Harum itaque distinctio temporibus eaque sequi.
              </p>
            </div>


          </div>
        </div>
      </main>
    </>
  )
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient({});
//   const posts = await prismic.getByType(TODO);

//   // TODO
// };

// export const getStaticProps = async ({params }) => {
//   const prismic = getPrismicClient({});
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
