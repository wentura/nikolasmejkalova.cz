import Recenze from "@/components/recenze";

export const metadata = {
  title: "Řekli o mně",
  description:
    "Zkušenosti klientů s terapiemi Nikoly Smejkalové – Psych-K a Stínová alchymie.",
  alternates: {
    canonical: "/recenze",
  },
};

export default function RecenzePage() {
  return (
    <div>
      <Recenze />
    </div>
  );
}
