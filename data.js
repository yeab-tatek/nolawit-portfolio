/* =========================================================
   PROJECT DATA
   - id:      must match the folder name in assets/images/projects/
   - images:  shown in this order; the first one is the cover
   - year / location: leave "" to hide them
   ========================================================= */

const projects = [
  {
    id: "project2",
    title: "Harmony Installed",
    category: "Competition · Cultural Pavilion",
    year: "2025",
    location: "Netherlands Embassy, Addis Ababa",
    summary:
      "People's Choice Award winner: a pavilion of interlocking bamboo boxes and recycled polycarbonate, celebrating the exchange between Ethiopia and the Netherlands.",
    description: [
      "Harmony Installed is a cultural pavilion designed for the Student Design Competition organized by the Embassy of the Kingdom of the Netherlands and the Association of Ethiopian Architects (AEA). Designed with Nishan Shewakena, it won the People's Choice Award and was featured in Ketema Journal.",
      "The pavilion expresses the relationship between two nations through independent yet interdependent elements. Modular L-shaped bamboo boxes interlock into a stable pattern, and recycled translucent polycarbonate panels turn plastic waste into a material that filters sunlight into shifting colored shadows.",
      "The boxes also work as furniture, inviting visitors to sit, rest and engage. By inhabiting the pavilion, the audience completes the design."
    ],
    images: [
      { file: "1.jpg", caption: "Competition board 1: the concept. Two independent forms, one from each nation, are developed through mutual exchange into a single interlocking structure." },
      { file: "3.jpg", caption: "Site and ground plan at 1:200, with an elevation at 1:50. The pavilion has two entrances, one for the Netherlands and one for Ethiopia, meeting in a shared communal space." },
      { file: "4.jpg", caption: "Material detail with elevation (1:100) and section (1:50). Bamboo and recycled polycarbonate form a circular-economy structure that lets colored light fall on visitors." },
      { file: "2.jpg", caption: "Interior and exterior renders, with the component studies: bamboo panel connection, L-shaped box configuration and translucent polycarbonate panel." }
    ]
  },

  {
    id: "project1",
    title: "Biophilia Residence",
    category: "Architectural Design · Apartment Building",
    year: "",
    location: "",
    summary:
      "A multi-storey apartment building with green terraced roofs, developed from biophilic research through plans, sections and a detailed site model.",
    description: [
      "Biophilia Residence is a multi-storey apartment building that brings nature into everyday living. Green roof terraces step down the building and connect it to its landscaped site.",
      "The project began with research on apartment building typology and biophilic design, then moved through concept development, site plan, basement parking, podium and upper floor layouts, elevations, sections and interior and exterior perspectives. It was presented on hand-drawn boards and a physical site model at 1:200."
    ],
    images: [
      { file: "1.jpg", caption: "Site model at 1:200 showing the stepped apartment volume, green roof terraces and the surrounding road network." },
      { file: "2.jpg", caption: "Aerial close-up of the model. The courtyard, terraces and landscaping show how the building opens to greenery." },
      { file: "6.jpg", caption: "The model from street level, set on its contoured site with trees and parking areas." },
      { file: "3.jpg", caption: "Presenting the model in front of the full set of hand-drawn boards." },
      { file: "4.jpg", caption: "Research boards: definition and history of the apartment building, the biophilic research summary and concept development, with the podium and upper floor plans." },
      { file: "5.jpg", caption: "Site plan, basement parking plan, site-level elevation and section, and interior and exterior perspectives at 1:200." }
    ]
  },

  {
    id: "project4",
    title: "Nexus Green",
    category: "Sustainable Residential Design",
    year: "",
    location: "",
    summary:
      "An eco-friendly residence with a geometric shading screen, solar panels and green terraces, presented as a lit physical model.",
    description: [
      "Nexus Green is a sustainable residential project focused on energy efficiency and comfort. A geometric perforated shading device on the facade reduces solar heat gain and glare while casting patterned light into the interior.",
      "The design integrates solar panels, green terraces and natural materials. It was developed through site analysis, sun path and shading studies, mood boards, plans, elevations and ceiling plans, then presented as a detailed physical model with interior lighting."
    ],
    images: [
      { file: "1.jpg", caption: "The lit model: a perforated facade screen, rooftop solar panels and green terraces on the main road frontage." },
      { file: "2.jpg", caption: "Model and site model together, with interior lighting switched on." },
      { file: "4.jpg", caption: "Top view at 1:100 showing the solar panels, roof terrace layout, access road and north arrow." },
      { file: "3.jpg", caption: "The site model: contours, road alignment, surrounding buildings and green area." },
      { file: "6.jpg", caption: "The presentation boards with the lit model in front." },
      { file: "5.jpg", caption: "The full board: concept development, solar panels, sun path diagram, shading device, mood boards, elevations, ceiling plan and floor plans." },
      { file: "7.jpg", caption: "The model on display below the Nexus Green boards." }
    ]
  },

  {
    id: "project3",
    title: "Vacation House",
    category: "Residential Design · Framing Views",
    year: "",
    location: "",
    summary:
      "A small vacation house designed around framed views, with private and social zones arranged to bring nature and light inside.",
    description: [
      "The Vacation House is a small retreat designed around the idea of framing views. The site is analysed first for the best views and light, and openings are then placed to bring the landscape into each room.",
      "The plan is organized into horizontal zones: a private zone for bedrooms, bathroom and personal corners, and a social zone for the living room, kitchen, dining and outdoor lounge. It was developed through hand-rendered plans and elevations and a physical model."
    ],
    images: [
      { file: "1.jpg", caption: "Physical model on a contoured base, with a green roof, timber details and a water edge." },
      { file: "2.jpg", caption: "Model from another angle, showing the roof opening and how the house sits on the site." },
      { file: "4.jpg", caption: "Site analysis sheet: the site location and view study that lead to the Framing Views concept." },
      { file: "5.jpg", caption: "Hand-rendered floor plan at 1:50 with horizontal zoning, dividing private and social areas." },
      { file: "3.jpg", caption: "Front and side elevations in watercolor, with the list of essential functions." },
      { file: "6.jpg", caption: "The presentation sheets together: site analysis, zoning plan and elevations." }
    ]
  },

  {
    id: "project5",
    title: "Hillside House",
    category: "Residential Design · Model Making",
    year: "",
    location: "",
    summary:
      "A residence on a sloping site, developed from site analysis through schematic design and floor plans to a physical model.",
    description: [
      "This residential project sits on a contoured site. The design was developed through site analysis, schematic design, floor plans and sections, then built as a physical model with green roofs and a water feature.",
      "The sheets show the process from semi-basement and ground floor plans to the finished model, including a variation with a folded blue roof."
    ],
    images: [
      { file: "1.jpg", caption: "Front view of the model: stacked volumes with green roofs, a pool and a stepped garden." },
      { file: "8.jpg", caption: "Model on its contour base, seen from the front." },
      { file: "5.jpg", caption: "Side view of the model showing the lower terrace, pool and roof overhang." },
      { file: "6.jpg", caption: "Roof study: a folded blue roof over the main volume." },
      { file: "2.jpg", caption: "Presentation sheet with the site analysis, schematic design and floor plans." },
      { file: "3.jpg", caption: "Section drawing over the contour map, showing how the rooms follow the slope." },
      { file: "7.jpg", caption: "Floor plans: semi-basement and ground floor, drawn by hand." },
      { file: "4.jpg", caption: "Work in progress: site analysis sheet, plans and model pieces on the table." }
    ]
  },

  {
    id: "project8",
    title: "Terraced Hillside Building",
    category: "Architectural Design · Model Making",
    year: "",
    location: "",
    summary:
      "A lit model of a building set into terraced green slopes beside a main road, with a full set of site plans, floor plans, sections and elevations.",
    description: [
      "This project places a building into a terraced, green hillside next to a main road. The model is lit from inside to show how the facade and interior spaces would glow at night.",
      "The drawings cover the site analysis, site and location plans, semi-basement to terrace floor plans, roof plan, sections and elevations, presented on watercolor-rendered boards."
    ],
    images: [
      { file: "1.jpg", caption: "Lit model on terraced slopes, with a louvered roof and an entrance facing the main road." },
      { file: "2.jpg", caption: "Model from above, showing the roof louvers, courtyard and landscaped terraces." },
      { file: "3.jpg", caption: "The full presentation: site analysis, site plan, location plan, floor plans, roof plan, sections and elevations." }
    ]
  },

  {
    id: "project7",
    title: "Dolphin-Inspired Final Project",
    category: "Biomimicry · Model Making",
    year: "",
    location: "",
    summary:
      "A final design project that draws its form from the dolphin, presented as a landscape model with a curved glazed building and a pool.",
    description: [
      "This final project takes the dolphin as its inspiration, translating natural form into architecture. A curved white volume with a fan-shaped glazed facade sits beside a circular pool and plaza.",
      "The landscape is modeled in layered contours with a pathway leading to the building, and is shown with its presentation board."
    ],
    images: [
      { file: "1.jpg", caption: "The model with the Dolphin presentation board: a curved building, circular water feature and layered landscape." }
    ]
  }
];