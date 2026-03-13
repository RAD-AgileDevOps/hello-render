const secretKey = process.env.VESSEL_KEY || "NO_KEY_FOUND";

console.log("--- SYSTEM INITIALIZED ---");
console.log("Accessing the Vessel...");
console.log(`Security Clearance: ${secretKey}`);
