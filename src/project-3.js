import { LitElement, html, css } from 'lit';

class Project3 extends LitElement {
  static properties = {
    header: { type: String },
    weekNum: { type: String },
    timeToComplete: { type: String },
    cardTitle: { type: String },
    desc: { type: String },
    courses: { type: String },
  }

  static styles = css` 
      .wrapper {
        display: flex;
        flex-direction: row;
        gap: 10rem;
        padding: 20px;
      }

      .week {
        text-align: center;
        font-family: Latinaires Pro SC Regular;
        line-height: -8.5rem;
        text-transform: uppercase!important;
        line-height: 1.5rem;
        letter-spacing: 5px; 
      }

      .weekNumber {
        font-size: 2.25rem;
        line-height: 3rem;
        font-family: Electrica Medium;
      }

      .time {
        font-family: Fuse Book;
        letter-spacing: 0;
        font-size: 1rem;
        line-height: -8.5rem;
        color: #1f1f1f;
      }
      
      .title {
        font-family: Open Sans Soft Light;
        font-size: 20px;
        line-height: 24px;
      }

      .desc {
        font-family: Neue Helvetica Pro 55 Roman;
        font-size: 14px;
        line-height: 21px;
        color: #1f1f1f;
      }

      .courses {
        font-family: Open Sans Soft Regular;
        font-size: 0.875rem;
        line-height: 1.5rem;
        font-weight: normal;
        color: #373a3c;
      }      

      .bruh {
        display: flex !important;
        flex-direction: row !important;
        gap: 1rem !important;
        padding: 0px !important;
      }

      .seeAll {
        box-sizing: border-box;
        cursor: pointer;
        color: #0056d2;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-family: "Source Sans Pro",Arial,sans-serif;
        font-weight: 700;
        letter-spacing: -0.1px;
        padding: 10px;
        position:relative; top:-8px;
        position:relative; left:-10px;
      }

      .seeAll:hover {
        padding: 10px;
        background-color: #b3ccf2;
        border-radius: 5px;
        text-decoration: underline;
      }

      @media only screen and (max-width: 400px) {
        .wrapper {
          text-transform: var;
          width: var;
          font-size: 4vw;
        }
      }

      @media only screen and (min-width: 401px) and (max-width: 800px) {
        /* CSS styles here */
      }

      @media only screen and (min-width: 801px) {
        /* CSS styles here */
      }
  `;

  constructor() {
    super();
    this.weekNum = '1';
    this.timeToComplete = '2';
    this.cardTitle = 'Misconceptions about happiness';
    this.desc = 'In this module, you will learn what it means to be happy and why pursuing happiness is not a pointless endeavor. Dr. Santos addresses how our minds lie to us and how the science shows that our misconceptions about money, grades, and social media are holding us back from implementing the techniques studied in positive psychology.';
    this.courses = '9 videos (Total 55 min), 3 readings, 1 quiz';
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="week"> 
          <p>WEEK</p> 
          <p class="weekNumber">${this.weekNum}</p>
        </div>
        <div class="Description">
          <p class="time">${this.timeToComplete} hours to complete</p>
          <p class="title">${this.cardTitle}</p>
          <p class="desc">${this.desc}</p>
          <div class="bruh">
            <p class="courses">${this.courses}</p>
            <p class="seeAll">See All</p>
          </div>
          <hr>
        </div>
      </div>
      
    `;
  }
}

customElements.define('project-3', Project3);