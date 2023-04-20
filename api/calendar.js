export default async function handler(request, res) {

    const calendar = [
        {
            "weekNum": "1",
            "timeToComplete": "2 hours to complete",
            "cardTitle": "Misconceptions about happiness",
            "desc": "In this module, you will learn what it means to be happy and why pursuing happiness is not a pointless endeavor. Dr. Santos addresses how our minds lie to us and how the science shows that our misconceptions about money, grades, and social media are holding us back from implementing the techniques studied in positive psychology.",
            "courses": "9 videos (Total 55 min), 3 readings, 1 quiz"
        },
        {
            "weekNum": "1",
            "timeToComplete": "2 hours to complete",
            "cardTitle": "Misconceptions about happiness",
            "desc": "In this module, you will learn what it means to be happy and why pursuing happiness is not a pointless endeavor. Dr. Santos addresses how our minds lie to us and how the science shows that our misconceptions about money, grades, and social media are holding us back from implementing the techniques studied in positive psychology.",
            "courses": "9 videos (Total 55 min), 3 readings, 1 quiz"
        },
        {
            "weekNum": "1",
            "timeToComplete": "2 hours to complete",
            "cardTitle": "Misconceptions about happiness",
            "desc": "In this module, you will learn what it means to be happy and why pursuing happiness is not a pointless endeavor. Dr. Santos addresses how our minds lie to us and how the science shows that our misconceptions about money, grades, and social media are holding us back from implementing the techniques studied in positive psychology.",
            "courses": "9 videos (Total 55 min), 3 readings, 1 quiz"
        },
        {
            "weekNum": "1",
            "timeToComplete": "2 hours to complete",
            "cardTitle": "Misconceptions about happiness",
            "desc": "In this module, you will learn what it means to be happy and why pursuing happiness is not a pointless endeavor. Dr. Santos addresses how our minds lie to us and how the science shows that our misconceptions about money, grades, and social media are holding us back from implementing the techniques studied in positive psychology.",
            "courses": "9 videos (Total 55 min), 3 readings, 1 quiz"
        },
        {
            "weekNum": "1",
            "timeToComplete": "2 hours to complete",
            "cardTitle": "Misconceptions about happiness",
            "desc": "In this module, you will learn what it means to be happy and why pursuing happiness is not a pointless endeavor. Dr. Santos addresses how our minds lie to us and how the science shows that our misconceptions about money, grades, and social media are holding us back from implementing the techniques studied in positive psychology.",
            "courses": "9 videos (Total 55 min), 3 readings, 1 quiz"
        }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(calendar);
  }