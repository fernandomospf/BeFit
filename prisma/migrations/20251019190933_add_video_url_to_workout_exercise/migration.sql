/*
  Warnings:

  - You are about to drop the `workout_exercises` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `workout_sessions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `workouts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."workout_exercises" DROP CONSTRAINT "workout_exercises_workout_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."workout_sessions" DROP CONSTRAINT "workout_sessions_user_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."workout_sessions" DROP CONSTRAINT "workout_sessions_workout_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."workouts" DROP CONSTRAINT "workouts_user_id_fkey";

-- DropTable
DROP TABLE "public"."workout_exercises";

-- DropTable
DROP TABLE "public"."workout_sessions";

-- DropTable
DROP TABLE "public"."workouts";

-- CreateTable
CREATE TABLE "Workout" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "day_of_week" TEXT NOT NULL,
    "muscle_group" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Workout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkoutExercise" (
    "id" TEXT NOT NULL,
    "workout_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sets" INTEGER NOT NULL DEFAULT 3,
    "reps" INTEGER NOT NULL DEFAULT 10,
    "notes" TEXT,
    "video_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WorkoutExercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkoutSession" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "workout_id" TEXT,
    "session_date" TIMESTAMP(3) NOT NULL,
    "total_duration" INTEGER,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WorkoutSession_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Workout" ADD CONSTRAINT "Workout_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkoutExercise" ADD CONSTRAINT "WorkoutExercise_workout_id_fkey" FOREIGN KEY ("workout_id") REFERENCES "Workout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkoutSession" ADD CONSTRAINT "WorkoutSession_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkoutSession" ADD CONSTRAINT "WorkoutSession_workout_id_fkey" FOREIGN KEY ("workout_id") REFERENCES "Workout"("id") ON DELETE SET NULL ON UPDATE CASCADE;
