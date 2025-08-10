import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function Home() {
  return (
    <section className="flex justify-center items-center min-h-[80vh] px-4 bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-50">
      <Card className="w-full max-w-2xl text-center shadow-2xl rounded-2xl border border-slate-200 backdrop-blur-md bg-white/80 transition-transform duration-300 hover:scale-[1.01]">
        <CardHeader>
          <CardTitle className="text-4xl font-extrabold tracking-tight text-slate-800">
            Intern / Volunteer Registration
          </CardTitle>
          <CardDescription className="text-lg text-slate-600 mt-2">
            Build something meaningful — register to volunteer or intern.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            asChild
            size="lg"
            className="mt-6 text-white bg-gradient-to-r from-pink-300 via-red-400 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 hover:ring-2 hover:ring-offset-5 hover:ring-pink-500 transition-all duration-200 shadow-lg"
          >
            <a href="/register">Register Now</a>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
