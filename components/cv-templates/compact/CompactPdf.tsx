import {
  EducationStateType,
  ExperienceStateType,
  LinksStateType,
  PersonalizedStateType,
  PreviewCvPropType,
  ProjectsStateType,
  VolunteeringStateType,
} from "@/types/globalTypes";

const CompactPdf = ({ inputData }: PreviewCvPropType) => {
  // Destructuring data
  const { generalInfo, contact, education, experience, competences, projects, volunteering, links, hobbies, personalized } = inputData;

  // FORMATTING FUNCTIONS
  const formatDynamicLinksData = (data: LinksStateType[]) => {
    if (data.length > 0) {
      const formattedDataPdf: any[] = [];
      let formattedDataRow: any[] = [];
      const formattedData: any[] = [];

      // format data for pdf display
      for (const item of data) {
        formattedDataPdf.push({
          table: {
            body: [
              [
                {
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="15" height="15"><path d="M7.896,16.104c-.586-.585-.586-1.536,0-2.121,.586-.586,1.535-.586,2.121,0,1.326,1.326,3.64,1.327,4.966,0l4.989-4.989c1.369-1.369,1.369-3.597,0-4.966s-3.597-1.369-4.966,0c-.586,.586-1.535,.586-2.121,0-.586-.585-.586-1.536,0-2.121,2.538-2.539,6.67-2.539,9.208,0,2.539,2.539,2.539,6.669,0,9.208l-4.989,4.989c-1.27,1.27-2.937,1.904-4.604,1.904s-3.335-.635-4.604-1.904Zm-1.384,7.893c1.667,0,3.334-.635,4.604-1.904,.586-.585,.586-1.536,0-2.121-.586-.586-1.535-.586-2.121,0-1.37,1.37-3.598,1.369-4.966,0-1.369-1.369-1.369-3.597,0-4.966l4.961-4.961c1.37-1.37,3.598-1.37,4.966,0,.586,.586,1.535,.586,2.121,0,.586-.585,.586-1.536,0-2.121-2.539-2.539-6.669-2.539-9.208,0L1.907,12.885c-2.539,2.539-2.539,6.669,0,9.208,1.27,1.27,2.937,1.904,4.604,1.904Z"/></svg>',
                  fit: [15, 15],
                },
                {
                  text: `${item.title.length > 0 ? item.title : ""}`,
                  link: `${item.link.length > 0 ? item.link : ""}`,
                  decoration: "underline",
                  bold: true,
                  color: "#4D4DFD",
                },
              ],
            ],
          },
          layout: "noBorders",
        });
      }

      // create rows of 3 elements
      for (const [idx, item] of formattedDataPdf.entries()) {
        // add items to row if there are less than 3 elements
        if (formattedDataRow.length < 3) {
          formattedDataRow.push(item);
        }

        // if there are 3 elements in a row, push to the main formattedData and clear the next row
        if (formattedDataRow.length === 3) {
          formattedData.push(formattedDataRow);
          formattedDataRow = [];
        } else if (idx + 1 === formattedDataPdf.length) {
          // if there are 1 or 2 elements in the row, but formattedDataPdf is at the end

          // add dummy elements to fill the 3 elements row (to avoid pdf crash)
          if (formattedDataRow.length === 1) {
            formattedDataRow.push({});
            formattedDataRow.push({});
          }
          if (formattedDataRow.length === 2) {
            formattedDataRow.push({});
          }

          formattedData.push(formattedDataRow);
        }
      }

      return formattedData;
    }
    return [];
  };

  const formatDynamicExperienceData = (data: ExperienceStateType[]) => {
    if (data.length > 0) {
      const formattedData: any[] = [];

      for (const item of data) {
        // create description subcategory
        const descFormattedData: any = [];

        if (item.description.length > 0) {
          for (const descItem of item.description) {
            descFormattedData.push({ text: descItem });
          }
        }
        // end

        formattedData.push({
          columns: [
            {
              text: `${item.start.replace("-", ".")} - ${item.untilNow ? "Prezent" : item.end.replace("-", ".")}`,
              width: 80,
              alignment: "center",
              margin: [0, 5, 5, 0],
              fontSize: 11,
            },
            {
              stack: [{ text: item.position, bold: true, fontSize: 14 }, , { text: item.company, bold: true }, { ul: [...descFormattedData] }],
              width: "*",
            },
          ],
          margin: [0, 5, 0, 0],
        });
      }
      return formattedData;
    }
    return [];
  };

  const formatDynamicEducationData = (data: EducationStateType[]) => {
    if (data.length > 0) {
      const formattedData: any[] = [];

      for (const item of data) {
        formattedData.push({
          columns: [
            {
              text: `${item.start.replace("-", ".")} - ${item.untilNow ? "Prezent" : item.end.replace("-", ".")}`,
              width: 80,
              alignment: "center",
              margin: [0, 5, 5, 0],
              fontSize: 11,
            },
            { stack: [{ text: item.specialization, bold: true, fontSize: 14 }, { text: item.school }], width: "*" },
          ],
          margin: [0, 5, 0, 0],
        });
      }
      return formattedData;
    }
    return [];
  };

  const formatDynamicStringsData = (data: string[]) => {
    if (data.length > 0) {
      const formattedData: any[] = [];

      for (const item of data) {
        formattedData.push({ text: `${item}, `, bold: true });
      }
      return { text: [...formattedData] };
    }
    return [];
  };

  const formatDynamicProjectsData = (data: ProjectsStateType[]) => {
    if (data.length > 0) {
      const formattedData: any[] = [];

      for (const item of data) {
        formattedData.push({ text: `${item.title}`, link: item.link, decoration: "underline", bold: true, color: "#4D4DFD" }, ",  ");
      }
      return { text: [...formattedData] };
    }
    return [];
  };

  const formatDynamicVolunteeringData = (data: VolunteeringStateType[]) => {
    if (data.length > 0) {
      const formattedData: any[] = [];

      for (const item of data) {
        formattedData.push({
          columns: [
            {
              text: `${item.start.replace("-", ".")} - ${item.untilNow ? "Prezent" : item.end.replace("-", ".")}`,
              width: 80,
              alignment: "center",
              margin: [0, 5, 5, 0],
              fontSize: 11,
            },
            { stack: [{ text: item.role, bold: true, fontSize: 14 }, { text: item.organisation }], width: "*" },
          ],
          margin: [0, 5, 0, 0],
        });
      }
      return formattedData;
    }
    return [];
  };

  const formatDynamicPersonalizedData = (data: PersonalizedStateType[]) => {
    if (data.length > 0) {
      const formattedData: any[] = [];

      for (const pItem of data) {
        // SECTION TITLE
        const subheader = {
          table: {
            widths: ["100%"],
            body: [[{ text: pItem.sectionTitle, style: "secondHeader" }]],
          },
          style: "secondTableHeader",
          layout: {
            hLineWidth: function (i: any, node: any) {
              return i === 1 ? 2 : 0;
            },
            vLineWidth: function () {
              return 0;
            },
            hLineColor: function () {
              return "#969799";
            },
          },
        };

        // SECTION CONTENT
        const content = [];
        for (const pContentItem of pItem.content) {
          // create description subcategory
          const descFormattedData: any = [];

          if (pContentItem.description.length > 0) {
            for (const descItem of pContentItem.description) {
              descFormattedData.push({ text: descItem });
            }
          }
          // end

          content.push({
            columns: [
              {
                text: `${pContentItem.start && pContentItem.start.replace("-", ".")} ${pContentItem.start && " - "} ${
                  pContentItem.untilNow && pContentItem.untilNow ? "Prezent" : pContentItem.end && pContentItem.end.replace("-", ".")
                }`,
                width: 80,
                alignment: "center",
                margin: [0, 5, 5, 0],
                fontSize: 11,
              },
              {
                stack: [
                  { text: pContentItem.title, bold: true, fontSize: 14, link: pContentItem.link ? pContentItem.link : "" },
                  ,
                  ,
                  { ul: [...descFormattedData] },
                ],
                width: "*",
              },
            ],
            margin: [0, 5, 0, 0],
          });
        }
        formattedData.push(subheader, content);
      }

      return formattedData;
    }

    return [];
  };

  // CREATE VARIABLES TO DISPLAY

  const linksDisplay = formatDynamicLinksData(links);

  let experienceDisplay: any[];
  if (experience.length > 0) {
    const expDisplay = formatDynamicExperienceData(experience);

    experienceDisplay = [
      // TITLE
      {
        table: {
          widths: ["100%"],
          body: [
            [
              {
                table: {
                  body: [
                    [
                      {
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="15" height="15"><path d="M19,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H5A5.006,5.006,0,0,0,0,9v3H24V9A5.006,5.006,0,0,0,19,4ZM8.184,4A3,3,0,0,1,11,2h2a3,3,0,0,1,2.816,2Z"/><path d="M13,15a1,1,0,0,1-2,0V14H0v5a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V14H13Z"/></svg>',
                        fit: [15, 15],
                      },
                      { text: "Experiență", style: "secondHeader" },
                    ],
                  ],
                },
                layout: "noBorders",
              },
            ],
          ],
        },
        style: "secondTableHeader",
        layout: {
          hLineWidth: function (i: any, node: any) {
            return i === 1 ? 2 : 0;
          },
          vLineWidth: function () {
            return 0;
          },
          hLineColor: function () {
            return "#969799";
          },
        },
      },
      // CONTENT
      ...expDisplay,
    ];
  } else {
    experienceDisplay = [];
  }

  let educationDisplay: any[];
  if (education.length > 0) {
    const edcDisplay = formatDynamicEducationData(education);

    educationDisplay = [
      // TITLE
      {
        table: {
          widths: ["100%"],
          body: [
            [
              {
                table: {
                  body: [
                    [
                      {
                        svg: '<svg id="Layer_1" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m12 13.04-8-2.286v-7.754a3 3 0 0 1 3.824-2.884l.925.184a3.032 3.032 0 0 1 2.251 2.9v7.47l1 .286 1-.286v-7.47a3.015 3.015 0 0 1 2.176-2.881l1.075-.219a2.933 2.933 0 0 1 2.556.508 2.976 2.976 0 0 1 1.193 2.392v7.753zm12 6.96v-14a3 3 0 0 0 -2-2.816v9.079l-10 2.857-10-2.857v-9.079a3 3 0 0 0 -2 2.816v14h11v2h-4v2h10v-2h-4v-2z"/></svg>',
                        fit: [15, 15],
                      },
                      { text: "Educație", style: "secondHeader" },
                    ],
                  ],
                },
                layout: "noBorders",
              },
            ],
          ],
        },
        style: "secondTableHeader",
        layout: {
          hLineWidth: function (i: any, node: any) {
            return i === 1 ? 2 : 0;
          },
          vLineWidth: function () {
            return 0;
          },
          hLineColor: function () {
            return "#969799";
          },
        },
      },
      // CONTENT
      ...edcDisplay,
    ];
  } else {
    educationDisplay = [];
  }

  let competencesDisplay: any[];
  if (competences.length > 0) {
    const compDisplay = formatDynamicStringsData(competences);

    competencesDisplay = [
      // TITLE
      {
        table: {
          widths: ["100%"],
          body: [
            [
              {
                table: {
                  body: [
                    [
                      {
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="m24,2.449v2.551c0,1.105-.895,2-2,2h-3c-1.105,0-2-.895-2-2v-3c0-1.105.895-2,2-2h3c.455,0,.869.158,1.205.414l-2.647,2.714-1.11-1.195-1.387,1.441,1.651,1.766c.455.478,1.216.481,1.674.007l2.613-2.698Zm-4.287,11.191l-1.651-1.766,1.387-1.441,1.11,1.195,2.647-2.714c-.336-.256-.751-.414-1.205-.414h-3c-1.105,0-2,.895-2,2v3c0,1.105.895,2,2,2h3c1.105,0,2-.895,2-2v-2.551l-2.613,2.698c-.459.474-1.22.471-1.674-.007Zm0,8.5l-1.651-1.766,1.387-1.441,1.11,1.195,2.647-2.714c-.336-.256-.751-.414-1.205-.414h-3c-1.105,0-2,.895-2,2v3c0,1.105.895,2,2,2h3c1.105,0,2-.895,2-2v-2.551l-2.613,2.698c-.459.474-1.22.471-1.674-.007ZM4.5,5c1.381,0,2.5-1.119,2.5-2.5S5.881,0,4.5,0s-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5Zm4.5,4v8h-2v7h-2v-7h-1v7h-2v-7H0v-8c0-1.654,1.346-3,3-3h3c1.654,0,3,1.346,3,3Zm2-4.5v15c0,1.379,1.122,2.5,2.5,2.5h1.5v-2h-1.5c-.276,0-.5-.225-.5-.5v-6.5h2v-2h-2v-6.5c0-.275.224-.5.5-.5h1.5v-2h-1.5c-1.378,0-2.5,1.121-2.5,2.5Z"/></svg>',
                        fit: [15, 15],
                      },
                      { text: "Competențe", style: "secondHeader" },
                    ],
                  ],
                },
                layout: "noBorders",
              },
            ],
          ],
        },
        style: "secondTableHeader",
        layout: {
          hLineWidth: function (i: any, node: any) {
            return i === 1 ? 2 : 0;
          },
          vLineWidth: function () {
            return 0;
          },
          hLineColor: function () {
            return "#969799";
          },
        },
      },
      // CONTENT
      {
        columns: [
          {
            text: " ",
            width: 80,
          },
          compDisplay,
        ],
        margin: [0, 5, 0, 0],
      },
    ];
  } else {
    competencesDisplay = [];
  }

  let hobbiesDisplay: any[];
  if (hobbies.length > 0) {
    const hobDisplay = formatDynamicStringsData(hobbies);

    hobbiesDisplay = [
      // TITLE
      {
        table: {
          widths: ["100%"],
          body: [
            [
              {
                table: {
                  body: [
                    [
                      {
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Filled" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512"><g><path d="M304.661,287.061L499.605,92.117c16.2-16.175,18.966-47.974-9.067-65.344c-23.989-11.806-42.541-1.743-51.179,8.341   L252.309,242.283C274.227,251.016,292.636,266.762,304.661,287.061z"/><path d="M106.667,405.333h106.667c35.346,0,64-28.654,64-64s-28.654-64-64-64C128,277.333,106.667,405.333,106.667,405.333z"/><path d="M341.333,405.333c0-35.346,28.654-64,64-64H512v-201.28L319.147,332.907c0.235,2.837,0.853,5.547,0.853,8.427   C319.929,400.214,272.214,447.93,213.333,448H106.667c-23.564,0.003-42.669-19.097-42.672-42.661c0-2.353,0.194-4.703,0.581-7.024   c9.685-58.069,49.237-154.325,136.384-162.816L407.573,6.677c2.03-2.045,4.166-3.982,6.4-5.803C411.072,0.64,408.299,0,405.333,0   H106.667C47.786,0.071,0.071,47.786,0,106.667v298.667C0.071,464.214,47.786,511.93,106.667,512h234.667V405.333z"/><path d="M405.333,384C393.551,384,384,393.551,384,405.333V505.6c15.051-5.162,28.744-13.65,40.064-24.832l56.704-56.704   c11.182-11.32,19.67-25.013,24.832-40.064H405.333z"/></g></svg>',
                        fit: [15, 15],
                      },
                      { text: "Hobbi-uri", style: "secondHeader" },
                    ],
                  ],
                },
                layout: "noBorders",
              },
            ],
          ],
        },
        style: "secondTableHeader",
        layout: {
          hLineWidth: function (i: any, node: any) {
            return i === 1 ? 2 : 0;
          },
          vLineWidth: function () {
            return 0;
          },
          hLineColor: function () {
            return "#969799";
          },
        },
      },
      // CONTENT
      {
        columns: [
          {
            text: " ",
            width: 80,
          },
          hobDisplay,
        ],
        margin: [0, 5, 0, 0],
      },
    ];
  } else {
    hobbiesDisplay = [];
  }

  let projectsDisplay: any[];
  if (projects.length > 0) {
    const projDisplay = formatDynamicProjectsData(projects);

    projectsDisplay = [
      // TITLE
      {
        table: {
          widths: ["100%"],
          body: [
            [
              {
                table: {
                  body: [
                    [
                      {
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M13,0h6a5,5,0,0,1,5,5v6H13ZM11,0h-.959L0,10.041V11H3.172L11,3.172Zm2,18,5-5H13Zm11-5H20.828L13,20.828V24h.959L24,13.959ZM11,13H0v6a5,5,0,0,0,5,5h6Zm0-7L6,11h5Zm5.787,18H19a5,5,0,0,0,5-5V16.787ZM7.213,0H5A5,5,0,0,0,0,5V7.213Z"/></svg>',
                        fit: [15, 15],
                      },
                      { text: "Proiecte", style: "secondHeader" },
                    ],
                  ],
                },
                layout: "noBorders",
              },
            ],
          ],
        },
        style: "secondTableHeader",
        layout: {
          hLineWidth: function (i: any, node: any) {
            return i === 1 ? 2 : 0;
          },
          vLineWidth: function () {
            return 0;
          },
          hLineColor: function () {
            return "#969799";
          },
        },
      },
      // CONTENT
      {
        columns: [
          {
            text: " ",
            width: 80,
          },
          projDisplay,
        ],
        margin: [0, 5, 0, 0],
      },
    ];
  } else {
    projectsDisplay = [];
  }

  let volunteeringDisplay: any[];
  if (volunteering.length > 0) {
    const volDisplay = formatDynamicVolunteeringData(volunteering);

    volunteeringDisplay = [
      // TITLE
      {
        table: {
          widths: ["100%"],
          body: [
            [
              {
                table: {
                  body: [
                    [
                      {
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="m15.5,23c0,.552-.448,1-1,1h-5c-.552,0-1-.448-1-1,0-1.5,1.737-3,3.5-3s3.5,1.5,3.5,3Zm-12.269-4c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5Zm8.769,0c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5ZM19,0H5C2.239,0,0,2.239,0,5v8.381c.819-.848,1.962-1.381,3.231-1.381,2.143,0,3.934,1.508,4.385,3.517.451-2.009,2.242-3.517,4.385-3.517s3.934,1.508,4.385,3.517c.451-2.009,2.242-3.517,4.385-3.517,1.269,0,2.412.533,3.231,1.381V5c0-2.761-2.239-5-5-5Zm1.769,19c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5Zm-.019,1c-1.667,0-3.183,1.539-3.25,3,0,.552.448,1,1,1h4.5c.552,0,1-.448,1-1-.079-1.458-1.585-3-3.25-3Zm-17.5,0c-1.667,0-3.183,1.539-3.25,3,0,.552.448,1,1,1h4.5c.552,0,1-.448,1-1-.079-1.458-1.585-3-3.25-3Z"/></svg>',
                        fit: [15, 15],
                      },
                      { text: "Voluntariat", style: "secondHeader" },
                    ],
                  ],
                },
                layout: "noBorders",
              },
            ],
          ],
        },
        style: "secondTableHeader",
        layout: {
          hLineWidth: function (i: any, node: any) {
            return i === 1 ? 2 : 0;
          },
          vLineWidth: function () {
            return 0;
          },
          hLineColor: function () {
            return "#969799";
          },
        },
      },
      // CONTENT
      ...volDisplay,
    ];
  } else {
    volunteeringDisplay = [];
  }

  let personalizedDisplay: any[];
  if (personalized.length > 0) {
    const persDisplay = formatDynamicPersonalizedData(personalized);

    personalizedDisplay = [...persDisplay];
  } else {
    personalizedDisplay = [];
  }

  // END display variables

  const docDefinition: any = {
    content: [
      // SECTION 1 - HEADER - NAME
      { text: generalInfo.name, style: "mainHeader" },

      // SECTION 2 - CONTACT
      {
        table: {
          widths: ["*", "*", "*"],
          body: [
            [
              {
                table: {
                  body: [
                    [
                      {
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="m19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-.053,13.905c0,.605-.49,1.095-1.095,1.095l-1.56-.205c-.605,0-1.095-.49-1.095-1.095l-.148-1.578c-1.939-.868-3.968-.91-6.099,0l-.148,1.578c0,.605-.49,1.095-1.095,1.095l-1.56.205c-.605,0-1.095-.49-1.095-1.095l-.053-1.038c0-.747.314-1.416.804-1.906,2.711-2.711,9.874-2.517,12.391,0,.49.49.805,1.159.804,1.906l-.053,1.038Z"/></svg>',
                        fit: [15, 15],
                      },
                      { text: `${contact.phone.length > 0 ? contact.phone : ""}` },
                    ],
                  ],
                },
                layout: "noBorders",
              },

              {
                table: {
                  body: [
                    [
                      {
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="512" height="512"><path d="M23.954,5.542,15.536,13.96a5.007,5.007,0,0,1-7.072,0L.046,5.542C.032,5.7,0,5.843,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6C24,5.843,23.968,5.7,23.954,5.542Z"/><path d="M14.122,12.546l9.134-9.135A4.986,4.986,0,0,0,19,1H5A4.986,4.986,0,0,0,.744,3.411l9.134,9.135A3.007,3.007,0,0,0,14.122,12.546Z"/></svg>',
                        fit: [15, 15],
                      },
                      {
                        text: `${contact.email.length > 0 ? contact.email : ""}`,
                        link: `${contact.email.length > 0 ? `mailto:${contact.email}` : ""}`,
                        decoration: "underline",
                        bold: true,
                        color: "#4D4DFD",
                      },
                    ],
                  ],
                },
                layout: "noBorders",
              },

              {
                table: {
                  body: [
                    [
                      {
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="m1.183,9.74c.343-1.25,1.186-2.315,2.355-2.925l1.019-.435c.195,1.672.94,3.223,2.163,4.445l1.833,1.793c.922.901,2.146,1.398,3.447,1.398s2.526-.497,3.448-1.398l1.855-1.815c1.212-1.211,1.954-2.766,2.145-4.445,0,0,.979.408.999.417,1.426.711,2.387,2.078,2.573,3.658l.242,2.053-12.617,5.844L1.183,9.74Zm22.323,4.838l-11.255,5.213,4.634,4.209h2.446c1.34,0,2.62-.574,3.51-1.576.891-1.001,1.312-2.339,1.156-3.671l-.491-4.175ZM.842,12.131L.063,18.753c-.157,1.331.264,2.67,1.155,3.671.891,1.002,2.17,1.576,3.51,1.576h9.184L.842,12.131Zm16.658-6.631c0,1.47-.572,2.851-1.611,3.889l-1.84,1.801c-.565.553-1.307.828-2.049.828s-1.483-.275-2.048-.828l-1.833-1.793c-1.047-1.046-1.619-2.428-1.619-3.896s.572-2.851,1.611-3.889c1.039-1.039,2.42-1.611,3.889-1.611s2.85.572,3.889,1.611h0c1.039,1.039,1.611,2.42,1.611,3.889Zm-4-.006c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5.672,1.5,1.5,1.5,1.5-.672,1.5-1.5Z"/></svg>',
                        fit: [15, 15],
                      },
                      { text: `${contact.address.length > 0 ? contact.address : ""}` },
                    ],
                  ],
                },
                layout: "noBorders",
              },
            ],
            ...linksDisplay,
          ],
        },
        layout: "noBorders",
      },

      // SECTION 3 - ABOUT
      { text: `${generalInfo.description.length > 0 ? generalInfo.description : ""}`, margin: [0, 10, 0, 0] },

      // SECTION 4 - SUBHEADER - EXPERIENCE
      ...experienceDisplay,

      // SECTION 5 - SUBHEADER - EDUCATION
      ...educationDisplay,

      // SECTION 6 - SUBHEADER - COMPETENTCES
      ...competencesDisplay,

      // SECTION 7 - SUBHEADER - PROJECTS
      ...projectsDisplay,

      // SECTION 8 - SUBHEADER - VOLUNTEERING
      ...volunteeringDisplay,

      // SECTION 9 - SUBHEADER - HOBBIES
      ...hobbiesDisplay,

      // SECTION 10 - SUBHEADER - PERSONALIZED
      ...personalizedDisplay,
    ],

    // STYLING
    styles: {
      mainHeader: { fontSize: 26, bold: true, margin: [0, 0, 0, 15] },
      secondHeader: { fontSize: 16, bold: true },
      secondTableHeader: { margin: [0, 10, 0, 0] },
      thirdHeader: { fontSize: 15, bold: true },
    },
  };
  return docDefinition;
};

export default CompactPdf;
