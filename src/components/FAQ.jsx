import faqs from "../faqData";
import { useState } from "react";

const FAQ = () => {
  const [activeTab, setActiveTab] = useState(null);

  const questionsAnswers = faqs.map((item, index) => {
    return (
      <div className="question" key={index}>
        <h3>{item.title}</h3>

        {item.questions.map((item) => {
          return (
            <div
              className="question--wrapper"
              key={item.id}
              onClick={() =>
                setActiveTab((prevId) => (prevId === item.id ? null : item.id))
              }
            >
              <div className="controls">
                <h5>{item.q}</h5>
                {activeTab === item.id ? (
                  <span class="material-symbols-outlined">remove</span>
                ) : (
                  <span class="material-symbols-outlined">add</span>
                )}
              </div>
              {activeTab === item.id && <p>{item.a}</p>}
            </div>
          );
        })}
      </div>
    );
  });

  return (
    <section className="faq__section">
      <h4>FAQs</h4>
      <h2>Questions? We have answers!</h2>

      <div className="faqs">{questionsAnswers}</div>
    </section>
  );
};

export default FAQ;
