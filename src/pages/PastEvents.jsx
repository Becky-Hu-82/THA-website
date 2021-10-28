import './PastEvents.css';
import img1 from './Img/Img1.jpg';
import img2 from './Img/Img2.jpg';
import img3 from './Img/Img3.jpg';
import img4 from './Img/Img4.jpg';
import img5 from './Img/Img5.jpg';
import img6 from './Img/Img6.jpg';
const PastEvents = () => {
  return (
    <div id='pastevents'>
      <div class='vline'>
        <ul>
          <li></li>
        </ul>
      </div>
      <div class='timeline' id='part1'>
        <div id='years'>
          <h1 id='2018'>2018</h1>
        </div>

        <ul id='p'>
          <li>
            <div id='block1'>
              <h1 id='word1'>THA Founded</h1>
              <img src={img1} id='image' />
            </div>
          </li>

          <li>
            <div id='text'>
              <h1 id='word3'>
                Davis, California <br />
                July, 2018
              </h1>
              <p id='word5'></p>
            </div>
          </li>

          <li>
            <div id='block2'>
              <h1 id='word2'>1st Fundrasier</h1>
              <img src={img2} id='image' />
            </div>
          </li>

          <li>
            <div id='text'>
              <h1 id='word4'>August 26th, 2018</h1>
              <p id='word5'>
                This was the first fundrasier for THA, and it took place at the
                Conference Room of Crowne Plaza in{' '}
                <mark>Union City, California</mark>. We had a crowd over 100,
                and successfully built the brand of THA. good start
              </p>
            </div>
          </li>
          <li>
            <div id='block3'>
              <h1 id='word1'>2nd Fundrasier</h1>
              <img src={img3} id='image' />
            </div>
          </li>

          <li>
            <div id='text'>
              <h1 id='word3'>November 10th, 2018</h1>
              <p id='word5'>
                The second major fundrasing event for THA, but a first done in
                collaboration with the city government. <br />
                <br />
                We had reached out to the{' '}
                <mark>Pleasanton City Counsil in Bay Area</mark>, California for
                a collabortive fundraising event, and we were lucky enough to
                invite a member of the City Council as well as another
                student-ran NGO to be present during this fundraiser.
                <br />
                <br />
                The THA was award with a Club Recognition Award from the
                California State Legislature.
              </p>
            </div>
          </li>
          <li>
            <div id='block4'>
              <h1 id='word2'>3rd Fundrasier</h1>
              <img src={img4} id='image' />
            </div>
          </li>

          <li>
            <div id='text'>
              <h1 id='word4'>November 18th, 2018</h1>
              <p id='word5'>
                One week after the fundraiser with Pleasanton City Council, the
                THA hosted another charity event in <mark>Fremont, CA</mark> in
                collaboration with the Fremont City Council and the IvyMax
                Foundation, a well-known local charity foundation supporting
                youth education around Bay Area, CA. The city mayor at that
                time, Lily May, was kind enough to accept the THA's invitation
                speech for the youth of next generation. THA also decided to
                support the next mayor's election process for the several months
                to come, and we did our best to rally support for Shaoyang, the
                mayor candidate.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class='vline2'>
        <ul>
          <li></li>
        </ul>
      </div>
      <div class='timeline' id='part2'>
        <div id='years'>
          <h1 id='2019'>2019</h1>
        </div>
        <ul id='p'>
          <li>
            <div id='block1'>
              <h1 id='word1'>Donation Trip</h1>
              <img src={img5} id='image' />
            </div>
          </li>

          <li>
            <div id='text'>
              <h1 id='word3'>
                December 29th, 2018 <br />
                to <br />
                January 9th, 2019
              </h1>
              <p id='word5'>
                THA finally were able to donate to the kids at Escuela Uvita de
                Osa with a trip to <mark>Costa Rica</mark>!
              </p>
            </div>
          </li>

          <li>
            <div id='block2'>
              <h1 id='word2'>4th Fundrasier</h1>
              <img src={img6} id='image' />
            </div>
          </li>

          <li>
            <div id='text'>
              <h1 id='word4'>April 9th, 2019</h1>
              <p id='word5'>
                THA's first major fundraisier after the donation trip to Costa
                Rica. This is also the first fundraisier THA hosted alongside
                the IvyMax foundation, who is now our primary business partner.
                The location of this 150+ participant fundraising event was at
                <mark>Pleasanton Marriott Hotel</mark>. The THA was interviewed
                by WorldNews, a Bay Area Chinese media company, and our
                contribution alongwith the THA club itself was included in the
                WorldNews newspaper.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class='vline2'>
        <ul>
          <li></li>
        </ul>
      </div>
      <div class='vline'>
        <ul>
          <li></li>
        </ul>
      </div>
      <div class='vline'>
        <ul>
          <li></li>
        </ul>
      </div>
      <div class='vline'>
        <ul>
          <li></li>
        </ul>
      </div>
      <div class='vline'>
        <ul>
          <li></li>
        </ul>
      </div>
      <div class='vline'>
        <ul>
          <li></li>
        </ul>
      </div>
      <div class='vline'>
        <ul>
          <li></li>
        </ul>
      </div>
      <div id='bottomline'>
        <h1>and many more to come...</h1>
      </div>
    </div>
  );
};

export default PastEvents;
