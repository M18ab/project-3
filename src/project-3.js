import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class Project3 extends LitElement {
  static properties = {
    header: { type: String },
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
        width: 100%;
        box-sizing: border-box;
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        cursor: pointer;
      }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="week"> 
          <p>WEEK</p> 
          <p class="weekNumber">1</p>
        </div>
        <div class="Description">
          <p class="time">2 hours to complete</p>
          <p class="title">Misconceptions about happiness</p>
          <p class="desc">In this module, you will learn what it means to be happy and why pursuing happiness is not a pointless endeavor. Dr. Santos addresses how our minds lie to us and how the science shows that our misconceptions about money, grades, and social media are holding us back from implementing the techniques studied in positive psychology.</p>
          <div class="bruh">
            <p class="courses">9 videos (Total 55 min), 3 readings, 1 quiz</p>
            <p class="seeAll">See All</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('project-3', Project3);