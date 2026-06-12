/**
 * Cybersecurity Master's Learning Web App - Core Types & Schemas
 * Based on a 8-Group Technical Roadmap
 */

export interface RoadmapArea {
  id: string; // e.g. "sec-risk", "crypto-asset"
  name: string; // e.g. "Security & Risk Management"
  description: string;
  icon: string; // Lucide icon name
  color: string; // Tailwind color name (e.g., "blue", "indigo")
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number; // 0-based index
  explanation: string;
}

export interface Quiz {
  id: string; // e.g., "quiz-lesson-1"
  title: string;
  lessonId?: string; // Optional links to standard lesson
  questions: QuizQuestion[];
}

export interface Exam {
  id: string; // e.g., "exam-module-1"
  title: string;
  moduleId: string; // Links back to Module
  questions: QuizQuestion[];
  timeLimit: number; // in minutes
}

export interface PracticalLab {
  id: string;
  moduleId: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: number; // in minutes
  xpReward: number;
  rulesOfEngagement: string[];
  topology: {
    description: string;
    diagram?: string;
    nodes: { name: string; ip: string; role: string }[];
  };
  milestones: { id: string; title: string; description: string }[];
  verificationChecks: { id: string; description: string; hint: string }[];
  expectedFlag: string;
}

export interface Lesson {
  id: string;
  moduleId: string; // links back to Module
  title: string;
  content: string; // Markdown study notes
  duration: number; // in minutes
  youtubeVideoId: string; // streaming and embedding
  quiz?: Quiz; // Linked lesson quiz
}

export interface Module {
  id: string;
  areaId: string; // Links to RoadmapArea (1 of 7)
  title: string;
  description: string;
  lessons: Lesson[];
  exam?: Exam; // Module final exam
  practicalLab?: PracticalLab; // Linked practical lab
}

export interface UserProgress {
  completedLessons: string[]; // List of lessonIds
  quizScores: Record<string, number>; // quizId -> max score percentage (0-100)
  examAttempts: Record<string, {
    score: number;
    total: number;
    passed: boolean;
    timestamp: string;
  }>; // examId -> attempt stats
  completedLabs?: string[]; // List of labIds (CTF milestones completed)
}

/* ==========================================
   POSTGRESQL RELATIONAL SCHEMA DEFINITION
   ==========================================
   You can copy-paste this direct PostgreSQL schema to provision
   the database tables for production SQL:

```sql
-- Create roadmap_areas table
CREATE TABLE roadmap_areas (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    icon VARCHAR(100) NOT NULL,
    color VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create modules table (cascade delete if roadmap area changes)
CREATE TABLE modules (
    id VARCHAR(50) PRIMARY KEY,
    area_id VARCHAR(50) REFERENCES roadmap_areas(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create lessons table (cascade delete if module is removed)
CREATE TABLE lessons (
    id VARCHAR(50) PRIMARY KEY,
    module_id VARCHAR(50) REFERENCES modules(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL, -- Holds full Markdown notes
    duration INT NOT NULL DEFAULT 15, -- in minutes
    youtube_video_id VARCHAR(50) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create quizzes table
CREATE TABLE quizzes (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    lesson_id VARCHAR(50) UNIQUE REFERENCES lessons(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create exams table
CREATE TABLE exams (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    module_id VARCHAR(50) UNIQUE REFERENCES modules(id) ON DELETE SET NULL,
    time_limit INT NOT NULL DEFAULT 30, -- in minutes
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create questions table (re-used for both quizzes and exams)
CREATE TABLE questions (
    id VARCHAR(50) PRIMARY KEY,
    quiz_id VARCHAR(50) REFERENCES quizzes(id) ON DELETE CASCADE,
    exam_id VARCHAR(50) REFERENCES exams(id) ON DELETE CASCADE,
    text TEXT NOT NULL,
    options TEXT[] NOT NULL, -- Array of string options
    correct_answer_index INT NOT NULL,
    explanation TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT check_quiz_or_exam CHECK (
        (quiz_id IS NOT NULL AND exam_id IS NULL) OR 
        (quiz_id IS NULL AND exam_id IS NOT NULL)
    )
);

-- Access and User details
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create user_lesson_completions table
CREATE TABLE user_lesson_completions (
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    lesson_id VARCHAR(50) REFERENCES lessons(id) ON DELETE CASCADE,
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, lesson_id)
);

-- Create user_quiz_scores table
CREATE TABLE user_quiz_scores (
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    quiz_id VARCHAR(50) REFERENCES quizzes(id) ON DELETE CASCADE,
    max_score_pct INT NOT NULL DEFAULT 0,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, quiz_id)
);

-- Create user_exam_attempts table
CREATE TABLE user_exam_attempts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    exam_id VARCHAR(50) REFERENCES exams(id) ON DELETE CASCADE,
    score INT NOT NULL,
    total INT NOT NULL,
    passed BOOLEAN NOT NULL,
    attempted_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```
*/

/* ==========================================
   PRISMA SCHEMA DEFINITION
   ==========================================
   Below is the corresponding schema for Prisma ORM:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id                String                 @id @default(uuid())
  email             String                 @unique
  name              String?
  createdAt         DateTime               @default(now())
  lessonCompletions UserLessonCompletion[]
  quizScores        UserQuizScore[]
  examAttempts      UserExamAttempt[]
}

model RoadmapArea {
  id          String   @id
  name        String
  description String
  icon        String
  color       String
  modules     Module[]
}

model Module {
  id          String      @id
  areaId      String
  area        RoadmapArea @relation(fields: [areaId], references: [id], onDelete: Cascade)
  title       String
  description String
  lessons     Lesson[]
  exam        Exam?
}

model Lesson {
  id             String                @id
  moduleId       String
  module         Module                @relation(fields: [moduleId], references: [id], onDelete: Cascade)
  title          String
  content        String
  duration       Int                   @default(15)
  youtubeVideoId String
  quiz           Quiz?
  completions    UserLessonCompletion[]
}

model Quiz {
  id         String          @id
  title      String
  lessonId   String?         @unique
  lesson     Lesson?         @relation(fields: [lessonId], references: [id], onDelete: SetNull)
  questions  Question[]
  userScores UserQuizScore[]
}

model Exam {
  id           String            @id
  title        String
  moduleId     String            @unique
  module       Module            @relation(fields: [moduleId], references: [id], onDelete: SetNull)
  timeLimit    Int               @default(30)
  questions    Question[]
  userAttempts UserExamAttempt[]
}

model Question {
  id                 String  @id @default(uuid())
  quizId             String?
  quiz               Quiz?   @relation(fields: [quizId], references: [id], onDelete: Cascade)
  examId             String?
  exam               Exam?   @relation(fields: [examId], references: [id], onDelete: Cascade)
  text               String
  options            String[]
  correctAnswerIndex Int
  explanation        String
}

model UserLessonCompletion {
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  lessonId  String
  lesson    Lesson   @relation(fields: [lessonId], references: [id], onDelete: Cascade)
  completed DateTime @default(now())

  @@id([userId, lessonId])
}

model UserQuizScore {
  userId      String
  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  quizId      String
  quiz        Quiz     @relation(fields: [quizId], references: [id], onDelete: Cascade)
  maxScorePct Int      @default(0)
  updatedAt   DateTime @updatedAt

  @@id([userId, quizId])
}

model UserExamAttempt {
  id          String   @id @default(uuid())
  userId      String
  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  examId      String
  exam        Exam     @relation(fields: [examId], references: [id], onDelete: Cascade)
  score       Int
  total       Int
  passed      Boolean
  attemptedAt DateTime @default(now())
}
```
*/
