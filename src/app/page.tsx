import Link from "next/link";
import { Calendar, MapIcon, CarFront } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { sections } from "@/lib/data";
export const metadata: Metadata = {
  title: "Hengegjengen",
  description: "Plan for jentetur.",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-50 dark:from-pink-950/20 dark:via-rose-950/20 dark:to-fuchsia-950/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="heading-fancy text-5xl md:text-7xl text-primary mb-6">
              Hyttetur til Hamburgsund
            </h1>

            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Nå teller vi ned dagene til sommeren braker løs med en god
              klassisk hyttetur. Vi har vært så heldige som får låne Tuva sin
              hytte i Sverige.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="min-w-[160px]">
                <Link
                  href="/travel-plan"
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center space-x-2"
                >
                  <CarFront className="w-5 h-5 mr-2" />
                  Se Reiseplan
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="min-w-[160px]"
              >
                <Link
                  href="/itinerary"
                  className="border border-border px-8 py-3 rounded-lg font-medium hover:bg-accent transition-colors inline-flex items-center space-x-2"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Se Program
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-pink-200/20 dark:bg-pink-800/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-rose-200/20 dark:bg-rose-800/20 rounded-full blur-xl"></div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Alt du trenger for en god hyttetur
            </h2>
            <p className="text-lg text-muted-foreground">
              Vi har samlet alt du trenger for en god hyttetur. Vi har
              reiseplan, program og pakkeliste.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <Card
                  key={section.href}
                  className={`${section.color} group hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:scale-105`}
                >
                  <CardHeader>
                    <div
                      className={`${section.iconColor} mb-4 inline-flex p-3 rounded-xl bg-white/50 dark:bg-black/20 w-fit`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {section.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {section.description}
                    </p>
                    <Button
                      asChild
                      variant="ghost"
                      className=" h-auto font-medium group-hover:translate-x-1 transition-transform"
                    >
                      <Link href={section.href}>
                        Gå til siden <span className="ml-2">→</span>
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-fancy text-4xl md:text-5xl text-primary mb-6">
            Ready for your Swedish adventure?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start planning today and create unforgettable memories with your
            best friends in beautiful Sweden.
          </p>
          <Button asChild size="lg" className="text-lg min-w-[200px]">
            <Link href="/travel-plan">
              <MapIcon className="w-6 h-6 mr-2" />
              Begin Your Journey
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
