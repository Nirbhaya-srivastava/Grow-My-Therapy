# Grow My Therapy

A modern, responsive therapy and counseling website built with **Next.js, React, and Tailwind CSS**. The project presents therapist information, therapy services, treatment approaches, office photos, frequently asked questions, and a consultation contact form through a calm, welcoming user interface.

## Features

- **Responsive Design:** Optimized layouts for desktop, tablet, and mobile devices.
- **Therapist Profile:** Introduction, professional background, and profile information.
- **Therapy Services:** Service cards describing available therapy offerings.
- **Therapeutic Approach:** Information about the therapist's approach to care.
- **Office Gallery:** Images showcasing the therapy office environment.
- **FAQ Section:** Expandable answers to frequently asked questions.
- **Consultation Form:** Contact form interface for prospective clients.
- **Interactive Navigation:** Navigation links and consultation calls to action.
- **Modern UI:** Soft colors, clean typography, and reusable components.

## Tech Stack

- **Framework:** Next.js
- **Frontend Library:** React
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Motion
- **Package Manager:** npm

## Project Structure

```text
grow-my-therapy/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── AboutSection.tsx
│   ├── AnnouncementBar.tsx
│   ├── ApproachSection.tsx
│   ├── ContactSection.tsx
│   ├── ConsultationModal.tsx
│   ├── FaqSection.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── IntroSection.tsx
│   ├── Navbar.tsx
│   ├── OfficeSection.tsx
│   └── ServicesSection.tsx
├── data/
│   └── therapistData.ts
├── public/
│   └── images/
├── types/
│   └── index.ts
├── .gitignore
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

*Note: The structure above is based on the project's discussed files. Adjust it if your actual folder structure differs.*

## Getting Started

### Prerequisites

Install the following before running the project:

- Node.js
- npm
- Git (optional, for version control)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR-USERNAME/grow-my-therapy.git
   ```

2. Navigate to the project directory:

   ```bash
   cd grow-my-therapy
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs the project's TypeScript check (`tsc --noEmit`) |

## Build for Production

Run the following commands to verify and prepare the application for production:

```bash
npm run build
npm run start
```

## Contact Form Notice

The contact form currently provides a frontend interaction only. Unless a backend or email service is connected, it does not send or store consultation requests or confirm appointments.

## Deployment

The application can be deployed using platforms such as **Vercel**. Import the GitHub repository into Vercel and follow the deployment instructions.

Once deployed, add the live website URL here:

**Live Demo:** `YOUR-DEPLOYED-WEBSITE-URL`

## Assignment Purpose

This project was developed as a web development assignment focused on recreating and redesigning a counseling website with a therapist-specific profile, reusable UI components, responsive layouts, and a custom office gallery.

## License

This project was created for educational and portfolio purposes. Ensure that all images, branding, and other assets used in the project are appropriately licensed before redistributing them.
