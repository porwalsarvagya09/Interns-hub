import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

const API = import.meta.env.VITE_API_URL || "http://localhost:4000";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "intern",
    skills: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  async function submit(e) {
    e.preventDefault();
    const payload = {
      ...form,
      skills: form.skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    };
    try {
      const res = await fetch(`${API}/api/applicants`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus({ ok: true, msg: "Application submitted — thank you!" });
      setForm({
        name: "",
        email: "",
        phone: "",
        role: "intern",
        skills: "",
        message: "",
      });
    } catch (err) {
      setStatus({ ok: false, msg: err.message });
    }
  }

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <Card className="shadow-2xl border border-slate-200 bg-white/90 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-slate-800">
            Register
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={submit} className="space-y-5">
            <Input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Name"
            />
            <Input
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Email"
              type="email"
            />
            <Input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="Phone"
            />

            <Select
              value={form.role}
              onValueChange={(value) => setForm({ ...form, role: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="intern">Intern</SelectItem>
                <SelectItem value="volunteer">Volunteer</SelectItem>
              </SelectContent>
            </Select>

            <Input
              value={form.skills}
              onChange={(e) => setForm({ ...form, skills: e.target.value })}
              placeholder="Skills (comma separated)"
            />

            <Textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="A short message"
              rows={4}
            />

            <div className="flex items-center gap-4">
              <Button type="submit" className="px-6">
                Submit
              </Button>
              {status && (
                <span
                  className={`text-sm font-medium ${
                    status.ok ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {status.msg}
                </span>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
