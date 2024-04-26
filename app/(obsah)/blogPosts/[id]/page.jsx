"use client";
import Heading from "@/components/heading";
import How from "@/components/how";
import Sluzby from "@/components/sluzby";
import { gql, useMutation, useQuery } from "@apollo/client";
import React from "react";

export default function BlogPost({ params }) {
  const titId = params.id;

  const GET_BLOGPOST = gql`
    query getPost {
      post(id: "${titId}") {
          id
          title
          content
          ytEmbed {
      ytEmbed
    }
      }
    }
  `;
  const { loading, error, data, refetch } = useQuery(GET_BLOGPOST, {
    variables: { titId },
  });
  if (loading)
    return (
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 bg-white py-6 sm:py-8 lg:py-12">
        <p className="w-full text-center">Načítám článek z databáze.</p>
      </div>
    );
  if (error)
    return (
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 bg-white py-6 sm:py-8 lg:py-12">
        <p>Error - ${error.message}</p>
      </div>
    );
  const embed = data.post.ytEmbed;
  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8 bg-white py-6 sm:py-8 lg:py-12">
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">
          {data.post.title}
        </h1>
        <div
          className="mb-6 text-gray-500 sm:text-lg md:mb-8 blogPost"
          dangerouslySetInnerHTML={{ __html: data.post.content }}
        ></div>
        {!embed.ytEmbed || (
          <div
            className="my-12 text-gray-500 sm:text-lg md:mb-8 blogPost youtube-video-container"
            dangerouslySetInnerHTML={{ __html: embed.ytEmbed }}
          ></div>
        )}
      </div>
    </div>
  );
}
