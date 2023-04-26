import { LitElement, html, css } from 'lit';
import "./project-3.js";
import { IntersectionObserverMixin } from "@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js";

export class ProjectCalendar extends IntersectionObserverMixin(LitElement) {
    static get properties() {
        let props = {};
        if (super.properties) {
            props = super.properties;
        }
        return {
            ...props,
            weeks: { type: Array },
            // school: { type: String }
        }
    }
    
    static get tag() {
        return 'project-calendar';
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
        ${this.elementVisible ? html`
        <!-- <h2>${this.school}</h2> -->
        <div class="wrapper">
            ${this.weeks.map(week => html`
            <div class="item">
                <project-3 weekNum="${week.weekNum}" timeToComplete="${week.timeToComplete}" cardTitle="${week.cardTitle}" desc="${week.desc}" courses="${week.courses}" expanded="${week.expanded}"></project-3>
            </div>
            `)}
        </div>
        `:``}
        `
    }
}
customElements.define(ProjectCalendar.tag, ProjectCalendar);