import { progressService } from './progressService';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedAt?: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
}

const ACHIEVEMENTS_KEY = 'cyber_mastery_achievements';

const DEFAULT_ACHIEVEMENTS: Achievement[] = [
  { 
    id: 'first-lesson', 
    title: 'Infosec Cadet', 
    description: 'Completed your first Cybersecurity Master\'s lesson.', 
    icon: 'Shield', 
    earned: false, 
    rarity: 'Common' 
  },
  { 
    id: 'perfect-quiz', 
    title: 'Cryptanalyst', 
    description: 'Achieved a perfect 100% score on any topic quiz.', 
    icon: 'Cpu', 
    earned: false, 
    rarity: 'Rare' 
  },
  { 
    id: 'first-exam', 
    title: 'Threat Responder', 
    description: 'Passed a module-level Final Exam with a passing score.', 
    icon: 'Flame', 
    earned: false, 
    rarity: 'Rare' 
  },
  { 
    id: 'risk-master', 
    title: 'Compliance Auditor', 
    description: 'Scored 100% on the Security & Risk Management Final Exam.', 
    icon: 'Award', 
    earned: false, 
    rarity: 'Epic' 
  },
  { 
    id: 'crypto-master', 
    title: 'Quantum Proof', 
    description: 'Mastered the Cryptography & PKI module Final Exam with 100%.', 
    icon: 'Key', 
    earned: false, 
    rarity: 'Epic' 
  },
  { 
    id: 'all-lessons', 
    title: 'Master of Cyber', 
    description: 'Complete all lessons across the 7-group development roadmap.', 
    icon: 'Zap', 
    earned: false, 
    rarity: 'Legendary' 
  },
  { 
    id: 'cert-group1', 
    title: 'IT Support & OS Specialist', 
    description: 'Earned by completing Group 1. Prepares you for: CompTIA ITF+ (IT Fundamentals+), CompTIA A+, Linux Essentials (LPI), and Microsoft 365 Fundamentals (MS-900).', 
    icon: 'Shield', 
    earned: false, 
    rarity: 'Common' 
  },
  { 
    id: 'cert-group2', 
    title: 'Network & Infrastructure Engineer', 
    description: 'Earned by completing Group 2. Prepares you for: CompTIA Network+, Cisco CCNA (Cisco Certified Network Associate), and AWS Certified Cloud Practitioner.', 
    icon: 'Cpu', 
    earned: false, 
    rarity: 'Rare' 
  },
  { 
    id: 'cert-group3', 
    title: 'Cybersecurity Foundations Practitioner', 
    description: 'Earned by completing Group 3. Prepares you for: CompTIA Security+, ISC2 Certified in Cybersecurity (CC), and EC-Council CEH (Theory).', 
    icon: 'Award', 
    earned: false, 
    rarity: 'Rare' 
  },
  { 
    id: 'cert-group4', 
    title: 'Cryptography & Attack Matrix Specialist', 
    description: 'Earned by completing Group 4. Prepares you for: CompTIA Security+, CySA+ (Threat Detection & Analysis), and GIAC GSEC / GCIH (Incident Handling).', 
    icon: 'Key', 
    earned: false, 
    rarity: 'Epic' 
  },
  { 
    id: 'cert-group5', 
    title: 'Enterprise Scripting & cloud admin', 
    description: 'Earned by completing Group 5. Prepares you for: Python PCEP/PCAP, AWS Solutions Architect Associate, HashiCorp Terraform Associate, and Kubernetes CKA.', 
    icon: 'Zap', 
    earned: false, 
    rarity: 'Epic' 
  },
  { 
    id: 'cert-group6', 
    title: 'Defensive Ops & Governance Lead', 
    description: 'Earned by completing Group 6. Prepares you for: CompTIA CySA+, Microsoft SC-200 (Security Operations Analyst), GIAC GCIH/GCFA (Forensics), and CISSP / CISM.', 
    icon: 'Activity', 
    earned: false, 
    rarity: 'Legendary' 
  },
  { 
    id: 'cert-group7', 
    title: 'Active Blue Team & Pentest Expert', 
    description: 'Earned by completing Group 7. Prepares you for: CompTIA PenTest+, OS-certified OSCP, Blue Team Level 1 (BTL1), and TryHackMe SOC Level 1 Path.', 
    icon: 'Terminal', 
    earned: false, 
    rarity: 'Legendary' 
  },
];

