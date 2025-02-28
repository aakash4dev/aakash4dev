import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],weight:["400","500","600","700"]
});
const ovo = Ovo({
  subsets: ["latin"],weight:["400"]
});


export const metadata = {
    title: "Aakash Singh Rajput - Senior Blockchain Developer",
    description:
        "Welcome to the portfolio of Aakash Singh Rajput, a passionate Blockchain Developer specializing in decentralized technologies, cryptography, and Web3 innovation. Explore my work in Golang, Rust, Cosmos, FHE, and Zero-Knowledge Proofs.",
    keywords: [
        "Aakash Singh Rajput",
        "Blockchain Developer",
        "Senior Blockchain Developer",
        "Web3",
        "Cryptography",
        "Zero-Knowledge Proofs",
        "Fully Homomorphic Encryption",
        "FHE",
        "Rust",
        "Golang",
        "Cosmos",
        "Solana",
        "Ethereum",
        "Smart Contracts",
        "Decentralized Applications",
        "Crypto",
        "Programming",
        "Coding",
        "DApps",
        "DeFi",
        "Security",
    ],
    author: "Aakash Singh Rajput",
    openGraph: {
        title: "Aakash Singh Rajput - Senior Blockchain Developer",
        description:
            "Discover the projects and expertise of Aakash Singh Rajput, a dedicated Blockchain Developer specializing in Rust, Golang, Cosmos, FHE, and Zero-Knowledge Proofs.",
        url: "https://www.aakash4dev.com", 
        type: "website",
    },
    twitter: {
      title: "Aakash Singh Rajput - Blockchain Developer Portfolio",
      description:
      "Explore the blockchain projects, Web3 innovations, and cryptographic research of Aakash Singh Rajput. Specializing in Rust, Golang, Cosmos, and advanced security.",
      url: "https://www.x.com/aakash4dev",
      type: "profile",
    },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${ovo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
