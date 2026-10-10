export type ProjectCategory = "featured" | "lighting" | "furniture" | "curated-art";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  additionalCategories?: ProjectCategory[];
  eyebrow: string;
  summary: string;
  seoTitle?: string;
  imageMetadata?: {
    creator: string;
    creditText: string;
    copyrightNotice: string;
    descriptions: Record<string, string>;
  };
  facebookPost: string;
  details?: {
    meta?: {
      label: string;
      value: string;
    }[];
    paragraphs: string[];
    features?: {
      title: string;
      body: string;
    }[];
    brand?: string;
    brandHref?: string;
    awardLogo?: string;
    awardLogos?: {
      src: string;
      title: string;
      href?: string;
    }[];
    awardLogoSize?: "compact";
    clientLogo?: {
      src: string;
      title: string;
      href?: string;
    };
    links?: {
      label: string;
      href: string;
      text: string;
    }[];
    video?: {
      label: string;
      title: string;
      embedUrl: string;
      href: string;
    };
  };
  detailImages?: string[];
  image: string;
  shareImage?: string;
  shareImageDimensions?: {
    width: number;
    height: number;
  };
  hoverImage?: string;
  imagePosition?: string;
  hoverImagePosition?: string;
  featured?: boolean;
};

export const navigation = [
  { label: "WORK", href: "/work" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" }
];

export const socialLinks = [
  { label: "FB", href: "https://www.facebook.com/francescocappucciodesign/" },
  { label: "IN", href: "https://www.linkedin.com/in/francesco-cappuccio-532a6644/" },
  { label: "IG", href: "https://www.instagram.com/francescocappucciodesign/" },
  { label: "PI", href: "https://www.pinterest.com/innovativedesignpills/" }
];

export const studio = {
  name: "FRANCESCOCAPPUCCIO",
  practiceTitle: "The practice",
  quote:
    '"The greatest challenge of being a creative individual is to maintain a childlike imagination while growing the constraints of acquired knowledge."',
  quoteBy: "Francesco Cappuccio",
  intro:
    "With over three decades of experience, Francesco Cappuccio has cultivated a reputation for design excellence, earning 35 international awards, including the Archiproducts Design Award 2024, Red Dot Design Award, and European Design Award.",
  paragraphs: [
    "Rooted in the art of light, my practice explores its expressive and functional dimensions, creating works that are both poetic and purposeful. From luminous sculptures to integrated architectural systems, every creation is conceived as an experience, balancing technology with emotion.",
    "My light sculptures are exhibited around the world in properties operated by leading hospitality brands, including Shangri-La, InterContinental, Banyan Tree, Hilton, and Sheraton.",
    "More recently, my practice has expanded to embrace collectible furniture and design objects. These works combine material experimentation with purpose and intentionality. Each piece pursues the same ambition: to create designs that are emotionally resonant, environmentally responsible, and timeless in their impact.",
    "Collaboration lies at the heart of my process. Working with leading international brands and visionary clients allows me to push boundaries, challenge conventions, and remain curious. I continue to seek the unexpected, guided by a commitment to meaningful form and lasting beauty.",
    "Working between Bangkok and Italy has taught me to treat *genius loci*, the spirit of place, as a creative strategy.",
    "Each spatial light sculpture begins with its context: architecture, climate, culture, craftsmanship, and materials. These elements shape both the work and its relationship with the space.",
    "A design conceived in Italy must evolve for a tropical courtyard, an Asian resort, or a desert interior. Its identity remains consistent, but its expression belongs to the place.",
    "Consistency is the promise. Difference is the proof."
  ],
  address: "2/1, Soi Ramkhamhaeng 12, Yeak 4, Hua Mak, Bangkapi, Bangkok 10240, Thailand",
  copyright: "© 2026 Francesco Cappuccio"
};

export const awards = [
  {
    title: "Archiproducts Design Awards",
    year: "Winner 2024 / Longlisted 2025",
    work: "Scacco Matto",
    logo: "/images/awards/archiproducts-awards-winner.jpg",
    href: "https://awards.archiproducts.com/"
  },
  {
    title: "Red Dot Design Award",
    year: "Winner",
    work: "Rubbernetto Faucet",
    logo: "/images/awards/red-dot-award.jpg",
    href: "https://www.red-dot.org/"
  },
  {
    title: "European Product Design Award",
    year: "Winner",
    work: "Product design",
    logo: "/images/awards/european-product-design-award-2019-gold.png",
    href: "https://www.productdesignaward.eu/"
  },
  {
    title: "LIT Lighting Design Awards",
    year: "Winner",
    work: "Akuna lighting experience",
    logo: "/images/awards/lit-lighting-design-awards-2023-winner.png",
    href: "https://litawards.com/"
  }
];

export const projects: Project[] = [
  {
    slug: "mandarin-oriental-riverside-bangkok",
    title: "Mandarin Oriental riverside Bangkok",
    category: "lighting",
    eyebrow: "Lighting & Products",
    summary:
      "For generations, Mandarin Oriental, Bangkok has been a sanctuary on the Chao Phraya River, inspiring royalty, writers, artists and travellers alike.",
    facebookPost: `Mandarin Oriental riverside Bangkok

For generations, Mandarin Oriental, Bangkok has been a sanctuary on the Chao Phraya River, shaped by the memory of royalty, writers, artists and travellers. As the 2025 renovation begins, the lighting language draws on that legacy through selected Murano pieces.

A vintage wall sconce combines transparent frosted glass leaves with a chrome frame, while the Salice chandelier brings cascading translucent petals into the dining suite beneath its recessed dome.

Together, these elements introduce a soft, handcrafted luminosity that sits comfortably between the hotel's history and its next chapter.`,
    details: {
      paragraphs: [
        "For generations, Mandarin Oriental, Bangkok has been a sanctuary on the Chao Phraya River, inspiring royalty, writers, artists and travellers alike. In 2025, the renovation begins."
      ],
      features: [
        {
          title: "Vintage Murano wall sconce",
          body:
            "A stunning vintage Murano wall sconce crafted with handmade, transparent frosted glass elements shaped like leaves. The glass elements are mounted on a chrome metal frame, creating an elegant play of light that suits both modern and classic interiors."
        },
        {
          title: "\"Salice\" chandelier",
          body:
            "Handcrafted from exquisite Murano glass, cascading translucent petals illuminate the dining suite with a soft, warm glow. Suspended within a recessed dome, the organic design complements the fluid wall textures to create a serene and sophisticated focal point."
        }
      ],
      brand: "Lightsculptures",
      brandHref: "https://www.lightsculptures.co.th/"
    },
    detailImages: [
      "/images/mandarin-oriental-riverside-bangkok-detail-1.jpg",
      "/images/mandarin-oriental-riverside-bangkok-detail-2.jpg",
      "/images/mandarin-oriental-4.jpg",
      "/images/mandarin-oriental-riverside-bangkok-gallery-1.jpg"
    ],
    image: "/images/project1.jpg",
    featured: true
  },
  {
    slug: "deco",
    title: "Deco path light",
    category: "lighting",
    eyebrow: "Lighting & Products",
    summary:
      "A lighting study focused on path light devices that cast decorative patterned shadows across walkways and walls.",
    facebookPost: `Deco path light

Deco is a lighting study that begins with the relationship between light, pattern and material. The path light devices cast decorative, traditional-patterned shadows across walkways and adjacent walls, turning movement through the landscape into a sequence of illuminated textures.

By integrating the fixture into a handrail system, utility and ornament become part of the same architectural gesture.

The lighting remains dark-sky compliant, giving the pathway atmosphere and identity without contributing unnecessary light pollution.`,
    details: {
      meta: [
        { label: "Project type", value: "Path light" },
        { label: "Date", value: "June 2025" },
        { label: "Location", value: "Bangkok" }
      ],
      paragraphs: [
        "Studies of integration of light, pattern, and materials.",
        "Deco is a lighting study focused on path light devices that cast decorative, traditional-patterned shadows, animating walkways and adjacent walls with light. By integrating the fixture into a handrail system, the design seamlessly merges utility and ornamentation, transforming the pathway into an elegant sequence of illuminated textures.",
        "Deco respects and enhances its environment while embracing principles of sustainability and low-impact design. The lighting remains compliant with dark sky regulations, offering a refined aesthetic without contributing to light pollution.",
        "Through intentional design, Deco elevates the landscape into an atmospheric, immersive experience."
      ]
    },
    detailImages: [
      "/images/deco-path-light-2.png",
      "/images/deco-path-light-3.png",
      "/images/deco-path-light-4.png",
      "/images/deco-path-light-5.png"
    ],
    image: "/images/deco-path-light-1.png"
  },
  {
    slug: "harvest",
    title: "Harvest",
    category: "lighting",
    eyebrow: "Lighting & Products",
    summary:
      "A sculptural light installation for SOMA Riverside Hotel inspired by the sea, fishing nets, and the bounty of the ocean.",
    facebookPost: `Harvest

Harvest is a sculptural light installation created for SOMA Riverside Hotel in Phnom Penh. It draws its form from the sea, fishing nets and the bounty of the ocean.

The composition recalls a fisherman's steel net and becomes a tribute to the local fishing community, whose life and livelihood remain closely connected to the water.

The work brings light into the hotel while inviting guests to pause, look up and reflect on the beauty and fragility of the ocean.`,
    details: {
      meta: [
        { label: "Project type", value: "Light sculptures" },
        { label: "Date", value: "April 2025" },
        { label: "Location", value: "SOMA Riverside Hotel, Phnom Penh" }
      ],
      paragraphs: [
        "Introducing \"Harvest,\" a captivating sculptural light installation at the SOMA Riverside Hotel . Infused with passion and artistry, this piece draws inspiration from the ocean's enchanting treasures, embodying the essence of its allure with a design reminiscent of a fisherman's steel net. The installation not only illuminates the space but also serves as a heartfelt homage to the vital importance of the sea and its bounty for the local fishing community, reminding us all of the beauty and fragility of our oceans.",
        "It's a poetic homage to the ocean's bounty, inviting guests to pause, look up, and reflect on our shared connection to nature's wonders."
      ],
      awardLogo: "/images/awards/lit-lighting-design-awards-2025-winner.jpg"
    },
    detailImages: [
      "/images/harvest-2.png",
      "/images/harvest-4.png"
    ],
    image: "/images/harvest-3.png",
    hoverImage: "/images/harvest-1.png",
    imagePosition: "50% 50%",
    hoverImagePosition: "50% 50%"
  },
  {
    slug: "bloom",
    title: "Bloom",
    category: "lighting",
    eyebrow: "Lighting & Products",
    summary:
      "A sculptural floral chandelier that brings warm, intimate light and an organic statement presence to expansive interiors.",
    facebookPost: `Bloom

Bloom is a sculptural floral chandelier conceived for expansive interiors where light needs to feel warm, intimate and present without becoming heavy.

Each flower carries a warm glow that softens the architectural space and works alongside the natural light from large windows. The composition gives the ceiling an organic focus while maintaining a calm, refined atmosphere.

Designed for villas and interiors where craftsmanship and quiet luxury are central, Bloom turns the ceiling into a field of light and form.`,
    details: {
      meta: [
        { label: "Project type", value: "Sculptural chandelier" }
      ],
      paragraphs: [
        "The warm-toned lighting within each flower softens the architectural space, blending seamlessly with the natural light from the expansive windows.",
        "It invites a sense of calm and refined intimacy, while still maintaining a statement presence. This chandelier is ideal for villas where craftsmanship and quiet luxury are emphasized.",
        "Bloom turns the ceiling into a canvas of organic beauty."
      ]
    },
    detailImages: [],
    image: "/images/bloom-day.jpg",
    hoverImage: "/images/bloom-night.jpg",
    imagePosition: "50% 50%",
    hoverImagePosition: "50% 50%"
  },
  {
    slug: "falcons",
    title: "Falcons",
    seoTitle: "Falcons | Falcon Light Sculptures",
    category: "lighting",
    eyebrow: "Falcon light sculptures",
    summary:
      "Falcons by Francesco Cappuccio: illuminated falcon sculptures exploring wings and flight through aluminium, brass and crystal. View the original project images.",
    shareImageDimensions: { width: 1062, height: 1597 },
    imageMetadata: {
      creator: "Francesco Cappuccio",
      creditText: "Francesco Cappuccio",
      copyrightNotice: "© Francesco Cappuccio",
      descriptions: {
        "/images/falcons-1.png": "Shahin, an illuminated falcon sculpture with raised wings suspended in a stone atrium, from Falcons by Francesco Cappuccio.",
        "/images/falcons-2.png": "Nova falcon light sculpture with openwork feathers and points of light across its raised wing, in an arched stone interior.",
        "/images/falcons-3.png": "Abstract falcon wing light sculpture with curved, patterned feather forms in a stone gallery with pointed arches.",
        "/images/falcons-4.png": "Faras, two golden illuminated falcon forms suspended one above the other beneath a skylight in a tall stone atrium.",
        "/images/falcons-5.png": "Silver-toned falcon light sculpture with a sweeping raised wing and long feather forms in a circular stone hall.",
        "/images/falcons-6.png": "Three illuminated falcon sculptures suspended at different heights in a tall glazed lobby.",
        "/images/falcons-7.png": "Abstract falcon light sculpture with two curved wings and overlapping illuminated feather forms against a dark background.",
        "/images/falcons-8.png": "Falcon light sculpture with broad upward wings casting a patterned shadow across the floor of a circular stone hall."
      }
    },
    facebookPost: `Falcons

Falcons is a collection of illuminated sculptures made from laser-cut aluminium, cast brass and crystal. The works are conceived for museum galleries and hotel lobbies across the Middle East, where sculpture and light can establish a strong sense of arrival.

The falcon has long been a valued partner in the hunt, linked to trust, respect and survival. This cultural memory informs the collection without reducing the pieces to an illustration.

Each sculpture brings material precision and a luminous presence to the interior.`,
    details: {
      meta: [{ label: "Design & images", value: "Francesco Cappuccio" }],
      paragraphs: [
        "Falcons is a collection of illuminated falcon sculptures designed by Francesco Cappuccio. The collection explores figurative and abstract interpretations of wings and flight, conceived in laser-cut aluminium, cast brass and crystal for museum galleries and large hotel lobbies in the Middle East.",
        "The falcon's place in Middle Eastern culture informs the collection: a hunting companion associated with trust, respect and survival. These original project images explore how suspended forms, patterned feathers and light can shape the experience of an interior."
      ],
      links: [
        {
          label: "Feature",
          text: "Read on Designooor",
          href: "https://designooor.com/falcons/"
        }
      ]
    },
    detailImages: [
      "/images/falcons-2.png",
      "/images/falcons-3.png",
      "/images/falcons-4.png",
      "/images/falcons-5.png",
      "/images/falcons-6.png",
      "/images/falcons-7.png",
      "/images/falcons-8.png"
    ],
    image: "/images/falcons-1.png"
  },
  {
    slug: "cinque-terre",
    title: "Cinque Terre",
    category: "lighting",
    eyebrow: "Lighting & Products",
    summary:
      "A capsule collection of five portable lamps inspired by the colors, villages, and coastal landscape of Liguria.",
    facebookPost: `Cinque Terre

Cinque Terre is a capsule collection of five portable lamps inspired by the Ligurian villages of Riomaggiore, Manarola, Corniglia, Vernazza and Monterosso.

Each lamp is handcrafted from bent and painted metal, available in cordless LED and wired versions. The palette moves from red, orange and yellow to green and blue, echoing the houses, hills and sea of the Italian coast.

Small functional details, including a gutter and hooks, allow the lamp to support everyday personal objects as well as light.`,
    details: {
      meta: [
        { label: "Project type", value: "Portable lamp" },
        { label: "Date", value: "June 2024" },
        { label: "Location", value: "Napoli (ITA)" }
      ],
      paragraphs: [
        "Cinqueterre is a capsule collection of five table lamps, strongly inspired by the Ligurian territory from which they take their name.",
        "Cinque Terre, Five Villages: Riomaggiore, Manarola, Corniglia, Vernazza, Monterosso, all overlooking the Ligurian Sea. A region where land and sea merge to create a unique and captivating area with breathtaking panoramas. A rocky coastline rich in bays, beaches, and deep waters, dominated by a mountain range running parallel to the shore.",
        "The Cinqueterre lamps, all featuring cordless LED technology and also available in a wired version, are handcrafted entirely from bent and painted metal. The color palette draws inspiration from the hues of the traditional Ligurian houses, ranging from red to orange, yellow, and from green to blue, reflecting the colors of the hills and the sea.",
        "The table lamp includes some handy features like a gutter and hooks to help keep your personal items organized."
      ],
      features: [
        {
          title: "European Product Design Award",
          body: "Winner 2024."
        },
        {
          title: "A' Design Award",
          body: "Awarded in 2024."
        }
      ],
      brand: "Lumere",
      brandHref: "https://www.lumere.it"
    },
    detailImages: [
      "/images/cinque-terre-2.png",
      "/images/cinque-terre-3.png",
      "/images/cinque-terre-4.png",
      "/images/cinque-terre-5.png"
    ],
    image: "/images/cinque-terre-1.png"
  },
  {
    slug: "scacco-matto",
    title: "Scacco Matto",
    category: "lighting",
    eyebrow: "Portable lamp",
    summary:
      "A portable lamp inspired by the radical design movement of the 1960s, transforming three magnetically connected elements into five different light sculptures.",
    facebookPost: `Scacco Matto

Scacco Matto is a portable lamp inspired by the radical design movement of the 1960s. Three magnetically connected elements can be rearranged into five different light sculptures, inviting people to explore how form changes light, atmosphere and use.

The object can become a vase, a sculpture, or a focused source of light for a specific area.

Its five possible combinations recall the game of chess. Scacco Matto is the Italian term for checkmate.`,
    details: {
      meta: [
        { label: "Photo", value: "Gaetano Del Mauro" },
        { label: "Date", value: "May 2024" }
      ],
      awardLogos: [
        {
          src: "/images/awards/archiproducts-awards-winner.jpg",
          title: "Archiproducts Design Awards 2024"
        },
        {
          src: "/images/awards/scacco-matto-epda-2023.png",
          title: "European Product Design Award 2023"
        },
        {
          src: "/images/awards/scacco-matto-a-design-award-2023-silver.png",
          title: "A' Design Award & Competition, Silver Winner 2023"
        },
        {
          src: "/images/awards/scacco-matto-taipei-design-award-2023.jpeg",
          title: "Taipei Design Award 2023"
        }
      ],
      awardLogoSize: "compact",
      paragraphs: [
        "Scacco Matto is inspired by the radical design movement of the 1960s and encourages audiences to explore and interact with shapes and light. This portable lamp features three magnetically connected elements that can be transformed into five different light sculptures, sparking renewed interest in how light influences the appearance, ambiance, and atmosphere of homes.",
        "It can serve as a vase, a sculpture, or as a way to direct light to a specific area. The five combinations evoke the game of chess, which is reflected in the name Scacco Matto, the Italian term for checkmate."
      ],
      links: [
        {
          label: "Archiproducts",
          text: "View Lumere profile",
          href: "https://www.archiproducts.com/en/lumere"
        }
      ],
      brand: "Lumere",
      brandHref: "https://www.lumere.it"
    },
    detailImages: [
      "/images/project3.jpg",
      "/images/scacco-matto-detail-2.jpg",
      "/images/scacco-matto-detail-3.png",
      "/images/scacco-matto-detail-4.png",
      "/images/scacco-matto-detail-5.png",
      "/images/scacco-matto-detail-6.png",
      "/images/scacco-matto-detail-7.png"
    ],
    image: "/images/scacco-matto-award-winner.png",
    shareImage: "/images/scacco-matto-detail-3.png",
    shareImageDimensions: { width: 3839, height: 2880 },
    featured: true
  },
  {
    slug: "damansara",
    title: "The Pavilion Crown",
    category: "lighting",
    eyebrow: "Lighting & Products",
    summary: "A curved lighting facade and drop-off area for Pavilion Damansara Heights Mall.",
    facebookPost: `The Pavilion Crown

The Pavilion Crown is a curved lighting facade and drop-off area designed for the main entrance of Pavilion Damansara Heights Mall in Kuala Lumpur. The cladding also works as a functional sunshade, reducing solar gain while giving the arrival sequence a distinct identity.

The pattern takes inspiration from Italian Bugnato, with hand-blown glass ornaments cut like princess diamonds to catch daylight as a subtle sparkle.

At night, DMX control turns the facade into a pixelated field of light for celebrations. Recycled glass and aluminium support the project's material approach.`,
    details: {
      meta: [
        { label: "Prize", value: "Winner in LED Exterior Lighting Design" },
        { label: "Lighting product company", value: "Lightsculptures / CappuccioDesignStudio" },
        { label: "Client", value: "Pavilion Damansara Heights" },
        { label: "Completion", value: "October 2023" },
        { label: "Location", value: "Kuala Lumpur, Malaysia" }
      ],
      paragraphs: [
        "The Crown lighting facade is a curved cladding and drop-off area designed for the main entrance of the Pavilion Damansara Heights Mall. The facade enhances the aesthetic appeal of the building while also working as a functional sunshade, reducing energy consumption and minimizing the mall environmental impact.",
        "The cladding pattern takes inspiration from the traditional Italian \"Bugnato\" style, with hand-blown glass ornaments in a princess-diamond cut that capture and reflect natural sunlight as a subtle sparkle throughout the day.",
        "At night, the DMX-controlled facade becomes a pixelated display for light shows during celebrations in Kuala Lumpur, while the use of recycled glass and aluminum keeps the material language aligned with the sustainability approach."
      ],
      awardLogo: "/images/awards/lit-lighting-design-awards-2023-winner.png",
      video: {
        label: "Video interview",
        title: "The Pavilion Crown video interview",
        embedUrl: "https://www.youtube.com/embed/jtcmoWLqPng?start=27",
        href: "https://www.youtube.com/watch?v=jtcmoWLqPng&t=27s"
      },
      links: [
        {
          label: "Feature",
          text: "Read on Designooor",
          href: "https://designooor.com/the-pavilion-crown/"
        },
        {
          label: "Award page",
          text: "View LIT winner profile",
          href: "https://litawards.com/winners/winner.php?id=3565&mode=win"
        }
      ],
      brand: "Lightsculptures",
      brandHref: "https://www.lightsculptures.co.th/"
    },
    detailImages: [
      "/images/pavilion-crown-2.png",
      "/images/pavilion-crown-3.png",
      "/images/pavilion-crown-4.png",
      "/images/pavilion-crown-5.png",
      "/images/pavilion-crown-6.png",
      "/images/pavilion-crown-7.png",
      "/images/pavilion-crown-8.png",
      "/images/pavilion-crown-gallery-1.jpg",
      "/images/pavilion-crown-gallery-2.jpg",
      "/images/pavilion-crown-gallery-3.jpg",
      "/images/pavilion-crown-gallery-4.jpg",
      "/images/pavilion-crown-gallery-5.jpg",
      "/images/pavilion-crown-gallery-6.jpg"
    ],
    image: "/images/pavilion-crown-1.png",
    featured: true
  },
  {
    slug: "home-collection-2026",
    title: "Home collection 2026 preview",
    category: "furniture",
    eyebrow: "Collectible pieces",
    summary: "A preview collection of furniture and objects focused on material clarity and domestic rituals.",
    facebookPost: `Home collection 2026 preview

This is a preview collection of furniture and objects developed around material clarity and domestic rituals.

The pieces consider the familiar actions of everyday life and give them a more deliberate physical presence. Form, surface and use are treated together, allowing each object to remain quiet while contributing character to the home.

More of the collection will follow as the work develops.`,
    image: "/images/project5.jpg",
    featured: true
  },
  {
    slug: "the-bird-and-the-silk-thread",
    title: "The Bird and the Silk Thread",
    seoTitle: "The Bird and the Silk Thread | Crystal Sculpture",
    category: "curated-art",
    additionalCategories: ["lighting"],
    eyebrow: "Lighting / Curated Art",
    summary:
      "The Bird and the Silk Thread by Francesco Cappuccio: a crystal bird light sculpture inspired by the Silk Road. Explore the original design and detail images.",
    shareImageDimensions: { width: 1083, height: 1655 },
    imageMetadata: {
      creator: "Francesco Cappuccio",
      creditText: "Francesco Cappuccio",
      copyrightNotice: "© Francesco Cappuccio",
      descriptions: {
        "/images/bird-silk-thread-1.png": "The Bird and the Silk Thread by Francesco Cappuccio: a suspended crystal bird with a raised wing and long flowing tail, carrying a ribbon in its beak in a tall stone atrium.",
        "/images/bird-silk-thread-2.png": "Close-up of the crystal bird's head, showing its dark eye, translucent beak and layered crystal feathers, from The Bird and the Silk Thread."
      }
    },
    facebookPost: `The Bird and the Silk Thread

The Bird and the Silk Thread captures a moment of luminous flight: a crystalline bird carries a single flowing ribbon, its silk thread.

The work is a tribute to the Silk Road, where objects, ideas and cultures travelled between East and West. Precision-cut crystal wings refract light into shifting hues, while the thread becomes a symbol of the invisible but enduring connections between lands, people and generations.

Light moves through the sculpture as trade once moved along the Silk Road, carrying stories of craft, beauty and exchange.`,
    details: {
      meta: [
        { label: "Design & images", value: "Francesco Cappuccio" },
        { label: "Field", value: "Lighting / Curated art" },
        { label: "Project type", value: "Light sculpture" },
        { label: "Material", value: "Precision-cut crystal" }
      ],
      paragraphs: [
        "The Bird and the Silk Thread is a crystal bird light sculpture designed by Francesco Cappuccio. A suspended bird carries a single flowing ribbon, its silk thread, capturing a moment of luminous flight.",
        "This ethereal form becomes both a messenger and a symbol: a tribute to the ancient Silk Road, where caravans carried treasures, ideas, and cultures between East and West.",
        "The bird's radiant wings, crafted from precision-cut crystal, refract light into shifting hues, echoing the endless horizons of that historic journey. The silk thread it carries speaks of connection, the invisible yet enduring bonds that link lands, people, and generations.",
        "Light flows through the sculpture as trade once flowed along the Silk Road, weaving together stories of beauty, craftsmanship, and exchange.",
        "Neither grounded nor bound, the bird rises as an emblem of aspiration and discovery, a timeless reminder that every journey, no matter how far, begins with a single, delicate thread."
      ],
      features: [
        {
          title: "Luminous flight",
          body:
            "A suspended crystalline figure turns movement, reflection, and transparency into an architectural gesture."
        },
        {
          title: "Silk Road tribute",
          body:
            "The single flowing thread becomes a symbol of exchange, memory, and connection between cultures."
        }
      ]
    },
    detailImages: ["/images/bird-silk-thread-2.png"],
    image: "/images/bird-silk-thread-1.png"
  },
  {
    slug: "framed",
    title: "Framed",
    category: "curated-art",
    additionalCategories: ["lighting"],
    eyebrow: "Lighting / Curated Art",
    summary:
      "A light sculpture for Sarath Ratanavadi that moves from framed constraint toward raw crystal, personal awakening, and inner light.",
    facebookPost: `Framed

Framed is a light sculpture designed for Sarath Ratanavadi in Bangkok. It considers the journey from constraint toward personal awakening and inner light.

The central frame represents the pressures of modern life: conformity, external influence and imposed values. As the rigid frames detach and transform into raw crystal, the work moves toward the search for truth, freedom and self-guidance.

The installation invites the viewer to look beyond fixed systems and to find meaning through conscious experience and choice.`,
    details: {
      meta: [
        { label: "Project type", value: "Art installation" },
        { label: "Date", value: "July 2022" },
        { label: "Location", value: "Bangkok" },
        { label: "Client", value: "Sarath Ratanavadi" }
      ],
      paragraphs: [
        "Framed is a light sculpture designed for Sarath Ratanavadi, the Thai billionaire and the founder and CEO of Gulf Energy Development.",
        "Inspired by existentialist thought, the installation symbolizes the journey from societal confusion to personal awakening. The central frame represents the constraints of modern life: ignorance, conformity, and external influence.",
        "As frames detach and transform into raw crystal, they embody the individual's search for truth, freedom, and inner light.",
        "The piece invites viewers to transcend rational thought and imposed values, embracing self-guidance and conscious presence. It reflects the existential belief that meaning is self-created through experience and choice."
      ],
      features: [
        {
          title: "From frame to crystal",
          body:
            "Rigid geometric boundaries detach and dissolve into raw crystalline light, suggesting the transition from constraint to awakening."
        },
        {
          title: "Existential journey",
          body:
            "The installation asks viewers to look beyond imposed systems and locate meaning through conscious experience and choice."
        }
      ],
      clientLogo: {
        src: "/images/clients/gulf-energy.png",
        title: "Gulf Energy Development"
      },
      links: [
        {
          label: "Project website",
          href: "https://www.stonehill.co.th/",
          text: "Stonehill Golf Club"
        }
      ]
    },
    detailImages: [
      "/images/framed-2.png",
      "/images/framed-3.png",
      "/images/framed-4.png",
      "/images/framed-5.png",
      "/images/framed-6.png",
      "/images/framed-7.png",
      "/images/framed-8.png",
      "/images/framed-9.png"
    ],
    image: "/images/framed-1.png"
  },
  {
    slug: "original-sin",
    title: "Original Sin",
    category: "curated-art",
    eyebrow: "Curated Art",
    summary:
      "A three-artist interpretive triptych merging Bangkok's hedonism with the cautionary tale of Adam and Eve from the Book of Genesis.",
    facebookPost: `Original Sin

Original Sin is a three-artist interpretive triptych that merges the hedonism of Bangkok with the cautionary tale of Adam and Eve.

The work brings together a Thai-silk-inspired glass bust of Eve by Alexi Silk, a bronzed Garden of Eden by Francesco Cappuccio, and Serpentine with the Apple of Temptation by Grant Gramezy.

A Thai king cobra waits below the suspended scene, interrupting its beauty with the threat of consequence. The installation relocates an ancient story of desire and temptation within a contemporary Bangkok atmosphere.`,
    details: {
      meta: [
        { label: "Project type", value: "Art installation" },
        { label: "Location", value: "Brenton Mauriello private collection, Bangkok" },
        { label: "Artists", value: "Alexi Silk / Francesco Cappuccio / Grant Gramezy" }
      ],
      paragraphs: [
        "An inspired trittico, Original Sin brings together three world-renowned artists who collectively create an interpretive vision that seamlessly merges the dangers and hedonism of Bangkok with the cautionary tale of Adam and Eve from the Book of Genesis.",
        "Imbued with Thai silk motifs, the sensual and curvaceous bust of Eve, crafted by glass artist Alexi Silk, hangs serenely, as if magically suspended, above the exotic, bronzed Garden of Eden designed by Francesco Cappuccio.",
        "However, this celestial scene is disrupted by the jarring presence of Serpentine and the defiled Apple of Temptation, created by glass artist Grant Gramezy.",
        "As temptation takes hold, an ominous scene unfolds. A Thai king cobra lurks below, its head raised, ready to strike Eve and shatter the tranquility and beauty of the Garden of Eden, foreboding what is to come."
      ],
      features: [
        {
          title: "Three-part vision",
          body:
            "Glass, bronze, reflection, and myth converge in a contemporary reading of temptation, beauty, and consequence."
        },
        {
          title: "Bangkok Eden",
          body:
            "Thai silk motifs and a bronzed garden setting relocate the Genesis narrative into a sensuous, urban Bangkok atmosphere."
        }
      ]
    },
    detailImages: ["/images/original-sin-2.jpg"],
    image: "/images/original-sin-1.png"
  },
  {
    slug: "hill-bench-storage",
    title: "\"Hill\" 2-in-1 Bench & Storage",
    category: "furniture",
    eyebrow: "Furniture",
    summary:
      "A modern 2-in-1 furniture piece that combines a comfortable bench with an angled shoe storage rack for entryways, homes, and semi-public spaces.",
    facebookPost: `Hill 2-in-1 Bench & Storage

Hill is a compact furniture piece designed for the entryway. It combines a comfortable bench with an angled shoe-storage rack, bringing seating and organisation together in one clear profile.

The steel construction gives the piece a strong, graphic presence while keeping the form minimal and practical for homes and semi-public spaces.

Hill makes daily essentials easier to place, store and reach without adding visual clutter to the room.`,
    details: {
      meta: [
        { label: "Project type", value: "Bench / storage" },
        { label: "Material", value: "Dust-coated steel" }
      ],
      paragraphs: [
        "Meet \"Hill,\" a modern 2-in-1 furniture piece designed to elevate your entryway. Combining a comfortable bench with an angled shoe storage rack, it maximizes both organization and space.",
        "Crafted from durable, dust-coated steel, this strong, minimalist design perfectly complements homes and semi-public spaces while keeping daily essentials beautifully organized."
      ],
      features: [
        {
          title: "2-in-1 design",
          body: "A clean bench profile integrates angled shoe storage below the seat, keeping entryways functional and uncluttered."
        },
        {
          title: "Minimal steel construction",
          body: "The durable steel frame gives the piece a strong, graphic presence for domestic and semi-public interiors."
        }
      ]
    },
    detailImages: [
      "/images/hill-bench-storage-detail-1.jpg",
      "/images/hill-bench-storage-detail-2.jpg"
    ],
    image: "/images/hill-bench-storage.jpg"
  },
  {
    slug: "akuna-lighting-experience",
    title: "Akuna lighting experience",
    category: "lighting",
    eyebrow: "Lighting & Products",
    summary:
      "A lighting project for Le Meridien Saigon that turns the idea of flowing water into a layered sequence of light, glass, and shadow.",
    facebookPost: `Akuna lighting experience

Akuna was created for Le Meridien Saigon, taking its name from an Australian Aboriginal term for flowing water. The project explores water in its three states: solid, liquid and gas.

In the lift lobby, On the Rocks sconces suggest melting ice. In the private room, the ice becomes a chandelier with dimmable downlight. At the counter, ten illuminated drops express the liquid state, while the Waves chandelier creates a suspended splash above the chef table.

Waves is built from 300 twisted Murano glass tubes and 800 straight glass tubes. Recycled glass and aluminium fittings form part of the material approach.`,
    details: {
      meta: [
        { label: "Project type", value: "Lighting design / product" },
        { label: "Client", value: "Le Meridien Saigon" },
        { label: "Completion", value: "May 2023" },
        { label: "Location", value: "Saigon, Vietnam" }
      ],
      paragraphs: [
        "The bar name Akuna takes inspiration from the Australian Aboriginal term that means \"flowing water\". The design concept revolves around the three fundamental states of water: solid, liquid, and gas.",
        "The journey begins with the sconces \"on the rocks\" in the lift lobby, where the solid ice state appears to melt under the light. In the private room, the ice elements become a chandelier form with dimmable down lighting over the dining table.",
        "At the counter, ten illuminated oversized drops express the liquid state, while the sculptural chandelier \"Waves\" wraps the chef table and suggests the splash and movement of gas. The piece is built from 300 twisted Murano glass tubes and 800 straight glass tubes, suspended from a U-shaped canopy with narrow-beam spotlights.",
        "Lightsculptures also emphasizes a sustainability approach, using recycled glass and aluminum fittings to reduce material impact while preserving the expressive potential of the installation."
      ],
      features: [
        {
          title: "On the rocks sconces",
          body:
            "A set of wall sconces for the lift lobby that suggests the solid ice state melting under light."
        },
        {
          title: "\"Waves\" chandelier",
          body:
            "A sculptural chandelier for the dining room, composed of Murano glass tubes and integrated LED and spotlight illumination."
        }
      ],
      awardLogo: "/images/awards/lit-lighting-design-awards-2023-winner.png",
      brand: "Lightsculptures",
      brandHref: "https://www.lightsculptures.co.th/"
    },
    detailImages: [
      "/images/akuna-lit-award-1.png",
      "/images/akuna-lit-award-2.png",
      "/images/akuna-lighting-experience-detail-1.jpg",
      "/images/akuna-lighting-experience-detail-2.jpg",
      "/images/akuna-lighting-experience-detail-4.jpg",
      "/images/akuna-lighting-experience-detail-5.jpg"
    ],
    image: "/images/project6.jpg",
    featured: true
  },
  {
    slug: "wai",
    title: "WAI",
    category: "lighting",
    eyebrow: "Lighting & Products",
    summary:
      'A sculptural chandelier for Sofitel that transforms the Thai "Wai" greeting into orchid-like steel petals and 1200 handcrafted recycled-glass water droplets.',
    facebookPost: `WAI

Based on Sofitel's French heritage and Thailand's longstanding relationship with France, this sculptural chandelier reflects the traditional Thai greeting known as the Wai, a gesture of respect and friendship.

The Wai combines a slight bow with palms pressed together. Two delicate orchid-like steel petals are arranged to capture the suspended moment before that gesture reaches its symmetrical culmination.

The composition is completed by 1200 handcrafted water droplets made from recycled glass. Their placement was developed through an algorithm to suggest the splash created by the union of the two petals.

The work also recalls Songkran and becomes a quiet symbol of welcome, inclusivity and graciousness.`,
    details: {
      meta: [
        { label: "Designer", value: "Francesco Cappuccio" },
        { label: "Interior design", value: "P49" },
        { label: "Project type", value: "Sculptural chandelier" },
        { label: "Material", value: "Recycled glass droplets / steel petals" }
      ],
      awardLogos: [
        {
          src: "/images/awards/muse-design-awards.png",
          title: "Muse Design Awards",
          href: "https://design.museaward.com/winners-info.php?id=17484"
        }
      ],
      paragraphs: [
        'Based on Sofitel\'s French heritage and Thailand\'s longstanding relationship with France, the sculptural chandelier reflects the traditional Thai gesture of greetings, known as the "Wai," which symbolizes respect and friendship between the two nations.',
        "The Wai gesture involves a slight bow accompanied by the pressing together of palms in a prayer-like manner. We have aptly epitomized this gesture by arranging with precision two delicate petals from the orchid flower, imparting an illusionary perception of temporal suspension, graciously encapsulating the precise moment prior to the symmetrical culmination of said gesture.",
        "The artistic creation has been then completed by incorporating a total of 1200 handcrafted water droplets made of recycled glass. The arrangement of these droplets has been orchestrated employing a meticulously crafted algorithm to enhance the water splash effect resulting from the union of the two steel petals.",
        "The work also resembles the esteemed Songkran Festival, a symbolic commencement of the traditional Thai New Year which holds great significance within the auspicious calendar of the Buddhist faith.",
        "The chandelier serves as a perpetual symbol of the importance of greetings. It quietly shares narratives of customs, inclusivity, and graciousness, mirroring the essence of Thailand. It recounts the tales of a country where its inhabitants radiate genuine kindness, embracing every visitor with open hearts and a genuine display of kindness."
      ],
      links: [
        {
          label: "Award page",
          text: "View Muse Design Awards profile",
          href: "https://design.museaward.com/winners-info.php?id=17484"
        }
      ]
    },
    detailImages: [
      "/images/wai-2.png",
      "/images/wai-3.png",
      "/images/wai-4.png",
      "/images/wai-5.png",
      "/images/wai-6.png"
    ],
    image: "/images/wai-1.png"
  },
  {
    slug: "gio",
    title: "GIO'",
    category: "lighting",
    eyebrow: "Lighting & Products",
    summary:
      "Inspired by Gio Ponti, this wall lamp pairs glowing frosted glass orbs with the sharp modern lines of a metallic base.",
    facebookPost: `GIO'

GIO' was designed for Sarath Ratanavadi at Stonehill Golf Club in Bangkok. Inspired by Gio Ponti, the wall lamp pairs glowing frosted glass orbs with the sharp, modern geometry of a metallic base.

The stacked spheres create a soft ambient glow across the wall, while the rectangular backplate gives the composition a precise architectural anchor.

The piece brings a compact mid-century character to the interior, turning functional illumination into a measured visual statement.`,
    details: {
      meta: [
        { label: "Project type", value: "Art installation" },
        { label: "Date", value: "July 2022" },
        { label: "Location", value: "Bangkok" },
        { label: "Client", value: "Sarath Ratanavadi" }
      ],
      paragraphs: [
        "GIO' was designed for Sarath Ratanavadi, the founder and CEO of Gulf Energy Development, for the Stonehill Golf Club project in Bangkok.",
        "Inspired by the master, Gio Ponti, this wall lamp features glowing, frosted glass orbs that contrast beautifully with the sharp, modern lines of its metallic base.",
        "Bringing sophisticated mid-century flair to any space, the timeless design transforms functional illumination into a captivating architectural feature. The stacked, luminous spheres create a soft, ambient glow that gently washes across your walls, while the sleek rectangular backplate anchors the piece with striking geometric precision.",
        "This interplay of pure shapes and premium materials perfectly captures Ponti's visionary approach, offering an elegant, compact visual statement that elevates the atmosphere of contemporary and classic interiors alike."
      ],
      clientLogo: {
        src: "/images/clients/gulf-energy.png",
        title: "Gulf Energy Development"
      },
      brand: "Lightsculptures",
      brandHref: "https://www.lightsculptures.co.th/",
      links: [
        {
          label: "Project website",
          href: "https://www.stonehill.co.th/",
          text: "Stonehill Golf Club"
        }
      ]
    },
    image: "/images/project7.jpg"
  },
  {
    slug: "quadra",
    title: "Quadra",
    category: "lighting",
    eyebrow: "Lighting & Products",
    summary:
      "A bold geometric lighting composition pairing sculptural metal frames with double-engraved Murano glass.",
    facebookPost: `Quadra

Quadra was created for Gulf Energy Thailand at Stonehill Golf Club in Bangkok. The lighting family translates the project's strong architectural rhythm into pendant and wall luminaires.

Sculptural metal frames are paired with double-engraved Murano glass. Its deep, hand-worked surface catches and refracts light, giving each square element crystalline depth and a warm, controlled glow.

Repeated through the lobby and as wall lights, the modular composition brings continuity to the interior while balancing monumental scale with Venetian glass craftsmanship.`,
    details: {
      meta: [
        { label: "Project type", value: "Decorative lighting installation" },
        { label: "Date", value: "July 2022" },
        { label: "Location", value: "Stonehill Golf Club, Bangkok" },
        { label: "Client", value: "Gulf Energy Thailand" }
      ],
      paragraphs: [
        "Quadra was created for Gulf Energy Thailand at Stonehill Golf Club in Bangkok, translating the project's strong architectural rhythm into a family of pendant and wall luminaires.",
        "Bold geometric metal frames are paired with double-engraved Murano glass. The deep, hand-worked texture catches and refracts the light, giving each square glass element crystalline depth and a warm, controlled glow.",
        "Suspended throughout the lobby and repeated as wall lights, the modular composition brings visual continuity to the interior while balancing monumental scale with the precision of Venetian glass craftsmanship."
      ],
      clientLogo: {
        src: "/images/clients/gulf-energy.png",
        title: "Gulf Energy Thailand"
      },
      brand: "Vistosi",
      brandHref: "https://vistosi.it/?lang=en",
      links: [
        {
          label: "Project website",
          href: "https://www.stonehill.co.th/",
          text: "Stonehill Golf Club"
        }
      ]
    },
    detailImages: [
      "/images/quadra-2.png",
      "/images/quadra-gallery-1.jpg",
      "/images/quadra-gallery-2.jpg",
      "/images/quadra-gallery-3.jpg",
      "/images/quadra-gallery-4.jpg"
    ],
    image: "/images/quadra-1.png",
    imagePosition: "50% 50%"
  },
  {
    slug: "amsterdam",
    title: "Amsterdam",
    category: "lighting",
    eyebrow: "Lighting & Products",
    summary:
      "A polycarbonate chandelier inspired by the warm glow of Amsterdam's canal-house windows reflected in the water.",
    facebookPost: `Amsterdam

Amsterdam began with a personal memory of the large canal-house windows glowing at night and reflecting into the dark water. At this northern latitude, the historic houses use generous windows to draw every possible ounce of daylight inside. At night, those windows become warm lightboxes.

The Amsterdam chandelier translates that image into a large, bold polycarbonate form. Its shape is conceived as a window, using a diffuse glow to bring atmosphere as well as functional light.

The work materialises a moment of the city: dark frames, warm interiors and their reflections on the canal.`,
    details: {
      meta: [
        { label: "Project type", value: "Chandelier" },
        { label: "Material", value: "Polycarbonate" }
      ],
      paragraphs: [
        "The large windows' light reflecting into the canals are what impressed me as a lighting designer when I visited Amsterdam. Photos are essentially slices of time. We take them to freeze a moment, to keep a memory safe so we can examine it later.",
        "Because of the northern latitude and the historic need to pull every ounce of sunlight into those narrow canal houses, the windows are massive. At night, they transform. They become giant, glowing lightboxes. The dark, rigid window frames silhouette against the warmth of the interiors, and it all reflects into the dark water of the canals.",
        "I wanted to materialize that memory with the \"Amsterdam\" chandelier and create this diffuse glow using polycarbonate. The result is a soft ambient light made possible by the large, bold shape of the fixture, designed just like a window. It is not just a decorative light, but it performs beautifully as a highly functional, diffuse light source."
      ]
    },
    detailImages: [
      "/images/amsterdam-lighting-1.jpg",
      "/images/amsterdam-lighting-2.jpg",
      "/images/amsterdam-lighting-3.jpg",
      "/images/amsterdam-reference-watermarked.jpg"
    ],
    image: "/images/amsterdam-lighting-hero.png"
  },
  {
    slug: "metro",
    title: "Metro",
    category: "furniture",
    eyebrow: "Furniture",
    summary:
      "An architectural bench and stool collection rooted in industrial urbanism, defined by checker-plate surfaces, colour, and shadow.",
    facebookPost: `Metro

Metro is a bench and stool collection rooted in industrial urbanism. It is an architectural study of volume, colour and shadow, with essential forms that can act as seating, surface or spatial marker.

Checker-plate elements bring a tactile, civic character to the pieces. Black, white, yellow and orange finishes sharpen their graphic presence.

Together, the bench and stools form a flexible family for interiors where furniture contributes directly to the composition of the room.`,
    details: {
      meta: [{ label: "Project type", value: "Bench & stool collection" }],
      paragraphs: [
        "Rooted in industrial urbanism, Metro is an architectural study of volume, colour, and shadow. Essential forms and a rigorous profile allow the collection to move between seating, surface, and spatial marker.",
        "Checker-plate elements bring a tactile, civic character to the pieces, while the distinct black, white, yellow, and orange finishes sharpen their graphic presence. Together, the bench and stools create a flexible family for interiors where furniture contributes directly to the composition of the room."
      ]
    },
    detailImages: ["/images/metro-bench-2.jpg", "/images/metro-bench-3.jpg"],
    image: "/images/metro-bench-1.jpg"
  },
  {
    slug: "nexum",
    title: "Nexum",
    category: "furniture",
    eyebrow: "Furniture",
    summary: "Nexum — Connection, made solid.",
    facebookPost: `Nexum

Nexum, connection made solid, is a coffee table designed for Vertier. Its name comes from the Latin word for binding.

Overlapping biomorphic geometries are brought together as one continuous, monolithic volume. The piece creates a fluid spatial node, disrupting orthogonal rigidity and anchoring circulation within dynamic architectural environments.

A wood structure, leather cover and laminated glass define the table's material presence, balancing tactile softness with a precise, durable surface.`,
    details: {
      meta: [
        { label: "Project type", value: "Coffee table" },
        { label: "Designed for", value: "Vertier" },
        { label: "Materials", value: "Wood structure, leather cover & laminated glass" }
      ],
      paragraphs: [
        "Nexum — Connection, made solid.",
        "Derived from the Latin for \"binding,\" this piece fuses overlapping biomorphic geometries into a continuous monolithic volume. It creates a fluid spatial node that disrupts orthogonal rigidity, anchoring circulation within dynamic architectural environments.",
        "A wood structure, leather cover, and laminated glass define its material presence."
      ]
    },
    detailImages: [
      "/images/nexum-coffee-table-hero.jpg",
      "/images/nexum-coffee-table-2.jpg",
      "/images/nexum-coffee-table-3.jpg",
      "/images/nexum-coffee-table-4.jpg"
    ],
    image: "/images/nexum-coffee-table-1.jpg"
  },
  {
    slug: "hinge",
    title: "HINGE",
    category: "furniture",
    eyebrow: "Furniture",
    summary:
      "A coffee table that exposes its folded-steel structure, black marble and crystal-clear glass in one visible structural composition.",
    facebookPost: `HINGE

The HINGE Table is a deliberate exercise in structural honesty. Seeking to elevate the utilitarian language of the workshop sawhorse, the design reimagines a heavy-duty door hinge as its central structural spine.

The folded steel base deliberately eliminates concealment, leaving high-load joints exposed so physical tension becomes the defining aesthetic. A 12 mm crystal-clear glass surface locks precisely over black marble, protecting the natural stone while giving the heavy composition an illusion of cantilevered weightlessness.

Raw steel, decorative stone and invisible glass, held in visible tension.`,
    details: {
      meta: [
        { label: "Project type", value: "Coffee table" },
        { label: "Designed for", value: "Vertier" },
        { label: "Materials", value: "Folded steel / black marble / 12 mm crystal-clear glass" }
      ],
      paragraphs: [
        "The HINGE Table is a deliberate exercise in structural honesty. Seeking to elevate the utilitarian language of the workshop sawhorse, the design reimagines a heavy-duty door hinge as its central structural spine.",
        "The folded steel base deliberately eliminates concealment, leaving high-load joints exposed so pure physical tension becomes the defining aesthetic.",
        "To resolve the functional limits of porous natural stone, a 12 mm crystal-clear glass surface locks precisely over the black marble. This protects the material while granting the heavy composition an illusion of cantilevered weightlessness.",
        "Raw steel, decorative stone, and invisible glass, held in visible tension."
      ],
      brand: "Vertier"
    },
    detailImages: [
      "/images/hinge-table-detail-angle.jpg",
      "/images/hinge-table-hinge-detail.jpg",
      "/images/hinge-table-side.jpg",
      "/images/hinge-table-marble-detail.jpg",
      "/images/hinge-table-context.jpg"
    ],
    image: "/images/hinge-table-hero.jpg",
    hoverImage: "/images/hinge-table-detail-angle.jpg",
    imagePosition: "50% 65%"
  },
  {
    slug: "aries-sofa",
    title: "Aries Sofa",
    category: "furniture",
    eyebrow: "Furniture",
    summary: "A furniture piece with a soft architectural profile and an intentionally calm presence.",
    facebookPost: `Aries Sofa

Aries is a sofa inspired by the idea of strength wrapped in softness. Its deep, enveloping form and thick textures evoke the experience of sinking into warm, natural wool, like being held within the protective coat of a ram.

The piece is made from sustainably sourced high-density wool and eco-friendly materials, creating a tactile connection to nature within the interior.

Aries is conceived as a quiet sensory experience of warmth, texture and grounding calm.`,
    details: {
      meta: [
        { label: "Project type", value: "Sofa" },
        { label: "Year", value: "2024" },
        { label: "Material", value: "Sustainably sourced high-density wool / eco-friendly materials" }
      ],
      paragraphs: [
        "Inspired by the spirit of Aries, this sofa embodies strength wrapped in softness. With its deep, enveloping shape and thick, cozy textures, Aries evokes the sensation of sinking into warm, natural wool, like being cradled in the protective coat of a ram.",
        "Crafted from sustainably sourced, high-density wool and eco-friendly materials, the Aries Sofa offers a tactile connection to nature in interior spaces.",
        "It is a sensory experience of warmth, texture, and grounding calm, a tribute to nature."
      ],
      features: [
        {
          title: "Strength wrapped in softness",
          body:
            "A deep, enveloping silhouette balances sculptural presence with a warm and protective sense of comfort."
        },
        {
          title: "Natural tactile calm",
          body:
            "High-density wool and eco-conscious materials create a grounded, sensory furniture piece for quiet interiors."
        }
      ]
    },
    detailImages: ["/images/aries-sofa-2.png"],
    image: "/images/aries-sofa-1.png"
  },
];

const featuredProjectSlugs = [
  "mandarin-oriental-riverside-bangkok",
  "damansara",
  "scacco-matto",
  "gio",
  "akuna-lighting-experience",
  "falcons"
];

export const featuredProjects = featuredProjectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => Boolean(project));

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

