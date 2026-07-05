export type ProjectCategory = "featured" | "lighting" | "furniture" | "curated-art";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  eyebrow: string;
  summary: string;
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
  featured?: boolean;
};

export const navigation = [
  { label: "WORK", href: "/work" },
  { label: "ABOUT", href: "/#about" },
  { label: "CONTACT", href: "/#contact" }
];

export const socialLinks = [
  { label: "FB", href: "https://www.facebook.com/francescocappucciodesign/" },
  { label: "IN", href: "https://www.linkedin.com/in/francesco-cappuccio-532a6644/" },
  { label: "IG", href: "https://www.instagram.com/francescocappucciodesign/" },
  { label: "PI", href: "https://www.pinterest.com/innovativedesignpills/" }
];

export const studio = {
  name: "CAPPUCCIODESIGNSTUDIO",
  quote:
    '"The greatest challenge of being a creative individual is to maintain a childlike imagination while growing the constraints of acquired knowledge."',
  quoteBy: "Francesco Cappuccio",
  intro:
    "With over three decades of experience, Cappuccio Design Studio has cultivated a reputation for design excellence, earning 35 international awards, including the Archiproducts Design Award 2024, Red Dot Design Award, and European Design Award.",
  paragraphs: [
    "Our work spans a diverse spectrum, from sculptural lighting and immersive installations to large-scale architectural facades, each project driven by a deep sensitivity to space, light, and innovation.",
    "Rooted in the art of light, our practice explores its expressive and functional dimensions, crafting pieces that are both poetic and purposeful.",
    "From luminous sculptures to integrated architectural systems, every creation is conceived as an experience, balancing technology with emotion.",
    "In recent years, our creative vision has expanded to embrace collectible furniture and design objects, works that merge material experimentation with intentionality. These pieces reflect our pursuit of designs that are emotionally resonant, environmentally responsible, and timeless in their impact.",
    "Collaboration lies at the heart of our process. Engaging with leading international brands and visionary clients allows us to push boundaries, challenge conventions, and remain steadfast in our curiosity, always seeking the unexpected, always guided by a commitment to meaningful form and lasting beauty."
  ],
  address: "2/1, Soi Ramkhamhaeng 12, Yeak 4, Hua Mak, Bangkapi, Bangkok 10240, Thailand",
  copyright: "@2025 fcdsbkk"
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
      "/images/mandarin-oriental-4.jpg"
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
    details: {
      meta: [
        { label: "Project type", value: "Light sculptures" },
        { label: "Date", value: "April 2025" },
        { label: "Location", value: "SOMA Riverside Hotel, Phnom Penh" }
      ],
      paragraphs: [
        "Introducing \"Harvest,\" a captivating sculptural light installation at the SOMA Riverside Hotel . Infused with passion and artistry, this piece draws inspiration from the ocean's enchanting treasures, embodying the essence of its allure with a design reminiscent of a fisherman's steel net. The installation not only illuminates the space but also serves as a heartfelt homage to the vital importance of the sea and its bounty for the local fishing community, reminding us all of the beauty and fragility of our oceans.",
        "It's a poetic homage to the ocean's bounty, inviting guests to pause, look up, and reflect on our shared connection to nature's wonders."
      ]
    },
    detailImages: [
      "/images/harvest-2.png",
      "/images/harvest-3.png",
      "/images/harvest-4.png"
    ],
    image: "/images/harvest-1.png"
  },
  {
    slug: "falcons",
    title: "Falcons",
    category: "lighting",
    eyebrow: "Lighting & Products",
    summary:
      "A collection of illuminated falcon sculptures designed for museum galleries and upscale hotel lobbies across the Middle East.",
    details: {
      paragraphs: [
        "Introducing Falcons by francescocappuccio, a collection of illuminated sculptures crafted from laser-cut aluminum, cast brass, and crystals. Perfect for prestigious museum galleries and upscale hotel lobbies in the Middle East, these pieces are designed to elevate the atmosphere and create a space that embodies artistic sophistication.",
        "In a historical tapestry rich with tradition, falcons were cherished partners in the hunt, vital to the sustenance of their communities. This ancient practice established an unbreakable bond between humans and these magnificent birds, an alliance forged in trust, respect, and a shared pursuit that transcends mere survival, turning each flight into a dance of devotion and harmony between two remarkable spirits."
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
      ]
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
    category: "featured",
    eyebrow: "Portable lamp",
    summary:
      "A portable lamp inspired by the radical design movement of the 1960s, transforming three magnetically connected elements into five different light sculptures.",
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
          src: "/images/awards/european-product-design-award-2019-gold.png",
          title: "European Product Design Award"
        }
      ],
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
      "/images/scacco-matto-detail-2.jpg",
      "/images/scacco-matto-detail-3.png",
      "/images/scacco-matto-detail-4.png",
      "/images/scacco-matto-detail-5.png",
      "/images/scacco-matto-detail-6.png",
      "/images/scacco-matto-detail-7.png"
    ],
    image: "/images/project3.jpg",
    featured: true
  },
  {
    slug: "damansara",
    title: "The Pavilion Crown",
    category: "lighting",
    eyebrow: "Lighting & Products",
    summary: "A curved lighting facade and drop-off area for Pavilion Damansara Heights Mall.",
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
      "/images/pavilion-crown-8.png"
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
    image: "/images/project5.jpg",
    featured: true
  },
  {
    slug: "the-bird-and-the-silk-thread",
    title: "The Bird and the Silk Thread",
    category: "curated-art",
    eyebrow: "Curated Art",
    summary:
      "A crystalline bird carries a single flowing silk thread, becoming a luminous tribute to the Silk Road and the bonds between East and West.",
    details: {
      meta: [
        { label: "Field", value: "Curated art" },
        { label: "Project type", value: "Light sculpture" },
        { label: "Material", value: "Precision-cut crystal" }
      ],
      paragraphs: [
        "Grace in motion, The Bird and the Silk Thread captures a moment of luminous flight, a crystalline bird carrying a single flowing ribbon, its silk thread.",
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
    eyebrow: "Curated Art",
    summary:
      "A light sculpture for Sarath Ratanavadi that moves from framed constraint toward raw crystal, personal awakening, and inner light.",
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
      brand: "Lightsculptures",
      brandHref: "https://www.lightsculptures.co.th/"
    },
    detailImages: [
      "/images/akuna-lit-award-1.png",
      "/images/akuna-lit-award-2.png",
      "/images/akuna-lighting-experience-detail-1.jpg",
      "/images/akuna-lighting-experience-detail-2.jpg",
      "/images/akuna-lighting-experience-detail-3.jpg",
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
    details: {
      paragraphs: [
        "Inspired by the master, Gio Ponti, this wall lamp features glowing, frosted glass orbs that contrast beautifully with the sharp, modern lines of its metallic base.",
        "Bringing sophisticated mid-century flair to any space, the timeless design transforms functional illumination into a captivating architectural feature. The stacked, luminous spheres create a soft, ambient glow that gently washes across your walls, while the sleek rectangular backplate anchors the piece with striking geometric precision.",
        "This interplay of pure shapes and premium materials perfectly captures Ponti's visionary approach, offering an elegant, compact visual statement that elevates the atmosphere of contemporary and classic interiors alike."
      ],
      brand: "Lightsculptures",
      brandHref: "https://www.lightsculptures.co.th/"
    },
    image: "/images/project7.jpg"
  },
  {
    slug: "aries-sofa",
    title: "Aries Sofa",
    category: "furniture",
    eyebrow: "Furniture",
    summary: "A furniture piece with a soft architectural profile and an intentionally calm presence.",
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
  "gio"
];

export const featuredProjects = featuredProjectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => Boolean(project));

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

