import { GetStaticProps } from 'next';
import Link from 'next/link';
import { MdDateRange } from 'react-icons/md';
import { RiUser3Line } from 'react-icons/ri';
import Prismic from '@prismicio/client';
import { getPrismicClient } from '../services/prismic';


import styles from './home.module.scss';
import { RichText } from 'prismic-dom';


type Post = {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  updatedAt: string;
  content: {
    heading: string;
  };
 
};





interface HomeProps {
  posts: Post[];
}


export default function Home({ posts }: HomeProps){



  return (
    <>
      <main className={styles.container}>
        <div className={styles.posts}>
          
        {posts.map(post => (
            <Link href={`posts/${post.slug}`} key={post.slug} >
            <a>
              <strong>{post.title}</strong>
              <h4>{post.subtitle} </h4>
              <div className={styles.dateSession}>

                <time>
                  <MdDateRange />
                  {post.updatedAt}
                </time>

                <p className={styles.author}>
                  <RiUser3Line />
                  {post.author}
                </p>
              </div>

            </a>
            </Link>))}

        </div>
      </main>


    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient({})
  const response = await prismic.getByType('my-custom-post', {

    pageSize: 10,
  })

  

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: post.data.title,
      subtitle: post.data.subtitle,
      author: RichText.asText(post.data.author),
      // content: post.data.content.map(content => {
      //   return {
      //     heading: content.heading,
      //     body: [...content.body],
      //   };
      // }),
      
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', { 
        day: '2-digit',
        month: 'long',
        year:'numeric'
    })
      
      

    }
  })

  console.log(JSON.stringify(response, null, 2));
  console.log(posts)
  
  return {
    props: {
      posts
    }
  }



}
