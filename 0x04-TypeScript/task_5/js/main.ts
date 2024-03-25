// Define interfaces
interface MajorCredits {
  credits: number;
  brand: "major";
}

interface MinorCredits {
  credits: number;
  brand: "minor";
}

// Define functions
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "major"
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "minor"
  };
}

// Export interfaces and functions
export { MajorCredits, MinorCredits, sumMajorCredits, sumMinorCredits };
