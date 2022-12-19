const dataSourceInfo = {
    udise_performance: {
        map: {
            pathToFile: 'udise-all-dashboard.json',
            mainFilter: 'State Code',
            overallMetricsOption: false,
            locations: [
                {
                    name: "Location",
                    property: "District Name",
                    level: "district",
                    tooltip: {
                        name: "District Name"
                    }
                }
            ],
            dimensions: [
                {
                    name: "PTR",
                    property: "PTR",
                    tooltip: {
                        name: "PTR"
                    },
                    includeAsMetricFilter: true
                },
                {
                    name: "% schools having toilet",
                    property: "% schools having toilet",
                    tooltip: {
                        name: "% schools having toilet"
                    },
                    includeAsMetricFilter: true
                },
                {
                    name: "% schools having drinking water",
                    property: "% schools having drinking water",
                    tooltip: {
                        name: "% schools having drinking water"
                    },
                    includeAsMetricFilter: true
                },
                {
                    name: "% schools having electricity",
                    property: "% schools having electricity",
                    tooltip: {
                        name: "% schools having electricity"
                    },
                    includeAsMetricFilter: true
                },
                // {
                //     name: "% schools having library",
                //     property: "% schools having library",
                //     tooltip: {
                //         name: "% schools having library"
                //     },
                //     includeAsMetricFilter: true
                // },
                // {
                //     name: "% govt aided schools received textbook",
                //     property: "% govt aided schools received textbook",
                //     tooltip: {
                //         name: "% govt aided schools received textbook"
                //     }
                // },
                // {
                //     name: "% schools with Ramp",
                //     property: "% schools with Ramp",
                //     tooltip: {
                //         name: "% schools with Ramp"
                //     }
                // },
                {
                    name: "state_code",
                    property: "State Code"
                },
                {
                    name: "district_code",
                    property: "District Code"
                }
            ],
            filters: [],
            levels: [
                {
                    name: "District",
                    value: "district",
                    property: "District Name"
                }
            ],
            options: {
                legend: {
                    title: 'UDISE+ Performance'
                }
            }
        },
        scatterPlot: {
            pathToFile: 'udise-all-dashboard.json',
            mainFilter: 'State Code',
            series: {
                x: {
                    name: "X-Axis",
                    property: ["% schools having toilet", "% schools having drinking water", "% schools having electricity", "% govt aided schools received textbook", "% schools with Ramp"],
                    aggegration: {
                        type: "AVG"
                    },
                    valueSuffix: '%'
                },
                y: {
                    name: "Y-Axis",
                    property: ["% schools having toilet", "% schools having drinking water", "% schools having electricity", "% govt aided schools received textbook", "% schools with Ramp"],
                    aggegration: {
                        type: "AVG"
                    },
                    valueSuffix: '%'
                }
            },
            propertyAsOption: true,
            levels: [
                {
                    name: "District",
                    value: "district",
                    property: "District Name",
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
            pathToFile: "udise_program-started.json",
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
                        name: "Implemented UDISE+",
                    },
                }
            ],
            filters: [],
            options: {
                legend: {
                    title: "Implemented UDISE+",
                },
            },
        },
    }
}

module.exports = dataSourceInfo;