export const achievementService = {
  getAchievements: (): Achievement[] => {
    const data = localStorage.getItem(ACHIEVEMENTS_KEY);
    let earnedIds: Record<string, string> = {};
    if (data) {
      try {
        earnedIds = JSON.parse(data) as Record<string, string>;
      } catch (e) {}
    }

    // Retroactive sync of achievements based on progressService
    let earnedNew = false;
    const progress = progressService.getProgress();
    
    const awardIfPassed = (badgeId: string, examId: string) => {
      if (!earnedIds[badgeId] && progress.examAttempts[examId]?.passed) {
        earnedIds[badgeId] = progress.examAttempts[examId].timestamp || new Date().toISOString();
        earnedNew = true;
      }
    };

    // Certifications
    awardIfPassed('cert-group1', 'ex-group1');
    awardIfPassed('cert-group2', 'ex-network-security');
    awardIfPassed('cert-group3', 'ex-sec-risk');
    awardIfPassed('cert-group4', 'ex-cryptography');
    awardIfPassed('cert-group5', 'ex-group5');
    awardIfPassed('cert-group6', 'ex-group6');
    awardIfPassed('cert-group7', 'ex-group7');

    // Also other achievements
    if (!earnedIds['first-lesson'] && progress.completedLessons.length >= 1) {
      earnedIds['first-lesson'] = new Date().toISOString();
      earnedNew = true;
    }
    
    // Check risk master (score 100 on ex-sec-risk)
    if (!earnedIds['risk-master'] && progress.examAttempts['ex-sec-risk']?.passed) {
      const attempt = progress.examAttempts['ex-sec-risk'];
      if (Math.round((attempt.score / attempt.total) * 100) === 100) {
        earnedIds['risk-master'] = attempt.timestamp || new Date().toISOString();
        earnedNew = true;
      }
    }

    // Check crypto master (score 100 on ex-cryptography)
    if (!earnedIds['crypto-master'] && progress.examAttempts['ex-cryptography']?.passed) {
      const attempt = progress.examAttempts['ex-cryptography'];
      if (Math.round((attempt.score / attempt.total) * 100) === 100) {
        earnedIds['crypto-master'] = attempt.timestamp || new Date().toISOString();
        earnedNew = true;
      }
    }

    if (earnedNew) {
      localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(earnedIds));
    }

    return DEFAULT_ACHIEVEMENTS.map(a => ({
      ...a,
      earned: !!earnedIds[a.id],
      earnedAt: earnedIds[a.id]
    }));
  },

  checkAchievements: (lessonIdsCount: number, completedLessonsCount: number, latestQuizPct: number, latestExamId: string | null, latestExamScorePct: number) => {
    const earnedIds = achievementService.getEarnedMap();
    let earnedNew = false;

    const saveAchievement = (id: string) => {
      if (!earnedIds[id]) {
        earnedIds[id] = new Date().toISOString();
        earnedNew = true;
      }
    };

    // Check First Lesson
    if (completedLessonsCount >= 1) {
      saveAchievement('first-lesson');
    }

    // Check Perfect Quiz
    if (latestQuizPct === 100) {
      saveAchievement('perfect-quiz');
    }

    // Check Threat Responder (Pass Exam)
    if (latestExamId && latestExamScorePct >= 70) {
      saveAchievement('first-exam');

      // Sync specific certifications immediately
      if (latestExamId === 'ex-group1') {
        saveAchievement('cert-group1');
      } else if (latestExamId === 'ex-network-security') {
        saveAchievement('cert-group2');
      } else if (latestExamId === 'ex-sec-risk') {
        saveAchievement('cert-group3');
      } else if (latestExamId === 'ex-cryptography') {
        saveAchievement('cert-group4');
      } else if (latestExamId === 'ex-group5') {
        saveAchievement('cert-group5');
      } else if (latestExamId === 'ex-group6') {
        saveAchievement('cert-group6');
      } else if (latestExamId === 'ex-group7') {
        saveAchievement('cert-group7');
      }
    }

    // Check specialized risk master
    if (latestExamId === 'ex-sec-risk' && latestExamScorePct === 100) {
      saveAchievement('risk-master');
    }

    // Check specialized crypto master
    if (latestExamId === 'ex-cryptography' && latestExamScorePct === 100) {
      saveAchievement('crypto-master');
    }

    // Check custom Master of Cyber (all lessons complete)
    if (completedLessonsCount === lessonIdsCount && lessonIdsCount > 0) {
      saveAchievement('all-lessons');
    }

    if (earnedNew) {
      localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(earnedIds));
      return true;
    }
    return false;
  },

  getEarnedMap: (): Record<string, string> => {
    const data = localStorage.getItem(ACHIEVEMENTS_KEY);
    if (!data) return {};
    try {
      return JSON.parse(data);
    } catch (e) {
      return {};
    }
  }
};
