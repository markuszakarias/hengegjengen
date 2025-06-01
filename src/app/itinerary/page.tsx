import {
  Calendar,
  MapPin,
  Camera,
  Utensils,
  Mountain,
  Waves,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Itinerary - Hengegjengen",
  description:
    "Your day-by-day adventure plan for the perfect Swedish getaway.",
};

// Enable static generation for optimal performance
export const dynamic = "force-static";

export default function Itinerary() {
  const days = [
    {
      day: 1,
      date: "Day 1",
      title: "Arrival & Stockholm Exploration",
      activities: [
        {
          time: "10:00",
          activity: "Arrive at Stockholm Airport",
          type: "travel",
          icon: Calendar,
        },
        {
          time: "12:00",
          activity: "Check into accommodation",
          type: "accommodation",
          icon: MapPin,
        },
        {
          time: "14:00",
          activity: "Lunch in Gamla Stan (Old Town)",
          type: "food",
          icon: Utensils,
        },
        {
          time: "16:00",
          activity: "Explore Stockholm's Old Town",
          type: "sightseeing",
          icon: Camera,
        },
        {
          time: "19:00",
          activity: "Welcome dinner",
          type: "food",
          icon: Utensils,
        },
      ],
    },
    {
      day: 2,
      date: "Day 2",
      title: "Stockholm City Tour",
      activities: [
        {
          time: "09:00",
          activity: "Breakfast at accommodation",
          type: "food",
          icon: Utensils,
        },
        {
          time: "10:30",
          activity: "Visit Vasa Museum",
          type: "sightseeing",
          icon: Camera,
        },
        {
          time: "13:00",
          activity: "Lunch at Östermalm",
          type: "food",
          icon: Utensils,
        },
        {
          time: "15:00",
          activity: "Royal Palace & Changing of the Guard",
          type: "sightseeing",
          icon: Camera,
        },
        {
          time: "18:00",
          activity: "Sunset at Skansen Open-Air Museum",
          type: "sightseeing",
          icon: Mountain,
        },
      ],
    },
    {
      day: 3,
      date: "Day 3",
      title: "Travel to Cabin",
      activities: [
        {
          time: "08:00",
          activity: "Check out & breakfast",
          type: "accommodation",
          icon: MapPin,
        },
        {
          time: "10:00",
          activity: "Travel to Swedish countryside",
          type: "travel",
          icon: Calendar,
        },
        {
          time: "14:00",
          activity: "Arrive at cabin & settle in",
          type: "accommodation",
          icon: MapPin,
        },
        {
          time: "16:00",
          activity: "Explore cabin surroundings",
          type: "nature",
          icon: Mountain,
        },
        {
          time: "19:00",
          activity: "Cook dinner together",
          type: "food",
          icon: Utensils,
        },
      ],
    },
    {
      day: 4,
      date: "Day 4",
      title: "Nature & Relaxation",
      activities: [
        {
          time: "09:00",
          activity: "Morning yoga by the lake",
          type: "nature",
          icon: Waves,
        },
        {
          time: "11:00",
          activity: "Hiking in the forest",
          type: "nature",
          icon: Mountain,
        },
        {
          time: "13:00",
          activity: "Picnic lunch in nature",
          type: "food",
          icon: Utensils,
        },
        {
          time: "15:00",
          activity: "Swimming or lake activities",
          type: "nature",
          icon: Waves,
        },
        {
          time: "18:00",
          activity: "BBQ dinner at cabin",
          type: "food",
          icon: Utensils,
        },
      ],
    },
    {
      day: 5,
      date: "Day 5",
      title: "Adventure Day",
      activities: [
        {
          time: "08:00",
          activity: "Early breakfast",
          type: "food",
          icon: Utensils,
        },
        {
          time: "09:30",
          activity: "Kayaking or canoeing",
          type: "nature",
          icon: Waves,
        },
        {
          time: "12:30",
          activity: "Lunch by the water",
          type: "food",
          icon: Utensils,
        },
        {
          time: "14:00",
          activity: "Forest exploration & berries picking",
          type: "nature",
          icon: Mountain,
        },
        {
          time: "17:00",
          activity: "Sauna session",
          type: "relaxation",
          icon: Waves,
        },
      ],
    },
    {
      day: 6,
      date: "Day 6",
      title: "Culture & Local Experiences",
      activities: [
        {
          time: "10:00",
          activity: "Visit local village/town",
          type: "sightseeing",
          icon: Camera,
        },
        {
          time: "12:00",
          activity: "Traditional Swedish lunch",
          type: "food",
          icon: Utensils,
        },
        {
          time: "14:00",
          activity: "Shopping for souvenirs",
          type: "shopping",
          icon: MapPin,
        },
        {
          time: "16:00",
          activity: "Coffee and fika",
          type: "food",
          icon: Utensils,
        },
        {
          time: "19:00",
          activity: "Farewell dinner at cabin",
          type: "food",
          icon: Utensils,
        },
      ],
    },
    {
      day: 7,
      date: "Day 7",
      title: "Departure",
      activities: [
        {
          time: "09:00",
          activity: "Pack and clean cabin",
          type: "accommodation",
          icon: MapPin,
        },
        {
          time: "11:00",
          activity: "Travel back to Stockholm",
          type: "travel",
          icon: Calendar,
        },
        {
          time: "15:00",
          activity: "Last-minute shopping",
          type: "shopping",
          icon: Camera,
        },
        {
          time: "18:00",
          activity: "Departure from Stockholm Airport",
          type: "travel",
          icon: Calendar,
        },
      ],
    },
  ];

  const getActivityBadgeVariant = (
    type: string
  ): "default" | "secondary" | "outline" | "destructive" => {
    const variants: Record<
      string,
      "default" | "secondary" | "outline" | "destructive"
    > = {
      travel: "default",
      food: "secondary",
      sightseeing: "outline",
      accommodation: "default",
      nature: "secondary",
      relaxation: "outline",
      shopping: "secondary",
    };
    return variants[type] || "outline";
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="heading-fancy text-4xl md:text-5xl text-primary mb-4">
            Itinerary
          </h1>
          <p className="text-lg text-muted-foreground">
            Your day-by-day adventure plan for the perfect Swedish getaway.
          </p>
        </div>

        {/* Trip Overview */}
        <Card className="mb-12 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  7-Day Swedish Adventure
                </h2>
                <p className="text-muted-foreground">
                  Stockholm exploration + Countryside cabin retreat
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center space-x-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">7</p>
                  <p className="text-sm text-muted-foreground">Days</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">4</p>
                  <p className="text-sm text-muted-foreground">Girls</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">2</p>
                  <p className="text-sm text-muted-foreground">Locations</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Days Timeline */}
        <div className="space-y-8">
          {days.map((day) => (
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
                  const Icon = activity.icon;
                  return (
                    <Card key={index} className="bg-accent/30">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-3 min-w-0 flex-1">
                            <div className="p-2 rounded-lg bg-background">
                              <Icon className="w-4 h-4 text-primary" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center space-x-3 flex-wrap gap-2">
                                <Badge variant="outline" className="text-xs">
                                  {activity.time}
                                </Badge>
                                <span className="font-medium">
                                  {activity.activity}
                                </span>
                                <Badge
                                  variant={getActivityBadgeVariant(
                                    activity.type
                                  )}
                                  className="text-xs"
                                >
                                  {activity.type}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                          >
                            <Camera className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">Export Itinerary</Button>
          <Button variant="outline" size="lg">
            Add Activity
          </Button>
          <Button variant="outline" size="lg">
            Share with Group
          </Button>
        </div>
      </div>
    </div>
  );
}
