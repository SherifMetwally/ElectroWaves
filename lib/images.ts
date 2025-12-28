// Image mappings for PDF extracted images
// Based on PDF page structure and content
import { withBasePath } from "./basePath";

// Helper to apply basePath to image paths
const img = (path: string) => withBasePath(path);

export const imageMap = {
  // Hero/Company images (pages 2-5)
  hero: img("/images/pdf/page_25_img_1.jpeg"),
  company: img("/images/pdf/page_3_img_1.jpeg"),
  about: img("/images/pdf/page_4_img_1.jpeg"),
  
  // Services/Panel images (pages 6-11)
  services: {
    mdp: img("/images/pdf/page_6_img_1.jpeg"),
    synchronization: img("/images/pdf/page_6_img_2.jpeg"),
    waterPump: img("/images/pdf/page_6_img_3.jpeg"),
    pfc: img("/images/pdf/page_6_img_4.png"),
    outdoor: img("/images/pdf/page_6_img_5.jpeg"),
    starDelta: img("/images/pdf/page_6_img_6.png"),
    ats: img("/images/pdf/page_7_img_1.jpeg"),
    subDistribution: img("/images/pdf/page_7_img_2.jpeg"),
    motorControl: img("/images/pdf/page_7_img_3.png"),
    industrial: img("/images/pdf/page_8_img_1.jpeg"),
    explosionProof: img("/images/pdf/page_9_img_1.jpeg"),
    multiPurpose: img("/images/pdf/page_9_img_2.png"),
    rmu: img("/images/pdf/page_9_img_3.jpeg"),
  },
  
  // Client project images (pages 12-27)
  projects: {
    alAhmadi: img("/images/pdf/page_12_img_1.png"), // Al-Ahmadi Chocolate
    alHijaz: img("/images/pdf/page_12_img_2.jpeg"), // Al-Hijaz
    alNahhas: img("/images/pdf/page_12_img_3.jpeg"), // Al-Nahhas Building
    classicSweets: img("/images/pdf/page_12_img_4.jpeg"), // Classic Sweets
    pharos: img("/images/pdf/page_12_img_5.jpeg"), // Pharos Real Estate
    auditing: img("/images/pdf/page_12_img_6.jpeg"), // Central Auditing
    hospital: img("/images/pdf/page_12_img_7.jpeg"), // Al-Amal Hospital
    printing: img("/images/pdf/page_13_img_1.jpeg"), // Classic Printing
    greenOasis: img("/images/pdf/page_13_img_2.jpeg"), // Green Oasis Resort
    project1: img("/images/pdf/page_13_img_3.jpeg"),
    project2: img("/images/pdf/page_13_img_4.jpeg"),
    project3: img("/images/pdf/page_14_img_1.jpeg"),
    project4: img("/images/pdf/page_15_img_1.jpeg"),
    project5: img("/images/pdf/page_16_img_1.jpeg"),
    project6: img("/images/pdf/page_17_img_1.jpeg"),
    project7: img("/images/pdf/page_17_img_2.jpeg"),
    project8: img("/images/pdf/page_17_img_3.jpeg"),
    project9: img("/images/pdf/page_17_img_4.jpeg"),
    project10: img("/images/pdf/page_18_img_1.jpeg"),
    project11: img("/images/pdf/page_18_img_2.jpeg"),
    project12: img("/images/pdf/page_18_img_3.jpeg"),
    project13: img("/images/pdf/page_19_img_1.jpeg"),
    project14: img("/images/pdf/page_19_img_2.jpeg"),
    project15: img("/images/pdf/page_19_img_3.jpeg"),
  },
  
  // Industries/General images
  industries: img("/images/industries-hero.jpg"),
  marketPosition: img("/images/market-position-hero.jpg"),
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

