import { User, userA } from '../user'
import { preparation } from './preparation'
import { endurance } from './endurance'
import { powerEndurance } from './power-endurance'
import { strength } from './strength'

export type TrainingType =
  | 'power'
  | 'power endurance'
  | 'endurance'
  | 'preparation'
  | 'strength'
  | 'mix'
  | 'active-rest'
  | 'rest'

export type Intensity = 'low' | 'medium' | 'high'
export type Level = 'beginner' | 'advanced' | 'elite'

export interface Task {
  name: string
  done: boolean
}

export interface Description {
  name?: string
  /**
   * Training description. Could be translated into tasks as shown below
   */
  description: string
  intensity: Intensity
  /**
   * ex. 1 year, 10 weeks, 1 hour and etc ...
   */
  duration?: string
  /**
   * [endurance, long routes, big holds]
   */
  tags?: string[]
  type?: TrainingType
  createdAt?: number
  mediaURL?: string
}

export interface TrainingDay  extends Description{
  tasks?: Task[]
}

export interface TrainingProgram extends Description {
  createdFrom: User
  phases: Record<string, TrainingCycle>
  level: Level
}

export interface TrainingCycle extends Description {
  days: TrainingDay[]
  createdFrom: User
}

export const mockProgram: TrainingProgram = {
  name: 'Endurance maker',
  intensity: 'high',
  description: 'bla',
  createdAt: Date.now(),
  createdFrom: userA,
  type: 'power endurance',
  level: 'advanced',
  phases: {
    preparation,
    endurance,
    'power-endurance': powerEndurance,
    strength
  }
}
