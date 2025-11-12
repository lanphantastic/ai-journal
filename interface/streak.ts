export interface StreakData {
    currentStreak: number;
    longestStreak: number;
    lastEntryDate: string | null;
    streakDates: string[];
  }

  export interface UseStreaksReturn {
    currentStreak: number;
    longestStreak: number;
    lastEntryDate: string | null;
    streakDates: string[];
    isActive: boolean;
    statusMessage: string;
    daysUntilNextMilestone: number;
    nextMilestone: number;
    isLoading: boolean;
    error: string | null;
    refreshStreaks: () => Promise<void>;
  }