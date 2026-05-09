// ============================================
// PORTFOLIO CONFIGURATION FILE
// All site content is managed through this configuration object.
// Edit the values below to update the website content.
// ============================================

const portfolioConfig = {
  // Navigation
  nav: {
    brand: "faizwidodo.com",
    connectButton: {
      text: "Connect on LinkedIn",
      link: "https://www.linkedin.com/in/faizwidodo"
    }
  },

  // Hero Section
  hero: {
    status: ">>>",
    title: {
      line1: "Faiz Widodo",
      line2: "Product Manager"
    },
    description: "Building and improving products to deliver meaningful customer value.",
    highlightWords: [] // Words to highlight in description
  },

  // Companies/Partners
  companies: [
    { 
      name: "AMAZON", 
      url: "https://www.amazon.com",
      glowColor: "#FF9900"
    },
    { 
      name: "ALEXA", 
      url: "https://developer.amazon.com/alexa",
      glowColor: "#00CAFF"
    },
    { 
      name: "BYTEDANCE", 
      url: "https://www.bytedance.com",
      glowColor: "#3482FF"
    },
    { 
      name: "TOKOPEDIA", 
      url: "https://www.tokopedia.com",
      glowColor: "#42B549"
    },
    { 
      name: "TRAVELOKA", 
      url: "https://www.traveloka.com",
      glowColor: "#0194F3"
    },
    { 
      name: "ABB", 
      url: "https://www.abb.com",
      glowColor: "#FF0000"
    },
    { 
      name: "FORMULATRIX", 
      url: "https://www.formulatrix.com",
      glowColor: "#00B4D8"
    }
  ],

  // Domain Experience Tags (shuffled to keep similar items apart)
  domains: [
    { name: "CONVERSATIONAL_AI", icon: "forum" },
    { name: "B2C_MARKETPLACE", icon: "shopping_cart" },
    { name: "ROBOTICS", icon: "memory" },
    { name: "TRAVEL_TECH", icon: "travel_explore" },
    { name: "ML_PERSONALIZATION", icon: "person_search" },
    { name: "MARKETPLACE_ADS", icon: "ads_click" },
    { name: "INDUSTRIAL_AUTOMATION", icon: "settings_input_component" },
    { name: "LLM_PRODUCTS", icon: "model_training" },
    { name: "MONETIZATION", icon: "monetization_on" },
    { name: "PRODUCT_PLATFORMS", icon: "dns" },
    { name: "RECOMMENDER_SYSTEMS", icon: "auto_awesome" },
    { name: "FLIGHT_BOOKING", icon: "airplane_ticket" },
    { name: "MANUFACTURING", icon: "factory" },
    { name: "PRICING_REVENUE", icon: "payments" },
    { name: "HUMAN_ROBOT_INTERACTION", icon: "precision_manufacturing" },
    { name: "TICKETING", icon: "confirmation_number" },
    { name: "EMBEDDED_SYSTEMS_IOT", icon: "developer_board" },
    { name: "GROWTH_RETENTION", icon: "trending_up" },
    { name: "INTERNAL_TOOLS", icon: "build" },
    { name: "VOICE_ASSISTANTS", icon: "mic" },
    { name: "B2B2C_PLATFORMS", icon: "hub" },
    { name: "SUPPLY_CHAIN", icon: "inventory_2" },
    { name: "ANCILLARY_PRODUCTS", icon: "add_box" },
    { name: "GLOBAL_LOCALIZATION", icon: "public" },
    { name: "TRANSACTIONAL_FUNNELS", icon: "filter_list" },
    { name: "DEVELOPER_API_PLATFORMS", icon: "api" },
    { name: "CHECKOUT_CONVERSION", icon: "shopping_cart_checkout" },
  ],
  
  // Scrolling animation speed (in seconds for one full cycle)
  domainScrollSpeed: 120, // Domain Experience scroll speed (slower = more relaxed)
  competenceScrollSpeed: 100, // Competence scroll speed (slightly faster than domains, moves left to right)

  // Featured Work / Portfolio Projects
  portfolio: [
    {
      id: 1,
      company: "ByteDance",
      title: "Autonomous Fleet Orchestration",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBV_TAfXnuUAKCxJuzb-jl9fKt_Hmx6JlvwosMqKu_FUOFZXqtf9OwFilwNuHvtx5YhP4n2Kp1IBPBuvtrUMXrxTpQMlXtaOq2FoGphNBtQLhu0xWO7qgc-60TeHO-3G38zvvcErPLwlI1CwPh3YN5Lfbz9FFJsmLSgORAtoQD4TGwdQCUx2tl7N2Xm57PyVTC7nPpdmBA4VNKi5sPDFbjvQ9U8WabtFwsjnD0OA4yCY3FyLU91MSXebteR4gfxgbkSBc0iR_Bv_w4",
      metrics: [
        { label: "Efficiency", value: "+24%_UPLIFT" },
        { label: "Scale", value: "10k_UNITS" }
      ],
      link: "#", // Update with project link
      active: true
    },
    {
      id: 2,
      company: "Amazon",
      title: "Marketplace Optimization Platform",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzkS--beHenx9aRNt4yA6PEDft9SCQHM7DzKQzM_Bg8OMNGNiFUxCXSyA1CKF-IWcNrBqIJQMCMxL12fKQKdV0_HjJ5QfdDtKoaC-drFpVd2DYM208VfZ8wpkdRVUXkn7JR7qNbFFSkCNtCUH9lvmlSOz3HicNTi3_2fJihLG0HuZLFHOtZBDHqp2s1_6JbnKlItlTVlmssfEYdpc4lf9l6plB3GkPH-p__FJ_VUTKOimdXQdNN0fqsTZGtNhmDc1qd0d5zh_eYQY",
      metrics: [
        { label: "Revenue", value: "+18%_GROWTH" },
        { label: "Users", value: "50M+_ACTIVE" }
      ],
      link: "#",
      active: true
    },
    {
      id: 3,
      company: "Traveloka",
      title: "Flight Booking Intelligence",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBV_TAfXnuUAKCxJuzb-jl9fKt_Hmx6JlvwosMqKu_FUOFZXqtf9OwFilwNuHvtx5YhP4n2Kp1IBPBuvtrUMXrxTpQMlXtaOq2FoGphNBtQLhu0xWO7qgc-60TeHO-3G38zvvcErPLwlI1CwPh3YN5Lfbz9FFJsmLSgORAtoQD4TGwdQCUx2tl7N2Xm57PyVTC7nPpdmBA4VNKi5sPDFbjvQ9U8WabtFwsjnD0OA4yCY3FyLU91MSXebteR4gfxgbkSBc0iR_Bv_w4",
      metrics: [
        { label: "Conversion", value: "+32%_RATE" },
        { label: "Bookings", value: "2M+_MONTHLY" }
      ],
      link: "#",
      active: true
    },
    {
      id: 4,
      company: "Tokopedia",
      title: "E-Commerce Platform Enhancement",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBV_TAfXnuUAKCxJuzb-jl9fKt_Hmx6JlvwosMqKu_FUOFZXqtf9OwFilwNuHvtx5YhP4n2Kp1IBPBuvtrUMXrxTpQMlXtaOq2FoGphNBtQLhu0xWO7qgc-60TeHO-3G38zvvcErPLwlI1CwPh3YN5Lfbz9FFJsmLSgORAtoQD4TGwdQCUx2tl7N2Xm57PyVTC7nPpdmBA4VNKi5sPDFbjvQ9U8WabtFwsjnD0OA4yCY3FyLU91MSXebteR4gfxgbkSBc0iR_Bv_w4",
      metrics: [
        { label: "Performance", value: "+28%_SPEED" },
        { label: "Transactions", value: "5M+_DAILY" }
      ],
      link: "#",
      active: true
    },
    {
      id: 5,
      company: "ByteDance",
      title: "Ad-Bid Engine",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzkS--beHenx9aRNt4yA6PEDft9SCQHM7DzKQzM_Bg8OMNGNiFUxCXSyA1CKF-IWcNrBqIJQMCMxL12fKQKdV0_HjJ5QfdDtKoaC-drFpVd2DYM208VfZ8wpkdRVUXkn7JR7qNbFFSkCNtCUH9lvmlSOz3HicNTi3_2fJihLG0HuZLFHOtZBDHqp2s1_6JbnKlItlTVlmssfEYdpc4lf9l6plB3GkPH-p__FJ_VUTKOimdXQdNN0fqsTZGtNhmDc1qd0d5zh_eYQY",
      metrics: [],
      link: "#",
      active: false,
      locked: true // Shows as locked/encrypted
    }
  ],

  // Competence/Skills (shuffled to keep similar items apart, e.g., MLP THINKING and LONG TERM PLATFORM THINKING)
  competencies: [
    { name: "PRODUCT_STRATEGY", icon: "rocket_launch" },
    { name: "DATA_ANALYTICS", icon: "bar_chart" },
    { name: "REVENUE_OPTIMIZATION", icon: "query_stats" },
    { name: "VISION_ROADMAPPING", icon: "map" },
    { name: "STAKEHOLDER_MGMT", icon: "person_pin" },
    { name: "MLP_THINKING", icon: "lightbulb" },
    { name: "MONETIZATION_STRATEGY", icon: "paid" },
    { name: "EXPERIMENT_DESIGN", icon: "science" },
    { name: "PROBLEM_FRAMING", icon: "extension" },
    { name: "AI_PM", icon: "robot" },
    { name: "ACQUISITION", icon: "person_add" },
    { name: "OPPORTUNITY_SIZING", icon: "analytics" },
    { name: "PRICING_EXPERIMENTS", icon: "sell" },
    { name: "PLG", icon: "loop" },
    { name: "METRIC_DEFINITION", icon: "rule" },
    { name: "LONG_TERM_PLATFORM_THINKING", icon: "architecture" },
    { name: "RETENTION", icon: "sync_alt" },
    { name: "DECISION_MAKING", icon: "balance" },
    { name: "ML_INTEGRATION", icon: "integration_instructions" },
    { name: "GAMIFICATION", icon: "videogame_asset" },
    { name: "PERSONALIZATION_LOGIC", icon: "settings_suggest" },
    { name: "E2E_DELIVERY", icon: "task_alt" },
    { name: "AGILE", icon: "directions_run" },
    { name: "DEPENDENCY_MGMT", icon: "account_tree" },
    { name: "TECHNICAL_TRADE_OFFS", icon: "swap_horiz" },
    { name: "RISK_MGMT", icon: "report_problem" },
    { name: "GTM_EXECUTION", icon: "send" },
    { name: "EXECUTIVE_COMM", icon: "campaign" },
    { name: "CROSS_FUNCTIONAL_LEADERSHIP", icon: "diversity_3" },
    { name: "UX_RESEARCH", icon: "search_check" },
    { name: "TEAM_COACHING", icon: "school" },
    { name: "FUNNEL_OPT", icon: "conversion_path" },
    { name: "GLOBAL_COORDINATION", icon: "language" },
    { name: "ACCESSIBILITY", icon: "accessibility_new" },
    { name: "EDUCATION_ONBOARDING", icon: "auto_stories" }
  ],

  // Mentorship
  mentorship: {
    status: "STAT_SYNC_ACTIVE",
    stats: {
      totalSessions: "60+",
      minutesInvested: "1800+",
      attendance: "100%",
      countriesMentored: "5+"
    },
    platforms: [
      {
        name: "ADPList.org",
        url: "https://adplist.org/mentors/faiz-widodo"
      },
      {
        name: "Dealls.com",
        url: "https://dealls.com/mentoring/faiz-widodo-017"
      }
    ],
    adplistEmbed: '<section class="border border-border-subtle bg-white/[0.02] rounded overflow-hidden w-full max-w-[650px]" style="height: 496px;"><iframe src="https://adplist.org/widgets/reviews?src=faiz-widodo" title="All Reviews" width="100%" height="100%" loading="lazy" style="border: 0px;"></iframe></section>'
  },

  // Education
  education: [
    {
      degree: "Master of Science in Robotics",
      institution: {
        text: "University of Bristol",
        url: "https://www.bristol.ac.uk/study/postgraduate/taught/msc-robotics/",
        icon: "location_on"
      },
      distinction: {
        text: "Distinction",
        icon: "grade"
      },
      badges: [
        {
          text: "Chevening Scholarship",
          url: "https://www.chevening.org",
          icon: "school",
          color: "primary"
        }
      ]
    },
    {
      degree: "Bachelor of Science in Electrical Engineering",
      institution: {
        text: "Institut Teknologi Bandung",
        url: "https://itb.ac.id/berita/dua-mahasiswa-itb-ikuti-jurgen-dormann-education-event-2016-di-swiss/5282",
        icon: "location_on"
      },
      distinction: {
        text: "Cum Laude",
        icon: "grade"
      },
      badges: [
        {
          text: "ABB Jürgen Dormann Foundation Scholarship",
          url: "https://global.abb/group/en/sustainability/jurgen-dormann-foundation",
          icon: "school",
          color: "cyan" // Same color as Chevening Scholarship
        }
      ]
    }
  ],

  // Social Links
  socials: [
    {
      name: "LinkedIn",
      icon: "link",
      link: "https://www.linkedin.com/in/faizwidodo"
    },
    {
      name: "Medium",
      icon: "article",
      link: "https://faizwidodo.medium.com/"
    },
    {
      name: "GitHub",
      icon: "terminal",
      link: "https://github.com/faiz-widodo/"
    },
    {
      name: "YouTube",
      icon: "play_circle",
      link: "https://www.youtube.com/@faiz-widodo"
    }
  ],

  // Books I Like
  books: [
    {
      title: "The Hard Thing About Hard Things",
      author: "Ben Horowitz",
      note: "This book shows what leadership really feels like when things go wrong. Ben Horowitz shares his personal stories of near-bankruptcy, painful layoffs, and decisions where there is no good answer. What stayed with me is that hard choices in leadership are not exceptions. They are the job. The book is honest in a way that most business books are not."
    },
    {
      title: "Algorithms to Live By",
      author: "Brian Christian & Tom Griffiths",
      note: "It turns out the logic behind computer algorithms also appears in everyday decisions. When to stop looking for a better option, how to manage your time, when to try new things versus sticking with what works. Once you see these patterns, they show up everywhere. A fun and eye-opening book."
    },
    {
      title: "The Things You Can See Only When You Slow Down",
      author: "Haemin Sunim",
      note: "Short and calming reflections written by a Korean Buddhist monk. I read this during a very busy period while working at a fast-moving tech company. It helped me slow down and notice things I was missing. It probably works best when life feels overwhelming rather than when things are already balanced."
    },
    {
      title: "Behind the Mask: My Autobiography",
      author: "Tyson Fury",
      note: "Tyson Fury became world heavyweight champion and then fell into deep depression, addiction, and despair. His honest account of that experience changed how I think about success. Reaching the top did not bring him peace. The harder and more meaningful part turned out to be fighting his way back from rock bottom."
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      note: "A simple story about a shepherd boy who leaves everything behind to follow his dream and travels from Spain all the way to Egypt. The journey teaches him far more than the destination does. It is short and easy to read, but the message about trusting your own path stays with you for a long time."
    },
    {
      title: "Winning Ugly",
      author: "Brad Gilbert",
      note: "As a tennis fan, this book changed how I think about competition. Brad Gilbert was not the most talented player on tour, but he won matches consistently by studying opponents and finding their weaknesses. His point is that around 80 percent of matches are decided by strategy and mental approach, not raw talent. The goal is to win, not to look good doing it."
    },
    {
      title: "The Da Vinci Code",
      author: "Dan Brown",
      note: "Growing up mostly in one country, this book sparked a real interest in travel and exploring the world. The story moves through Paris, London, and other parts of Europe, full of symbols, hidden codes, and old mysteries. As someone who enjoys puzzles, following Robert Langdon through each clue felt exciting and made me genuinely curious about history and culture."
    },
    {
      title: "Ikigai",
      author: "Héctor García & Francesc Miralles",
      note: "The book explores a Japanese concept that can be translated as your reason for getting up in the morning. It breaks ikigai down into four areas: what you love, what you are good at, what the world needs, and what you can be paid for. Your ikigai lives at the center of all four. A simple and useful way to think about meaningful work."
    },
    {
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      note: "The main idea I got from this book is to be more careful about what you actually care about. You only have a limited amount of energy and attention, so spending it on things that do not really matter to you is a waste. It pushed me to focus more on my own values rather than chasing things that just look good from the outside."
    },
    {
      title: "The Kindaichi Case Files",
      author: "Shin Kibayashi, Fumiya Satō & Yōzaburō Kanari",
      note: "This is a manga series, not a traditional book, but it belongs on this list. Each story is a complex murder mystery that Kindaichi solves through careful observation and logical thinking. What makes it special is that the crimes always have deep human reasons behind them, which makes the stories feel real and not just puzzles. It is one of the things that made me genuinely enjoy structured problem solving."
    }
  ],

  // Featured Articles (Medium Posts)
  featuredArticles: [
    {
      title: "Deep Research: My Favourite AI Feature Lately",
      url: "https://medium.com/@faizwidodo/deep-research-my-favourite-ai-feature-lately-15bc214b17de"
    },
    {
      title: "Avoiding the Pitfalls of the Super User Bubble in Decision Making",
      url: "https://faizwidodo.medium.com/avoiding-the-pitfalls-of-the-super-user-bubble-in-decision-making-bb840d2f9569"
    },
    {
      title: "My First Year at Amazon: 4 Tools That Helped Navigate My Journey",
      url: "https://faizwidodo.medium.com/my-first-year-at-amazon-4-tools-that-helped-navigate-my-journey-8b4790f9645a"
    }
  ],

  // Footer
  footer: {
    text: "\"The best of people are the most impactful.\""
  },

  // Production Settings
  production: {
    showDeliveredResults: false // Set to true when ready to show DELIVERED_RESULTS section
  }
};
