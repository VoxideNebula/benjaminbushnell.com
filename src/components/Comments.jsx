import React from 'react';
import Giscus from '@giscus/react';

const Comments = () => {
  return (
    <section className="mt-20 pt-10 border-t border-white/10">
      <Giscus
        id="comments"
        repo="YOUR_GITHUB_USERNAME/YOUR_REPO_NAME"
        repoId="R_kgDOL-0V2A"
        category="Announcements"
        categoryId="DIC_kwDOL-0V2M4ClnYV"
        mapping="pathname"
        term="Welcome to my blog!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="transparent_dark" // Matches your dark theme perfectly
        lang="en"
        loading="lazy"
      />
    </section>
  );
};

export default Comments;
