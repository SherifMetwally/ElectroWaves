// Image mappings for PDF extracted images
// Based on PDF page structure and content

export const imageMap = {
  // Hero/Company images (pages 2-5)
  hero: "/images/pdf/page_25_img_1.jpeg",
  company: "/images/pdf/page_3_img_1.jpeg",
  about: "/images/pdf/page_4_img_1.jpeg",
  
  // Services/Panel images (pages 6-11)
  services: {
    mdp: "/images/pdf/page_6_img_1.jpeg",
    synchronization: "/images/pdf/page_6_img_2.jpeg",
    waterPump: "/images/pdf/page_6_img_3.jpeg",
    pfc: "/images/pdf/page_6_img_4.png",
    outdoor: "/images/pdf/page_6_img_5.jpeg",
    starDelta: "/images/pdf/page_6_img_6.png",
    ats: "/images/pdf/page_7_img_1.jpeg",
    subDistribution: "/images/pdf/page_7_img_2.jpeg",
    motorControl: "/images/pdf/page_7_img_3.png",
    industrial: "/images/pdf/page_8_img_1.jpeg",
    explosionProof: "/images/pdf/page_9_img_1.jpeg",
    multiPurpose: "/images/pdf/page_9_img_2.png",
    rmu: "/images/pdf/page_9_img_3.jpeg",
  },
  
  // Client project images (pages 12-27)
  projects: {
    alAhmadi: "/images/pdf/page_12_img_1.png", // Al-Ahmadi Chocolate
    alHijaz: "/images/pdf/page_12_img_2.jpeg", // Al-Hijaz
    alNahhas: "/images/pdf/page_12_img_3.jpeg", // Al-Nahhas Building
    classicSweets: "/images/pdf/page_12_img_4.jpeg", // Classic Sweets
    pharos: "/images/pdf/page_12_img_5.jpeg", // Pharos Real Estate
    auditing: "/images/pdf/page_12_img_6.jpeg", // Central Auditing
    hospital: "/images/pdf/page_12_img_7.jpeg", // Al-Amal Hospital
    printing: "/images/pdf/page_13_img_1.jpeg", // Classic Printing
    greenOasis: "/images/pdf/page_13_img_2.jpeg", // Green Oasis Resort
    project1: "/images/pdf/page_13_img_3.jpeg",
    project2: "/images/pdf/page_13_img_4.jpeg",
    project3: "/images/pdf/page_14_img_1.jpeg",
    project4: "/images/pdf/page_15_img_1.jpeg",
    project5: "/images/pdf/page_16_img_1.jpeg",
    project6: "/images/pdf/page_17_img_1.jpeg",
    project7: "/images/pdf/page_17_img_2.jpeg",
    project8: "/images/pdf/page_17_img_3.jpeg",
    project9: "/images/pdf/page_17_img_4.jpeg",
    project10: "/images/pdf/page_18_img_1.jpeg",
    project11: "/images/pdf/page_18_img_2.jpeg",
    project12: "/images/pdf/page_18_img_3.jpeg",
    project13: "/images/pdf/page_19_img_1.jpeg",
    project14: "/images/pdf/page_19_img_2.jpeg",
    project15: "/images/pdf/page_19_img_3.jpeg",
  },
  
  // Industries/General images
  industries: "/images/industries-hero.jpg",
  marketPosition: "/images/market-position-hero.jpg",
};

// Helper function to get project image by client name
export function getProjectImage(clientName: string): string {
  const nameLower = clientName.toLowerCase();
  
  if (nameLower.includes("ahmadi") || nameLower.includes("chocolate")) {
    return imageMap.projects.alAhmadi;
  }
  if (nameLower.includes("hijaz")) {
    return imageMap.projects.alHijaz;
  }
  if (nameLower.includes("nahhas") || nameLower.includes("nahas")) {
    return imageMap.projects.alNahhas;
  }
  if (nameLower.includes("classic sweets") || nameLower.includes("sweets")) {
    return imageMap.projects.classicSweets;
  }
  if (nameLower.includes("pharos") || nameLower.includes("real estate")) {
    return imageMap.projects.pharos;
  }
  if (nameLower.includes("auditing") || nameLower.includes("organization")) {
    return imageMap.projects.auditing;
  }
  if (nameLower.includes("hospital") || nameLower.includes("amal")) {
    return imageMap.projects.hospital;
  }
  if (nameLower.includes("printing") || nameLower.includes("presses")) {
    return imageMap.projects.printing;
  }
  if (nameLower.includes("green oasis") || nameLower.includes("resort")) {
    return imageMap.projects.greenOasis;
  }
  
  // Default fallback
  return imageMap.projects.project1;
}

