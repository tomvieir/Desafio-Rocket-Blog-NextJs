import { GetStaticPaths, GetStaticProps } from 'next';
import { RichText } from 'prismic-dom';
import { MdDateRange, MdOutlineWatchLater } from 'react-icons/md';
import { RiUser3Line } from 'react-icons/ri';
import Prismic from '@prismicio/client';

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

export default function Post( { post }: PostProps ) {
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
              <h1>titulo</h1>
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

// export const getStaticPaths: GetStaticPaths = async () => {

//   const prismic = getPrismicClient({});
//   const posts = await prismic.query([
//     Prismic.predicates.at('document.type', 'my-custom-post'),
  
//   ])

//   // TODO
//   return {
//     paths: posts.results.map(post => ({
//       params: {
//         id: post.id
//       }
//     })),
//     fallback: true
//   }
// };



// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const prismic = getPrismicClient({});
//   const { slug } = params
//   const response = await prismic.getByUID('my-custom-post', String(slug),{
  
//   });

//   // TODO

//   const post = {
//     slug,
//     title: RichText.asText(response.data.title),
//     content: RichText.asHtml(response.data.content),
//     author: response.data.author.find((author: { type: string; }) => author.type === 'paragraph')?.text ?? '',
//     banner: response.data.banner,
//     // updatedAt:, // falta ver

//   }
//   console.log(response)
//   return { 
//     props: {
//       post,
//     },

//   }
// };
