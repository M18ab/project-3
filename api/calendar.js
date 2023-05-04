export default async function handler(request, res) {

    const calendar = [
        {
            "weekNum": "1",
            "timeToComplete": "1 hour to complete",
            "cardTitle": "Introduction",
            "desc": "Why take this course?",
            "videoCount": "4",
            "videoTime":"13",
            "readingCount":"3",
            "quizCount":"1",
            "videos" : [
                {
                    "text" : 'Video 1',
                },
                {
                    "text" : 'Video 2',
                },
                {
                    "text" : 'Video 3',
                },
                {
                    "text" : 'Video 4',
                }
            ],
            "readings" : [
                {
                    "text" : 'Reading 1',
                },
                {
                    "text" : 'Reading 2',
                },
                {
                    "text" : 'Reading 3',
                }
            ],
            "quizzes" : [
                {
                    "text" : 'Quiz 1',
                },
            ],
        },
        {
            "weekNum": "2",
            "timeToComplete": "3 hours to complete",
            "cardTitle": "Misconceptions about happiness",
            "desc": "What do we think will make us happy?",
            "videoCount": "7",
            "videoTime":"63",
            "readingCount":"2",
            "quizCount":"1",
            "videos" : [
                {
                    "text" : 'Video 1',
                },
                {
                    "text" : 'Video 2',
                },
                {
                    "text" : 'Video 3',
                },
                {
                    "text" : 'Video 4',
                },
                {
                    "text" : 'Video 5',
                },
                {
                    "text" : 'Video 6',
                },
                {
                    "text" : 'Video 7',
                }
            ],
            "readings" : [
                {
                    "text" : 'Reading 1',
                },
                {
                    "text" : 'Reading 2',
                }
            ],
            "quizzes" : [
                {
                    "text" : 'Quiz 1',
                },
            ],
        },
        {
            "weekNum": "3",
            "timeToComplete": "4 hours to complete",
            "cardTitle": "Why Our Expectations are so bad",
            "desc": "Why do we mispredict what makes us happy?",
            "courses": "8 videos (Total 64 min), 3 readings, 1 quiz",
            "videoCount": "8",
            "videoTime":"64",
            "readingCount":"2",
            "quizCount":"2",
            "videos" : [
                {
                    "text" : 'Video 1',
                },
                {
                    "text" : 'Video 2',
                },
                {
                    "text" : 'Video 3',
                },
                {
                    "text" : 'Video 4',
                },
                {
                    "text" : 'Video 5',
                },
                {
                    "text" : 'Video 6',
                },
                {
                    "text" : 'Video 7',
                },
                {
                    "text" : 'Video 8',
                }
            ],
            "readings" : [
                {
                    "text" : 'Reading 1',
                },
                {
                    "text" : 'Reading 2',
                }
            ],
            "quizzes" : [
                {
                    "text" : 'Quiz 1',
                },
                {
                    "text" : 'Quiz 2',
                }
            ],

        }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(calendar);
  }