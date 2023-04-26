export default async function handler(request, res) {

    const calendar = [
        {
            "weekNum": "1",
            "timeToComplete": "2 hours to complete",
            "cardTitle": "Introduction",
            "desc": "Why take this course?",
            "courses": "4 videos (Total 13 min), 11 readings",
            "expanded": false
        },
        {
            "weekNum": "2",
            "timeToComplete": "2 hours to complete",
            "cardTitle": "Misconceptions about happiness",
            "desc": "What do we think will make us happy?",
            "courses": "7 videos (Total 63 min), 3 readings, 1 quiz",
            "expanded": false
        },
        {
            "weekNum": "3",
            "timeToComplete": "2 hours to complete",
            "cardTitle": "Why Our Expectations are so bad",
            "desc": "Why do we mispredict what makes us happy?",
            "courses": "8 videos (Total 64 min), 3 readings, 1 quiz",
            "expanded": false
        }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(calendar);
  }