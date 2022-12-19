const dataSourceInfo = {
    quizzesStarted: {
        map: {
            pathToFile: 'diksha_quiz_state-participation.json',
            groupByDefault: "State",
            locations: [
                {
                    name: "Location",
                    property: "State",
                    level: "state",
                    isState: true,
                    tooltip: {
                        name: "State/UT Name"
                    }
                }
            ],
            dimensions: [
                {
                    name: 'Quiz Name',
                    property: 'Quiz Name',
                    tooltip: {
                        name: "Quiz Name"
                    }
                },
                {
                    name: "indicator",
                    property: "Total Enrollments",
                    aggegration: {
                        type: "SUM"
                    },
                    tooltip: {
                        name: "Enrollments"
                    }
                },
                {
                    name: "state_code",
                    property: "State Code"
                }
            ],
            filters: [
                {
                    name: 'Quiz Name',
                    column: 'Quiz Name',
                    defaultValue: true
                }
            ],
            options: {
                legend: {
                    title: 'State Participation in Quiz'
                }
            }
        },
        // loTable: {
        //     pathToFile: 'quizzes/quizzesStarted.json',
        //     defaultLevel: 'State',
        //     columns: [
        //         {
        //             name: "State",
        //             property: "State"
        //         },
        //         {
        //             name: "Total Enrollments",
        //             property: "Total Enrollments",
        //             class: "text-center",
        //             aggegration: {
        //                 type: "SUM"
        //             }
        //         }
        //     ],
        //     filters: [
        //         {
        //             name: "Quiz Name",
        //             column: "Quiz Name"
        //         }
        //     ]
        // }
        loTable: {
            pathToFile: 'diksha_quiz-started-plan.json',
            defaultLevel: 'Collection Name',
            columns: [
                {
                    name: "Quiz Name",
                    property: "Collection Name",
                    class: "text-center"
                },
                {
                    name: "Total Enrolments",
                    property: "Total Enrolments",
                    class: "text-center"
                },
                {
                    name: "Certificate Issued (100% completion)",
                    property: "Certificate Issued (100% completion)",
                    class: "text-center"
                },
                {
                    name: "Completion %",
                    property: "Completion %",
                    class: "text-center",
                    isHeatMapRequired: true,
				    color: '#002966'
                },
                {
                    name: "Medium",
                    property: "Medium",
                    class: "text-center"
                }
            ],
            filters: []
        }
    },
    implementationStatus: {
        map: {
            pathToFile: "diksha_quiz_program-started.json",
            locations: [
                {
                    name: "Location",
                    property: "State",
                    level: "state",
                    isState: true,
                    tooltip: {
                        name: "State/UT name",
                    },
                },
            ],
            dimensions: [
                {
                    name: "indicator",
                    property: "Started",
                    tooltip: {
                        name: "NCERT Quizzes Started",
                    },
                },
                {
                    name: "state_code",
                    property: "State Code",
                },
            ],
            filters: [],
            options: {
                legend: {
                    title: "Started NCERT Quizzes",
                },
            },
        },
    }
}

module.exports = dataSourceInfo;
