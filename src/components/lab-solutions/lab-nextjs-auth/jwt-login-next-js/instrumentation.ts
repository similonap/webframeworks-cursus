import { seedDummyUsers } from "./database/auth";

 
export function register() {
  seedDummyUsers().catch(err => console.error("Error seeding dummy users:", err));
}