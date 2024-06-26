import {
  EducationStateType,
  ExperienceStateType,
  LinksStateType,
  PersonalizedStateType,
  PreviewCvPropType,
  ProjectsStateType,
  VolunteeringStateType,
} from "@/types/globalTypes";

const SimplePdf = ({ inputData }: PreviewCvPropType) => {
  // Destructuring data
  const { generalInfo, contact, education, experience, competences, projects, volunteering, links, hobbies, personalized } = inputData;

  // FORMATTING FUNCTIONS
  const formatDynamicLinksData = (data: LinksStateType[] | ProjectsStateType[]) => {
    if (data.length > 0) {
      const formattedData: any[] = [];

      for (const item of data) {
        formattedData.push({ text: item.title, link: item.link, bold: true, color: "#4D4DFD" }, { text: " | ", style: "separator" });
      }
      return formattedData;
    }
    return [];
  };

  const formatDynamicStringsData = (data: string[]) => {
    if (data.length > 0) {
      const formattedData: any[] = [];

      for (const item of data) {
        formattedData.push({ text: item, bold: true }, { text: " | ", style: "separator" });
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
          text: [
            { text: item.specialization, bold: true },
            {
              text: ` - ${item.school}, `,
            },
            { text: `${item.start.replace("-", ".")} - ` },
            { text: `${item.untilNow ? "Prezent" : item.end.replace("-", ".")}` },
          ],
          margin: [0, 5, 0, 0],
        });
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
            descFormattedData.push({ text: `- ${descItem}` });
          }
        }
        // end

        formattedData.push({
          stack: [
            {
              text: [
                { text: item.position, bold: true },
                {
                  text: ` - ${item.company}, `,
                },
                { text: `${item.start.replace("-", ".")} - ` },
                { text: `${item.untilNow ? "Prezent" : item.end.replace("-", ".")}`, margin: [5, 0, 0, 0], fontSize: 13 },
              ],
              margin: [0, 5, 0, 0],
            },
            { stack: [...descFormattedData], margin: [20, 0, 0, 0] },
          ],
        });
      }
      return formattedData;
    }
    return [];
  };

  const formatDynamicVolunteeringData = (data: VolunteeringStateType[]) => {
    if (data.length > 0) {
      const formattedData: any[] = [];

      for (const item of data) {
        formattedData.push({
          text: [
            { text: item.role, bold: true },
            {
              text: ` - ${item.organisation}, `,
            },
            { text: `${item.start.replace("-", ".")} - ` },
            { text: `${item.untilNow ? "Prezent" : item.end.replace("-", ".")}` },
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
        const content = [];
        const subheader = {
          table: {
            widths: ["100%"],
            body: [[{ text: pItem.sectionTitle, style: "secondHeader" }]],
          },
          layout: "noBorders",
        };

        for (const [idx, pContentItem] of pItem.content.entries()) {
          // create description subcategory
          const descFormattedData: any = [];

          if (pContentItem.description.length > 0) {
            for (const descItem of pContentItem.description) {
              descFormattedData.push({ text: `- ${descItem}` });
            }
          }
          // end

          content.push({
            stack: [
              {
                text: [
                  { text: `${pContentItem.title}, `, bold: true },

                  { text: `${pContentItem.start.replace("-", ".")} ${pContentItem.start || pContentItem.end ? " - " : ""} ` },
                  { text: `${pContentItem.untilNow ? "Prezent" : pContentItem.end.replace("-", ".")}` },
                ],
                margin: [0, 5, 0, 0],
              },
              { stack: [...descFormattedData], margin: [20, 0, 0, 0] },
            ],
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
  const competencesDisplay = formatDynamicStringsData(competences);
  const projectsDisplay = formatDynamicLinksData(projects);
  const educationDisplay = formatDynamicEducationData(education);
  const experienceDisplay = formatDynamicExperienceData(experience);
  const volunteeringDisplay = formatDynamicVolunteeringData(volunteering);
  const hobbiesDisplay = formatDynamicStringsData(hobbies);
  const personalizedDisplay = formatDynamicPersonalizedData(personalized);

  const docDefinition: any = {
    content: [
      // SECTION 1 - HEADER
      { text: generalInfo.name, style: "mainHeader" },

      // SECTION 2 - SUBHEADER - CONTACT
      {
        // used table to be able to fill fullWidth of background color
        table: {
          widths: [`${contact.email || contact.phone || contact.address ? "100%" : ""}`],
          body: [
            [
              {
                text: `${contact.email || contact.phone || contact.address ? "Contact" : ""}`,
                style: `${contact.email || contact.phone || contact.address ? "secondHeader" : ""}`,
              },
            ],
          ],
        },
        layout: "noBorders",
      },
      {
        text: [
          { text: `${contact.email.length > 0 ? "Email: " : ""}`, bold: true },
          {
            text: `${contact.email.length > 0 ? contact.email : ""}`,
            link: `${contact.email.length > 0 ? `mailto:${contact.email}` : ""}`,
            bold: true,
            color: "#4D4DFD",
          },
          { text: `${contact.email.length > 0 ? " | " : ""}`, style: "separator" },

          { text: `${contact.phone.length > 0 ? "Telefon: " : ""}`, bold: true },
          { text: `${contact.phone.length > 0 ? contact.phone : ""}` },
          { text: `${contact.phone.length > 0 ? " | " : ""}`, style: "separator" },

          { text: `${contact.address.length > 0 ? "Adresa: " : ""}`, bold: true },
          { text: `${contact.address.length > 0 ? contact.address : ""}` },
          { text: `${contact.address.length > 0 ? " | " : ""}`, style: "separator" },

          ...linksDisplay,
        ],
        style: "textArray",
      },

      // SECTION 3 - SUBHEADER - ABOUT
      {
        table: {
          widths: [`${generalInfo.description.length > 0 ? "100%" : ""}`],
          body: [
            [{ text: `${generalInfo.description.length > 0 ? "Despre" : ""}`, style: `${generalInfo.description.length > 0 ? "secondHeader" : ""}` }],
          ],
        },
        layout: "noBorders",
      },
      {
        text: `${generalInfo.description.length > 0 ? generalInfo.description : ""}`,
        style: `${generalInfo.description.length > 0 ? "textArray" : ""}`,
      },

      // SECTION 4 - SUBHEADER - COMPETENCES
      {
        table: {
          widths: [`${competencesDisplay.length > 0 ? "100%" : ""}`],
          body: [[{ text: `${competencesDisplay.length > 0 ? "Competențe" : ""}`, style: `${competencesDisplay.length > 0 ? "secondHeader" : ""}` }]],
        },
        layout: "noBorders",
      },
      { text: [...competencesDisplay], style: `${competencesDisplay.length > 0 ? "textArray" : ""}` },

      // SECTION 5 - SUBHEADER - PROJECTS
      {
        table: {
          widths: [`${projectsDisplay.length > 0 ? "100%" : ""}`],
          body: [
            [{ text: `${projectsDisplay.length > 0 ? "Proiecte personale" : ""}`, style: `${projectsDisplay.length > 0 ? "secondHeader" : ""}` }],
          ],
        },
        layout: "noBorders",
      },
      { text: [...projectsDisplay], style: `${projectsDisplay.length > 0 ? "textArray" : ""}` },

      // SECTION 6 - SUBHEADER - EDUCATION
      {
        table: {
          widths: [`${educationDisplay.length > 0 ? "100%" : ""}`],
          body: [[{ text: `${educationDisplay.length > 0 ? "Educație" : ""}`, style: `${educationDisplay.length > 0 ? "secondHeader" : ""}` }]],
        },
        layout: "noBorders",
      },
      { stack: [...educationDisplay], style: `${educationDisplay.length > 0 ? "textStack" : ""}` },

      // SECTION 7 - SUBHEADER - EXPERIENCE
      {
        table: {
          widths: [`${experienceDisplay.length > 0 ? "100%" : ""}`],
          body: [[{ text: `${experienceDisplay.length > 0 ? "Experiență" : ""}`, style: `${experienceDisplay.length > 0 ? "secondHeader" : ""}` }]],
        },
        layout: "noBorders",
      },
      { stack: [...experienceDisplay], style: `${experienceDisplay.length > 0 ? "textStack" : ""}` },

      // SECTION 6 - SUBHEADER - VOLUNTEERING
      {
        table: {
          widths: [`${volunteeringDisplay.length > 0 ? "100%" : ""}`],
          body: [
            [{ text: `${volunteeringDisplay.length > 0 ? "Voluntariat" : ""}`, style: `${volunteeringDisplay.length > 0 ? "secondHeader" : ""}` }],
          ],
        },
        layout: "noBorders",
      },
      { stack: [...volunteeringDisplay], style: `${volunteeringDisplay.length > 0 ? "textStack" : ""}` },

      // SECTION 7 - SUBHEADER - Hobbies
      {
        table: {
          widths: [`${hobbiesDisplay.length > 0 ? "100%" : ""}`],
          body: [[{ text: `${hobbiesDisplay.length > 0 ? "Hobbi-uri" : ""}`, style: `${hobbiesDisplay.length > 0 ? "secondHeader" : ""}` }]],
        },
        layout: "noBorders",
      },
      { text: [...hobbiesDisplay], style: `${hobbiesDisplay.length > 0 ? "textArray" : ""}` },

      // SECTION 8 - SUBHEADER - PERSONALIZED
      ...personalizedDisplay,
    ],

    // STYLING
    styles: {
      mainHeader: { fontSize: 26, bold: true, margin: [0, 0, 0, 15] },
      secondHeader: { fontSize: 14, bold: true, alignment: "center", fillColor: "#D9D9D9" },
      textArray: { alignment: "center", margin: [0, 8, 0, 15] },
      textStack: { margin: [0, 8, 0, 15] },
      separator: { fontSize: 16, bold: true, color: "#969799" },
    },
  };

  return docDefinition;
};

export default SimplePdf;
