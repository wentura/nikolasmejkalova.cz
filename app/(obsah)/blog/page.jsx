"use client";
import Heading from "@/components/heading";
import How from "@/components/how";
import Sluzby from "@/components/sluzby";
import defImg from "@/public/defImg.png";
import { gql, useMutation, useQuery } from "@apollo/client";
import React from "react";
// const GET_NABIDKA = gql`
//   query GetPosts {
//     posts(where: { categoryName: "blog" }) {
//       nodes {
//         id
//         content
//         date
//         featuredImage {
//           node {
//             altText
//             sourceUrl
//           }
//         }
//         id
//         title
//         ytEmbed {
//           ytEmbed
//         }
//         perex {
//           perex
//         }
//       }
//     }
//   }
// `;

const GET_NABIDKA = gql`
  query GetPosts {
    posts(where: { categoryName: "blog" }) {
      nodes {
        id
        date
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
        id
        title
        perex {
          perex
        }
      }
    }
  }
`;

export default function Blog() {
  const { loading, error, data, refetch } = useQuery(GET_NABIDKA);
  const images = [];
  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8 bg-white py-6 sm:py-8 lg:py-12">
      <div className="">
        {error && <p>Error: {error.message}</p>}
        {loading && <p>Načítám blog...</p>}
        {data &&
          data.posts.nodes.map((post) => (
            <div
              className="blogList flex flex-col md:flex-row pb-16"
              key={post.id}
            >
              <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                  <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
                    <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                      <img
                        src={`${post.featuredImage.node.sourceUrl}`}
                        // src="./defImg.png"

                        loading="lazy"
                        alt={`${post.featuredImage.node.altText}`}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="md:col-span-2 md:pt-8">
                      <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                        <a
                          href={`/blogPosts/${post.id}`}
                          className="underline underline-offset-8 decoration-gray-300 decoration-1 hover:decoration-gray-700 hover:decoration-3 transition duration-300"
                        >
                          {post.title}
                        </a>
                      </h1>

                      <p
                        className="mb-6 text-gray-500 sm:text-lg md:mb-8"
                        dangerouslySetInnerHTML={{ __html: post.perex.perex }}
                      ></p>

                      <div className="readMore text-right text-sm underline underline-offset-4 decoration-gray-300 decoration-1 hover:decoration-gray-700 hover:decoration-3 transition duration-300 pt-4 md:pt-12">
                        <a href={`/blogPosts/${post.id}`}>číst příspěvek</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
