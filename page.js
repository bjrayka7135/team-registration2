"use client";
import { useState } from "react";

export default function TeamRegistration() {
  const [step, setStep] = useState(1);

  const [team, setTeam] = useState({
    name: "",
    tag: "",
    logo: null,
  });

  const [player, setPlayer] = useState({
    name: "",
    uid: "",
    primary: "",
    secondary: "",
    idFile: null,
    aadhaar: null,
    selfie: null,
  });

  const roles = ["IGL", "Fragger", "Assaulter", "Supporter"];

  const handleTeamChange = (e) => {
    setTeam({ ...team, [e.target.name]: e.target.value });
  };

  const handlePlayerChange = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.files[0] });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-gray-900 p-6 rounded-2xl shadow-lg">
        {/* Step 1: Create Team */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">Create Team</h2>

            <input
              type="text"
              name="name"
              placeholder="Team Name"
              onChange={handleTeamChange}
              className="w-full mb-3 p-2 rounded bg-gray-800 border border-gray-700"
            />
            <input
              type="text"
              name="tag"
              placeholder="Team Tag"
              onChange={handleTeamChange}
              className="w-full mb-3 p-2 rounded bg-gray-800 border border-gray-700"
            />
            <label className="block mb-2 text-sm">Upload Team Logo</label>
            <input
              type="file"
              name="logo"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full mb-3 text-sm"
            />

            <button
              onClick={nextStep}
              className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold"
            >
              Next
            </button>
          </div>
        )}

        {/* Step 2: Player Registration */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Player Registration
            </h2>

            <input
              type="text"
              name="name"
              placeholder="Player Name"
              onChange={handlePlayerChange}
              className="w-full mb-3 p-2 rounded bg-gray-800 border border-gray-700"
            />
            <input
              type="text"
              name="uid"
              placeholder="In-Game UID"
              onChange={handlePlayerChange}
              className="w-full mb-3 p-2 rounded bg-gray-800 border border-gray-700"
            />

            <label className="block mb-1 text-sm">Primary Role</label>
            <select
              name="primary"
              onChange={handlePlayerChange}
              className="w-full mb-3 p-2 rounded bg-gray-800 border border-gray-700"
            >
              <option value="">Select</option>
              {roles.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>

            <label className="block mb-1 text-sm">Secondary Role</label>
            <select
              name="secondary"
              onChange={handlePlayerChange}
              className="w-full mb-3 p-2 rounded bg-gray-800 border border-gray-700"
            >
              <option value="">Select</option>
              {roles.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>

            <label className="block mb-1 text-sm">Upload ID Screenshot</label>
            <input
              type="file"
              name="idFile"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full mb-3 text-sm"
            />

            <label className="block mb-1 text-sm">Upload Aadhaar Card</label>
            <input
              type="file"
              name="aadhaar"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full mb-3 text-sm"
            />

            <label className="block mb-1 text-sm">
              Upload Selfie with Aadhaar
            </label>
            <input
              type="file"
              name="selfie"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full mb-3 text-sm"
            />

            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded font-semibold"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-semibold"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Review & Submit */}
        {step === 3 && (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Review Details</h2>

            <p>
              <strong>Team:</strong> {team.name} ({team.tag})
            </p>
            <p>
              <strong>Player:</strong> {player.name} — UID: {player.uid}
            </p>
            <p>
              <strong>Roles:</strong> {player.primary} / {player.secondary}
            </p>

            <button
              onClick={() => alert(\"Submitted for Verification ✅\")}
              className="mt-6 bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded font-semibold w-full"
            >
              Submit for Verification
            </button>

            <button
              onClick={prevStep}
              className="mt-3 bg-gray-700 hover:bg-gray-600 py-2 px-6 rounded font-semibold w-full"
            >
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
