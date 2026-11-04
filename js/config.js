// Raimak LMS - App Configuration v3.0

const Config = {
  azure: {
    clientId: "ad1b153f-8b6a-4f1c-8ab2-58fcf03cf5c2",
    tenantId: "39e14190-0b23-4ecd-99f9-606ad1215881",
    redirectUri: window.location.origin + window.location.pathname,
  },

  sharePoint: {
    hostname: "raimak.sharepoint.com",
    sites: {
      leadship: "sites/RaimakLeadship",
      team: "TeamSite",
    },
    lists: {
      activityLog: "16aad7ef-2df3-441c-820e-f3fdcf2a965b",
      contractorList: "bd5df38a-9cb6-411d-87e8-3e79934213d3",
      leadsList: "9f23db32-6a58-4f19-8659-1edde74da49e",
      agentScores: "242d56aa-dfcd-4399-919b-0ce608ec932c",
      agentScoresLedger: "7c6f1604-bd68-4ceb-9f0c-9271faf5e0b8",
      suspensionsList: "d30048fb-8f64-4ed9-9719-6fec2aaca9a9",
      rewardOrdersList: "06A1DC4C-F120-4BF6-9E53-F5ECE25A58BD",
      smsHistory: "0c8a19d2-6463-4891-a99d-37886c22820e",
      vzlmsConfig: "08bd72de-270c-4df3-ac3c-f1a6be612b3b",
    },
    graphBase: "https://graph.microsoft.com/v1.0",
  },

  rules: {
    coolOffDays: 2,
    maxLeadsPerAgent: 99999,
    maxContactsPerDay: 99999,
    recycleAfterDays: 30,
    appVersion: "1.0",
  },

  // Pipeline statuses
  leadStatuses: [
    "New",
    "1st Contact",
    "2nd Contact",
    "3rd Contact",
    "Do Not Call",
    "Already has VZ",
    "Yes",
  ],

  // Terminal statuses — removed from agent queue, admin only
  terminalStatuses: [
    "Do Not Call",
    "Sold",
    "FNQ",
    "Already has VZ",
    "TDM",
    "D2D Lead",
  ],

  // TDM is kicked back to admin (D2D only)
  adminOnlyStatuses: ["N/A"],

  soldStatus: "Sold",

  // Lead types
  leadTypes: ["TDM"],

  // Current products options — alphabetical
  currentProducts: [
    "Home Phone + Internet + VAS",
    "Internet",
    "Internet + Phone",
    "Internet + TV",
    "Internet + TV + Phone",
    "Internet + VAS",
    "Other",
    "Phone",
    "TV",
    "TV + Phone",
  ],

  leadSources: [
    "Web Form",
    "Referral",
    "Cold Call",
    "Email Campaign",
    "Social Media",
    "Trade Show",
    "Other",
  ],

  roles: {
    admins: [
      "m.mcalpine@raimak.com",
      "RichardZacker@raimak.com",
      "B.Hinesley@raimak.com",
      "S.Balleste@raimak.com",
      "N.Caldwell@raimak.com",
      "C.Scarrett@raimak.com",
      "J.Scroggins@raimak.com",
      "antoinette.bickel@raimak.com",
      "a.cooper@raimak.com",
    ],
  },

  contractorDomains: ["@buyfibernow.com"],

  scopes: ["Sites.ReadWrite.All", "User.Read"],

  salesFeedInterval: 45000,

  // 📱 Verizon Quick Message Templates
  smsTemplates: {
    initial:
      "Hi, this is your dedicated fiber specialist with Frontier by Verizon. Frontier is upgrading the network in your area, and your home phone service needs to move to the new fiber network to keep working. When is a good time to call you?\nReply STOP to end.",
    followup:
      "Hi {FirstName}, following up on your Verizon & Frontier bundle savings! Don't leave that $15/mo Frontier bill discount and free Verizon perk on the table. Want me to run a quick quote for your mobile lines today?\n\nReply STOP to opt out.",
    scheduling:
      "Hi {FirstName}, this is {AgentName} with Verizon. I have a few open slots this week to get your Verizon mobile lines activated and lock in your $15/mo Frontier discount. Does morning or afternoon work better for a quick call?\n\nReply STOP to opt out.",
    closing:
      "Thank you for bundling with Verizon, {FirstName}! Your mobile plan and $15/mo Frontier Fiber discount are locked in. If you ever have questions about your account ({BTN}), feel free to text this number back!\n\nReply STOP to opt out.",
  },
};
