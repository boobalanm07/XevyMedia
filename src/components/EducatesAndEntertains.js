import { useState } from 'react';

const EducatesAndEntertains = () => {
  const [activeContent, setActiveContent] = useState(1);

  const changeEducateContent = (contentId) => {
    setActiveContent(contentId);
  };

  return (
    <>
      <section className="educates-and-entertains">
        <div className="container">
          <h5>Save Up To 50%!</h5>
          <h2 className="section-heading">
            You Don&apos;t Have to Break the Bank to Hire Digital Marketing Talent!
          </h2>
          <h6>Here&apos;s why hiring remote digital marketing experts from Remote Resource makes sense:</h6>
          <div className="row">
            <div className="col-md-4">
              <h4
                className="educate-heading"
                onClick={() => changeEducateContent(1)}
              >
                Experience Hassle-free Onboarding:
              </h4>
              <h4
                className="educate-heading"
                onClick={() => changeEducateContent(2)}
              >
                ZERO Employee Liabilities &amp; Compliance Hassles:
              </h4>
              <h4
                className="educate-heading"
                onClick={() => changeEducateContent(3)}
              >
                You Decide Your Team Size:
              </h4>
              <h4
                className="educate-heading"
                onClick={() => changeEducateContent(4)}
              >
                Airtight Data Security with Strict Adherence to NDA:
              </h4>
            </div>
            <div className="col-md-8">
              <div
                id="educate-content-1"
                className={`educate-content ${activeContent === 1 ? 'active' : ''}`}
              >
                <p>
                  Hiring the right digital marketing experts doesn&apos;t have to be complicated. At Remote Resource, we offer hassle-free onboarding that allows you to focus on growing your business while we handle the recruitment process. Our team pre-vets each candidate, ensuring you get top-notch talent without the stress of sorting resumes and conducting multiple interviews. You can even request trial periods to test the remote digital marketing experts, ensuring they fit your team seamlessly. Save time and resources with our streamlined onboarding process, designed for business owners who want efficiency and excellence.
                </p>
              </div>
              <div
                id="educate-content-2"
                className={`educate-content ${activeContent === 2 ? 'active' : ''}`}
              >
                <p>
                  One of the biggest challenges of hiring in-house employees is managing employee liabilities and compliance issues. With Remote Resource, you can eliminate these concerns entirely. Our remote digital marketing experts work on a flexible, pay-as-you-go model, meaning you only pay for the hours worked, without the added financial burden of health insurance, retirement benefits, and other employee-related expenses. This makes us the ideal solution for startups and businesses looking to reduce overhead costs while still gaining access to highly skilled marketing professionals. Focus on scaling your business, not on managing employee compliance.
                </p>
              </div>
              <div
                id="educate-content-3"
                className={`educate-content ${activeContent === 3 ? 'active' : ''}`}
              >
                <p>
                  Flexibility is key to business success, especially in the ever-evolving digital marketing landscape. With Remote Resource, you have complete control over the size and composition of your marketing team. Whether you need just one SEO consultant or an entire team of specialists for a large-scale project, we scale according to your needs. There&apos;s no need for long-term contracts or rigid team structures—our flexible solutions empower you to grow or downsize your team as required. Take full control of your digital marketing strategy with the ability to adjust your resources based on your current business requirements.
                </p>
              </div>
              <div
                id="educate-content-4"
                className={`educate-content ${activeContent === 4 ? 'active' : ''}`}
              >
                <p>
                  When it comes to sensitive business data, security is paramount. Remote Resource understands the importance of protecting your business&apos;s confidential information, which is why we enforce strict data security protocols and adhere to comprehensive nondisclosure agreements (NDAs). Our remote digital marketing experts work within a secure framework, ensuring your data remains private and protected throughout every project. Trust us to handle your marketing needs with the highest level of confidentiality and security, giving you peace of mind while achieving your business goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EducatesAndEntertains;
