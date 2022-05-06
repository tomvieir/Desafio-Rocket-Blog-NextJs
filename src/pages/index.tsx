import { GetStaticProps } from 'next';
import Link from 'next/link';
import { MdDateRange, MdOutlineWatchLater } from 'react-icons/md';
import { RiUser3Line } from 'react-icons/ri';
import { getPrismicClient } from '../services/prismic';

import styles from './home.module.scss';
import { RichText } from 'prismic-dom';
import { ReactElement, useState } from 'react';


interface Post {
  uid?: string;
  updatedAt: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
    readTime: number;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps): ReactElement {

  // função para calcular o tempo de leitura
  function getReadTime(item: Post): number {
    const totalWords = item.data.content.reduce((total, contentItem) => {
      total = 0

      const words = contentItem.body.map(i => i.text.split(' ').length);
      words.map(word => (total += word));
      return total;
    }, 0);
    return Math.ceil(totalWords / 200);
  }

  // função para formatar a data
  const formattedPost = postsPagination.results.map(post => {
    const readTime = getReadTime(post);

    return {
      ...post,
      data: {
        ...post.data,
        readTime,
      },
      updatedAt: new Date(post.updatedAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }),
    };
  });


  const [posts, setPosts] = useState<Post[]>(formattedPost); // variável para armazenar os posts
  const [nextPage, setNextPage] = useState(postsPagination.next_page); // variável para guardar a próxima página
  const [currentPage, setCurrentPage] = useState(1); // variável para guardar a página atual

  // função para carregar os posts
  async function LoadMorePage(): Promise<void> {

    // se a próxima página for vazia, não carrega mais
    if (currentPage !== 1 && nextPage === null) {
      return;
    }


    const postsResults = await fetch(`${nextPage}`).then(response =>
      response.json()
    );
    setNextPage(postsResults.next_page);
    setCurrentPage(postsResults.page);


    const newPosts = postsResults.results.map((post: Post) => {
      const readTime = getReadTime(post);

      return {
        uid: post.uid,
        updatedAt: new Date(post.updatedAt).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'numeric',
          year: 'numeric'
        }),
        data: {
          title: post.data.title,
          subtitle: post.data.subtitle,
          author: RichText.asText(post.data.author),
          readTime,
        },
      };
    });

    setPosts([...posts, ...newPosts]); // adiciona os novos posts à variável posts
  }

  return (
    <>
      <main className={styles.container}>
        <div className={styles.posts}>

          {posts.map(post => (
            <Link href={`/post/${post.uid}`} key={post.uid} >
              <a>
                <strong>{post.data.title}</strong>
                <h4>{post.data.subtitle} </h4>
                <div className={styles.dateSession}>

                  <time>
                    <MdDateRange />
                    {post.updatedAt}
                  </time>

                  <p className={styles.author}>
                    <RiUser3Line />
                    {post.data.author}
                  </p>

                  <time className={styles.readTime}>
                    <MdOutlineWatchLater />
                    {post.data.readTime} min de leitura
                  </time>
                </div>

              </a>
            </Link>))}

          <a
            className={styles.morePosts}
            onClick={LoadMorePage}
          >
            Carregar mais posts
          </a>

        </div>
      </main>
    </>
  )
}

// retorna um objeto com os dados do post
export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient({})
  const response = await prismic.getByType('my-custom-post', { // tipo do post

    pageSize: 4, // quantidade de posts

  })


  const posts = response.results.map(post => {
    return {
      uid: post.uid,
      updatedAt: post.last_publication_date,
      data: {
        title: post.data.title,
        subtitle: post.data.subtitle,       
        author: RichText.asText(post.data.author),
        content: post.data.content.map((content: { heading: any; body: any; }) => {
          return {
            heading: content.heading,
            body: [...content.body],
          };
        }),
      },
    };
  });

  const postsPagination = {
    results: posts,
    next_page: response.next_page,
  }

  return {
    props: {
      postsPagination
    }
  }

}
