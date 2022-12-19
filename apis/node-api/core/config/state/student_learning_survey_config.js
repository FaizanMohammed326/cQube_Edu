const dataSourceInfo = {
    studentPerformance: {
        map: {
            pathToFile: 'nas_all-dashboard.json',
            dependentFilters: true,
            mainFilter: 'State Code',
            locations: [
                {
                    name: "Location",
                    property: "District",
                    level: "district",
                    tooltip: {
                        name: "District Name"
                    }
                }
            ],
            dimensions: [
                {
                    name: "Learning Outcome",
                    property: "Learning Outcome",
                    tooltip: {
                        name: "Learning Outcome",
                        property: "Learning Outcome"
                    }
                },
                {
                    name: "indicator",
                    property: "Performance",
                    weightedAverage: {
                        property: "Performance",
                        against: "Students Surveyed"
                    },
                    tooltip: {
                        name: "Performance",
                        property: "Performance",
                        valueSuffix: '%'
                    }
                },
                {
                    name: "state_code",
                    property: "State Code"
                },
                {
                    name: "district_code",
                    property: "District Code"
                }
            ],
            filters: [
                {
                    name: 'Grade',
                    column: 'Grade',
                    defaultValue: true
                },
                {
                    name: 'Subject',
                    column: 'Subject',
                    defaultValue: true
                },
                {
                    name: 'Learning Outcome Code',
                    column: 'Learning Outcome Code',
                    defaultValue: true
                }
            ],
            levels: [
                {
                    name: "District",
                    value: "district",
                    property: "District"
                }
            ],
            options: {
                legend: {
                    title: 'NAS Performance'
                },
                tooltip: {
                    reportTypeIndicator: 'percent'
                }
            }
        },
        loTable: {
            pathToFile: 'nas_all-dashboard.json',
            dependentFilters: true,
            mainFilter: 'State Code',
            columns: [
                {
                    name: "Learning Outcome Code",
                    property: "Learning Outcome Code",
                    tooltip: {
                        property: "Learning Outcome"
                    },
                    sticky: true
                },
                {
                    name: "Grade",
                    property: "Grade",
                    sticky: true
                },
                {
                    name: "Subject",
                    property: "Subject",
                    sticky: true
                },
                {
                    name: "District",
                    property: "District",
                    transposeColumn: true,
                    isHeatMapRequired: true,
				    color: '#002966',
                    weightedAverage: {
                        property: "Performance",
                        against: "Students Surveyed"
                    },
                    level: "district"
                }
            ],
            filters: [
                {
                    name: 'Grade',
                    column: 'Grade',
                    defaultValue: true
                },
                {
                    name: 'Subject',
                    column: 'Subject',
                    defaultValue: true
                }
            ]
        },
        scatterPlot: {
            pathToFile: 'nas_all-dashboard.json',
            mainFilter: 'State Code',
            series: {
                x: {
                    name: "X-Axis",
                    property: ["Grade", "Subject"],
                    weightedAverage: {
                        property: "Performance",
                        against: "Students Surveyed"
                    }
                },
                y: {
                    name: "Y-Axis",
                    property: ["Grade", "Subject"],
                    weightedAverage: {
                        property: "Performance",
                        against: "Students Surveyed"
                    }
                }
            },
            levels: [
                {
                    name: "District",
                    value: "district",
                    property: "District",
                    tooltip: {
                        name: "District Name"
                    }
                }
            ],
            filters: []
        }
    },
    implementationStatus: {
        map: {
            pathToFile: "nas_program-started.json",
            mainFilter: 'State Code',
            locations: [
                {
                    name: "Location",
                    property: "State",
                    level: "district",
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
                        name: "Implemented NAS",
                    },
                }
            ],
            filters: [],
            options: {
                legend: {
                    title: "Implemented NAS",
                },
            },
        },
    }
}

module.exports = dataSourceInfo;
