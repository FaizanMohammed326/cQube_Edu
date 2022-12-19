const dataSourceInfo = {
    programStatus: {
        map: {
            pathToFile: 'diksha_nishtha_program-started.json',
            locations: [
                {
                    name: "Location",
                    property: "State",
                    level: "state",
                    isState: true,
                    tooltip: {
                        name: "State/UT name"
                    }
                }
            ],
            dimensions: [
                {
                    name: "Program",
                    property: "Program",
                    tooltip: {
                        valueAsName: true,
                        property: "Started"
                    }
                },
                {
                    name: "indicator",
                    property: "Started"
                },
                {
                    name: "state_code",
                    property: "State Code"
                }
            ],
            filters: [
                {
                    name: 'Program',
                    column: 'Program',
                    defaultValue: true
                }
            ],
            options: {
                legend: {
                    title: 'NISHTHA started'
                }
            }
        }
    },
    stateOrDistrictWiseEnrollments: {
        multiBarChart: {
            pathToFile: 'diksha_nishtha_consumption-by-district.json',
            defaultLevel: "State",
            columns: [
                {
                    name: "Location",
                    property: "State Name",
                    isLocationName: true
                },
                {
                    name: "Total Enrollments",
                    property: "Total Enrollments",
                    aggegration: {
                        type: "SUM"
                    }
                },
                {
                    name: "Total Certifications",
                    property: "Total Certifications",
                    aggegration: {
                        type: "SUM"
                    }
                }
            ],
            filters: [
                {
                    name: 'Program',
                    column: 'Program',
                    includeAll: true
                },
                {
                    name: 'State/UT',
                    column: 'State',
                    optionValueColumn: "State Code",
                    level: {
                        value: "district",
                        property: "User District_Correct"
                    },
                    includeAll: true
                }
            ]
        }
    },
    stateOrCourseWiseEnrollments: {
        multiBarChart: {
            pathToFile: 'diksha_nishtha_consumption-by-course.json',
            defaultLevel: "Course Name",
            sortByProperty: 'Enrollments',
            sortDirection: 'desc',
            columns: [
                {
                    name: "Course Name",
                    property: "Course Name"
                },
                {
                    name: "Enrollments",
                    property: "Enrollments",
                    aggegration: {
                        type: "SUM"
                    }
                },
                {
                    name: "Certifications",
                    property: "Certification",
                    aggegration: {
                        type: "SUM"
                    }
                }
            ],
            filters: [
                {
                    name: 'Program',
                    column: 'Program',
                    defaultValue: true
                },
                {   
                    name: 'State/UT',
                    column: 'State Name',
                    optionValueColumn: "State Code"
                }
            ]
        }
    },
    enrollmentAgainstTargets: {
        stackedBarChart: {
            pathToFile: 'diksha_nishtha_percentage-enrollment-certification.json',
            defaultLevel: "State",
            columns: [
                {
                    name: "Location",
                    property: "State"
                },
                {
                    name: "% Target Achieved- Enrolment",
                    property: "% Target Achieved- Enrolment",
                    tooltip: {
                        name: "Target Achieved",
                        valueSuffix: '%'
                    }
                },
                {
                    name: "Total Enrolments",
                    property: "Total Enrolments",
                    tooltip: {
                        name: "Actual Enrolment",
                        localeString: 'en-IN'
                    }
                },
                {
                    name: "Total Expected Enrolment",
                    property: "Total Expected Enrolment",
                    tooltip: {
                        name: "Total Expected Enrolment",
                        localeString: 'en-IN'
                    }
                }
            ],
            filters: [
                {
                    name: 'Program',
                    column: 'Program',
                    defaultValue: true
                }
            ]
        }
    },
    certificationAgainstTargets: {
        stackedBarChart: {
            pathToFile: 'diksha_nishtha_percentage-enrollment-certification.json',
            defaultLevel: "State",
            columns: [
                {
                    name: "Location",
                    property: "State"
                },
                {
                    name: "% Target Achieved- Certificates",
                    property: "% Target Achieved- Certificates",
                    tooltip: {
                        name: "Target Achieved",
                        valueSuffix: '%'
                    }
                },
                {
                    name: "Actual Certification",
                    property: "Total Certificates Issued",
                    tooltip: {
                        name: "Actual Certification",
                        localeString: 'en-IN'
                    }
                },
                {
                    name: "Total Expected Enrolment",
                    property: "Total Expected Enrolment",
                    tooltip: {
                        name: "Total Expected Enrolment",
                        localeString: 'en-IN'
                    }
                }
            ],
            filters: [
                {
                    name: 'Program',
                    column: 'Program',
                    defaultValue: true
                }
            ]
        }
    },
    totalCoursesAndMedium:{
        loTable: {
            pathToFile: 'diksha_nishtha_tot-courses-medium.json',
            defaultLevel: 'State Name',
            sortByProperty: 'Total Courses',
            sortDirection: 'desc',
            columns: [
                {
                    name: "State/UT Name",
                    property: "State Name",
                    class: "text-center"
                    
                },
                {
                    name: "Total Courses Launched",
                    property: "Total Courses",
                    class: "text-center",
                    aggegration: {
                        type: "SUM"
                    }
                },
                {
                    name: "Total Mediums",
                    property: "Total Medium",
                    class: "text-center",
                    aggegration: {
                        type: "SUM"
                    }
                }
            ],
            filters: [
                {
                    name: "Program",
                    column: "Program Name",
                    defaultValue: true
                }
            ]
        }
    }
}

module.exports = dataSourceInfo;
