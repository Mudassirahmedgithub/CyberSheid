'use client';

import { useState } from 'react';

const labels: Record<number, string> = {
  0: 'Benign',
  1: 'Bot',
  2: 'DDoS',
  3: 'DDoS Hulk',
  4: 'Attack',
};

const labelMeta: Record<number, { color: string; bg: string; icon: string; desc: string }> = {
  0: { color: '#28a745', bg: 'rgba(40,167,69,0.12)', icon: '✓', desc: 'No threat detected. Traffic appears normal.' },
  1: { color: '#ffc107', bg: 'rgba(255,193,7,0.12)', icon: '⚠', desc: 'Automated bot activity detected.' },
  2: { color: '#dc3545', bg: 'rgba(220,53,69,0.12)', icon: '⛔', desc: 'Distributed Denial of Service attack detected.' },
  3: { color: '#dc3545', bg: 'rgba(220,53,69,0.15)', icon: '🛑', desc: 'High-volume DDoS Hulk attack pattern detected.' },
  4: { color: '#e83e8c', bg: 'rgba(232,62,140,0.12)', icon: '☠', desc: 'Malicious attack traffic identified.' },
};

const fields = [
  { name: 'Active Min', hint: 'Minimum active time (μs)' },
  { name: 'Fwd PSH Flags', hint: 'Forward PSH flag count' },
  { name: 'SYN Flag Count', hint: 'Number of SYN flags' },
  { name: 'Flow Packets/s', hint: 'Packets per second' },
  { name: 'Fwd Packets/s', hint: 'Forward packets per second' },
  { name: 'Active Mean', hint: 'Mean active time (μs)' },
  { name: 'Active Std', hint: 'Std dev of active time' },
  { name: 'Flow IAT Min', hint: 'Min inter-arrival time (μs)' },
  { name: 'Bwd IAT Total', hint: 'Backward total IAT (μs)' },
  { name: 'URG Flag Count', hint: 'Urgent flag count' },
  { name: 'Bwd IAT Std', hint: 'Backward IAT std dev' },
  { name: 'FIN Flag Count', hint: 'Number of FIN flags' },
  { name: 'Min Packet Length', hint: 'Minimum packet size (bytes)' },
  { name: 'Down/Up Ratio', hint: 'Download/Upload ratio' },
  { name: 'Total Length of Fwd Packets', hint: 'Total bytes in fwd direction' },
  { name: 'Subflow Fwd Bytes', hint: 'Subflow forward bytes' },
  { name: 'PSH Flag Count', hint: 'Total PSH flag count' },
  { name: 'Bwd IAT Max', hint: 'Backward IAT maximum (μs)' },
];

