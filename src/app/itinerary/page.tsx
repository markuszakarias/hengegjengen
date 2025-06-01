import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import { program } from "@/lib/data";

export const metadata: Metadata = {
  title: "Program - Hengegjengen",
  description: "Program for hyttetur til Sverige.",
};

export default function Itinerary() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="heading-fancy text-4xl md:text-5xl text-primary mb-4">
            Program
          </h1>
        </div>

        {/* Days Timeline */}
        <div className="space-y-8">
          {program.map((day) => (
            <Card key={day.day}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {day.day}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{day.title}</CardTitle>
                    <p className="text-muted-foreground">{day.date}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                {day.activities.map((activity, index) => {
                  return (
                    <Card key={index} className="bg-accent/30">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-3 min-w-0 flex-1">
                            <div className="p-2 rounded-lg bg-background">
                              <activity.icon className="w-4 h-4 text-primary" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center space-x-3 flex-wrap gap-2">
                                <Badge variant="outline" className="text-xs">
                                  {activity.time}
                                </Badge>
                                <span className="font-medium">
                                  {activity.activity}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 px-2 space-y-4">
                          <p>{activity.description}</p>
                          {activity.link && (
                            <a
                              className="text-muted-foreground underline p-2 bg-primary/10 rounded-md"
                              href={activity.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {activity.link}
                            </a>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
