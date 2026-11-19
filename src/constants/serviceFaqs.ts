export type ServiceFaq = { q: string; a: string };

/** FAQs for /services/[slug] pages. Answers use only facts already stated on the service pages. */
export const SERVICE_FAQS: Record<string, ServiceFaq[]> = {
  "design-development": [
    {
      q: "What does your design development service include?",
      a: "Space planning and layout design, custom furniture and décor selection, 3D visualization and renders, lighting and ambience design, material and finish selection, acoustic planning, project management and coordination, and final styling.",
    },
    {
      q: "What do I receive at the end of design development?",
      a: "Precise architectural plans, 3D renderings and detailed material specifications, so the fit-out can be executed on site without guesswork.",
    },
    {
      q: "What are the steps in your design process?",
      a: "Consultation, concept and design, planning and detailing, execution, and final styling.",
    },
  ],
  "turnkey-projects": [
    {
      q: "What is a turnkey fit-out?",
      a: "One team manages the whole project, from the first concept to the final handover. We handle the materials, timelines, contractors and certifications.",
    },
    {
      q: "Do you handle authority approvals in a turnkey project?",
      a: "Yes. We obtain the fit-out permits and NOC certificates from master developers, and secure municipal compliance before handover.",
    },
    {
      q: "What do I get at handover?",
      a: "Final handover documentation and defects liability warranty coverage.",
    },
  ],
  "corporate-interiors": [
    {
      q: "What does an office fit-out include?",
      a: "Workspace layout planning, acoustic and lighting engineering, ergonomic furniture procurement, server room and network cabling design, executive suites and boardrooms, corporate brand styling and signage, and post-handover support.",
    },
    {
      q: "Do you supply office furniture?",
      a: "Yes. We source ergonomic chairs, modular workstations and executive desks as part of the fit-out.",
    },
    {
      q: "Do you manage approvals for office fit-outs?",
      a: "Yes. We manage the regulatory permits, including DEWA load approvals and civil defense fire audits.",
    },
  ],
  "mep-systems": [
    {
      q: "What MEP services do you provide?",
      a: "HVAC cooling and ventilation, electrical load calculations and DEWA setup, fire fighting sprinklers and alarm networks, low voltage and data cabling, water plumbing and drainage, emergency lighting, and testing and commissioning.",
    },
    {
      q: "Do you handle MEP approvals?",
      a: "Yes. We submit the mechanical drawings to Dubai Municipality and DEWA.",
    },
    {
      q: "Do you test the systems before handover?",
      a: "Yes. We carry out pressure tests, circuit balancing and air-flow calibrations, followed by complete testing and commissioning.",
    },
  ],
  "fb-hospitality": [
    {
      q: "What types of F&B spaces do you fit out?",
      a: "Restaurants, cafés, lounges and restobars, from concept to completion.",
    },
    {
      q: "Do you build bar counters?",
      a: "Yes. Bar counter and backbar joinery is part of our F&B fit-out service.",
    },
    {
      q: "What does an F&B fit-out include?",
      a: "Space planning and layout design, custom furniture and décor selection, bar counter and backbar joinery, lighting and ambience design, material and finish selection, acoustic planning, project management and coordination, and final styling.",
    },
  ],
  "retail-wellness": [
    {
      q: "What retail and wellness spaces do you fit out?",
      a: "Retail stores, spas, wellness salons and clinical spaces.",
    },
    {
      q: "Do you make custom shelving and display units?",
      a: "Yes. We fabricate custom storefronts, shelving, garment racks and cosmetic display units.",
    },
    {
      q: "Do you coordinate mall permits?",
      a: "Yes. We coordinate permits with mall managements and developers.",
    },
  ],
  "joinery-services": [
    {
      q: "Where is your joinery made?",
      a: "In our in-house manufacturing facility in Ajman, UAE.",
    },
    {
      q: "What joinery do you make?",
      a: "Architectural wall paneling and cladding, bespoke tables, desks and wardrobes, and other custom woodwork, with factory-controlled lacquering and paint.",
    },
    {
      q: "How do you make sure the joinery fits on site?",
      a: "We take site laser scans, prepare detailed shop drawings, and fit and align everything on site under the supervision of our joinery engineers.",
    },
  ],
  "approvals-compliance": [
    {
      q: "Which authorities do you handle approvals with?",
      a: "Dubai Municipality, Dubai Civil Defense, Trakhees, DDA and DEWA, as well as developer NOCs such as Emaar and Nakheel.",
    },
    {
      q: "What does the approvals process involve?",
      a: "A technical drawing audit, submissions and NOCs, fire safety sign-off, utility approvals, and the final inspection.",
    },
    {
      q: "Do you handle the final sign-off?",
      a: "Yes. We manage the site inspector walkthroughs and the final occupancy and sign-off handovers.",
    },
  ],
};