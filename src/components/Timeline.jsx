import { useState } from "react";

const steps = ["Register", "Submit Idea", "Mentorship", "Final"];

function Timeline() {
  const [active, setActive] = useState(0);

  // Keyboard navigation (Left/Right arrow)
  const handleKey = (e) => {
    if (e.key === "ArrowRight") {
      setActive((prev) => Math.min(prev + 1, steps.length - 1));
    }
    if (e.key === "ArrowLeft") {
      setActive((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <section className="timeline-container fade-section" aria-labelledby="timeline-heading">
      <h2 id="timeline-heading">Hackathon Timeline</h2>

      {/* Slider */}
      <input
        type="range"
        min="0"
        max={steps.length - 1}
        value={active}
        onChange={(e) => setActive(Number(e.target.value))}
        onKeyDown={handleKey}
        aria-valuemin={0}
        aria-valuemax={steps.length - 1}
        aria-valuenow={active}
        aria-valuetext={steps[active]}
      />

      {/* Steps */}
      <div className="timeline" role="list">
        {steps.map((step, index) => (
          <button
            key={index}
            className={`step ${index === active ? "active" : ""}`}
            onClick={() => setActive(index)}
            aria-current={index === active ? "step" : undefined}
          >
            {step}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Timeline;