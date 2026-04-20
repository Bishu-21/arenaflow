# ArenaFlow 🏟️🚀

**Vertical:** Physical Event Experience

ArenaFlow is an advanced spatial telemetry and predictive routing platform designed to tackle stadium congestion, structural routing, and crowd management. It brings a "Meticulous Dashboard Experience" to attendees and command-center operators alike, architecting the future of physical events.

## Approach and Logic

The core logic of ArenaFlow relies on processing real-time telemetry from a physical stadium environment and applying advanced AI predictive models to anticipate crowd movement. Rather than just tracking people, the system:
1. Translates physical spaces into a digital "Flow Map."
2. Feeds active congestion data into a Gemini-powered Predictive Engine.
3. Automatically computes fluid routing paths and issues proactive alerts before severe bottlenecks occur.
4. Distributes these insights across a responsive dashboard natively supporting both Light and Dark modes.
5. Secures user data and limits organizational capabilities via access controls managed by Better Auth, while Razorpay governs scalable tiers.

## How the Solution Works

1. **Next.js & Neon Postgres Database**: The stack operates on Next.js 16 (App Router), optimized for hyper-fast data deliveries mapped back to a highly scalable serverless Neon Postgres backend via Drizzle ORM.
2. **Gemini AI Predictive Modeling**: Integrated via `@google/genai`, the application leverages the `gemma-4-31b-it` model to observe spatial anomalies. The "Predictive AI HUD" triggers simulations of crowd flows to detect chokepoints and offer real-time mitigation tactics.
3. **End-to-End Secure Subscriptions**: Users authenticate securely using Better Auth. Facility and enterprise accounts can subscribe using the integrated Razorpay checkout system for omniscient-scale features.
4. **Cloud Deployment**: The architecture is fully prepared for continuous deployment to Google Cloud Run, leveraging an enterprise-grade cloud native workflow for robust availability.
5. **Quality Assurance & Accessibility**: 
   - **Testing**: Implemented a comprehensive testing suite using **Vitest** and **React Testing Library**, covering core navigation and critical UI components to ensure zero-regression deployments.
   - **Accessibility**: Architected with inclusive design patterns including full **ARIA landmark support**, unique element IDs for assistive technology, and optimized semantic structure (WCAG compliant).
   - **Google Services Integration**:
     - **Gemini AI**: Real-time predictive telemetry for crowd density using `gemini-1.5-flash` (via custom route handlers).
     - **Google Maps**: Visual geospatial tracking using `@vis.gl/react-google-maps` for stadium-scale navigation.
     - **Google Analytics**: Performance and user engagement tracking.
     - **Google Font & Icons**: Material Symbols and Outfit typography for premium UI.

## Assumptions Made

- **Device Agnosticism**: Assumed that venue staff and attendees use a mix of mobile devices and command-center desktop monitors, driving the need for a robust Tailwind CSS responsive design built natively for cross-platform access.
- **Real-time Data Availability**: The Gemini model predictions operate under the assumption that stadium IoT sensors, cameras, or manual data entry provide relatively up-to-date regional capacity metrics.
- **Serverless Scaling**: Assumed Google Cloud Run and Neon Serverless Postgres are optimal for handling the massive traffic spikes typically seen during opening gates, halftimes, and event exits.

---
*Built with Google Antigravity.*
