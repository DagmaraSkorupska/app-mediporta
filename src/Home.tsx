import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [questions, setQuestions] = useState([]);
  console.log(questions);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.stackexchange.com/2.3/questions",
          {
            params: {
              site: "stackoverflow", // Wybierz witrynę (na przykład Stack Overflow)
              pagesize: 10, // Liczba wyników na stronie
              key: "s3rcNPsWW5NslQvC)Evdew((", // Twój klucz API
            },
          }
        );
        setQuestions(response.data.items);
      } catch (error) {
        console.error("Wystąpił błąd:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Najnowsze pytania ze Stack Overflow:</h1>
      <ul>
        {questions.map((question) => (
          <li key={question?.question_id}>{question?.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
