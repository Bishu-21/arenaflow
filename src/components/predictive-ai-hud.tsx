"use client";

import { useState } from "react";

export function PredictiveAIHUD() {
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState<string | null>(null);

  const getPrediction = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          scenario: "High density buildup observed between Sec 104 and Exit B. Ambient temperature rising, flow rate decreasing to 0.5 meters/second.",
        }),
      });
      const data = await response.json();
      if (data.prediction) {
        setPrediction(data.prediction);
      } else {
        setPrediction("Anomaly detected. AI telemetry temporarily blinded. Reroute manually.");
      }
    } catch (e) {
      console.error(e);
      setPrediction("Connection to Omniscient Scale lost. Retrying telemetry...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-surface-container-low/90 backdrop-blur-md rounded-2xl p-4 border border-outline-variant/20 mb-4 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider flex items-center gap-1">
          <span className="material-symbols-outlined text-tertiary text-[18px] text-animate-gradient">auto_awesome</span>
          Gemini Predictive AI
        </h3>
        {!prediction && !loading && (
          <button 
            onClick={getPrediction}
            className="text-xs bg-tertiary text-on-tertiary rounded-full px-3 py-1 font-bold shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            Analyze Flow
          </button>
        )}
      </div>
      
      {loading && (
        <div className="animate-pulse flex items-center gap-2 text-xs text-on-surface-variant">
          <div className="w-2 h-2 rounded-full bg-tertiary animate-ping"></div>
           Synthesizing telemetry data stream...
        </div>
      )}

      {prediction && !loading && (
        <div className="text-sm text-on-surface leading-relaxed border-l-2 border-tertiary pl-3">
          <p>{prediction}</p>
          <button onClick={() => setPrediction(null)} className="text-xs text-on-surface-variant font-bold mt-2 hover:text-tertiary transition-colors">Dismiss</button>
        </div>
      )}
    </div>
  );
}
