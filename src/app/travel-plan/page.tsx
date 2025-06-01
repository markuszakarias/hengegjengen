import { Car, MapPin, Calendar, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reiseplan - Hengegjengen",
  description: "Se planen for reisen til hyttetur til Hamburgsund.",
};

export default function TravelPlan() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="heading-fancy text-4xl md:text-5xl text-primary mb-4">
            Reiseplan
          </h1>
        </div>

        {/* Quick Stats */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <div className="grid grid-rows-3 gap-6">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xl font-bold">Avreisedato</p>
                  <p className="text-sm text-muted-foreground">
                    Fredag 6. juni 2025 - Kl. 16:00 / 17:00
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xl font-bold">Adresse</p>
                  <p className="text-sm text-muted-foreground">
                    Klädesholmen 1, 457 48 Hamburgsund, Sverige
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <ShoppingCart className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xl font-bold">Mathandel</p>
                  <p className="text-sm text-muted-foreground">
                    Coop Tanum. Fredag er nasjonaldagen til Sverige og byr
                    derfor på stengte butikker. Vi handler det viktige i Tanum,
                    ellers resten lørdag.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                <Car className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <span>Transport</span>
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <Card className="bg-accent/50">
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">Airport Transfer</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  Stockholm Airport → Accommodation
                </p>
                <p className="text-sm text-muted-foreground">Method: TBD</p>
              </CardContent>
            </Card>

            <Card className="bg-accent/50">
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">Local Transportation</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  Car rental or public transport
                </p>
                <p className="text-sm text-muted-foreground">
                  Duration: 7 days
                </p>
              </CardContent>
            </Card>

            <div className="mt-6">
              <h3 className="font-medium mb-3">Oslo → Hamburgsund</h3>
              <div className="relative w-full h-80 rounded-lg overflow-hidden border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1008281.7460113543!2d10.746847049999999!3d59.31333850000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x46416e61f267f039%3A0x7e92605fd3231e9a!2sOslo%2C%20Norway!3m2!1d59.9138688!2d10.7522454!4m5!1s0x6648a6c6ed834b05%3A0x401e1b68b4e847!2sKl%C3%A4desholmen%201%2C%20457%2048%20Hamburgsund%2C%20Sweden!3m2!1d58.628956399999995!2d11.2442807!5e0!3m2!1sen!2sno!4v1703123456789!5m2!1sen!2sno"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Travel Documents Section */}
      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Travel Documents & Requirements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-medium text-primary">Required Documents</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Valid passport or EU ID</li>
                <li>✓ Travel insurance</li>
                <li>• Flight confirmations</li>
                <li>• Accommodation bookings</li>
                <li>• Emergency contact information</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium text-primary">Sweden Travel Tips</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Currency: Swedish Krona (SEK)</li>
                <li>• Language: Swedish (English widely spoken)</li>
                <li>• Time zone: CET (UTC+1)</li>
                <li>• Emergency number: 112</li>
                <li>• Tipping: 10% in restaurants</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
