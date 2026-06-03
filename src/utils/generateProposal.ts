export function generateProposal(idea: string): string {
  return `
Project Summary:
This project is based on your idea: ${idea}

Recommended Tech Stack:
Frontend: React + TypeScript
Backend: Node.js / NestJS
Database: PostgreSQL
Cloud: Vercel / AWS

Features Breakdown:
- User authentication
- Dashboard
- Main user flow
- Admin panel
- Reports and analytics

Development Roadmap:
1. Requirement gathering
2. Wireframes and UI design
3. Backend APIs
4. Frontend development
5. Testing
6. Deployment

Time Estimation:
Design: 2 weeks
Backend: 4 weeks
Frontend: 4 weeks
Testing: 1 week
Deployment: 1 week

Team Recommendation:
- UI/UX Designer
- React Developer
- Backend Developer
- QA Engineer
- Project Manager

Risks:
- Security
- Scalability
- Third-party integrations
- Server cost
`;
}
