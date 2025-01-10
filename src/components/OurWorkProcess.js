import React from 'react';
import ProcessBox from '../components/ProcessBox';

const OurWorkProcess = () => {
  const processData = [
    {
      icon: 'fa-clipboard',
      title: 'Information Gathering',
      description:
        'The first step in our content development process is to collect information about your business or brand. As the best content writing agency, SEO Discovery’s professional writers compile information like target demographics, key competitors, past site performance, site goals, and other information unique to your business.',
    },
    {
      icon: 'fa-cogs',
      title: 'Outline Creation',
      description:
        'Once we have the required information about the business, we outline the idea. The outline helps us determine to include the right material people are searching for, it is specific and focused as well as intriguing to your target audience. We also research the topic.',
    },
    {
      icon: 'fa-check-circle',
      title: 'Write',
      description:
        'Being the top content writing agency, we put on the reader’s shoes and write easy-to-understand and readable copy. We produce a piece of high-quality and unique content that satisfies search intent as well as entice the reader to share the topic to help build awareness.',
    },
    {
      icon: 'fa-paper-plane',
      title: 'Optimize',
      description:
        'Once the writing phase is complete, we move onto optimization. Here we look at things like readability, word count, and related keywords to make the content more attractive to search engines and your target audience. We create title tags and meta descriptions too.',
    },
    {
      icon: 'fa-support',
      title: 'Review',
      description:
        'After everything is done, we review the content piece before sending it to clients. A quick review is done to catch glaring mistakes and make sure everything is covered. We use content marketing tools to help enhance the writing and check for spelling and grammar to further refine the content.',
    },
    {
      icon: 'fa-pencil',
      title: 'Edit',
      description:
        'We send the content copy to the clients for approval before publishing. As a professional content writing service provider We assure to provide compelling and intriguing, 100% original content covering all the essential information. However, if you want something to add on or edit a few parts, we do that.',
    },
  ];

  return (
    <section className="our-work-process">
      <div className="container">
        <h2 className="section-heading">Our Work Process</h2>
        <p>
          Our work process is designed to ensure that every project we undertake is executed smoothly and efficiently. We believe in maintaining transparency and collaboration at every stage to deliver the best results for our clients.
        </p>
        <div className="row">
          {processData.slice(0, 3).map((process, index) => (
            <ProcessBox key={index} {...process} />
          ))}
        </div>
        <div className="row">
          {processData.slice(3).map((process, index) => (
            <ProcessBox key={index} {...process} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorkProcess;
