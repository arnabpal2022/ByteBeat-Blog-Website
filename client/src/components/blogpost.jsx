import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";

export const Blog1 = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  if(!postInfo) return "";


  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase sm:text-center">
      {formatISO9075(new Date(postInfo.createdAt))}
      </p>
      <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
        <div className="mb-4">
          <a
            href="/"
            aria-label="Article"
            className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
          >
            {postInfo.title}
          </a>
        </div>
        <p className="text-base text-gray-700 md:text-lg">
            {postInfo.summary}
          {/* Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae. */}
        </p>
      </div>

      <div className="" dangerouslySetInnerHTML={{__html:postInfo.content}}/>
        
        {/* In the world of language and typography, there exists a timeless
        sentence that has captured the attention of writers, linguists, and
        designers alike. This sentence is none other than "The quick brown fox
        jumps over a lazy dog." Despite its simplicity, it carries a remarkable
        significance and has played a pivotal role in various domains. In this
        blog, we'll dive deep into the history and importance of this sentence,
        exploring its relevance in the realms of typography, language, and even
        popular culture.
        <br />
        The origins of the sentence date back to the late 19th century. It is
        believed to have been popularized by the American journalist and
        humorist, Franklin P. Adams, who used it in his column titled "The
        Conning Tower" in the New York Tribune. The sentence's purpose was to
        demonstrate the use of every letter in the English alphabet, making it a
        valuable tool for typographers and font designers.
        <br />
        "The quick brown fox jumps over a lazy dog" is often referred to as a
        "pangram." A pangram is a sentence that includes every letter of the
        alphabet at least once. Typeface designers frequently use pangrams to
        showcase their fonts and demonstrate how each letter appears in their
        typeface. This allows designers and potential users to assess the font's
        legibility and aesthetic appeal.
        <br />
        Beyond its utility in typography, the sentence also serves as an
        interesting example in the context of language and literacy. It is often
        used as a tool for teaching and testing language skills, particularly in
        early education. Young learners can practice their handwriting and
        recognition of individual letters by copying the sentence. Additionally,
        the sentence's whimsical imagery—a quick brown fox and a lazy dog—makes
        it engaging and memorable for children, helping them associate letters
        with words and creating an enjoyable learning experience. */}
        <br />
      
    </div>
  );
};
