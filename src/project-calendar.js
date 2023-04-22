import { LitElement, html, css } from 'lit';
import "./project-3.js";

export class ProjectCalendar extends LitElement {
    static get tag() {
        return 'project-calendar';
    }
    static get properties() {
        return {
            weeks: { type: Array }
            // school: { type: String }
        }
    }

    constructor() {
        super();
        this.weeks = [];
        // this.school = 'Penn State';
        this.updateCalendar();
    }

    updateCalendar() {
        const address = '../api/calendar';
        fetch(address).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            this.weeks = data;
        });
    }

    static get styles() {
        return css`
        .wrapper {
            border: 2px solid overscroll-behavior-block;
            /* display: flex; */
        }
    `;
    }

    render() {
        return html`
        <!-- <h2>${this.school}</h2> -->
        <div class="wrapper">
            ${this.weeks.map(week => html`
            <div class="item">
                <project-3 weekNum="${week.weekNum}" timeToComplete="${week.timeToComplete}" cardTitle="${week.cardTitle}" desc="${week.desc}" courses="${week.courses}"></project-3>
            </div>
            `)}
        </div>
        `;
    }
}
customElements.define(ProjectCalendar.tag, ProjectCalendar);