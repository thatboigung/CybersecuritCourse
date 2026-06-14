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
    description: 'Complete all lessons across the 8-group development roadmap.', 
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
  { 
    id: 'cert-group8', 
    title: 'Senior Capstone & Research Fellow', 
    description: 'Earned by passing the Group 8 Capstone Defense Exam. Prepares you for: Final Year Dissertation Defense, Lead Systems Architect positions, and CISO advisory portfolios.', 
    icon: 'GraduationCap', 
    earned: false, 
    rarity: 'Legendary' 
  },
  {
    id: 'badge-hacking-offensive',
    title: 'Advanced Penetration Tester',
    description: 'Mastered Cryptography & Systemic Enterprise Attack Paradigms by completing Courses 104 and 105.',
    icon: 'Key',
    earned: false,
    rarity: 'Epic'
  },
  {
    id: 'badge-hacking-defensive',
    title: 'DevSecOps & Defensive Engineer',
    description: 'Mastered Incident Response & Security Tool Scripting by completing Courses 106 and 107.',
    icon: 'Terminal',
    earned: false,
    rarity: 'Epic'
  },
  {
    id: 'badge-hacking-complete',
    title: 'Sovereign Offensive Hacker',
    description: 'Unlocked by successfully completing all 36 lessons across the complete Ethical Hacking pathway.',
    icon: 'Terminal',
    earned: false,
    rarity: 'Legendary'
  },
  {
    id: 'badge-fs-frontend',
    title: 'Sovereign Interface Artisan',
    description: 'Mastered UI Foundations, Async Logic Loops, and modern React/Tailwind architectures by completing Courses 201, 202, and 203.',
    icon: 'Cpu',
    earned: false,
    rarity: 'Epic'
  },
  {
    id: 'badge-fs-backend',
    title: 'Sovereign Backend Engineer',
    description: 'Mastered Server-side Engines, databases (PostgreSQL), APIs (REST/JWT), Redis and Cloud DevOps by completing Courses 204, 205, 206, and 207.',
    icon: 'Activity',
    earned: false,
    rarity: 'Epic'
  },
  {
    id: 'badge-fs-complete',
    title: 'Sovereign Full-Stack Engineer',
    description: 'Unlocked by successfully completing all 11 core classes across the complete Full-Stack Developer pathway.',
    icon: 'Zap',
    earned: false,
    rarity: 'Legendary'
  },
  {
    id: 'badge-math-core',
    title: 'Computational Logician',
    description: 'Mastered Discrete Logic, Vector Algebra & Optimization by completing Courses 301, 302, and 303.',
    icon: 'Cpu',
    earned: false,
    rarity: 'Epic'
  },
  {
    id: 'badge-math-complete',
    title: 'Sovereign Mathematical Programmer',
    description: 'Unlocked by successfully completing all 8 foundational mathematics courses inside the DevSec academy math track.',
    icon: 'Award',
    earned: false,
    rarity: 'Legendary'
  },
  {
    id: 'badge-de-core',
    title: 'Sovereign Analytics Architect',
    description: 'Mastered data modeling, advanced SQL processing, big data storage structures, and lakehouse configurations by completing Courses 401, 402, and 403.',
    icon: 'Database',
    earned: false,
    rarity: 'Epic'
  },
  {
    id: 'badge-de-complete',
    title: 'Grandmaster Systems Architect',
    description: 'Unlocked by successfully completing all 7 progressive modules inside the Data Science & Engineering path.',
    icon: 'Award',
    earned: false,
    rarity: 'Legendary'
  }
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
    awardIfPassed('cert-group8', 'ex-group8');

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

    // Check dynamic Hacking and Full-Stack badges based on lesson completion
    const checkLessonBadge = (badgeId: string, requiredLessons: string[]) => {
      if (!earnedIds[badgeId] && requiredLessons.every(id => progress.completedLessons.includes(id))) {
        earnedIds[badgeId] = new Date().toISOString();
        earnedNew = true;
      }
    };

    const HACKING_104_LESSONS = ['h104-l1', 'h104-l2', 'h104-l3', 'h104-l4', 'h104-l5', 'h104-l6', 'h104-l7', 'h104-l8', 'h104-l9', 'h104-l10'];
    const HACKING_105_LESSONS = ['h105-l1', 'h105-l2', 'h105-l3', 'h105-l4', 'h105-l5', 'h105-l6', 'h105-l7', 'h105-l8', 'h105-l9'];
    const HACKING_106_LESSONS = ['h106-l1', 'h106-l2', 'h106-l3', 'h106-l4', 'h106-l5', 'h106-l6', 'h106-l7', 'h106-l8', 'h106-l9', 'h106-l10', 'h106-l11'];
    const HACKING_107_LESSONS = ['h107-l1', 'h107-l2', 'h107-l3', 'h107-l4', 'h107-l5', 'h107-l6'];

    const OFFENSIVE_HACKING_LESSONS = [...HACKING_104_LESSONS, ...HACKING_105_LESSONS];
    const DEFENSIVE_HACKING_LESSONS = [...HACKING_106_LESSONS, ...HACKING_107_LESSONS];
    const COMPLETE_HACKING_LESSONS = [...OFFENSIVE_HACKING_LESSONS, ...DEFENSIVE_HACKING_LESSONS];

    const FS_FRONTEND_LESSONS = ['fs201-l1', 'fs201-l2', 'fs202-l1', 'fs202-l2', 'fs203-l1', 'fs203-l2'];
    const FS_BACKEND_LESSONS = ['fs204-l1', 'fs204-l2', 'fs205-l1', 'fs206-l1', 'fs207-l1'];
    const COMPLETE_FS_LESSONS = [...FS_FRONTEND_LESSONS, ...FS_BACKEND_LESSONS];

    const MATH_CORE_LESSONS = ['math301-l1', 'math301-l2', 'math302-l1', 'math303-l1'];
    const COMPLETE_MATH_LESSONS = ['math301-l1', 'math301-l2', 'math302-l1', 'math303-l1', 'math304-l1', 'math305-l1', 'math306-l1', 'math307-l1'];

    const DE_CORE_LESSONS = ['de401-l1', 'de401-l2', 'de402-l1', 'de402-l2', 'de403-l1'];
    const COMPLETE_DE_LESSONS = ['de401-l1', 'de401-l2', 'de402-l1', 'de402-l2', 'de403-l1', 'de404-l1', 'de404-l2', 'de405-l1', 'de406-l1', 'de407-l1'];

    checkLessonBadge('badge-hacking-offensive', OFFENSIVE_HACKING_LESSONS);
    checkLessonBadge('badge-hacking-defensive', DEFENSIVE_HACKING_LESSONS);
    checkLessonBadge('badge-hacking-complete', COMPLETE_HACKING_LESSONS);
    checkLessonBadge('badge-fs-frontend', FS_FRONTEND_LESSONS);
    checkLessonBadge('badge-fs-backend', FS_BACKEND_LESSONS);
    checkLessonBadge('badge-fs-complete', COMPLETE_FS_LESSONS);
    checkLessonBadge('badge-math-core', MATH_CORE_LESSONS);
    checkLessonBadge('badge-math-complete', COMPLETE_MATH_LESSONS);
    checkLessonBadge('badge-de-core', DE_CORE_LESSONS);
    checkLessonBadge('badge-de-complete', COMPLETE_DE_LESSONS);

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
      } else if (latestExamId === 'ex-group8') {
        saveAchievement('cert-group8');
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

    // Check dynamic Hacking and Full-Stack badges on active progress checks
    const progress = progressService.getProgress();
    const checkLessonBadge = (badgeId: string, requiredLessons: string[]) => {
      if (!earnedIds[badgeId] && requiredLessons.every(id => progress.completedLessons.includes(id))) {
        saveAchievement(badgeId);
      }
    };

    const HACKING_104_LESSONS = ['h104-l1', 'h104-l2', 'h104-l3', 'h104-l4', 'h104-l5', 'h104-l6', 'h104-l7', 'h104-l8', 'h104-l9', 'h104-l10'];
    const HACKING_105_LESSONS = ['h105-l1', 'h105-l2', 'h105-l3', 'h105-l4', 'h105-l5', 'h105-l6', 'h105-l7', 'h105-l8', 'h105-l9'];
    const HACKING_106_LESSONS = ['h106-l1', 'h106-l2', 'h106-l3', 'h106-l4', 'h106-l5', 'h106-l6', 'h106-l7', 'h106-l8', 'h106-l9', 'h106-l10', 'h106-l11'];
    const HACKING_107_LESSONS = ['h107-l1', 'h107-l2', 'h107-l3', 'h107-l4', 'h107-l5', 'h107-l6'];

    const OFFENSIVE_HACKING_LESSONS = [...HACKING_104_LESSONS, ...HACKING_105_LESSONS];
    const DEFENSIVE_HACKING_LESSONS = [...HACKING_106_LESSONS, ...HACKING_107_LESSONS];
    const COMPLETE_HACKING_LESSONS = [...OFFENSIVE_HACKING_LESSONS, ...DEFENSIVE_HACKING_LESSONS];

    const FS_FRONTEND_LESSONS = ['fs201-l1', 'fs201-l2', 'fs202-l1', 'fs202-l2', 'fs203-l1', 'fs203-l2'];
    const FS_BACKEND_LESSONS = ['fs204-l1', 'fs204-l2', 'fs205-l1', 'fs206-l1', 'fs207-l1'];
    const COMPLETE_FS_LESSONS = [...FS_FRONTEND_LESSONS, ...FS_BACKEND_LESSONS];

    const MATH_CORE_LESSONS = ['math301-l1', 'math301-l2', 'math302-l1', 'math303-l1'];
    const COMPLETE_MATH_LESSONS = ['math301-l1', 'math301-l2', 'math302-l1', 'math303-l1', 'math304-l1', 'math305-l1', 'math306-l1', 'math307-l1'];

    const DE_CORE_LESSONS = ['de401-l1', 'de401-l2', 'de402-l1', 'de402-l2', 'de403-l1'];
    const COMPLETE_DE_LESSONS = ['de401-l1', 'de401-l2', 'de402-l1', 'de402-l2', 'de403-l1', 'de404-l1', 'de404-l2', 'de405-l1', 'de406-l1', 'de407-l1'];

    checkLessonBadge('badge-hacking-offensive', OFFENSIVE_HACKING_LESSONS);
    checkLessonBadge('badge-hacking-defensive', DEFENSIVE_HACKING_LESSONS);
    checkLessonBadge('badge-hacking-complete', COMPLETE_HACKING_LESSONS);
    checkLessonBadge('badge-fs-frontend', FS_FRONTEND_LESSONS);
    checkLessonBadge('badge-fs-backend', FS_BACKEND_LESSONS);
    checkLessonBadge('badge-fs-complete', COMPLETE_FS_LESSONS);
    checkLessonBadge('badge-math-core', MATH_CORE_LESSONS);
    checkLessonBadge('badge-math-complete', COMPLETE_MATH_LESSONS);
    checkLessonBadge('badge-de-core', DE_CORE_LESSONS);
    checkLessonBadge('badge-de-complete', COMPLETE_DE_LESSONS);

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
