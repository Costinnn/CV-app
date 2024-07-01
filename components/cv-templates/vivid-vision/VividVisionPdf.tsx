import {
  EducationStateType,
  ExperienceStateType,
  LinksStateType,
  PersonalizedStateType,
  PreviewCvPropType,
  ProjectsStateType,
  VolunteeringStateType,
} from "@/types/globalTypes";

const colors = ["#ffc914", "#17bebb", "#76b041", "#f26419 ", "#bbcde5", "#b47aea", "#53a548", "#b1b6a6", "#e4572e", "#4a1942"];

const VividVisionPdf = ({ inputData }: PreviewCvPropType) => {
  // Destructuring data
  const { generalInfo, contact, education, experience, competences, projects, volunteering, links, hobbies, personalized } = inputData;

  // FORMATTING FUNCTIONS

  const formatDynamicLinksData = (data: LinksStateType[]) => {
    if (data.length > 0) {
      const svgSize = 15;
      const formattedData: any[] = [];

      for (const item of data) {
        // check if link is part of a known platform to give it a custom SVG
        if (item.link.includes("www.facebook.com")) {
          formattedData.push({
            stack: [
              {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve" width="512" height="512"><g><path d="M24,12.073c0,5.989-4.394,10.954-10.13,11.855v-8.363h2.789l0.531-3.46H13.87V9.86c0-0.947,0.464-1.869,1.95-1.869h1.509   V5.045c0,0-1.37-0.234-2.679-0.234c-2.734,0-4.52,1.657-4.52,4.656v2.637H7.091v3.46h3.039v8.363C4.395,23.025,0,18.061,0,12.073   c0-6.627,5.373-12,12-12S24,5.445,24,12.073z"/></g></svg>',
                fit: [svgSize, svgSize],
                alignment: "center",
              },
              {
                columns: [{ text: "X", link: item.link, fontSize: 12, alignment: "center", opacity: 0 }],
                relativePosition: { y: -13 },
              },
            ],
            width: "auto",
            margin: [5, 0, 0, 0],
          });
        } else if (item.link.includes("www.instagram.com")) {
          formattedData.push({
            stack: [
              {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve" width="512" height="512"><g><path d="M12,2.162c3.204,0,3.584,0.012,4.849,0.07c1.308,0.06,2.655,0.358,3.608,1.311c0.962,0.962,1.251,2.296,1.311,3.608   c0.058,1.265,0.07,1.645,0.07,4.849c0,3.204-0.012,3.584-0.07,4.849c-0.059,1.301-0.364,2.661-1.311,3.608   c-0.962,0.962-2.295,1.251-3.608,1.311c-1.265,0.058-1.645,0.07-4.849,0.07s-3.584-0.012-4.849-0.07   c-1.291-0.059-2.669-0.371-3.608-1.311c-0.957-0.957-1.251-2.304-1.311-3.608c-0.058-1.265-0.07-1.645-0.07-4.849   c0-3.204,0.012-3.584,0.07-4.849c0.059-1.296,0.367-2.664,1.311-3.608c0.96-0.96,2.299-1.251,3.608-1.311   C8.416,2.174,8.796,2.162,12,2.162 M12,0C8.741,0,8.332,0.014,7.052,0.072C5.197,0.157,3.355,0.673,2.014,2.014   C0.668,3.36,0.157,5.198,0.072,7.052C0.014,8.332,0,8.741,0,12c0,3.259,0.014,3.668,0.072,4.948c0.085,1.853,0.603,3.7,1.942,5.038   c1.345,1.345,3.186,1.857,5.038,1.942C8.332,23.986,8.741,24,12,24c3.259,0,3.668-0.014,4.948-0.072   c1.854-0.085,3.698-0.602,5.038-1.942c1.347-1.347,1.857-3.184,1.942-5.038C23.986,15.668,24,15.259,24,12   c0-3.259-0.014-3.668-0.072-4.948c-0.085-1.855-0.602-3.698-1.942-5.038c-1.343-1.343-3.189-1.858-5.038-1.942   C15.668,0.014,15.259,0,12,0z"/><path d="M12,5.838c-3.403,0-6.162,2.759-6.162,6.162c0,3.403,2.759,6.162,6.162,6.162s6.162-2.759,6.162-6.162   C18.162,8.597,15.403,5.838,12,5.838z M12,16c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S14.209,16,12,16z"/><circle cx="18.406" cy="5.594" r="1.44"/></g></svg>',
                fit: [svgSize, svgSize],
                alignment: "center",
              },
              {
                columns: [{ text: "X", link: item.link, fontSize: 12, alignment: "center", opacity: 0 }],
                relativePosition: { y: -13 },
              },
            ],
            width: "auto",
            margin: [5, 0, 0, 0],
          });
        } else if (item.link.includes("www.linkedin.com")) {
          formattedData.push({
            stack: [
              {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve" width="512" height="512"><g><path id="Path_2525" d="M23.002,21.584h0.227l-0.435-0.658l0,0c0.266,0,0.407-0.169,0.409-0.376c0-0.008,0-0.017-0.001-0.025   c0-0.282-0.17-0.417-0.519-0.417h-0.564v1.476h0.212v-0.643h0.261L23.002,21.584z M22.577,20.774h-0.246v-0.499h0.312   c0.161,0,0.345,0.026,0.345,0.237c0,0.242-0.186,0.262-0.412,0.262"/><path id="Path_2520" d="M17.291,19.073h-3.007v-4.709c0-1.123-0.02-2.568-1.564-2.568c-1.566,0-1.806,1.223-1.806,2.487v4.79H7.908   V9.389h2.887v1.323h0.04c0.589-1.006,1.683-1.607,2.848-1.564c3.048,0,3.609,2.005,3.609,4.612L17.291,19.073z M4.515,8.065   c-0.964,0-1.745-0.781-1.745-1.745c0-0.964,0.781-1.745,1.745-1.745c0.964,0,1.745,0.781,1.745,1.745   C6.26,7.284,5.479,8.065,4.515,8.065L4.515,8.065 M6.018,19.073h-3.01V9.389h3.01V19.073z M18.79,1.783H1.497   C0.68,1.774,0.01,2.429,0,3.246V20.61c0.01,0.818,0.68,1.473,1.497,1.464H18.79c0.819,0.01,1.492-0.645,1.503-1.464V3.245   c-0.012-0.819-0.685-1.474-1.503-1.463"/><path id="Path_2526" d="M22.603,19.451c-0.764,0.007-1.378,0.633-1.37,1.397c0.007,0.764,0.633,1.378,1.397,1.37   c0.764-0.007,1.378-0.633,1.37-1.397c-0.007-0.754-0.617-1.363-1.37-1.37H22.603 M22.635,22.059   c-0.67,0.011-1.254-0.522-1.265-1.192c-0.011-0.67,0.523-1.222,1.193-1.233c0.67-0.011,1.222,0.523,1.233,1.193   c0,0.007,0,0.013,0,0.02C23.81,21.502,23.29,22.045,22.635,22.059h-0.031"/></g></svg>',
                fit: [svgSize, svgSize],
                alignment: "center",
              },
              {
                columns: [{ text: "X", link: item.link, fontSize: 12, alignment: "center", opacity: 0 }],
                relativePosition: { y: -13 },
              },
            ],
            width: "auto",
            margin: [5, 0, 0, 0],
          });
        } else if (item.link.includes("www.twitter.com")) {
          formattedData.push({
            stack: [
              {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-name="Capa 1" viewBox="0 0 24 24"><polygon points="6.861 6.159 15.737 17.764 17.097 17.764 8.322 6.159 6.861 6.159"/><path d="m12,0C5.373,0,0,5.373,0,12s5.373,12,12,12,12-5.373,12-12S18.627,0,12,0Zm3.063,19.232l-3.87-5.055-4.422,5.055h-2.458l5.733-6.554-6.046-7.91h5.062l3.494,4.621,4.043-4.621h2.455l-5.361,6.126,6.307,8.337h-4.937Z"/></svg>',
                fit: [svgSize, svgSize],
                alignment: "center",
              },
              {
                columns: [{ text: "X", link: item.link, fontSize: 12, alignment: "center", opacity: 0 }],
                relativePosition: { y: -13 },
              },
            ],
            width: "auto",
            margin: [5, 0, 0, 0],
          });
        } else if (item.link.includes("www.pinterest.com")) {
          formattedData.push({
            stack: [
              {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve" width="512" height="512"><g><path d="M12.01,0C5.388,0,0.02,5.368,0.02,11.99c0,5.082,3.158,9.424,7.618,11.171c-0.109-0.947-0.197-2.408,0.039-3.444   c0.217-0.938,1.401-5.961,1.401-5.961s-0.355-0.72-0.355-1.776c0-1.668,0.967-2.911,2.171-2.911c1.026,0,1.52,0.77,1.52,1.688   c0,1.026-0.651,2.566-0.997,3.997c-0.286,1.194,0.602,2.171,1.776,2.171c2.132,0,3.77-2.25,3.77-5.487   c0-2.872-2.062-4.875-5.013-4.875c-3.414,0-5.418,2.556-5.418,5.201c0,1.026,0.395,2.132,0.888,2.734   C7.52,14.615,7.53,14.724,7.5,14.842c-0.089,0.375-0.296,1.194-0.336,1.362c-0.049,0.217-0.178,0.266-0.405,0.158   c-1.5-0.701-2.438-2.882-2.438-4.648c0-3.78,2.743-7.253,7.924-7.253c4.155,0,7.391,2.961,7.391,6.928   c0,4.135-2.605,7.461-6.217,7.461c-1.214,0-2.359-0.632-2.743-1.382c0,0-0.602,2.289-0.75,2.852   c-0.266,1.046-0.997,2.349-1.49,3.148C9.562,23.812,10.747,24,11.99,24c6.622,0,11.99-5.368,11.99-11.99C24,5.368,18.632,0,12.01,0   z"/></g></svg>',
                fit: [svgSize, svgSize],
                alignment: "center",
              },
              {
                columns: [{ text: "X", link: item.link, fontSize: 12, alignment: "center", opacity: 0 }],
                relativePosition: { y: -13 },
              },
            ],
            width: "auto",
            margin: [5, 0, 0, 0],
          });
        } else if (item.link.includes("www.youtube.com")) {
          formattedData.push({
            stack: [
              {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve" width="512" height="512"><g id="XMLID_184_"><path d="M23.498,6.186c-0.276-1.039-1.089-1.858-2.122-2.136C19.505,3.546,12,3.546,12,3.546s-7.505,0-9.377,0.504   C1.591,4.328,0.778,5.146,0.502,6.186C0,8.07,0,12,0,12s0,3.93,0.502,5.814c0.276,1.039,1.089,1.858,2.122,2.136   C4.495,20.454,12,20.454,12,20.454s7.505,0,9.377-0.504c1.032-0.278,1.845-1.096,2.122-2.136C24,15.93,24,12,24,12   S24,8.07,23.498,6.186z M9.546,15.569V8.431L15.818,12L9.546,15.569z"/>/g></svg>',
                fit: [svgSize, svgSize],
                alignment: "center",
              },
              {
                columns: [{ text: "X", link: item.link, fontSize: 12, alignment: "center", opacity: 0 }],
                relativePosition: { y: -13 },
              },
            ],
            width: "auto",
            margin: [5, 0, 0, 0],
          });
        } else if (item.link.includes("www.behance.com")) {
          formattedData.push({
            stack: [
              {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve" width="512" height="512"><g><path d="M9.579,9.573C9.579,8.625,8.845,8.4,8.03,8.4H5.909v2.4h2.287C9.005,10.8,9.579,10.446,9.579,9.573z"/><path d="M16.666,10.816c-0.98,0-1.634,0.611-1.698,1.591H18.3C18.209,11.416,17.695,10.816,16.666,10.816z"/><path d="M8.368,12.509H5.904v2.834H8.32c0.922,0,1.672-0.327,1.672-1.361C9.991,12.927,9.364,12.514,8.368,12.509z"/><path d="M19.75,0.3H4.25C1.9,0.3,0,2.2,0,4.55V19.45C0,21.8,1.9,23.7,4.25,23.7h15.5c2.35,0,4.25-1.9,4.25-4.25V4.55   C24,2.2,22.1,0.3,19.75,0.3z M14.555,7.184h4.168v1.012h-4.168V7.184z M8.63,17.1H3.643V6.814h4.848   c1.763,0,3.289,0.498,3.289,2.544c0,1.034-0.482,1.543-1.404,1.982c1.264,0.359,1.875,1.474,1.875,2.765   C12.252,16.195,10.5,17.089,8.63,17.1z M20.341,13.698h-5.368c0,1.189,0.627,1.891,1.827,1.891c0.621,0,1.42-0.332,1.618-0.97   h1.805c-0.557,1.709-1.709,2.507-3.487,2.507c-2.346,0-3.809-1.591-3.809-3.911c0-2.239,1.538-3.942,3.809-3.942   c2.33,0,3.621,1.837,3.621,4.039C20.357,13.441,20.346,13.575,20.341,13.698z"/></g></svg>',
                fit: [svgSize, svgSize],
                alignment: "center",
              },
              {
                columns: [{ text: "X", link: item.link, fontSize: 12, alignment: "center", opacity: 0 }],
                relativePosition: { y: -13 },
              },
            ],
            width: "auto",
            margin: [5, 0, 0, 0],
          });
        } else if (item.link.includes("www.github.com")) {
          formattedData.push({
            stack: [
              {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve" width="512" height="512"><g><path style="fill-rule:evenodd;clip-rule:evenodd;" d="M12,0.296c-6.627,0-12,5.372-12,12c0,5.302,3.438,9.8,8.206,11.387   c0.6,0.111,0.82-0.26,0.82-0.577c0-0.286-0.011-1.231-0.016-2.234c-3.338,0.726-4.043-1.416-4.043-1.416   C4.421,18.069,3.635,17.7,3.635,17.7c-1.089-0.745,0.082-0.729,0.082-0.729c1.205,0.085,1.839,1.237,1.839,1.237   c1.07,1.834,2.807,1.304,3.492,0.997C9.156,18.429,9.467,17.9,9.81,17.6c-2.665-0.303-5.467-1.332-5.467-5.93   c0-1.31,0.469-2.381,1.237-3.221C5.455,8.146,5.044,6.926,5.696,5.273c0,0,1.008-0.322,3.301,1.23   C9.954,6.237,10.98,6.104,12,6.099c1.02,0.005,2.047,0.138,3.006,0.404c2.29-1.553,3.297-1.23,3.297-1.23   c0.653,1.653,0.242,2.873,0.118,3.176c0.769,0.84,1.235,1.911,1.235,3.221c0,4.609-2.807,5.624-5.479,5.921   c0.43,0.372,0.814,1.103,0.814,2.222c0,1.606-0.014,2.898-0.014,3.293c0,0.319,0.216,0.694,0.824,0.576   c4.766-1.589,8.2-6.085,8.2-11.385C24,5.669,18.627,0.296,12,0.296z"/><path d="M4.545,17.526c-0.026,0.06-0.12,0.078-0.206,0.037c-0.087-0.039-0.136-0.121-0.108-0.18   c0.026-0.061,0.12-0.078,0.207-0.037C4.525,17.384,4.575,17.466,4.545,17.526L4.545,17.526z"/><path d="M5.031,18.068c-0.057,0.053-0.169,0.028-0.245-0.055c-0.079-0.084-0.093-0.196-0.035-0.249   c0.059-0.053,0.167-0.028,0.246,0.056C5.076,17.903,5.091,18.014,5.031,18.068L5.031,18.068z"/><path d="M5.504,18.759c-0.074,0.051-0.194,0.003-0.268-0.103c-0.074-0.107-0.074-0.235,0.002-0.286   c0.074-0.051,0.193-0.005,0.268,0.101C5.579,18.579,5.579,18.707,5.504,18.759L5.504,18.759z"/><path d="M6.152,19.427c-0.066,0.073-0.206,0.053-0.308-0.046c-0.105-0.097-0.134-0.234-0.068-0.307   c0.067-0.073,0.208-0.052,0.311,0.046C6.191,19.217,6.222,19.355,6.152,19.427L6.152,19.427z"/><path d="M7.047,19.814c-0.029,0.094-0.164,0.137-0.3,0.097C6.611,19.87,6.522,19.76,6.55,19.665   c0.028-0.095,0.164-0.139,0.301-0.096C6.986,19.609,7.075,19.719,7.047,19.814L7.047,19.814z"/><path d="M8.029,19.886c0.003,0.099-0.112,0.181-0.255,0.183c-0.143,0.003-0.26-0.077-0.261-0.174c0-0.1,0.113-0.181,0.256-0.184   C7.912,19.708,8.029,19.788,8.029,19.886L8.029,19.886z"/><path d="M8.943,19.731c0.017,0.096-0.082,0.196-0.224,0.222c-0.139,0.026-0.268-0.034-0.286-0.13   c-0.017-0.099,0.084-0.198,0.223-0.224C8.797,19.574,8.925,19.632,8.943,19.731L8.943,19.731z"/></g></svg>',
                fit: [svgSize, svgSize],
                alignment: "center",
              },
              {
                columns: [{ text: "X", link: item.link, fontSize: 12, alignment: "center", opacity: 0 }],
                relativePosition: { y: -13 },
              },
            ],
            width: "auto",
            margin: [5, 0, 0, 0],
          });
        } else {
          formattedData.push({
            stack: [
              {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M7.896,16.104c-.586-.585-.586-1.536,0-2.121,.586-.586,1.535-.586,2.121,0,1.326,1.326,3.64,1.327,4.966,0l4.989-4.989c1.369-1.369,1.369-3.597,0-4.966s-3.597-1.369-4.966,0c-.586,.586-1.535,.586-2.121,0-.586-.585-.586-1.536,0-2.121,2.538-2.539,6.67-2.539,9.208,0,2.539,2.539,2.539,6.669,0,9.208l-4.989,4.989c-1.27,1.27-2.937,1.904-4.604,1.904s-3.335-.635-4.604-1.904Zm-1.384,7.893c1.667,0,3.334-.635,4.604-1.904,.586-.585,.586-1.536,0-2.121-.586-.586-1.535-.586-2.121,0-1.37,1.37-3.598,1.369-4.966,0-1.369-1.369-1.369-3.597,0-4.966l4.961-4.961c1.37-1.37,3.598-1.37,4.966,0,.586,.586,1.535,.586,2.121,0,.586-.585,.586-1.536,0-2.121-2.539-2.539-6.669-2.539-9.208,0L1.907,12.885c-2.539,2.539-2.539,6.669,0,9.208,1.27,1.27,2.937,1.904,4.604,1.904Z"/></svg>',
                fit: [12, 12],
                alignment: "center",
              },
              {
                columns: [{ text: "X", link: item.link, fontSize: 12, alignment: "center", opacity: 0 }],
                relativePosition: { y: -13 },
              },
              { text: item.title, link: item.link, fontSize: 7, bold: true, alignment: "center" },
            ],
            width: "auto",
            margin: [5, 0, 0, 0],
          });
        }
      }

      return formattedData;
    }
    return [];
  };

  const formatDynamicExperienceData = (data: ExperienceStateType[]) => {
    if (data.length > 0) {
      const formattedDescData: any[] = [];
      let rowDescData: any[] = [];
      const formattedData: any[] = [];
      let rowData: any[] = [];

      for (const [idx, item] of data.entries()) {
        // DESCRIPTION PART
        if (item.description.length > 0) {
          const descData: any[] = [];

          for (const descItem of item.description) {
            descData.push({ text: descItem, fontSize: 9, margin: [5, 5, 0, 0], color: "#969799" });
          }

          rowDescData.push({
            columns: [
              {
                canvas: [
                  {
                    type: "rect",
                    x: 0,
                    y: 0,
                    w: 4,
                    h: 37,
                    color: colors[idx <= 10 ? idx : idx - 10],
                  },
                ],
                margin: [0, 10, 0, 0],
                width: 10,
              },
              {
                stack: [
                  // { text: item.position, bold: true, fontSize: 13 },
                  // { text: item.company, fontSize: 10, italics: true, color: "#969799" },
                  ...descData,
                ],
                margin: [0, 5, 0, 5],
                width: "auto",
              },
            ],
          });

          // CHECK if it needs to create a new row
          if (rowDescData.length === 2) {
            formattedDescData.push({ columns: [...rowDescData], margin: [0, 15, 0, 0] });
            rowDescData = [];
          }

          //if data is at the end, add 1 dummy element to rowData to complete it (if needed it)
          if (idx + 1 === data.length && rowDescData.length === 1) {
            rowDescData.push({});
            formattedDescData.push({ columns: [...rowDescData] });
          }
        }

        // DESIGN PART
        // calculate duration
        const time = (item.end ? new Date(item.end).valueOf() : Date.now().valueOf()) - new Date(item.start).valueOf();
        const duration = new Date(time);
        const years = duration.getFullYear() - 1970;
        const months = duration.getMonth();

        if (idx === 0) {
          rowData.push({
            stack: [
              // ROw 1
              {
                columns: [
                  {
                    stack: [
                      { text: item.position, bold: true, alignment: "right" },
                      { text: item.company, fontSize: 10, italics: true, color: "#969799", alignment: "right" },
                    ],
                    margin: [0, 0, 5, 0],
                  },
                  {
                    canvas: [
                      {
                        type: "rect",
                        x: 0,
                        y: 0,
                        w: 2,
                        h: 70,
                        color: "#616161",
                      },
                    ],
                    width: 5,
                  },
                ],
                margin: [10, 0, 0, -15],
              },
              // ROw 2
              {
                canvas: [
                  {
                    type: "polyline",
                    color: colors[idx <= 10 ? idx : idx - 10],
                    closePath: true,
                    points: [
                      { x: 20, y: 0 },
                      { x: 10, y: 15 },
                      { x: 110, y: 15 },
                      { x: 100, y: 0 },
                    ],
                  },
                ],
              },
              {
                columns: [
                  {
                    text: [years > 0 ? `${years} ani ` : "", months > 0 ? ` ${months} luni` : ""],
                    alignment: "center",
                    width: 114,
                    noWrap: true,
                    fontSize: 8,
                    color: "white",
                  },
                ],
                relativePosition: { y: -12 },
              },
              // ROw 3
              {
                canvas: [
                  {
                    type: "polyline",
                    color: "#616161",
                    closePath: true,
                    points: [
                      { x: 0, y: 0 },
                      { x: 10, y: 15 },
                      { x: 117, y: 15 },
                      { x: 117, y: 0 },
                    ],
                  },
                ],
              },
              {
                columns: [
                  {
                    text: `${item.start.replace("-", ".")} - ${item.untilNow ? "Prezent" : item.end.replace("-", ".")}`,
                    width: 100,
                    noWrap: true,
                    fontSize: 8,
                    color: "white",
                    margin: [15, 0, 0, 0],
                  },
                ],
                relativePosition: { y: -12 },
              },
            ],

            width: 115,
          });
        }
        // last element
        else if (idx === data.length - 1) {
          rowData.push({
            stack: [
              // ROw 1
              {
                columns: [
                  {
                    stack: [
                      { text: item.position, bold: true, alignment: "right" },
                      { text: item.company, fontSize: 10, italics: true, color: "#969799", alignment: "right" },
                    ],
                    margin: [0, 0, 5, 0],
                  },
                  {
                    canvas: [
                      {
                        type: "rect",
                        x: 0,
                        y: 0,
                        w: 2,
                        h: 70,
                        color: "#616161",
                      },
                    ],
                    width: 5,
                  },
                ],
                margin: [10, 0, 0, -15],
              },
              // ROw 2
              {
                canvas: [
                  {
                    type: "polyline",
                    color: colors[idx <= 10 ? idx : idx - 10],
                    closePath: true,
                    points: [
                      { x: 11, y: 0 },
                      { x: 1, y: 15 },
                      { x: 111, y: 15 },
                      { x: 101, y: 0 },
                    ],
                  },
                ],
              },
              {
                columns: [
                  {
                    text: [years > 0 ? `${years} ani ` : "", months > 0 ? ` ${months} luni` : ""],
                    alignment: "center",
                    width: 114,
                    noWrap: true,
                    fontSize: 8,
                    color: "white",
                  },
                ],
                relativePosition: { y: -12 },
              },
              // ROw 3
              {
                canvas: [
                  {
                    type: "polyline",
                    color: "#616161",
                    closePath: true,
                    points: [
                      { x: 0, y: 0 },
                      { x: 0, y: 15 },
                      { x: 110, y: 15 },
                      { x: 120, y: 0 },
                    ],
                  },
                ],
              },
              {
                columns: [
                  {
                    text: `${item.start.replace("-", ".")} - ${item.untilNow ? "Prezent" : item.end.replace("-", ".")}`,
                    width: 100,
                    noWrap: true,
                    fontSize: 8,
                    color: "white",
                    margin: [10, 0, 0, 0],
                  },
                ],
                relativePosition: { y: -12 },
              },
            ],

            width: 115,
          });
        }
        // middle elements
        else {
          rowData.push({
            stack: [
              // ROw 1
              {
                columns: [
                  {
                    stack: [
                      { text: item.position, bold: true, alignment: "right" },
                      { text: item.company, fontSize: 10, italics: true, color: "#969799", alignment: "right" },
                    ],
                    margin: [0, 0, 5, 0],
                  },
                  {
                    canvas: [
                      {
                        type: "rect",
                        x: 0,
                        y: 0,
                        w: 2,
                        h: 70,
                        color: "#616161",
                      },
                    ],
                    width: 5,
                  },
                ],
                margin: [10, 0, 0, -15],
              },
              // ROw 2
              {
                canvas: [
                  {
                    type: "polyline",
                    color: colors[idx <= 10 ? idx : idx - 10],
                    closePath: true,
                    points: [
                      { x: 11, y: 0 },
                      { x: 1, y: 15 },
                      { x: 111, y: 15 },
                      { x: 101, y: 0 },
                    ],
                  },
                ],
              },
              {
                columns: [
                  {
                    text: [years > 0 ? `${years} ani ` : "", months > 0 ? ` ${months} luni` : ""],
                    alignment: "center",
                    width: 114,
                    noWrap: true,
                    fontSize: 8,
                    color: "white",
                  },
                ],
                relativePosition: { y: -12 },
              },
              // ROw 3
              {
                canvas: [
                  {
                    type: "polyline",
                    color: "#616161",
                    closePath: true,
                    points: [
                      { x: 0, y: 0 },
                      { x: 0, y: 15 },
                      { x: 117, y: 15 },
                      { x: 117, y: 0 },
                    ],
                  },
                ],
              },
              {
                columns: [
                  {
                    text: `${item.start.replace("-", ".")} - ${item.untilNow ? "Prezent" : item.end.replace("-", ".")}`,
                    width: 100,
                    noWrap: true,
                    fontSize: 8,
                    color: "white",
                    margin: [10, 0, 0, 0],
                  },
                ],
                relativePosition: { y: -12 },
              },
            ],

            width: 115,
          });
        }

        // CHECK if it needs to create a new row
        if ((idx + 1) % 4 === 0) {
          formattedData.push({ columns: [...rowData], margin: [0, 20, 0, 0] });
          rowData = [];
        }

        // if there are only 1, 2 or 3 elements in the rowData, but data is at the end
        // add dummy elements to fill all 4 columns of rowData (to avoid not displaying all elements)
        if (idx + 1 === data.length) {
          if (rowData.length === 1) {
            rowData.push({});
            rowData.push({});
            rowData.push({});
          } else if (rowData.length === 2) {
            rowData.push({});
            rowData.push({});
          } else if (rowData.length === 3) {
            rowData.push({});
          }
          formattedData.push({ columns: [...rowData], margin: [0, 20, 0, 0] });
        }
      }

      return { formattedData, formattedDescData };
    }
    return { formattedData: [], formattedDescData: [] };
  };

  const formatDynamicCompetencesData = (data: string[]) => {
    if (data.length > 0) {
      const formattedData: any[] = [];
      let rowData: any[] = [];

      for (const [idx, item] of data.entries()) {
        // ODD INDEX (shape wide on bottom)
        if ((idx + 1) % 2 !== 0) {
          rowData.push({
            stack: [
              {
                canvas: [
                  {
                    type: "polyline",
                    color: "#616161",
                    closePath: true,
                    points: [
                      { x: 8, y: 1 },
                      { x: 1, y: 20 },
                      { x: 115, y: 20 },
                      { x: 108, y: 1 },
                    ],
                  },
                ],
              },
              { columns: [{ text: item, alignment: "center", width: 114, noWrap: true, fontSize: 9, color: "white" }], relativePosition: { y: -15 } },
            ],
            width: 110,
          });
        }
        // EVEN INDEX (shape wide on top)
        else {
          rowData.push({
            stack: [
              {
                canvas: [
                  {
                    type: "polyline",
                    color: "#616161",
                    closePath: true,
                    points: [
                      { x: 1, y: 1 },
                      { x: 8, y: 20 },
                      { x: 108, y: 20 },
                      { x: 115, y: 1 },
                    ],
                  },
                ],
              },
              { columns: [{ text: item, alignment: "center", width: 114, noWrap: true, fontSize: 9, color: "white" }], relativePosition: { y: -15 } },
            ],
            width: 110,
          });
        }

        // CHECK IF IS ON COLUMN 3, go to next row is so
        if ((idx + 1) % 3 === 0) {
          formattedData.push({ columns: [...rowData], margin: [0, 2, 0, 0] });
          rowData = [];
        }

        // if there are only 1 or 2 elements in the rowData, but data is at the end
        // add dummy elements to fill all 3 columns rowData (to avoid not displaying all elements)
        if (idx + 1 === data.length) {
          if (rowData.length === 1) {
            rowData.push({});
            rowData.push({});
          } else if (rowData.length === 2) {
            rowData.push({});
          }
          formattedData.push({ columns: [...rowData], margin: [0, 2, 0, 0] });
        }
      }

      return formattedData;
    }
    return [];
  };

  const formatDynamicProjectsData = (data: ProjectsStateType[]) => {
    if (data.length > 0) {
      const formattedData: any[] = [];
      let rowData: any[] = [];
      let rowNumber = 1;
      let colNumber = 1;

      for (const [idx, item] of data.entries()) {
        rowData.push({
          stack: [
            {
              canvas: [
                {
                  type: "polyline",
                  color: "#c3c4c6",
                  closePath: true,
                  points: [
                    { x: 21, y: 1 },
                    { x: 1, y: 13 },
                    { x: 1, y: 32.34 },
                    { x: 21, y: 44.34 },
                    { x: 41, y: 32.34 },
                    { x: 41, y: 12.34 },
                  ],
                },
              ],
            },
            {
              columns: [
                {
                  text: item.title.length > 21 ? item.title.slice(0, 21) : item.title,
                  link: `${item.link.length > 0 ? item.link : ""}`,
                  alignment: "center",
                  width: 41,
                  fontSize: 9,
                  bold: true,
                  color: "#161616",
                  lineHeight: item.title.length > 7 ? 0.8 : 1,
                },
              ],
              relativePosition: { y: item.title.length > 7 ? -33 : -27 },
            },
          ],
          width: 45,
        });

        colNumber++;

        // go to next row
        // ODD ROW ( max 4 columns)
        if (colNumber === 5 && rowNumber % 2 !== 0) {
          formattedData.push({ columns: [...rowData], margin: [0, 2, 0, -10] });
          rowData = [];
          rowNumber++;
          colNumber = 1;
        }
        // EVEN ROW ( max 3 columns)
        else if (colNumber === 4 && rowNumber % 2 === 0) {
          formattedData.push({ columns: [...rowData], margin: [23, 2, 0, -10] });
          rowData = [];
          rowNumber++;
          colNumber = 1;
        }

        // if there are only 1 or 2 elements in the rowData, but data is at the end
        // add dummy elements to fill the 3 elements rowData (to avoid not displaying all elements)
        if (idx + 1 === data.length) {
          // ODD ROW ( max 4 columns)
          if (rowNumber % 2 !== 0) {
            if (rowData.length === 1) {
              rowData.push({});
              rowData.push({});
              rowData.push({});
            } else if (rowData.length === 2) {
              rowData.push({});
              rowData.push({});
            } else if (rowData.length === 3) {
              rowData.push({});
            }

            formattedData.push({ columns: [...rowData], margin: [0, 2, 0, 0] });
          }
          // EVEN ROW ( max 3 columns)
          else if (rowNumber % 2 === 0) {
            if (rowData.length === 1) {
              rowData.push({});
              rowData.push({});
            } else if (rowData.length === 2) {
              rowData.push({});
            }

            formattedData.push({ columns: [...rowData], margin: [23, 2, 0, 0] });
          }
        }
      }

      return formattedData;
    }
    return [];
  };

  const formatDynamicEducationData = (data: EducationStateType[]) => {
    if (data.length > 0) {
      const formattedData: any[] = [];

      // title
      formattedData.push({ text: "Educație", fontSize: 16, bold: true, margin: [0, 10, 0, 0] });

      for (const item of data) {
        formattedData.push({
          columns: [
            {
              canvas: [
                {
                  type: "rect",
                  x: 0,
                  y: 0,
                  w: 4,
                  h: 50,
                  color: "orange",
                },
              ],
              width: 10,
            },
            {
              stack: [
                { text: item.specialization, bold: true, fontSize: 13 },
                { text: item.school, fontSize: 11, italics: true },
                {
                  text: `${item.start.replace("-", ".")} - ${item.untilNow ? "Prezent" : item.end.replace("-", ".")}`,
                  fontSize: 10,
                  color: "#969799",
                },
              ],
              margin: [0, 5, 50, 5],
              width: "auto",
            },
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

      // title
      formattedData.push({ text: "Voluntariat", fontSize: 16, bold: true, margin: [0, 10, 0, 0] });

      for (const item of data) {
        formattedData.push({
          columns: [
            {
              canvas: [
                {
                  type: "rect",
                  x: 0,
                  y: 0,
                  w: 4,
                  h: 50,
                  color: "#5c45fd",
                },
              ],
              width: 10,
            },
            {
              stack: [
                { text: item.role, bold: true, fontSize: 13 },
                { text: item.organisation, fontSize: 11, italics: true },
                {
                  text: `${item.start.replace("-", ".")} - ${item.untilNow ? "Prezent" : item.end.replace("-", ".")}`,
                  fontSize: 10,
                  color: "#969799",
                },
              ],
              margin: [0, 5, 0, 5],
              width: "auto",
            },
          ],
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
        formattedData.push({ text: `${item}, `, color: "#969799", fontSize: 11 });
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
        const subheader = { text: pItem.sectionTitle, style: "secondHeader2" };

        for (const [idx, pContentItem] of pItem.content.entries()) {
          // create description subcategory
          const descFormattedData: any = [];

          if (pContentItem.description.length > 0) {
            for (const descItem of pContentItem.description) {
              descFormattedData.push({ text: `${descItem}`, color: "#969799", fontSize: 11 });
            }
          }
          // end

          content.push({
            columns: [
              {
                canvas: [
                  {
                    type: "rect",
                    x: 0,
                    y: 0,
                    w: 4,
                    h: 37,
                    color: colors[idx <= 10 ? idx : idx - 10],
                  },
                ],
                width: 10,
              },
              {
                stack: [
                  {
                    text: [
                      { text: `${pContentItem.title}, `, bold: true },
                      {
                        text: `${pContentItem.start.replace("-", ".")} ${pContentItem.start || pContentItem.end ? " - " : ""} `,
                        color: "#969799",
                        fontSize: 11,
                      },
                      { text: `${pContentItem.untilNow ? "Prezent" : pContentItem.end.replace("-", ".")}`, color: "#969799", fontSize: 11 },
                    ],
                  },
                  { ul: [...descFormattedData], markerColor: colors[idx <= 10 ? idx : idx - 10], margin: [30, 0, 0, 0] },
                ],
              },
            ],
            margin: [15, 10, 0, 0],
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
  const experienceDisplay = formatDynamicExperienceData(experience);
  const competencesDisplay = formatDynamicCompetencesData(competences);
  const projectsDisplay = formatDynamicProjectsData(projects);
  const educationDisply = formatDynamicEducationData(education);
  const volunteeringDisplay = formatDynamicVolunteeringData(volunteering);
  const hobbiesDisplay = formatDynamicStringsData(hobbies);
  const personalizedDisplay = formatDynamicPersonalizedData(personalized);

  // END display variables

  var docDefinition = {
    content: [
      // SECTION 1 - HEADER - CONTACT
      {
        columns: [
          { text: generalInfo.name, style: "mainHeader" },
          {
            stack: [
              {
                text: `${contact.email.length > 0 ? contact.email : ""}`,
                link: `${contact.email.length > 0 ? `mailto:${contact.email}` : ""}`,
                bold: true,
                color: "#4D4DFD",
                alignment: "right",
              },
              { text: `${contact.phone.length > 0 ? contact.phone : ""}`, alignment: "right" },
              { text: `${contact.address.length > 0 ? contact.address : ""}`, alignment: "right" },
            ],
            width: "auto",
          },
        ],
      },
      { table: { body: [[{ text: "" }, { columns: [...linksDisplay] }]], widths: ["*", "auto"] }, layout: "noBorders", margin: [0, 5, 0, 0] },

      // SECTION 2 - ABOUT
      {
        text: `${generalInfo.description.length > 0 ? generalInfo.description : ""}`,
        margin: [0, 30, 0, 0],
        color: "#969799",
        lineHeight: 1.3,
        fontSize: 11,
      },

      // SECTION 3 - EXPERIENCE
      ...experienceDisplay.formattedData,
      ...experienceDisplay.formattedDescData,

      // SECTION 4 - COMPETENCES - PROJECTS
      {
        columns: [
          {
            stack: [
              { text: `${competencesDisplay.length > 0 ? "Competențe" : ""}`, style: competencesDisplay.length > 0 ? "secondHeader" : "" },
              ...competencesDisplay,
            ],
          },

          {
            stack: [
              { text: `${projectsDisplay.length > 0 ? "Proiecte" : ""}`, style: projectsDisplay.length > 0 ? "secondHeader" : "" },
              ...projectsDisplay,
            ],
            width: 180,
            margin: [20, 0, 0, 0],
          },
        ],
        margin: [0, 20, 0, 0],
      },

      // SECTION 5 - EDUCATION - VOLUNTEERING
      {
        columns: [
          { stack: [...educationDisply], width: "auto" },
          { stack: [...volunteeringDisplay], width: "auto" },
        ],
        margin: [0, 20, 0, 0],
      },

      // SECTION 6 - HOBBIES
      {
        stack: [
          { text: hobbiesDisplay.length > 0 ? "Hobbi-uri" : "", style: hobbiesDisplay.length > 0 ? "secondHeader2" : "" },
          { text: [...hobbiesDisplay], margin: [0, 5, 0, 0] },
        ],
      },

      // SECTION 7 - PERSONALIZED
      ...personalizedDisplay,
    ],

    // STYLING
    styles: {
      mainHeader: { fontSize: 26, bold: true, margin: [0, 0, 0, 15] },
      secondHeader: { fontSize: 16, bold: true, margin: [0, 20, 0, 0], alignment: "center" },
      secondHeader2: { fontSize: 16, bold: true, margin: [0, 20, 0, 0] },
    },
  };

  return docDefinition;
};

export default VividVisionPdf;
