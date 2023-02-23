import Head from "next/head";

export default function Home() {
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
          <div className='rating-btn'>
            <p className='btn-text'>1</p>
          </div>
          <div className='rating-btn'>
            <p className='btn-text'>2</p>
          </div>
          <div className='rating-btn'>
            <p className='btn-text'>3</p>
          </div>
          <div className='rating-btn'>
            <p className='btn-text'>4</p>
          </div>
          <div className='rating-btn'>
            <p className='btn-text'>5</p>
          </div>
        </div>
        <div className='submit-btn-container'>
          <button className='submit-btn'>S U B M I T</button>
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
          <div className='survey-selection-text'>You selected 4 out of 5</div>
        </div>
        <div className='thank-you-heading'>
          <h1>Thank you!</h1>
        </div>
        <div className='thank-you-description'>
          <p> We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
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
        <div className='survey-container'>
          <ThankYouDisplay />
        </div>
      </main>
    </>
  );
}
