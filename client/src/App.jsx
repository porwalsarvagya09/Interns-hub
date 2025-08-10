import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-violet-200">
        {/* Header / Navbar */}
        <header className="sticky top-0 bg-white shadow z-50">
          <nav className="container mx-auto flex items-center justify-between p-4">
            <h1 className="text-2xl font-bold tracking-tight text-slate-800">
              VolunteerHub
            </h1>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <Button
                      variant="ghost"
                      className="font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-200 transition-colors duration-200"
                    >
                      Home
                    </Button>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/register">
                    <Button variant="ghost" className="font-medium">
                      Register
                    </Button>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/admin">
                    <Button variant="ghost" className="font-medium">
                      Admin
                    </Button>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </header>

        {/* Main Content */}
        <main className="container mx-auto p-6">
          <Card className="shadow-lg border border-slate-200">
            <CardContent className="p-6">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin" element={<Admin />} />
              </Routes>
            </CardContent>
          </Card>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