export default function Page() {
  const [form, setForm] = useState<string[]>(Array(fields.length).fill(''));
  const [result, setResult] = useState<{ pred: number; label: string } | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const updateValue = (i: number, value: string) => {
    const arr = [...form];
    arr[i] = value;
    setForm(arr);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError('');

    try {
      const payload = {
        features: form.map((x) => Number(x || 0)),
      };

      console.log('Sending:', payload);

      const res = await fetch('https://render-u60p.onrender.com/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      console.log('Raw response:', text);

      if (!res.ok) {
        setError(`Error ${res.status}: ${text}`);
        setLoading(false);
        return;
      }

      const data = JSON.parse(text);
      const pred = data.prediction;
      const label = labels[pred] || 'Unknown';
      setResult({ pred, label });
    } catch (err: any) {
      setError('Frontend Error: ' + err.message);
    }

    setLoading(false);
  };

  const meta = result !== null ? labelMeta[result.pred] : null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Open+Sans:wght@400;500;600&display=swap');

        .predict-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #0d1117 0%, #161b22 100%);
          font-family: 'Open Sans', sans-serif;
          padding: 3rem 1rem 5rem;
          position: relative;
          overflow-x: hidden;
        }

        .predict-page::before {
          content: '';
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background:
            radial-gradient(circle at 15% 40%, rgba(0, 123, 255, 0.08) 0%, transparent 55%),
            radial-gradient(circle at 85% 70%, rgba(220, 53, 69, 0.07) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
        }

        .predict-container {
          position: relative;
          z-index: 1;
          max-width: 860px;
          margin: 0 auto;
        }

        /* ---- Page Header ---- */
        .predict-header {
          text-align: center;
          margin-bottom: 2.5rem;
          animation: fadeInDown 0.6s ease-out;
        }

        .predict-header .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(0, 123, 255, 0.15);
          border: 1px solid rgba(0, 123, 255, 0.35);
          color: #58a6ff;
          border-radius: 2rem;
          padding: 0.35rem 1rem;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .predict-header h1 {
          font-family: 'Poppins', sans-serif;
          font-size: 2.4rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 0.75rem;
          line-height: 1.2;
        }

        .predict-header h1 span {
          background: linear-gradient(135deg, #007bff 0%, #58a6ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .predict-header p {
          color: #8b949e;
          font-size: 1rem;
          max-width: 540px;
          margin: 0 auto;
        }

        /* ---- Card ---- */
        .predict-card {
          background: rgba(22, 27, 34, 0.9);
          border: 1px solid #30363d;
          border-radius: 1.25rem;
          padding: 2.5rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(8px);
          animation: fadeInUp 0.6s ease-out;
        }

        .card-section-title {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: 'Poppins', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          color: #58a6ff;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid #21262d;
        }

        .card-section-title::before {
          content: '';
          display: inline-block;
          width: 3px;
          height: 1rem;
          background: linear-gradient(180deg, #007bff, #0056b3);
          border-radius: 2px;
        }

        /* ---- Fields Grid ---- */
        .fields-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1.25rem;
        }

        .field-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .field-label {
          font-weight: 600;
          font-size: 0.82rem;
          color: #c9d1d9;
          letter-spacing: 0.2px;
        }

        .field-hint {
          font-size: 0.72rem;
          color: #484f58;
          margin-top: -0.2rem;
        }

        .field-input {
          background: #0d1117;
          border: 1.5px solid #30363d;
          border-radius: 0.5rem;
          color: #e6edf3;
          font-family: 'Open Sans', sans-serif;
          font-size: 0.9rem;
          padding: 0.6rem 0.85rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          width: 100%;
          -moz-appearance: textfield;
        }

        .field-input::-webkit-outer-spin-button,
        .field-input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        .field-input::placeholder {
          color: #484f58;
        }

        .field-input:focus {
          outline: none;
          border-color: #007bff;
          box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.12);
        }

        .field-input:hover:not(:focus) {
          border-color: #484f58;
        }

        /* ---- Submit ---- */
        .submit-row {
          margin-top: 2rem;
          display: flex;
          justify-content: center;
        }

        .btn-predict {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.9rem 3rem;
          background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
          color: white;
          border: none;
          border-radius: 0.6rem;
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 16px rgba(0, 123, 255, 0.3);
          position: relative;
          overflow: hidden;
        }

        .btn-predict::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .btn-predict:hover:not(:disabled)::before {
          opacity: 1;
        }

        .btn-predict:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(0, 123, 255, 0.45);
        }

        .btn-predict:active:not(:disabled) {
          transform: translateY(-1px);
        }

        .btn-predict:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* ---- Spinner ---- */
        .spinner {
          width: 16px;
          height: 16px;
          border: 2.5px solid rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          display: inline-block;
        }

        /* ---- Result ---- */
        .result-box {
          margin-top: 2rem;
          border-radius: 0.85rem;
          padding: 1.5rem 1.75rem;
          border: 1.5px solid;
          display: flex;
          align-items: flex-start;
          gap: 1.1rem;
          animation: fadeInUp 0.4s ease-out;
        }

        .result-icon {
          font-size: 1.75rem;
          line-height: 1;
          flex-shrink: 0;
          margin-top: 0.1rem;
        }

        .result-content {}

        .result-label {
          font-family: 'Poppins', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 0.3rem;
        }

        .result-desc {
          font-size: 0.875rem;
          color: #8b949e;
          margin: 0;
        }

        .result-meta {
          margin-top: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          color: #484f58;
        }

        .result-meta code {
          background: rgba(255,255,255,0.06);
          border-radius: 0.25rem;
          padding: 0.1rem 0.4rem;
          font-size: 0.78rem;
          color: #8b949e;
        }

        /* ---- Error ---- */
        .error-box {
          margin-top: 1.5rem;
          background: rgba(220, 53, 69, 0.1);
          border: 1.5px solid rgba(220, 53, 69, 0.35);
          border-radius: 0.75rem;
          padding: 1rem 1.25rem;
          color: #f85149;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          animation: fadeInUp 0.3s ease-out;
        }

        /* ---- Divider ---- */
        .divider {
          border: none;
          border-top: 1px solid #21262d;
          margin: 2rem 0;
        }

        /* ---- Animations ---- */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* ---- Responsive ---- */
        @media (max-width: 640px) {
          .predict-card { padding: 1.5rem; }
          .predict-header h1 { font-size: 1.75rem; }
          .fields-grid { grid-template-columns: 1fr; }
          .btn-predict { width: 100%; justify-content: center; }
        }
      `}</style>

      <div className="predict-page">
        <div className="predict-container">

          {/* Header */}
          <div className="predict-header">
            <div className="badge">
              <span>🛡</span> CyberShield AI Engine
            </div>
            <h1>Network <span>Threat Predictor</span></h1>
            <p>Enter your network flow features below. Our ML model will classify the traffic and identify any potential threats.</p>
          </div>

          {/* Form Card */}
          <div className="predict-card">
            <div className="card-section-title">
              Flow Feature Input
            </div>

            <form onSubmit={submit}>
              <div className="fields-grid">
                {fields.map((field, i) => (
                  <div key={i} className="field-group">
                    <label className="field-label" htmlFor={`field-${i}`}>
                      {field.name}
                    </label>
                    <span className="field-hint">{field.hint}</span>
                    <input
                      id={`field-${i}`}
                      className="field-input"
                      type="number"
                      step="any"
                      placeholder="0"
                      value={form[i]}
                      onChange={(e) => updateValue(i, e.target.value)}
                    />
                  </div>
                ))}
              </div>

              <hr className="divider" />

              <div className="submit-row">
                <button type="submit" className="btn-predict" disabled={loading}>
                  {loading ? (
                    <>
                      <span className="spinner" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <span>⚡</span>
                      Run Prediction
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Result */}
            {result !== null && meta && (
              <div
                className="result-box"
                style={{
                  background: meta.bg,
                  borderColor: meta.color + '55',
                }}
              >
                <div className="result-icon">{meta.icon}</div>
                <div className="result-content">
                  <div className="result-label" style={{ color: meta.color }}>
                    {result.label}
                  </div>
                  <p className="result-desc">{meta.desc}</p>
                  <div className="result-meta">
                    Prediction class <code>{result.pred}</code>
                  </div>
                </div>
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="error-box">
                <span>⚠</span>
                <span>{error}</span>
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
}