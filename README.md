# CDL Exam API --- System Architecture

``` mermaid
flowchart LR
    Client["Flutter CDL Client"] -->|"HTTPS / JSON + Bearer Token"| Router["AdonisJS Router"]

    subgraph API["AdonisJS 6 / TypeScript"]
        Router --> Middleware["Auth Middleware"]
        Router --> AuthController["Auth + Google Auth Controllers"]
        Middleware --> ExamsController["Exams Controller"]
        Middleware --> AttemptsController["Exam Attempts Controller"]
        Middleware --> UserController["User Controller"]

        AuthController --> OTP["OTP / Mail Service"]
        AuthController --> UserModel["User + Access Token Models"]
        ExamsController --> ExamModels["Exam / Question / Answer Models"]
        AttemptsController --> ExamModels
        AttemptsController --> AttemptModel["ExamUser Progress Model"]
        UserController --> UserModel
    end

    UserModel --> PG[("PostgreSQL")]
    ExamModels --> PG
    AttemptModel --> PG
    OTP --> SMTP["SMTP Email Provider"]
    AuthController --> Google["Google OAuth 2.0"]
    API -.-> Redis[("Redis")]
```

### Responsibility map

  -----------------------------------------------------------------------
  Component                           Responsibility
  ----------------------------------- -----------------------------------
  Router                              Maps HTTP endpoints to controllers

  Auth middleware                     Protects user-specific API
                                      operations

  Auth controller                     Registration, login, verification,
                                      password recovery

  Google auth controller              Google OAuth/mobile sign-in
                                      integration

  Exams controller                    Exam creation, listing and
                                      retrieval

  Exam attempts controller            Start, submit, pause, resume and
                                      progress

  Lucid models                        Database mapping and relationships

  PostgreSQL                          Users, exams, questions, answers
                                      and attempt state

  OTP/mail service                    Verification and password-reset
                                      email delivery
  -----------------------------------------------------------------------

# CDL Exam API

> Backend REST API for a Commercial Driver's License (CDL) exam
> preparation application.

Built with **AdonisJS 6**, **TypeScript**, **PostgreSQL**, and
token-based authentication, this service powers user accounts, email
verification, exam delivery, progress tracking, and resumable exam
attempts.

## Highlights

-   Email/password registration and login
-   Email verification using one-time passwords (OTP)
-   Password reset flow using OTP
-   Google OAuth support
-   Bearer-token protected API routes
-   CDL exam categories: **Combination**, **Air Brakes**, and
    **General**
-   Randomized answer ordering
-   Start, pause, resume, and submit exam attempts
-   Per-user progress, correct/wrong answer counts, and elapsed time
-   PostgreSQL persistence through Lucid ORM
-   SMTP email delivery
-   Admin-key protected exam creation

## Tech Stack

  Layer                    Technology
  ------------------------ -------------------------------
  Runtime                  Node.js
  Framework                AdonisJS 6
  Language                 TypeScript
  ORM                      Lucid
  Database                 PostgreSQL
  Authentication           AdonisJS Auth / access tokens
  OAuth                    Google OAuth 2.0
  Validation               VineJS
  Email                    AdonisJS Mail / SMTP
  Cache / infrastructure   Redis / ioredis
  Testing                  Japa
  Formatting / linting     Prettier, ESLint

## System Architecture

``` mermaid
flowchart LR
    Mobile["CDL Flutter App"] -->|"HTTPS / JSON"| API["AdonisJS REST API"]

    subgraph Backend["CDL Exam API"]
        API --> Routes["Routes + Auth Middleware"]
        Routes --> Auth["Auth / Google OAuth Controllers"]
        Routes --> Exams["Exam Controller"]
        Routes --> Attempts["Exam Attempts Controller"]
        Auth --> Services["OTP / Mail Services"]
        Auth --> Models["Lucid Models"]
        Exams --> Models
        Attempts --> Models
    end

    Models --> DB[("PostgreSQL")]
    Services --> SMTP["SMTP / Gmail"]
    Auth --> Google["Google OAuth"]
    API -. "optional cache / infra" .-> Redis[("Redis")]
```

## Core Request Flow

``` mermaid
sequenceDiagram
    participant App as Flutter App
    participant API as AdonisJS API
    participant Auth as Auth Middleware
    participant DB as PostgreSQL

    App->>API: POST /login
    API->>DB: Validate user credentials
    DB-->>API: User
    API-->>App: Bearer access token

    App->>API: POST /exams/:examId/start
    API->>Auth: Validate bearer token
    Auth-->>API: Authenticated user
    API->>DB: Create/find exam attempt
    DB-->>API: Attempt progress
    API-->>App: Exam + progress

    App->>API: POST /exams/:examId/submit
    API->>DB: Check answer + update progress
    DB-->>API: Updated attempt
    API-->>App: Correct/wrong + progress
```

## Main API Areas

### Authentication

`POST /register` · `POST /login` · `POST /auth/verify` ·
`POST /auth/resend-otp` · `POST /auth/update-email`

Password recovery is handled by:

`POST /auth/request-password-reset` · `POST /auth/verify-reset-otp` ·
`POST /auth/reset-password`

Google authentication is exposed through `/auth/google` and
`/auth/google/callback`.

### Authenticated User & Exam Routes

Protected routes include profile retrieval/update, logout, exam
listing/details, starting attempts, submitting answers, pausing, and
resuming.

## Project Structure

``` text
cdl-exam-app/
├── app/
│   ├── controllers/       # HTTP request handlers
│   ├── models/            # Lucid database models
│   ├── middleware/        # Request/auth middleware
│   ├── services/          # OTP, email and supporting services
│   ├── validators/        # Request validation
│   └── ...
├── config/                # AdonisJS configuration
├── database/              # Migrations / seeders
├── start/
│   ├── routes.ts          # API route definitions
│   └── kernel.ts          # Middleware registration
├── tests/                 # Japa tests
├── .env.example
├── adonisrc.ts
└── package.json
```

## Getting Started

### Prerequisites

-   Node.js
-   npm
-   PostgreSQL
-   SMTP credentials for email verification
-   Google OAuth credentials if Google sign-in is required

### Installation

``` bash
git clone https://github.com/userman105/cdl-exam-app.git
cd cdl-exam-app
npm install
cp .env.example .env
node ace generate:key
```

Create the PostgreSQL database configured in `.env`, then run your
migrations:

``` bash
node ace migration:run
npm run dev
```

The default development configuration exposes the server on port `3333`.

## Environment Configuration

Important variables include:

``` env
PORT=3333
APP_KEY=

DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=
DB_DATABASE=cdl-app

ADMIN_KEY=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=
SMTP_PASSWORD=
MAIL_FROM_ADDRESS=
```

Never commit production credentials or a populated `.env` file.

## Development Commands

``` bash
npm run dev
npm run build
npm start
npm test
npm run lint
npm run typecheck
npm run format
```

## Architecture Notes

The API follows the standard AdonisJS separation of **routes →
middleware/controllers → services/models → PostgreSQL**. Authentication
gates user-specific exam operations, while the exam-attempt layer
persists progress so a mobile client can pause and resume an attempt
without treating the UI as the source of truth.

Exam creation is currently guarded with an `ADMIN_KEY`. For a larger
production system, a database-backed role/permission model would be a
natural evolution.

## Repository

GitHub: `userman105/cdl-exam-app`
