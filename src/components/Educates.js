import { useState } from 'react';

const Educates = () => {
  const [activeContent, setActiveContent] = useState(1);

  const changeEducateContent = (contentId) => {
    setActiveContent(contentId);
  };

  return (
    <section className="educates-and-entertains">
      <div className="container">
        <h2 className="section-heading">
          Exceptional content marketing that converts, educates and entertains.
        </h2>
        <div className="row">
          <div className="col-md-4">
            <h4
              className="educate-heading"
              onClick={() => changeEducateContent(1)}
            >
              Content strategy
            </h4>
            <h4
              className="educate-heading"
              onClick={() => changeEducateContent(2)}
            >
              Content creation
            </h4>
            <h4
              className="educate-heading"
              onClick={() => changeEducateContent(3)}
            >
              Promotion
            </h4>
            <h4
              className="educate-heading"
              onClick={() => changeEducateContent(4)}
            >
              Optimisation
            </h4>
          </div>
          <div className="col-md-8">
            <div
              id="educate-content-1"
              className={`educate-content ${activeContent === 1 ? 'active' : ''}`}
            >
              <p>
                For many industries, content marketing is central to generating the exposure that businesses crave to win. Our suite of content marketing services will deliver the traffic and exposure that you’re looking for, and the engagement that will take your brand to the next level.<br /><br />
                We work to deliver the growth you deserve through a structured content strategy that caters to all clients within all industries in a comprehensive manner. With this in mind, we’ll extensively research competitors, review your current content, carry out thorough keyword research, and brand stature to identify all possible market opportunities.<br /><br />
                Regardless of the scale of your industry and your level of ambition, our team of experienced content marketing experts will get to the core of what your customers are looking for and will strive to cater directly to their curiosity, interests, and intent.<br /><br />
                Our content marketing strategy is aimed at solving the following challenges:
              </p>
              <ul>
                <li>Identify what information your audience craves and answer their needs</li>
                <li>Identify content that has the potential to generate organic traffic...</li>
                <li>Align our content plan along with your brand, messaging and goals</li>
                <li>Define and plan out content promotion strategies</li>
              </ul><br /><br />
              <p>At Xevy, we believe that it’s essential to be measured in all of our output, and by carefully constructing a powerful content marketing strategy, we can develop a quality long-term plan that can continue to deliver.</p>
            </div>
            <div
              id="educate-content-2"
              className={`educate-content ${activeContent === 2 ? 'active' : ''}`}
            >
              <p>
                This is where the magic happens. Solvid is blessed to possess a highly creative team of skilled and experienced content creators, but we know it’s not enough to simply rely on the ‘wow’ factor to generate leads. We like to be highly formulaic in our approach to content, that way we know we’re more likely to perform better for our clients and produce content that’s set to continue to win new customers.<br /><br />
                We place thorough research at the heart of everything we do. This means that every piece of content we create will be relevant, accurate, engaging, and informative at every stage of the buyer journey. Our experienced staff will scour your industry for key talking points or emerging news stories to utilise for relevance and will strive to find refreshing angles and new information to ensure that readers recognise your brand as a thought leader on important topics.<br /><br />
                The best content in the world seeks to combine aesthetics with technical excellence, and we believe that this should be a minimum requirement in our content marketing output. All content is optimised for search.<br /><br />
                Depending on your needs and our content strategy, content could come in different formats, including:
              </p>
              <ul>
                <li>Written content - articles, blog posts and guides</li>
                <li>Long-form content - whitepapers, reports and ebooks</li>
                <li>Gated content - checklists, lists and exclusive guides</li>
                <li>Visual content - infographics, data visualisations...</li>
              </ul>
            </div>
            <div
              id="educate-content-3"
              className={`educate-content ${activeContent === 3 ? 'active' : ''}`}
            >
              <p>
                Xevy works tirelessly to make sure that your content is placed directly under the noses of the right audience at the right time. Thanks to our data-driven approach and deep understanding of audience analysis, we can build the perfect content promotion plan to suit your needs.<br /><br />
                Our content marketing process will take into account relevant information surrounding your target audience. Solvid takes into account who your prospective customers are, what their interests are, and what kind of values they’re most likely to hold.<br /><br />
                Once we’ve fully analysed your business, we will create a comprehensive content marketing plan by utilising various tactics, including digital PR, guest blogging, outreach, paid social and search ads, etc.<br /><br />
              </p>
            </div>
            <div
              id="educate-content-4"
              className={`educate-content ${activeContent === 4 ? 'active' : ''}`}
            >
              <p>
                No successful content marketing campaigns come without thorough analysis and optimisation.<br /><br />
                We will continuously use analytics and data to identify weaknesses and opportunities at every stage of the content marketing campaign. Gathered data will enable us to paint the whole picture and determine areas we can improve on.<br /><br />
                As our content marketing campaign matures, we'll continue to track and optimise our strategies to maximise its effectiveness. In addition, our detailed monthly reports will lay out all of the important metrics, campaign progress and our plan for the coming months.<br /><br />
                Together, we'll review the performance of our content marketing campaign as part of the overall strategy, including:
              </p>
              <ul>
                <li>KPIs - whether we're hitting the goals we've set...</li>
                <li>Metrics - whether we see the improvements...</li>
                <li>Content performance - assessing how the content is contributing...</li>
                <li>Further steps - planning out revised content strategies...</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Educates;
