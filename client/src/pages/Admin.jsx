import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

// FETCHING API
const API = import.meta.env.VITE_API_URL || "http://localhost:4000";

export default function Admin() {
  const [secret, setSecret] = useState("");
  const [apps, setApps] = useState(null);
  const [err, setErr] = useState("");

  async function load() {
    setErr("");
    try {
      const res = await fetch(`${API}/api/applicants`, {
        headers: { "x-admin-secret": secret },
      });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      setApps(data);
    } catch (e) {
      setErr(e.message);
      setApps(null);
    }
  }

  return (
    <div className="min-h-[80vh] px-4 py-10 bg-gradient-to-br from-indigo-50 via-pink-50 to-yellow-50">
      <div className="max-w-3xl mx-auto space-y-6">
        <Card className="shadow-2xl border border-slate-200 backdrop-blur-sm bg-white/90">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-slate-800">
              Admin — View Applicants
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3 mb-4">
              <Input
                placeholder="Admin secret"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                className="flex-1"
              />
              <Button onClick={load} className="whitespace-nowrap">
                Load
              </Button>
            </div>

            {err && (
              <div className="text-red-600 text-sm font-medium mb-3">
                {err}
              </div>
            )}

            {apps && apps.length === 0 && (
              <div className="text-slate-600 font-medium">No applicants</div>
            )}

            {apps &&
              apps.map((a) => (
                <div
                  key={a._id}
                  className="p-4 mb-4 bg-white rounded-xl shadow-md border border-slate-100"
                >
                  <div className="flex justify-between items-start">
                    <strong className="text-lg text-slate-800">
                      {a.name} ({a.role})
                    </strong>
                    <span className="text-sm text-slate-500">
                      {new Date(a.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <div className="text-sm text-slate-600 mt-1">
                    {a.email} • {a.phone}
                  </div>
                  <div className="text-sm text-slate-700 mt-2 italic">
                    {a.skills?.join(", ")}
                  </div>
                  <p className="mt-2 text-slate-700">{a.message}</p>
                </div>
              ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
