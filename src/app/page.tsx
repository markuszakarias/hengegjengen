import Link from "next/link";
import { Calendar, CarFront } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { sections } from "@/lib/data";

export const metadata: Metadata = {
  title: "Hengegjengen",
  description: "Plan for jentetur.",
};

const backgroundImages = [
  "/cbfe9135-e4d4-43f4-b5a4-713ef5540aab.jpg",
  "/b598a9a7-af4b-4768-aa71-60862c0e42f3.jpg",
  "/97c2c1a0-ad03-4745-8567-819222abf718.jpg",
  "/77949630-8ca1-454c-b307-f8c30a76eed5.jpg",
  "/6438a388-16d8-4730-80a6-4289522c3989.jpg",
  "/e6051bd4-847e-4e92-ae98-19be33801874.jpg",
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Slideshow */}
      <section className="relative overflow-hidden h-screen flex items-center">
        {/* Background Images */}
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <div
              key={image}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
              style={{
                backgroundImage: `url(${image})`,
                opacity: 1,
                animationDelay: `${index * 5}s`,
                animation: `slideshow 30s infinite ${index * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-rose-500/20 to-fuchsia-500/20"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="heading-fancy text-5xl md:text-7xl text-white mb-6 drop-shadow-lg">
            Hyttetur til Hamburgsund
          </h1>

          <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto drop-shadow-md">
            Nå teller vi ned dagene til sommeren braker løs med en god klassisk
            hyttetur. Vi har vært så heldige som får låne Tuva sin hytte i
            Sverige.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="min-w-[160px] shadow-lg">
              <Link href="/travel-plan">
                <CarFront className="w-5 h-5 mr-2" />
                Se Reiseplan
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="min-w-[160px] shadow-lg"
            >
              <Link href="/itinerary">
                <Calendar className="w-5 h-5 mr-2" />
                Se Program
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Alt du trenger for en god hyttetur
            </h2>
            <p className="text-lg text-muted-foreground">
              Vi har samlet alt du trenger for en god hyttetur. Vi har reiseplan
              og program.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section) => {
              return (
                <Link key={section.href} href={section.href}>
                  <Card
                    className={`${section.color} group hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:scale-105`}
                  >
                    <CardHeader>
                      <div
                        className={`${section.iconColor} mb-4 inline-flex p-3 rounded-xl bg-white/50 dark:bg-black/20 w-fit`}
                      >
                        <section.icon className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
