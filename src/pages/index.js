import React, { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [surveyCompletedState, setSurveyCompletedState] = useState(false);
  const [userSelection, setUserSelection] = useState("0");

  const surveyCompleted = () => {
    setSurveyCompletedState(true);
  };

  const updateUserSelection = (selection) => {
    setUserSelection(selection);
  };

  const SurveyDisplay = () => {
    return (
      <div className='survey-content'>
        <div className='icon-star-container'>
          <img className='icon-star' src='../images/icon-star.svg' />
        </div>
        <h1 className='title'> How did we do?</h1>
        <div className='description'>
          <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering! </p>
        </div>
        <div className='rating-btn-container'>
          <button className={userSelection === 1 ? "rating-btn-selected" : "rating-btn"} onClick={() => updateUserSelection(1)}>
            <p className='rating-btn-text'>1</p>
          </button>
          <button className={userSelection === 2 ? "rating-btn-selected" : "rating-btn"} onClick={() => updateUserSelection(2)}>
            <p className='rating-btn-text'>2</p>
          </button>
          <button className={userSelection === 3 ? "rating-btn-selected" : "rating-btn"} onClick={() => updateUserSelection(3)}>
            <p className='rating-btn-text'>3</p>
          </button>
          <button className={userSelection === 4 ? "rating-btn-selected" : "rating-btn"} onClick={() => updateUserSelection(4)}>
            <p className='rating-btn-text'>4</p>
          </button>
          <button className={userSelection === 5 ? "rating-btn-selected" : "rating-btn"} onClick={() => updateUserSelection(5)}>
            <p className='rating-btn-text'>5</p>
          </button>
        </div>
        <div className='submit-btn-container' onClick={surveyCompleted}>
          <button className='submit-btn'>
            <p className='submit-btn-text'>S U B M I T</p>
          </button>
        </div>
      </div>
    );
  };

  const ThankYouDisplay = () => {
    return (
      <div className='thank-you-container'>
        <div className='splash-art'>
          <img src='../images/illustration-thank-you.svg' />
        </div>
        <div className='user-survey-selection-container'>
          <div className='survey-selection-text'>You selected {userSelection} out of 5</div>
        </div>
        <div className='thank-you-heading'>
          <h1>Thank you!</h1>
        </div>
        <div className='thank-you-description'>
          <p> We appreciate you taking the time to give a rating. If you ever need more support, don&apos;t hesitate to get in touch!</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <Head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' type='image/png' sizes='32x32' href='../public/images/favicon-32x32.png' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link href='https://fonts.googleapis.com/css2?family=Overpass:wght@100;400&display=swap' rel='stylesheet' />
        <title>Frontend Mentor | Interactive rating component</title>
      </Head>
      <main>
        <div className='survey-container'>{!surveyCompletedState ? <SurveyDisplay /> : <ThankYouDisplay />}</div>
      </main>
    </>
  );
}
