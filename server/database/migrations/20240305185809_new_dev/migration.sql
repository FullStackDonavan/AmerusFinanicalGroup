-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL PRIMARY KEY,
    "loginType" VARCHAR(191) DEFAULT 'email',
    "password" VARCHAR(191),
    "email" VARCHAR(191),
    "firstName" VARCHAR(191),
    "lastName" VARCHAR(191),
    "username" VARCHAR(191),
    "phone" VARCHAR(191),
    "stripeCustomerId" VARCHAR(191),

    UNIQUE ("email"),
    UNIQUE ("username"),
    UNIQUE ("phone")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL PRIMARY KEY,
    "authToken" VARCHAR(191) NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    UNIQUE ("authToken")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "id" SERIAL PRIMARY KEY,
    "userId" INTEGER NOT NULL,
    "stripeId" VARCHAR(191) NOT NULL,
    "stripeStatus" VARCHAR(191),
    "stripePriceId" VARCHAR(191),
    "quantity" INTEGER,
    "trialEndsAt" INTEGER,
    "endsAt" INTEGER,
    "startDate" INTEGER NOT NULL,
    "lastEventDate" INTEGER NOT NULL,

    UNIQUE ("stripeId")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL PRIMARY KEY,
    "authorId" INTEGER NOT NULL,
    "title" VARCHAR(191) NOT NULL,
    "description" VARCHAR(191) NOT NULL
);

-- CreateTable
CREATE TABLE "Answer" (
    "id" SERIAL PRIMARY KEY,
    "questionId" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,
    "text" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(191) NOT NULL,
    "url" VARCHAR(191) NOT NULL,
    "image" VARCHAR(191),
    "accentColor" VARCHAR(191)
);

-- CreateTable
CREATE TABLE "Topic" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(191) NOT NULL,
    "displayName" VARCHAR(191),
    "showName" BOOLEAN,
    "url" VARCHAR(191) NOT NULL,
    "image" VARCHAR(191),
    "accentColor" VARCHAR(191)
);

-- CreateTable
CREATE TABLE "Series" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(191) NOT NULL,
    "displayName" VARCHAR(191),
    "url" VARCHAR(191) NOT NULL,
    "topicId" INTEGER,
    "image" VARCHAR(191),
    "accentColor" VARCHAR(191)
);

-- CreateTable
CREATE TABLE "Video" (
    "id" SERIAL PRIMARY KEY,
    "url" VARCHAR(191) NOT NULL,
    "host_type" VARCHAR(191) NOT NULL,
    "host_id" VARCHAR(191) NOT NULL,
    "title" VARCHAR(191) NOT NULL,
    "subtitle" VARCHAR(191) NOT NULL,
    "description" VARCHAR(191),
    "image" VARCHAR(191),
    "topicId" INTEGER NOT NULL,
    "seriesId" INTEGER,
    "seriesPosition" INTEGER,
    "accentColor" VARCHAR(191)
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(191) NOT NULL,
    "accentColor" VARCHAR(191)
);

-- CreateTable
CREATE TABLE "TagAssignment" (
    "id" SERIAL PRIMARY KEY,
    "entity_type" VARCHAR(191) NOT NULL,
    "entity_id" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "CategoryAssignment" (
    "id" SERIAL PRIMARY KEY,
    "entity_type" VARCHAR(191) NOT NULL,
    "entity_id" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "TestMigration" (
    "id" SERIAL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "TestAnotherMigration" (
    "id" SERIAL PRIMARY KEY
);

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Series" ADD CONSTRAINT "Series_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_seriesId_fkey" FOREIGN KEY ("seriesId") REFERENCES "Series"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagAssignment" ADD CONSTRAINT "TagAssignment_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryAssignment" ADD CONSTRAINT "CategoryAssignment_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
